import React from 'react';
import ServiceInfo from './ServiceInfo';
import { ActionBtn } from './Btns';
import ServiceActions from './ServiceActions';
import ServiceNameDescription from './ServiceNameDescription';

const ServiceDescription = ()=>{
    
  return (
    <div className='d-flex flex-wrap align-items-center pt-4 mt-2 w-100'>

      <ServiceNameDescription 
      nameDescription={'Otros paquetes y bonos'}/>

      <ServiceActions>
        <ActionBtn 
        action={'comprar internet'}
        additionalClasses={'bg-danger bg-gradient bg-opacity-10 text-danger'}/>
      </ServiceActions>

      <ServiceInfo/>
    </div>
  )
}

export default ServiceDescription;
