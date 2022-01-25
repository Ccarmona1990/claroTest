import React, { useEffect, useState} from 'react';
import { faInfoCircle, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { InformationBox } from './Information';
import { useDispatch, useSelector } from 'react-redux'
import {_showExpDate, _showNetInfo, _showNetInfoModal} from '../redux/ducks/showInfo';
import {IconBtn} from './Btns';
import { customer1 } from '../utils/customerInfo';
import ServiceData from './ServiceData';
import { toolTipNetInfo, toolTipExpDate } from '../utils/toolTip';

const ServiceInfo = ()=>{
    const {internetCapacity, internetConsumed}= customer1
    const isNetInfoShowing = useSelector((state)=>state.showInfo.isNetInfoShowing);
    const isShowExpDate = useSelector((state)=>state.showInfo.isExpDateShowing);
    const {name, message, icon} = toolTipNetInfo;
    const dispatch = useDispatch();
    const [size, setSize] = useState(window.innerWidth);
    const checkSize = () =>{setSize(window.innerWidth)}

    useEffect(()=>{
        window.addEventListener("resize",checkSize);
        return ()=>{
            window.removeEventListener("resize",checkSize);
        }
    });
    useEffect(()=>{
      (isNetInfoShowing && size<=768)? dispatch(_showNetInfoModal(true)) : dispatch(_showNetInfoModal(false));
    })
    
  return (
    <section className='order-2 w-100 order-md-3 pt-3 pb-4 px-4 mt-3 bg-light d-md-flex justify-content-between '>
    
    <aside className='d-md-flex'>
        <ServiceData 
        data={'libre'}
        info={internetCapacity}
        additionalClasses={'me-md-3'}
        />
        <ServiceData 
        data={'consumido'}
        info={internetConsumed}
        additionalClasses={'ms-md-3'}
        />
    </aside>

    <aside className='d-flex justify-content-center py-3 py-md-0 position-relative align-items-center z-index-0'>
        
        {(isNetInfoShowing && size>768) && <InformationBox 
        name={name}
        icon={icon}
        message={message}
        additionalClasses={'info-box'}/>}

        {(isShowExpDate && size>768) && <InformationBox 
        name={toolTipExpDate.name}
        icon={toolTipExpDate.icon}
        message={toolTipExpDate.message}
        additionalClasses={'exp-box'}/>}
        
        <IconBtn 
        icon={faInfoCircle}
        additionalClasses={'me-1 '}
        handleBtn={()=>{dispatch(_showNetInfo((isNetInfoShowing === true) ? false : true ))}}/>

        <IconBtn 
        icon={faCalendarAlt}
        additionalClasses={'ms-1'}
        handleBtn={()=>{dispatch(_showExpDate((isShowExpDate === true) ? false : true ))}}/>
    </aside>

    </section>
  )
}

export default ServiceInfo;
