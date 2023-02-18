import React from 'react'
import { Link } from 'react-router-dom'
import './CustomBreadCumb.css';
const CustomBreadCumb = (props) => {
  const breadname= props.breadname;
  return (
<div className="bcca-breadcrumb">
  <div className="bcca-breadcrumb-item" >{breadname}</div>
  <div className="bcca-breadcrumb-item" ><Link to="/">Home</Link></div>
</div>
  )
}

export default CustomBreadCumb