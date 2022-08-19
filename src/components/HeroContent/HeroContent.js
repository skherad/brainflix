import './HeroContent.scss';

const HeroContent =(props) => {
  return (
    <section className='hero__content'>
                <h1 className='hero__title'>{props.videoDetail.title}</h1>
                <div className='hero__box'>   
                    <div className='hero__container'>
                        <p className='hero__name'>By {props.videoDetail.channel}</p>
                        <p className='hero__date'>
                            {new Date(props.videoDetail.timestamp)
                                .toLocaleDateString("en-US", {
                                    year: "numeric",
                                    month: "2-digit",
                                    day: "2-digit",
                            })}
                        </p>
                    </div>
                    <div className='hero__container'>
                        <p className='hero__view'>{props.videoDetail.views}</p>
                        <p className='hero__like'>{props.videoDetail.likes}</p>
                    </div>
                </div>
                <p className='hero__description'>{props.videoDetail.description}</p>
            </section>
    )
 }
export default HeroContent