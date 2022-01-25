import React from 'react';
import { ServiceBtn } from '../components/Btns';
import ServiceDescriptionBottom from '../components/ServiceDescriptionBottom';
import Services from '../components/Services';

const BottomCard = () => {
  return (
    <div className='container bg-white rounded-3 shadow-sm px-4 pb-4 pt-3 d-md-block d-flex flex-wrap my-3'>

        <Services>
          <ServiceBtn 
          service={'balances'}
          additionalClasses={'fw-bold'}/>
        </Services>

        <ServiceDescriptionBottom/>
    </div>
  )
};

export default BottomCard;
