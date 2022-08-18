import { useState } from 'react';
import Video from './data/video-details.json'

import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import CommentForm from './components/CommentForm/CommentForm';
import CommentCard from './components/CommentCard/CommentCard';
import VideoList from './components/VideoList/VideoList';

import './App.scss';

console.log(Video);

// console.log(Video[0].channel)



function App() {

  const [index, setIndex] = useState(0);

  const updateIndex = (event,newIndex) => {
    
    setIndex(newIndex);
    // console.log(newIndex)
  }

  return (
  <>
    <Header /> 
    <Hero 
      videoDetail = {Video[index]}
    />
    <section>
      <CommentForm />
      <CommentCard 
          videoComment = {Video[index].comments}
      />
      <VideoList
          updateIndex = {updateIndex}
          newIndex = {index}
      />
    </section>
  </>  
  );
}

export default App;
