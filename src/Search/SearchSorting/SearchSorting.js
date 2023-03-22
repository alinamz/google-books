import React from 'react';
import Select from 'react-select';

const options = [
    { value: 'relevance', label: 'relevance' },
    { value: 'newest', label: 'newest' }
]

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
    const [currentSorting, setCurrentSorting] = React.useState('revelance');

    const getValue = () => {
        return currentSorting ? options.find(c => c.value === currentSorting) : ''
    }

    const onChange = (newValue) => {
        setCurrentSorting(newValue.value)
    }

    return (
        <>
            <p className='search__categoties-text'>Sorting by</p>
            <Select
                styles={customStyles}
                onChange={onChange}
                value={getValue()}
                options={options}
                className='search__categoties-input' />
        </>
    )
}

