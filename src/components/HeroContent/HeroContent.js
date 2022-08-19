import './HeroContent.scss';

const HeroContent =({selectedVideo}) => {


  return (
    <section className='hero__content'>
                <h1 className='hero__title'>{selectedVideo.title}</h1>
                <div className='hero__box'>   
                    <div className='hero__container'>
                        <p className='hero__name'>By {selectedVideo.channel}</p>
                        <p className='hero__date'>
                            {new Date(selectedVideo.timestamp)
                                .toLocaleDateString("en-US", {
                                    year: "numeric",
                                    month: "2-digit",
                                    day: "2-digit",
                            })}
                        </p>
                    </div>
                    <div className='hero__container'>
                        <p className='hero__view'>{selectedVideo.views}</p>
                        <p className='hero__like'>{selectedVideo.likes}</p>
                    </div>
                </div>
                <p className='hero__description'>{selectedVideo.description}</p>
            </section>
    )
 }
export default HeroContent