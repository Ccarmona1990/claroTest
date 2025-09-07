import {useEffect, useState} from 'react';
import { ServiceBtn } from '../components/Btns';
import ServiceDescription from '../components/ServiceDescription';
import Services from '../components/Services';

const MiddleCard = () => {
  const [currServClass, setCurrServClass] = useState('currentService');
  const [size, setSize] = useState(window.innerWidth);
  const checkSize = () =>{setSize(window.innerWidth)}
  
  const currentService = (e)=>{
    const currentBtn = 'currentService';
    const internetBtn = document.querySelector('.internetBtn');
    const cambiazoBtn = document.querySelector('.cambiazoBtn');
    if (internetBtn.classList.contains(currentBtn) && e.target.classList.contains('cambiazoBtn')){
      setCurrServClass('');
      internetBtn.classList.remove(currentBtn);
      e.target.classList.add(currentBtn);
    } else if (cambiazoBtn.classList.contains(currentBtn) && e.target.classList.contains('internetBtn')){
      cambiazoBtn.classList.remove(currentBtn);
      e.target.classList.add(currentBtn);
    }
  };
    useEffect(()=>{
        window.addEventListener("resize",checkSize);
        return ()=>{
            window.removeEventListener("resize",checkSize);
        }
    });
  return (
    <div className='container bg-white rounded-3 shadow-sm px-4 pb-4 pt-3 d-md-block d-flex flex-wrap my-3 middle-card'>
      
        <Services>

          <ServiceBtn 
          service={size>768 ? 'internet' : 'minutos'}
          additionalClasses={`${currServClass} me-3 internetBtn`}
          handleBtn={currentService}/>

          <ServiceBtn 
          service={'cambiazo'}
          additionalClasses={'ms-3 cambiazoBtn'}
          handleBtn={currentService}/>
        </Services>

        <ServiceDescription/>
    </div>
  )
};

export default MiddleCard;
