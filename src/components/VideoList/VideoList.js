import './VideoList.scss';
import VideoContent from '../VideoContent/VideoContent';
import VideoData from '../../data/video-details.json'



const VideoList = () => {

    return (
        <section className='video-list'>
            <h2 className='video-list__title'>NEXT VIDEOS</h2>
            {VideoData.map((video, i)=>
                <VideoContent 
                    key = {i}
                    videoChannel = {video.channel}
                    videoImage = {video.image}
                    videoTitle = {video.title}
                />
            )}
        </section>
    );
}

export default VideoList