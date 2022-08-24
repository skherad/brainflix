import './VideoList.scss';
import VideoData from '../../data/videos.json'
import { Link } from 'react-router-dom';

const VideoList = ({setCurrentVideoId, currentVideoId}) => {
    console.log(setCurrentVideoId)
    return (
        <section className='video-list'>
            <h2 className='video-list__title'>NEXT VIDEOS</h2>
            {VideoData?.map((e)=>
                <section 
                    className={`video-card ${currentVideoId===e.id?"video-card--hide":""}`} 
                    key={e.id} 
                    onClick={() => setCurrentVideoId(e.id)}
                >
                    <Link to={`/${e.id}`}>
                        <div style={{backgroundImage: `url(${e.image})`}} className='video-card__img'></div>
                        <div className='video-card__text'>
                            <p className='video-card__title'>{e.title}</p>
                            <p className='video-card__channel'>{e.channel}</p>
                        </div>
                    </Link>
                </section>
            )}
        </section>
    );
}

export default VideoList