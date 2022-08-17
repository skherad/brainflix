import './CommentCard.scss';
import CommentContent from '../CommentContent/CommentContent';
import CommentData from '../../data/video-details.json'

// console.log(CommentData)
let commentObj = CommentData[0].comments;

const CommentCard = () => {

    return (
        <section className='comment-card'>
            
            {commentObj.map((comment) => 
                <CommentContent         
                    commentComment = {comment.comment}
                    commentName = {comment.name}
                    commentTimestamp = {comment.timestamp}
                />
            )}
            
        </section>
    );
}

export default CommentCard