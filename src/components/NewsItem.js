import React from 'react'

const NewsItem=(props)=> {
    let  {title,description,imageUrl,newsUrl,date,author,source}=props;
    return (
     <> <div className="my-3">
            <div className="card"  style={{backgroundColor:'#1c1a1a',color:'white',border:'3px solid black'}} ><span className="position-absolute top-0 translate-middle badge rounded-pill bg-info" style={{zIndex:'1',left:'88.0%'}}>
    {source}</span>
            <img src={imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body"> 
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text" style={{color:'#f90404'}}><small className="text-muted">By: {author?author:"unknown"} on: {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} target="_" className="btn btn-sn btn-danger">Read More</a>
            </div>
            </div>
      </div></>
    )
}

export default NewsItem
