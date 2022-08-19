import './Hero.scss';

//TODO figure out video link
// let videoUrl = "https://project-2-api.herokuapp.com/stream";

const Hero = (props) => {
    console.log(props.videoDetail.image)
    return (
            <video controls className='hero__video' poster={props.videoDetail.image}>
                <source src=""/>
                Sorry, your browser doesn't support embedded videos.
            </video>
    );
}

export default Hero