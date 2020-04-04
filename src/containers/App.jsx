 import React, {useEffect, useState} from 'react';
 import Header from '../components/Header';
 import Search from '../components/Search';
 import Categories from '../components/Categories';
 import Carousel from '../components/Carousel';
 import CarouselItem from '../components/CarouselItem';
 import Footer from '../components/Footer';

 import '../assets/styles/App.scss';
 

 const App = () =>{
    /*
     no definimos nuestra variables de paso a la api, y nos salia error
     //const[videos, setVideos] = useState([]);
    */

    /*
        Forma alternativa de verficar
    */
    const [ videos , setVideos]=useState({
        mylist:[],
        trends: [],
        originals: []
    });
    
    useEffect(()=> {
        fetch('http://localhost:3000/initalState')
        .then(response=> response.json())
        .then(data=> setVideos(data));
    }, []);
 
    return (
        <div className="App">
            <Header/>
            <Search/>

            { videos.mylist.length > 0 && 
                <Categories title="Mi Lista">
                    <Carousel>
                        <CarouselItem/>
                    </Carousel>
                </Categories>
            }
            <Categories title="Tendencias">
                <Carousel>
                    {videos.trends.map(item=>
                        <CarouselItem key={item.id} {...item}/>
                    )}
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