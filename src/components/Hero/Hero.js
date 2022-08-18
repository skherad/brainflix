import './Hero.scss';



// console.log(CommentData)
// let videoUrl = "https://project-2-api.herokuapp.com/stream";

const Hero = (props) => {
    // console.log(props)

    return (
        <>
            <video controls className='hero__video'>
                <source src=""/>
                Sorry, your browser doesn't support embedded videos.
            </video>
            <section className='hero__content'>
                <h1 className='hero__title'></h1>
                <div className='hero__box'>
                    <div className='hero__container'>
                        <p className='hero__name'>By {props.videoDetail.channel}</p>
                        <p className='hero__date'>{props.videoDetail.timestamp}</p>
                    </div>
                    <div className='hero__container'>
                        <p className='hero__view'>{props.videoDetail.views}</p>
                        <p className='hero__like'>{props.videoDetail.likes}</p>
                    </div>
                </div>
                <p className='hero__description'>{props.videoDetail.description}</p>
            </section>
        </>
    );
}

export default Hero