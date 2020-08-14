import React from 'react'
import PropTypes from 'prop-types'
import Header from './../Header/Header'

import './layout.scss'

const Layout = ({children}) => {
    return (
        <>
            <Header/>
            <main className="container">
                {children}
            </main>

        </>
    )
}

Layout.propTypes = {
    children : PropTypes.element.isRequired
}

export default Layout
