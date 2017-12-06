import React, { Component } from 'react';



export default function Todolist( props ){
    return (
      <div>
          <h2>{props.task}</h2>
      </div>
    );
}