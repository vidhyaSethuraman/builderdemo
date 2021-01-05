import React,{useState,useEffect} from 'react'
import {client} from '../client'


function Testimonials() {

    const [enteries,setenteries]= useState([]);

    useEffect(() => {
        client.getEntries({content_type: 'testimonials'})
        .then((res)=>{
          console.log(res);
          console.log(res.items[0].fields);
        })
        .catch((err)=>{
          console.log(err);
        })
    }, [])
    return (
        <>
            Testimonials
        </>
    )
}

export default Testimonials
