import './CommentForm.scss';

const CommentForm = () => {

    return (
        <>
            <h3 className='comment-form__title'>3 Comments</h3>
            <section className='comment-form'>
                <div className='comment-form__avatar'></div>
                <form className='comment-form__form'>
                    <label htmlFor='newComment' className='comment-form__label'>JOIN THE CONVERSATION</label>
                    <textarea id='newComment' className='comment-form__input'>Add a new comment</textarea>
                    <button className='comment-form__button'>COMMENT</button>
                </form>
            </section>
        </>
    );
}

export default CommentForm