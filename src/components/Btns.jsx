import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const IconBtn = ({icon, additionalClasses, handleBtn})=> {
  return (
      <button 
      className={`service rounded-circle p-2 bg-info bg-opacity-10 s-btn  ${additionalClasses}`}
      onClick={handleBtn}>
        <FontAwesomeIcon 
        icon={icon}
        color='darkturquoise'/>
      </button>
  )
}

export const ActionBtn = ({action, additionalClasses, handleBtn})=>{
  return (
    <button 
    className={`p-2 px-3 service rounded-pill action-button  text-capitalize ${additionalClasses}`}
    onClick={handleBtn}>
            <p className='m-0 light-bold '>
              {action}
            </p>
    </button>
  )
}

export const ServiceBtn = ({service, additionalClasses, handleBtn}) =>{
  return (
    <button 
    className={`service bg-transparent px-3 py-2 text-capitalize ${additionalClasses}`}
    onClick={handleBtn}>
      {service}
    </button>
  )
}