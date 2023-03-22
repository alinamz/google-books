import React from 'react';
import Select from 'react-select';
import { customStyles } from '../SearchSorting/SearchSorting'

const options = [
    { value: 'all', label: 'all' },
    { value: 'art', label: 'art' },
    { value: 'biography', label: 'biography' },
    { value: 'computers', label: 'computers' },
    { value: 'history', label: 'history' },
    { value: 'medical', label: 'medical' },
    { value: 'poetry', label: 'poetry' }]

export default function SearchCategiries() {
    const [currentCategories, setCurrentCategories] = React.useState('all')

    const getValue = () => {
        return currentCategories ? options.find(c => c.value === currentCategories) : ''
    }

    const onChange = (newValue) => {
        setCurrentCategories(newValue.value)
    }

    return (
        <>
            <p className='search__categoties-text'>Categories</p>
            <Select
                styles={customStyles}
                options={options}
                onChange={onChange}
                value={getValue()}
                className='search__categoties-input' />
        </>
    )
}