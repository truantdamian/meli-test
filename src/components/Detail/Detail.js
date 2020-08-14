import React from 'react'
import useDetail from '../../hooks/useDetail';
import { useParams } from 'react-router-dom';
import Price from './../Price/Price';
import Breadcrumb from './../Breadcrumb/Breadcrumb';
import './detail.scss'
import { useCondition } from '../../hooks/useCondition';




const Detail = () => {

    const {id} = useParams();
    const [getCondition] = useCondition();
    const [loading,error,data] = useDetail(id);
    const {item}= data;
    const {title,
            price:price_data,
            picture,
            condition,
            free_shiipping,
            sold_quantity,
            category_id,
            description
            } = item;

    const {price, currency_id} = price_data;

    return (
        <>
        <Breadcrumb categories={[category_id]} />
        <div className='content section-result detail'>
            <div className='section-primary'>
                <div className='section-image'>
                    <img src={picture} alt='detail_img'/>

                    <div className='section-description'>
                        <h2 className='title'>Descripción del producto</h2>
                        <p>{description}</p>
                    </div>
                </div>
                <div className='section-title'>
                    <p className='condition'>{getCondition(condition)} - {sold_quantity} vendidos</p>
                    <p className='title'>{title}</p>
                    <p className='price'>
                        <Price currencyId={currency_id} price={price.toString()} />
                    </p>
                    <button className='btn-buy'>Comprar</button>
                </div>
            </div>
            
        </div>
        </>
    )
}


export default Detail;
