import React from 'react';
import Select from 'react-select';
import { useDispatch } from 'react-redux';
import { sortBooks } from '../../features/books/booksSlice';
import { useSelector } from 'react-redux';



export const customStyles = {
    control: (provided, state) => ({
        ...provided,
        background: '#fff',
        borderColor: '#9e9e9e',
        minHeight: '25px',
        height: '25px',
        boxShadow: state.isFocused ? null : null,
    }),

    valueContainer: (provided, state) => ({
        ...provided,
        height: '25px',
        padding: '0 6px'
    }),

    input: (provided, state) => ({
        ...provided,
        margin: '0px',
    }),
    indicatorSeparator: state => ({
        display: 'none',
    }),
    indicatorsContainer: (provided, state) => ({
        ...provided,
        height: '25px',
    }),
};

export function SearchSorting() {
    const dispatch = useDispatch()

    const { sort } = useSelector(({ books }) => books);

    const handleSortChange = (sorting) => {
        dispatch(sortBooks(sorting))
    }

    const getCurrentSort = () => {
        return sort.all.find(c => c.value === sort.value);
    };

    return (
        <>
            <p className='search__categoties-text'>Sorting by</p>
            <Select
                styles={customStyles}
                onChange={handleSortChange}
                value={getCurrentSort()}
                options={sort.all}
                className='search__categoties-input' />
        </>
    )
}

