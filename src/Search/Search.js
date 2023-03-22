import React from 'react';
import SearchCategiries from './SearchCategories/SearchCategories';
import { SearchSorting } from './SearchSorting/SearchSorting';

export default function Search() {

    return (
        <div className='search'>
            <div className='search__container'>
                <h1 className='search__title'>Search for books</h1>
                <div className='search__area'>
                    <input className='search__input' />
                    <button className='search__button'></button>
                </div>
            </div>

            <div className='search__categories'>
                <SearchCategiries></SearchCategiries>
            </div>

            <div className='search_sorting'>
               <SearchSorting></SearchSorting>
            </div>
        </div>
    )
}