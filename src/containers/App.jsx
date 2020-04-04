 import React, {useEffect, useState} from 'react';
 import Header from '../components/Header';
 import Search from '../components/Search';
 import Categories from '../components/Categories';
 import Carousel from '../components/Carousel';
 import CarouselItem from '../components/CarouselItem';
 import Footer from '../components/Footer';

 import '../assets/styles/App.scss';
 

 const App = () =>{
    const[videos, setvideos]=useState([]);

    useEffect(()=> {
        fetch('http://localhost:3000/initalState')
        .then(response=> response.json())
        .then(data=> setvideos(data));
    }, []);

    return (
        <div className="App">
            <Header/>
            <Search/>
            <Categories title="Mi Lista">
                <Carousel>
                    <CarouselItem/>
                </Carousel>
            </Categories>
            <Categories title="Tendencias">
                <Carousel>
                    <CarouselItem/>
                    <CarouselItem/>
                </Carousel>
            </Categories>

            <Categories title="Originales Para  Deyvi Bustamante">
                <Carousel>
                    <CarouselItem/> 
                </Carousel>
            </Categories>

            <Footer/>
        </div>
    );
    }
 export default App;