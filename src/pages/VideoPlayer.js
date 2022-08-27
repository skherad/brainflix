import { useState, useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
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
        axios.get("https://project-2-api.herokuapp.com/videos?api_key=9df37e6f-6bec-432b-a405-d78e1f1591ca")
        .then(response =>  setVideoArray(response.data))
        .catch(error=> console.log(error))
    }, [])
 
    //use to set the selected video
    useEffect(() => {

        if(videoId) {
            axios.get(`https://project-2-api.herokuapp.com/videos/${videoId}?api_key=9df37e6f-6bec-432b-a405-d78e1f1591ca`)
            .then(response => setSelectedVideo(response.data))
            .catch(error=> console.log(error))
        } else {
            axios.get(`https://project-2-api.herokuapp.com/videos/84e96018-4022-434e-80bf-000ce4cd12b8?api_key=9df37e6f-6bec-432b-a405-d78e1f1591ca`)
            .then(response => setSelectedVideo(response.data))
            .catch(error=> console.log(error))
        }
        
    },[videoId])

    // if(videoArray.find(video=>video.id === videoId)){
    //     return "Found";
    // }
    // if(!selectedVideo || !videoArray ) {
    //     return <h2>Loading...</h2>
    // }
    
    // if(videoArray?.find(video => video.id === videoId) === undefined) {
    //     return <div>Page Not Found</div>
    // }

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