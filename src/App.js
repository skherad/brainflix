//import state
import { useState } from 'react';

//import data
import Video from './data/video-details.json'

//import components
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import CommentForm from './components/CommentForm/CommentForm';
import CommentSection from './components/CommentSection/CommentSection';
import VideoList from './components/VideoList/VideoList';
import HeroContent from './components/HeroContent/HeroContent';

//import styling
import './App.scss';

console.log(Video);

function App() {

  //created a state
  const [index, setIndex] = useState(0);

  //call back function to set selected index 
  //when clicked on a video card in videolist component
  const updateIndex = (event,selectedIndex) => { 
    setIndex(selectedIndex);
  }

  return (
  <>
    <Header /> 
    <Hero 
      //pass video details to Hero component
      videoDetail = {Video[index]}
    />
    <section className='container'>
      <section className='container__right'>
        <HeroContent 
          videoDetail = {Video[index]}
        />
        <CommentForm />
        <CommentSection 
            //pass video's comments details to commentCard component
            videoComment = {Video[index].comments}
        />
      </section>
      <VideoList
          //pass call back function to VideoList component
          updateIndex = {updateIndex}
          //pass selected index back to VideoList component
          newIndex = {index}
      />
    </section>
  </>  
  );
}

export default App;
