import React, {useEffect, useState} from 'react';
import { customer1 } from '../utils/customerInfo';
import PlanInfo from '../components/PlanInfo';
import UserInfo from '../components/UserInfo';

const TopCard = () => {
    const {plan, expirationDate} = customer1;
    const [size, setSize] = useState(window.innerWidth);
    const checkSize = () =>{setSize(window.innerWidth)}

    useEffect(()=>{
        window.addEventListener("resize",checkSize);
        return ()=>{
            window.removeEventListener("resize",checkSize);
        }
    });
    return (
        <div className='container bg-white rounded-3 shadow-sm px-0 d-md-flex d-xl-block top-card my-3'>

            <UserInfo/>
            
            <section className='other-info'>
                <PlanInfo 
                name={'Plan'}
                info={plan}
                additionalClasses={'border-bottom mt-md-3 mt-xl-0 text-capitalize'}/>
                <PlanInfo 
                name={(size<768 || size>1200) ?'Fecha de suspención': 'Fecha de suspención:' }
                info={expirationDate}/>
            </section>

        </div>
    )
};

export default TopCard;
