import React,{useState,useEffect} from 'react'
import {client} from '../client'
import '../styles/css/adda52.css'


function Banner1() {
    const [images,setimages]= useState(null);
    const [activeimage,setactiveimage]=useState(null)

    useEffect(() => {
        client.getEntries({content_type: 'banner1'})
        .then((res)=>{
          let arr =[]
          console.log(res.items[0].fields.image.fields.file.url);
          arr = res.items.map((item)=>{return item.fields.image.fields.file.url});
         
          let activeimage = arr.shift()
          setactiveimage(activeimage)
          setimages(arr);
        })
        .catch((err)=>{
          console.log(err);
        })
    }, [])

    return (
        <>
          <section id="adda-home-banner">
              <div  id="homebanner" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-inner">
                  {activeimage && 
                    <div class="carousel-item active">
                          <img class="d-block w-100" src={activeimage} alt=""/>
                    </div>}
                    {images && images.map((image) => {
                     
                      return (
                        <div class="carousel-item">
                          <img class="d-block w-100" src={image} alt=""/>
                        </div>
                      ) }
                    )}
              </div>
              <a class="carousel-control-prev" href="#homebanner" role="button" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                
              </a>
              <a class="carousel-control-next" href="#homebanner" role="button" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                
              </a>
            </div>
          </section>
        </>
    )
}

export default Banner1
