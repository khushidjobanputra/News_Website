import './index.css';
import Navigation from './Navigation';
import Home from './Home';
// import NewsList from './NewsList';
import { Route, Routes } from 'react-router-dom';
import NewsDetails from './NewsDetails';

function App() {

  return (
    <div className="App">
      <Navigation />
      {/* <NewsList /> */}
      
      <Routes>
            <Route path = '/' element = {<Home />} />
            <Route path = '/news/:title' element = {<NewsDetails />} />                  
      </Routes>
      
    </div> 
  );
}

export default App;
