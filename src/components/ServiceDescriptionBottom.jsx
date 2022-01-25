import React from 'react';
import { ActionBtn } from './Btns';
import ServiceActions from './ServiceActions';
import ServiceInfoBottom from './ServiceInfoBottom';
import ServiceNameDescription from './ServiceNameDescription';

const ServiceDescriptionBottom = ()=>{
  return (
    <div className='d-flex flex-wrap align-items-center pt-4 mt-2 w-100'>

      <ServiceNameDescription 
      nameDescription={'Consulta de Balances'}/>

      <ServiceActions 
      additionalClasses={'d-md-flex flex-row-reverse'}>
        <ActionBtn 
        action={'recargar'}
        additionalClasses={'bg-danger text-white my-4 my-md-0 ms-md-2'}/>

        <ActionBtn 
        action={'pasatiempo'}
        additionalClasses={'bg-danger bg-gradient bg-opacity-10 text-danger my-4 my-md-0 me-md-3'}/>
      </ServiceActions>

      <ServiceInfoBottom/>
    </div>
  )
}

export default ServiceDescriptionBottom;
