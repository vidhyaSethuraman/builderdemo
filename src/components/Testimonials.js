import React,{useState,useEffect} from 'react'
import {client} from '../client'


function Testimonials() {

    const [enteries,setenteries]= useState([]);

    useEffect(() => {
        client.getEntries({content_type: 'testimonials'})
        .then((res)=>{
          console.log(res);
          let arr =[]
          console.log(res.items[0].fields);
          arr = res.items.map((item)=>{return item.fields});
          console.log(arr)
          setenteries(arr)
        })
        .catch((err)=>{
          console.log(err);
        })
    }, [])
    return (
        <>
            <section id="adda-home-review">
              <div class="container">
                <h2 class="adda-sub-title">Testimonials</h2>
                <div id="adda-review-banner" class="carousel carousel-fade" data-ride="carousel">
                  <ol class="carousel-indicators">
                    <li data-target="#adda-review-banner" data-slide-to="0" class="active"></li>
                    <li data-target="#adda-review-banner" data-slide-to="1"></li>
                    <li data-target="#adda-review-banner" data-slide-to="2"></li>
                    <li data-target="#adda-review-banner" data-slide-to="3"></li>
                    <li data-target="#adda-review-banner" data-slide-to="4"></li>
                  </ol>
                  <div class="carousel-inner">
                    {enteries && enteries.map((entry)=>{
                      return (
                        
                      
                    <div class="carousel-item ">
                      <div class="row">
                        <div class="col-sm-6 col-12">
                          <div class="adda-hr-cnt">
                            <div class="add-hr-name">{entry.nameOfPerson}</div>
                            <div class="add-hr-info">
                              <span>{entry.professionOfPerson}</span>
                              <div class="adda-hr-rating">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                              </div>
                            </div>
                            <div class="adda-hr-msg">
                              <p>{entry.description}</p>
                              <p>{entry.userid}</p>
                            </div>
                          </div>
                        </div>
                        <div class="col-sm-6 col-12">
                          <img class="d-block " src={entry.image.fields.file.url} alt="" />
                        </div>
                      </div>  
                    </div>
)
})}
                  </div>
                </div>
              </div>
            </section>
        </>
    )
}

export default Testimonials
