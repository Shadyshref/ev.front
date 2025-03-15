// import { useState } from 'react'

import './App.css'
import { useEffect, useState } from 'react'
import Background from'./Components/Background/Background'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'

function App() {
  let heroData=[
    { text1:'Dive into',text2:'what you love'},
    { text1:'Indulge',text2:'Your passions'},
    { id:1,text3:'Give in to',text4:'Your passions'},
  ]
  const[heroCount,setHeroCount]=useState(0)
  const[playStatus,setPlayStatus]=useState(false)
useEffect(()=>{
  setInterval(()=>{
setHeroCount((count)=>{return count===2?0:count+1})
  },3000)
},[])

  return (
    <>
      <Background playStatus={playStatus} heroCount={heroCount}/>
      <Navbar/>
      <Hero
       setPlayStatus={setPlayStatus}
       heroData={heroData}
        heroCount={heroCount}
         setHeroCount={setHeroCount}
          playStatus={playStatus}
          />
    </>
  )
}

export default App
