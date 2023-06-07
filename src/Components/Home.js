import React from 'react';
import facewash from '../media/facewash.png'
import first from '../media/first.jpg'
import '../Style/Home.css';
import Slide from './Slide';
import Profile from './Profile';
import Product from './Product';
import Header from './Header';


const Home = () => {
    return (
        <>  
            <Header />
            <Slide />
            <Profile />            
            <Product />
      
            
        </>
    )
}

export default Home
