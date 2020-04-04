import { useState, useEffect} from 'react';

const [ videos , setVideos]=useState({
    mylist:[],
    trends: [],
    originals: []
});


const useInitialState = (API) => {
    useEffect(()=> {
        fetch(API)
        .then(response=> response.json())
        .then(data=> setVideos(data));
    }, []);

    return videos;  
};

 export default useInitialState;
