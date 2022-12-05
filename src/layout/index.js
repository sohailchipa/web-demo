import React from 'react'
import Footer from './footer'
import Header from './header'

const WebLayout = ({ children }) => {
    return (
        <React.Fragment>
            <Header />
            {children}
           
            <Footer />
            
        </React.Fragment>
    )
}

export default WebLayout;