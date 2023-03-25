import React from 'react';
import { setSearchTerm, getBooks } from '../features/books/booksSlice';
import SearchCategiries from './SearchCategories/SearchCategories';
import { SearchSorting } from './SearchSorting/SearchSorting';
import { useDispatch } from 'react-redux';
import { useLocation, } from "react-router-dom";
import { useNavigate } from "react-router";

export default function Search({ setSearch, search }) {
    const location = useLocation();
    const dispath = useDispatch();
    const navigate = useNavigate()
    const isMain = location.pathname === '/card'

    const handleSearchInputChange = ({ target: { value } }) => {
        if (isMain === true) {
            navigate("/");
        } else {
        setSearch(value);
        }
    }

    const handleSearchBooks = (event) => {
            event.preventDefault();
            if (search !== '') {
                dispath(setSearchTerm(search));
                dispath(getBooks({ 'search': search.replace(/ /ig, '+') }));
            }
    }

    return (
        <div className='search'>
            <div className='search__container'>
                <h1 className='search__title'>Search for books</h1>
                <form className='search__area' onSubmit={handleSearchBooks}>
                    <input
                        className='search__input'
                        value={search}
                        onChange={handleSearchInputChange}
                    />
                    <button className='search__button'></button>
                </form>
            </div>

            <div className='search__categories'>
                <SearchCategiries></SearchCategiries>
            </div>

            <div className='search_sorting'>
                <SearchSorting ></SearchSorting>
            </div>
        </div>
    )
}