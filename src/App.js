
import MiddleCard from './cards/MiddleCard';
import BottomCard from './cards/BottomCard';
import TopCard from './cards/TopCard';
import { InformationModal } from './components/Information';
import React from 'react';
import { useSelector } from 'react-redux';
import './style.scss'
import { toolTipNetInfo } from './utils/toolTip';


function App() {
  const isNetInfoModalShowing = useSelector((state)=>state.showInfo.isNetInfoModalShowing);
  const {name, message, icon} = toolTipNetInfo;
  
  return (
    <>
      {isNetInfoModalShowing && 
      <InformationModal
      name={name}
      message={message}
      icon={icon}/>}

      <div className='container px-3 px-xl-5   outer-margin  d-xl-flex '>
        
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
