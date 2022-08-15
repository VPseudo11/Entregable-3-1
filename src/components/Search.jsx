import axios from 'axios'
import React, { useState } from 'react'
import { AsyncPaginate } from 'react-select-async-paginate'
import styled from 'styled-components'

const Search = ({ onSearchChange }) => {
    const [search, setSearch] = useState(null)
    const [filter, setFilter] = useState('name')

    const loadOptions = (inputValue) => {
        let URL = `https://rickandmortyapi.com/api/location/?${filter}=${inputValue}`
        return axios.get(URL)
            .then((res) => {
                return {
                    options: res.data.results.map((item) => {
                        return {
                            value: `${item.id}`,
                            label: `${item.name}, ${item.type}, ${item.dimension}`
                        }
                    })
                }
            })
            .catch((err) => console.log(err))
    }
    const handleOnChange = (searchData) => {
        setSearch(searchData)
        onSearchChange(searchData)
    }

    const handleChange = (e) => {
        setFilter(e.target.value);
    }

    return (
        <FormContainer>
            <ASyncPaginateContainer>
                <AsyncPaginate
                    placeholder='Write the name, type or dimension of the location'
                    debounceTimeout={500}
                    value={search}
                    onChange={handleOnChange}
                    loadOptions={loadOptions}
                />
            </ASyncPaginateContainer>
            <SelectType name="FilterOptions" id="" onChange={handleChange}>
                <option value="name">Name</option>
                <option value="type">Type</option>
                <option value="dimension">Dimension</option>
            </SelectType>
        </FormContainer>
    )
}


const FormContainer = styled.form`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 30px;
    height: 60px;
    background-color: rgba(38, 53, 75, 0.3);
`

const ASyncPaginateContainer = styled.div`
    width: 60%;

`

const SelectType = styled.select`
    border: 1px solid var(--color-2);
    height: 35px;
    border-radius: 5px;
    margin-left: 5px;
    font-size: 1rem;
    font-weight: 700;
    color: var(--color-11);
    background: none;

    &:hover{
        background-color: var(--color-5);
        color: var(--color-1)
    }
`

export default Search