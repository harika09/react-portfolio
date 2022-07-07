import './App.css';
import {ThreeDots} from 'react-loader-spinner'
import { useState } from 'react'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Projects from './Components/Projects/Projects'
import Header from './Components/Header/Header'
import Index from './Components/Index/Index'

function App() {
  const [pageLoad, setPageLoad] = useState(true)

  // Loader Animation Duration
  setTimeout(()=>{
      setPageLoad(false)
  }, 2500)

  return (
    <div>
      {pageLoad ? (
            <div className='loading-animation'>
                <ThreeDots color="#1D1D2A" height={100} width={100} />
            </div>):(
            <>
            <Header/>
            < Index/>
            <Projects/>
            </>
           )}
    </div>
    // <>
    // < Index/>
    // </>
  );
}

export default App;
