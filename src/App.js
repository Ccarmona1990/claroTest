
import MiddleCard from './cards/MiddleCard';
import BottomCard from './cards/BottomCard';
import TopCard from './cards/TopCard';
import { InformationModal } from './components/Information';
import React from 'react';
import { useSelector } from 'react-redux';
import './style.scss'
import { toolTipNetInfo } from './utils/toolTip';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHome} from '@fortawesome/free-solid-svg-icons'


function App() {
  const isNetInfoModalShowing = useSelector((state)=>state.showInfo.isNetInfoModalShowing);
  const {name, message, icon} = toolTipNetInfo;
  
  return (
    <>
      <header>
        <div></div>
        <div></div>
        <div> 
            <a href="https://mylearningprojects.netlify.app/">
          <FontAwesomeIcon icon={faHome} size='2x'> 
          </FontAwesomeIcon>
          </a> 
        </div>
      </header>
      {isNetInfoModalShowing && 
      <InformationModal
      name={name}
      message={message}
      icon={icon}/>}

      <div className='container px-3 px-xxl-5   outer-margin  d-xxl-flex '>
        
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
