import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Greet } from './Greeting.jsx'
import { ListAnimals } from './Animallist.jsx'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Greet/>
    <ListAnimals/>
  </React.StrictMode>,
)
