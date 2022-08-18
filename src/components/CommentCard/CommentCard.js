import './CommentCard.scss';
import CommentContent from '../CommentContent/CommentContent';
// import CommentData from '../../data/video-details.json'

// console.log(CommentData)

const CommentCard = (props) => {

    console.log(props)
    // let commentObj = CommentData[0].comments;

    return (
        <section className='comment-card'>
            
            {props.videoComment.map((e, i) => 
                <CommentContent        
                    key = {i} 
                    commentComment = {e.comment}
                    commentName = {e.name}
                    commentTimestamp = {e.timestamp}
                />
            )}
            
        </section>
    );
}

export default CommentCard