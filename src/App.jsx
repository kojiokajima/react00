import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Router from './Router'
import { Header} from './views/components/index'

// import './App.css';
import './assets/styles/sass/main.scss'


const  App = () => {
  return (
    <div>
        <BrowserRouter>
          <Header />
          <Router />
        </BrowserRouter>
    </div>
  );
}

export default App;
