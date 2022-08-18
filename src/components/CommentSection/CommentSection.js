//import styling
import './CommentSection.scss';

//import component
import CommentCard from '../CommentCard/CommentCard';


const CommentSection = (props) => {

    return (
            //map through videoComment passed from App.js
            //and create a comment card for each   
        <section className='comment-section'>

            {props.videoComment.map((e, i) => 
                <CommentCard        
                    key = {i} 
                    commentComment = {e.comment}
                    commentName = {e.name}
                    commentTimestamp = {e.timestamp}
                />
            )}
            
        </section>
    );
}

export default CommentSection