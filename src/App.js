//import state
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NextVideo from './pages/NextVideo'


//import components
import Header from './components/Header/Header'
import VideoPlayer from './pages/VideoPlayer';
import VideoUpload from './pages/VideoUpload';

//import styling
import './App.scss';

function App() {

  
  return (
  <>
    <BrowserRouter>
      <Header /> 
      <Routes>
        <Route path="/" element={<VideoPlayer />}></Route>
        <Route path="/:videoId" element={<NextVideo />}></Route>
        <Route path="/upload" element={<VideoUpload />}></Route>
      </Routes>
    </BrowserRouter>
  </>  
  );
}

export default App;
