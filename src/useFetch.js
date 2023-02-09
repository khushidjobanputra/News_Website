import { useState,useEffect } from "react";
import axios from 'axios';

const useFetch = () => {

    const [data,setMyData] = useState([]);
      
    useEffect(() => {
        
        axios.get('https://saurav.tech/NewsAPI/top-headlines/category/health/in.json')
        .then(res => { 
            setMyData(res.data.articles);
        })
        
    },[])

    return{ data };
}
 
export default useFetch;