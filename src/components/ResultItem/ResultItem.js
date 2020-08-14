import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import Price from './../Price/Price';
import ic_shipping from './../../assets/ic_shipping.png'

import './resultitem.scss';

const ResultItem = ({item}) => {
    
    const {price,title,address,id,currency_id,thumbnail,free_shipping} = item;
    const {city_name} = address;

    return (
        <Link to={`/items/${id}`} className='item'>
            <div className='section-image'>
                <img src={thumbnail} alt={id}></img>
            </div>
            <div className='section-description'>
                <div>
                    <p className='price'>
                        <Price currencyId={currency_id} price={price.toString()} />
                        {free_shipping && <img className="shipping" src={ic_shipping} alt='free_shipping'/>}
                    </p>
                    <p className='title'>{title}</p>
                </div>
                <div>
                    <p className='city'>{city_name}</p>
                </div>
            </div>
           
        </Link>
    )
}

ResultItem.propTypes = {
    item : PropTypes.object.isRequired
}

export default ResultItem
