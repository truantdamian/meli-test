import React from 'react'
import SearchBox from '../SearchBox/SearchBox'
import Logo_ML from './../../assets/Logo_ML.png'

import './header.scss'
import { Link } from 'react-router-dom'

const Head = () => {
    return (
        <header>
            <div className='content section-header'>
                <Link to='/'><img className='logo' src={Logo_ML} alt='logo'/></Link>
                <SearchBox/>
            </div>
        </header>
    )
}


export default Head;
