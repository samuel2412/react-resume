import React from 'react';

import Navbar from '../Navigation/Navbar/Navbar';
import Footer from '../Navigation/Footer/Footer';


const Layout = props => {
   
    return (
        <>
            <Navbar />
            {props.children}
            <Footer />
        </>
    );
}
export default Layout;