import './App.css';
import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
require('dotenv').config()

const App = () => {

  let pageSize = 5;
  // let apiKey = process.env.REACT_APP_APIKEY;
  let apiKey = "b407c2f21974438695df7613cdb9e90d";


  const [progress, setProgress] = useState(0);

  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <LoadingBar
          height={3}
          color='#f11946'
          progress={progress}
        />
        <Routes>
          <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey} key="Home" pageSize={pageSize} country='in' category='general' />} />
          <Route exact path="/general" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country='in' category='general' />} />
          <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country='in' category='business' />} />
          <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country='in' category='entertainment' />} />
          <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country='in' category='health' />} />
          <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country='in' category='science' />} />
          <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country='in' category='sports' />} />
          <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country='in' category='technology' />} />
        </Routes>
      </BrowserRouter>,
    </div>
  )
}

export default App;


/*
1. Here render is a life cycle method.
  Convert JSX to HTML and then renders it.

2. props are read only.
3.  can be used only inside constructor, method, accessor, or property.

Things learnt and whose package can be installed from react -->
4. infinite scroll
5. loading bar

Commonly used react hooks ->
1. useState
2. useEffect
3. useContext
4. useRef
*/