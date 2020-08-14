import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import useQuery from '../../hooks/useQuery';

import './searchbox.scss'

const SearchBox = () => {

    const [query] = useQuery('search');
    const [search, setSearch] = useState('');
    const history = useHistory();

    useEffect(() => {
        setSearch(query);
    }, [query])

    const handleSubmit  = (e)=>{
        e.preventDefault();
        history.push(`/items?search=${search}`)
    }

    return (
        <form onSubmit={handleSubmit} className='content-search'>
            <input 
                className='txt-search'
                placeholder='Nunca dejes de buscar'
                type="text" 
                maxLength="60"
                value={search} 
                onChange={({target})=>setSearch(target.value)}
                
            />
            <button 
                type="submit"
                className='btn-search' 
            >
            </button>
        </form>
    )
}


export default SearchBox
