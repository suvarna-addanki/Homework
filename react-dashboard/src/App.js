import Sidebar from './components/SideBar';
import Reviews from './components/Reviews';
import AvgRating from './components/AvgRating';
import SentimentAnalysis from './components/SentimentAnalysis';

import './App.css';
import WebsiteVisitors from './components/WebsiteVisitors';

function App() {
  return (
    <div className="App">
      
        <div className='sidebar'>
        <Sidebar />
        </div>
        <div className='review'>
        <Reviews number = {"1,281"} />
        </div>
        <div className='avgrating'>
          <AvgRating rating ={"4.6"} />
        </div>
        <div className='sentiment'>
          <SentimentAnalysis />
        </div>
        <div className='website'>
          <WebsiteVisitors visitors = {821} />
        </div>
      
    </div>
  );
}

export default App;
