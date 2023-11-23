import { useState, useEffect } from "react";
import axios from 'axios';

const useFetch = /**async dont use async here, cuz theres already one*/ (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [err, setErr] = useState(false);
    useEffect(()=>{
        const fetchData = async() =>{
          try{
            setLoading(true);
            const res= await axios.get(url, {
              headers:{
                Authorization: "Bearer 6c5be87916f227fe8c5b47cc1d28c0624eb83b2b9cab2ecc9d97ddc15ceb5144a103fe586374bfff3dd6df92db9b07b02f3fe18d0ec7ab550b0d6f5607b6aa1b1a88fe95ffce6245ad86798942ad637448f35ff414be71eb4c8099bc6b802658dd59785fd25e456c26e4011837fb274c0f17a97b70081e7bff9f21449b6c8325",
              },
            });
            setData(res.data.data);
            console.log(res.data.data);
          }catch(err){
            console.log(err);
            setErr(true);
          }
            setLoading(false);
        };
        fetchData();
      },[url]);//its important to add url as dependency otherwise it will go in infinite loop
    return {data, loading, err};
};
export default useFetch;