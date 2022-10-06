import React, { Component } from 'react'

const  Likes= props => {
    let classes = 'bi bi-heart';
    if(props.liked) classes += "-fill"
    return (
      <div>
        <i className={classes}
        style={{cursor: "pointer"}}
        onClick={props.onClick}></i>
      </div>
    )
}
 
export default Likes;