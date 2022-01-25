
import MiddleCard from './cards/MiddleCard';
import BottomCard from './cards/BottomCard';
import TopCard from './cards/TopCard';
import { InformationModal } from './components/Information';
import React from 'react';
import { useSelector } from 'react-redux';
import './style.scss'
import { toolTipNetInfo } from './utils/toolTip';


function App() {
  const isShowModal = useSelector((state)=>state.showInfo.isShowModal);
  const {name, message, icon} = toolTipNetInfo;
  
  return (
    <>
      {isShowModal && 
      <InformationModal
      name={name}
      message={message}
      icon={icon}/>}

      <div className='container px-3 px-xl-5 py-3  outer-margin  d-xl-flex '>
        
        <TopCard/>

        <section>
          <MiddleCard/>
          <BottomCard/>
        </section>
        
      </div>
    
    </>
  );
}

export default App;
