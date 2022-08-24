import { useParams } from "react-router-dom";
import video from '../data/video-details.json'
import Hero from '../components/Hero/Hero'
import CommentSection from '../components/CommentSection/CommentSection';
import VideoList from '../components/VideoList/VideoList';
import HeroContent from '../components/HeroContent/HeroContent';

const NextVideo = () => {
    const {videoId} = useParams();

    const selectedVideo = video.find((e) => e.id === videoId);

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
            // setVideoId = {setVideoId}
            //pass only selected video's Id 
            //since we already have the required data in this component
            selectedVideoId = {selectedVideo.id}
            />
        </section>
      </>
  )
}

export default NextVideo