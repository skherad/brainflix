//import state
import { useState } from 'react';

//import data
import Video from './data/video-details.json'

//import components
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
// import CommentForm from './components/CommentForm/CommentForm';
import CommentSection from './components/CommentSection/CommentSection';
import VideoList from './components/VideoList/VideoList';
import HeroContent from './components/HeroContent/HeroContent';

//import styling
import './App.scss';

function App() {

  //created a state
  const [currentVideoId, setVideoId] = useState(Video[0].id);

  let selectedVideo = Video.find(e => e.id === currentVideoId)

  return (
  <>
    <Header /> 
    <Hero 
      //pass video details to Hero component
      selectedVideo = {selectedVideo}
    />
    <section className='container'>
      
      <section className='container__left'>
        <HeroContent 
          selectedVideo = {selectedVideo}
        />
        <CommentSection 
            //pass video's comments details to commentCard component
            selectedVideo = {selectedVideo}
        />
      </section>

      <VideoList
          //pass call back function to VideoList component
          setVideoId = {setVideoId}
          //pass selected index back to VideoList component
          selectedVideo = {selectedVideo}

      />

    </section>
  </>  
  );
}

export default App;
