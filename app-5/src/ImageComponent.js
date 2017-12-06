import React, { Component } from 'react';


export default function ImageComponent( props ){
    return (
      <div>
          <img src={props.myImage}/>
      </div>
    );
}


