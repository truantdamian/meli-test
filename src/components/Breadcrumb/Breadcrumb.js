import React from 'react'
import PropTypes from 'prop-types'
import './breadcrumb.scss';

const Breadcrumb = ({categories}) => {
    return (
        <div className='breadcrumb content'>
            {categories.join('|')}
        </div>
    )
}

Breadcrumb.propTypes = {
 categories: PropTypes.array.isRequired
}

export default Breadcrumb
