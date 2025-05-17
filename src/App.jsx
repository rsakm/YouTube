import { useState } from 'react'
import './App.css'
import VideoCard from './components/VideoCard'
import { VideoGrid } from './components/VideoGrid'
import { Appbar } from './components/Appbar'

function App() {
  

  return (
    <>
    {/* <VideoCard 
    title="Achha ji main hari chalo maan jao na [Colorized] | Kala Pani (1958)"
    channel="Evergreen music"
    views="25M views"
    timestamp="2 years ago"
    image="../public/ZN_XrB_St-8-HD.jpg"
    thumbnailImage="../public/ZN_XrB_St-8-HD.jpg"
    /> */}

    <Appbar/>

    <VideoGrid/>
    </>
  )
}

export default App
