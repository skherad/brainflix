import './CommentContent.scss';


const CommentContent = (props) => {

    // console.log(props)
    

    return (
        <section className='comment-content__container'>
            <div className='comment-content__avatar'></div>
            <div className='comment-content'>
                <div className='comment-content__header'>
                    <div className='comment-content__name'>{props.commentName}</div>
                    <div className='comment-content__date'>
                        {new Date(props.commentTimestamp).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "2-digit",
                            day: "2-digit",
                        })}
                    </div>
                </div>
                <p className='comment-content__text'>{props.commentComment}</p>
            </div>
        </section>
    );
}

export default CommentContent