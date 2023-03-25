import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";

const FETCH_MAX_SIZE = 30;

const getDateYear = (dateStr) => {
    if (dateStr == null || dateStr === '')
        return null;

    var parts = dateStr.split("-")
    try {
        return Number(parts[0]);
    } catch {
        return null;
    }
}

const mapBooksSearchResponse = (response) => {
    if (response.data.totalItems === 0)
        return {
            totalItems: 0,
            items: []
        };

    const books = response.data.items.map(item => ({
        "title": item.volumeInfo.title,
        "img": item.volumeInfo.imageLinks?.thumbnail,
        "authors": item.volumeInfo.authors,
        "categories": item.volumeInfo.categories,
        "publishedDate": getDateYear(item.volumeInfo.publishedDate),
        "id": item.id,
        "description": item.volumeInfo?.description
    }));

    return {
        totalItems: response.data.totalItems,
        items: books
    };
}

export const getBooks = createAsyncThunk(
    'books/getBooks',
    async (value, thunkAPI) => {
        if (value.search == null || value.search === '')
            return { "items": [] };

        try {
            const response = await axios(`https://www.googleapis.com/books/v1/volumes?q=${value.search}&maxResults=${FETCH_MAX_SIZE}`);
            return mapBooksSearchResponse(response);
        } catch (err) {
            console.log(err);
            return thunkAPI.rejectWithValue(err)
        }
    });

export const getMoreBooks = createAsyncThunk(
    'books/getMoreBooks',
    async (_, thunkAPI) => {
        const currentState = thunkAPI.getState().books;
        const searchTerm = currentState.searchTerm;
        const startIndex = currentState.list.length;

        try {
            const response = await axios(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&startIndex=${startIndex}&maxResults=${FETCH_MAX_SIZE}`)
            return mapBooksSearchResponse(response);
        } catch (err) {
            console.log(err);
            return thunkAPI.rejectWithValue(err)
        }
    });

const booksSlice = createSlice({
    name: 'books',
    initialState: {
        isLoading: false,
        list: [],
        filtered: [],
        filter: {
            value: 'all',
            all: [
                { value: 'all', label: 'all' },
                { value: 'Art', label: 'Art' },
                { value: 'Biography', label: 'Biography' },
                { value: 'Computers', label: 'Computers' },
                { value: 'History', label: 'History' },
                { value: 'Medical', label: 'Medical' },
                { value: 'Poetry', label: 'Poetry' }
            ]
        },
        sort: {
            value: 'relevance',
            all: [
                { value: 'relevance', label: 'relevance' },
                { value: 'newest', label: 'newest' }
            ]
        },
        searchTerm: '',
        totalItems: 0
    },
    reducers: {
        setSearchTerm: (state, { payload }) => {
            state.searchTerm = payload;
        },
        filterBooksByCategory: (state, { payload }) => {
            const category = payload.value;

            state.filter.value = category;
            state.filtered = category === 'all'
                ? [...state.list]
                : state.list?.filter(book => book?.categories?.includes(category));

            if (state.sort.value === 'newest') {
                state.filtered = [...state.filtered].sort((a, b) => {
                    var aa = a.publishedDate == null ? 0 : a.publishedDate;
                    var bb = b.publishedDate == null ? 0 : b.publishedDate;
                    return bb - aa;
                });
            }
        },
        sortBooks: (state, { payload }) => {
            const sortValue = payload.value;

            state.sort.value = sortValue;
            if (sortValue === 'relevance') {
                state.filtered = state.filter.value !== 'all'
                    ? state.list?.filter(book => book?.categories?.includes(state.filter.value))
                    : [...state.list];
            } else if (sortValue === 'newest') {
                state.filtered = [...state.filtered].sort((a, b) => {
                    var aa = a.publishedDate == null ? 0 : a.publishedDate;
                    var bb = b.publishedDate == null ? 0 : b.publishedDate;
                    return bb - aa;
                });
            } else {
                console.log(`Сортировка по '${sortValue}' не поддерживается`);
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getBooks.pending, (state = {}) => {
            state.isLoading = true;
        });

        builder.addCase(getBooks.fulfilled, (state = {}, { payload }) => {
            state.totalItems = payload.totalItems;
            state.list = [...payload.items];
            state.filtered = [...payload.items];
            state.filter.value = 'all';
            state.sort.value = 'relevance';
            state.isLoading = false;
        });

        builder.addCase(getBooks.rejected, (state = {}) => {
            state.isLoading = false;
            console.log('Произошла ошибка при загрузке книг')
        });

        builder.addCase(getMoreBooks.pending, (state = {}) => {
            state.isLoading = true;
        });

        builder.addCase(getMoreBooks.fulfilled, (state = {}, { payload }) => {
            state.totalItems = payload.totalItems;
            state.list = state.list.concat(payload.items);
            state.filtered = [...state.list];
            state.filter.value = 'all';
            state.sort.value = 'relevance';
            state.isLoading = false;
        });

        builder.addCase(getMoreBooks.rejected, (state = {}) => {
            state.isLoading = false;
            console.log('Произошла ошибка при попытке загрузить больше книг');
        });
    }
})

export const { setSearchTerm, filterBooksByCategory, sortBooks } = booksSlice.actions;

export default booksSlice.reducer;
