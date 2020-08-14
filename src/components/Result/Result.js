import React from 'react'
import useQuery from './../../hooks/useQuery'
import useSearch from '../../hooks/useSearch';
import ResultItem from './../ResultItem/ResultItem';
import Breadcrumb from './../Breadcrumb/Breadcrumb';

import './result.scss'


const Result = () => {

    const [query] = useQuery('search');
    const [loading,error,data] = useSearch(query);
    const {items,categories} = data;

    return (
        <>
            <Breadcrumb categories={[categories[0]]} />
            {loading && <h4>cargando...</h4>}
            {!loading && items.length ===0 && <h4>No se encontraron resultados</h4>}
            <div className='content section-result'>
            {
                items.map(
                            (item)=><ResultItem 
                                        key={item.id} 
                                        item={item}
                                    />
                        )
            }
            </div>
        </>
    )
}


export default Result;
