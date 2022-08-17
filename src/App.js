import Videos from './data/videos.json'

import Header from './components/Header/Header'
import CommentForm from './components/CommentForm/CommentForm';
import CommentCard from './components/CommentCard/CommentCard';
import VideoList from './components/VideoList/VideoList';

import './App.scss';

console.log(Videos);

function App() {
  return (
  <>
    <Header /> 
    <section>
      <CommentForm />
      <CommentCard />
      <VideoList />
    </section>
  </>  
  );
}

export default App;
