import React from 'react';
import Select from 'react-select';
import { customStyles } from '../SearchSorting/SearchSorting';
import { useDispatch } from 'react-redux';
import { filterBooksByCategory } from '../../features/books/booksSlice';
import { useSelector } from 'react-redux';

export default function SearchCategiries() {
    const dispath = useDispatch();
    const { filter } = useSelector(({ books }) => books);

    const handleSelectedCategoryChange = (category) => {
        dispath(filterBooksByCategory(category));
    }

    const getCurrentCategory = () => {
        return filter.all.find(c => c.value === filter.value);
    };

    return (
        <>
            <p className='search__categoties-text'>Categories</p>
            <Select
                styles={customStyles}
                options={filter.all}
                onChange={handleSelectedCategoryChange}
                value={getCurrentCategory()}
                className='search__categoties-input' />
        </>
    )
}