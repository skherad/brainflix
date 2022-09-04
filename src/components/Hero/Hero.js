import './Hero.scss';


const Hero = ({selectedVideo}) => {

    

    return (
        <div className='hero'>
            <div className='hero__video-container'>
                <video controls className='hero__video' poster={selectedVideo?.image}>
                    <source src={`${selectedVideo?.video}?api_key=9df37e6f-6bec-432b-a405-d78e1f1591ca`} type=""/>
                    Sorry, your browser doesn't support embedded videos.
                </video>
            </div>
        </div>
    );
}

export default Hero