import  React from 'react'
import './App.css'

import MyProvider from './context/MyProvider';
import Profile from './components/Profile';


function App() {



  return (
    <MyProvider>

      <Profile />
    
    </MyProvider>
  )
}

export default App
