import {useState, useEffect} from 'react';
import {IconBtn} from './Btns';
import ServiceData from './ServiceData';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { customer1 } from '../utils/customerInfo';
import { toolTipBalanceInfo } from '../utils/toolTip';
import { useDispatch, useSelector } from 'react-redux';
import { _showBalanceInfo } from '../redux/ducks/showInfo';
import { InformationBox } from './Information';

const ServiceInfoBottom = ()=>{
  const {topUpBalance, freeTime, promotionalBalance, bonus} = customer1
  const isBalanceInfoShowing = useSelector((state)=>state.showInfo.isBalanceInfoShowing);
  const dispatch = useDispatch();
  const [size, setSize] = useState(window.innerWidth);
  const checkSize = () =>{setSize(window.innerWidth)}

  useEffect(()=>{
      window.addEventListener("resize",checkSize);
      return ()=>{
          window.removeEventListener("resize",checkSize);
      }
  });
  return (
    <section className='order-2 w-100 order-md-3 pt-3 pb-4 px-4 mt-3 bg-light d-md-flex justify-content-between '>
      
      <aside className='d-md-flex'>
        <ServiceData 
        data={'recarga'}
        info={topUpBalance}
        additionalClasses={'me-md-3'}
        />
        <ServiceData 
        data={'pasatiempo'}
        info={freeTime}
        additionalClasses={'mx-md-3'}
        />
        <ServiceData 
        data={'balance promocional'}
        info={promotionalBalance}
        additionalClasses={'mx-md-3'}
        />
        <ServiceData 
        data={'bono'}
        info={bonus}
        additionalClasses={'ms-md-3'}
        />
      </aside>

      <aside className='d-flex justify-content-center py-3 py-md-0 position-relative align-items-center z-index-0'>

        {(isBalanceInfoShowing && size>768) && <InformationBox 
        name={toolTipBalanceInfo.name}
        icon={toolTipBalanceInfo.icon}
        message={toolTipBalanceInfo.message}
        additionalClasses={'balanceInfo-box'}/>}

        <IconBtn 
        icon={faInfoCircle}
        handleBtn={()=>{dispatch(_showBalanceInfo((isBalanceInfoShowing === true) ? false : true ))}}/>
      </aside>
    </section>
  )
}

export default ServiceInfoBottom;
