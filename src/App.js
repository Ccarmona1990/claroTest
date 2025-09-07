import './style.scss'
import MiddleCard from './cards/MiddleCard';
import BottomCard from './cards/BottomCard';
import TopCard from './cards/TopCard';
import DarkmodeBtn from './Darkmode Feature/darkmode.jsx';
import RtnBtn from './components/rtnBtn.jsx';
import Modal from './components/Modal.jsx';

function App() {
  
  return (
    <>
      <Modal/>
      <header>
        <div>
          <DarkmodeBtn/>
        </div>
        <div></div>
        <div> 
          <RtnBtn/>
        </div>
      </header>
      <main>
        <div className='container px-3 px-xxl-5 outer-margin  d-xxl-flex '>
          <TopCard/>
          <section>
            <MiddleCard/>
            <BottomCard/>
          </section>
        </div>
      </main>
    </>
  );
}

export default App;
