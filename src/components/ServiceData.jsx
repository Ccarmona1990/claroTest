import React from 'react';

const ServiceData = ({data, info, additionalClasses})=>{
  return (
    <div className={`d-flex d-md-block justify-content-between py-3 py-md-0 border-service text-capitalize ${additionalClasses}`}>
      <span className='d-md-block fw-light text-black text-opacity-50'>{data}</span> 
      <strong>{info}</strong>
    </div>
  )
}

export default ServiceData;
