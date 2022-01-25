import React, {useEffect, useState} from 'react';
import { ServiceBtn } from '../components/Btns';
import ServiceDescription from '../components/ServiceDescription';
import Services from '../components/Services';

const MiddleCard = () => {
  const [size, setSize] = useState(window.innerWidth);
  const checkSize = () =>{setSize(window.innerWidth)}

    useEffect(()=>{
        window.addEventListener("resize",checkSize);
        return ()=>{
            window.removeEventListener("resize",checkSize);
        }
    });
  return (
    <div className='container bg-white rounded-3 shadow-sm px-4 pb-4 pt-3 d-md-block d-flex flex-wrap my-3'>

        <Services>

          <ServiceBtn 
          service={size>768 ? 'internet' : 'minutos'}
          additionalClasses={'currentService me-3 '}/>

          <ServiceBtn 
          service={'cambiazo'}
          additionalClasses={'ms-3 '}/>
        </Services>

        <ServiceDescription/>
    </div>
  )
};

export default MiddleCard;
