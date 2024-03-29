import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import Hero from '../components/Hero/Hero'
import CommentSection from '../components/CommentSection/CommentSection';
import VideoList from '../components/VideoList/VideoList';
import HeroContent from '../components/HeroContent/HeroContent';


const VideoPlayer = () => {
        
    const {videoId} = useParams()

    const [videoArray, setVideoArray] = useState();
    const [selectedVideo, setSelectedVideo] = useState();

    //pulls array of video data
    useEffect(() => {
        axios.get("http://localhost:8080/videos")
        .then(response =>  setVideoArray(response.data))
        .catch(error=> console.log(error))
    }, [])
 
    //use to set the selected video
    useEffect(() => {
        if(videoId) {
            axios.get(`http://localhost:8080/videos/${videoId}`)
            .then(response => setSelectedVideo(response.data))
            .catch(error=> console.log(error))
        } else {
            axios.get(`http://localhost:8080/videos/84e96018-4022-434e-80bf-000ce4cd12b8`)
            .then(response => setSelectedVideo(response.data))
            .catch(error=> console.log(error))
        } 
    },[videoId])

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
                videoArray = {videoArray}
                selectedVideo = {selectedVideo}
            />

        </section>
    </>
  )
}

export default VideoPlayer