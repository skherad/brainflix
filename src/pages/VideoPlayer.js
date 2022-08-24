import { useState, useEffect } from 'react';
import axios from 'axios';

import Hero from '../components/Hero/Hero'
import CommentSection from '../components/CommentSection/CommentSection';
import VideoList from '../components/VideoList/VideoList';
import HeroContent from '../components/HeroContent/HeroContent';


const VideoPlayer = () => {
    // //create a state hook
    const [selectedVideo, setSelectedVideo] = useState("");
    const [currentVideoId, setCurrentVideoId] = useState("84e96018-4022-434e-80bf-000ce4cd12b8")
   

    // useEffect(() => {
    //     axios.get(`https://project-2-api.herokuapp.com/videos/84e96018-4022-434e-80bf-000ce4cd12b8?api_key=9df37e6f-6bec-432b-a405-d78e1f1591ca`)
    //     .then(response => {
    //         // const chosenVideo = response.data.find(e => e.id===currentVideoId);
    //         const chosenVideo = response.data[0];
    //         // setSelectedVideo(chosenVideo)
    //         // setCurrentVideoId(chosenVideo.id)
    //     })
    // }, [])

  return (
    <>
        <Hero 
        // pass selected video's detailed data
        //Hero component displays the selected video
        selectedVideo = {selectedVideo}
        />
        {/* container for desktop breakpoint layout purposes*/}
        <section className='container'>

            <section className='container__left'>
            <HeroContent 
                // HeroContent displays the selected video's content
                //pass selected video's detailed data
                selectedVideo = {selectedVideo}
            />
            <CommentSection 
                //pass selected video's detailed data
                selectedVideo = {selectedVideo}
            />
            </section>

            <VideoList
            setCurrentVideoId = {setCurrentVideoId}
            //pass only selected video's Id 
            //since we already have the required data in this component
            currentVideoId = {currentVideoId}
            />
        </section>
    </>
  )
}

export default VideoPlayer


