import React from 'react';
import './App.css'

const Tile = (props) => {
    const {className, ...restProps} = props
  return (
    <div className={`tile__container ${className}`} {...restProps}></div>
  )
}

export default Tile