import React,{useState,useEffect} from 'react'
import {client} from '../client'

function Banner1() {
    const [images,setimages]= useState(null);

    useEffect(() => {
        client.getEntries({content_type: 'banner1'})
        .then((res)=>{
          console.log(res.items[0].fields.image.fields.file.url);
          setimages(res.items[0].fields.image.fields.file.url)
        })
        .catch((err)=>{
          console.log(err);
        })
    }, [])

    return (
        <div>
            banner1
            <img src={images} alt="hello" />
        </div>
    )
}

export default Banner1
