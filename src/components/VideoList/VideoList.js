import './VideoList.scss';
// import VideoContent from '../VideoContent/VideoContent';
import VideoData from '../../data/videos.json'


const VideoList = (props) => {
    // console.log(props)
    return (
        <section className='video-list'>
            <h2 className='video-list__title'>NEXT VIDEOS</h2>
            {VideoData.map((video, i)=>
                // <VideoContent 
                //     key = {i}
                //     videoChannel = {video.channel}
                //     videoImage = {video.image}
                //     videoTitle = {video.title}
                // />
                <section className={`video-card ${i===props.newIndex?"video-card--hide":""}`} 
                    key={i} 
                    onClick={(event) => props.updateIndex(event,i)}
                >
                        <div style={{backgroundImage: `url(${video.image})`}} className='video-card__img'></div>
                        <div className='video-card__text'>
                            <p className='video-card__title'>{video.title}</p>
                            <p className='video-card__channel'>{video.channel}</p>
                        </div>
                </section>
            )}
        </section>
    );
}

export default VideoList