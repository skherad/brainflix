import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './VideoUpload.scss'

const VideoUpload = () => {
    let navigate = useNavigate();
    const [videoTitle, setVideoTitle] = useState("");
    const [videoDesc, setVideoDesc] = useState("");

    const handleTitle = (event) => {
      setVideoTitle(event.target.value)
    }

    const handleDesc = (event) => {
      setVideoDesc(event.target.value)
    }

    const handleCancel = (event) => {
      event.preventDefault();
      setVideoDesc("");
      setVideoTitle("");
    }

    const handleSubmit = (event) => {
      event.preventDefault();
      if(!videoTitle || !videoDesc) {
        alert("Failed to upload")
        return;
      } else {
        alert ("Upload successful")
        navigate('/')
      }
    }

    return (
      <section className='upload'>
        <h2 className='upload__title'>Upload Video</h2>
        <h3 className='upload__label'>VIDEO THUMBNAIL</h3>
        <div className='upload__thumbnail'></div>

        {/* upload video form */}
        <form className='form' onSubmit={handleSubmit}>
          <label htmlFor="videoTitle" className='form__label'>
            TITLE YOUR VIDEO
          </label>
          <input 
            name="videoTitle" 
            id="videoTitle" 
            placeholder='Add a title to your video'  
            className='form__input'
            onChange={handleTitle}
            value={videoTitle}
          ></input>
          
          <label htmlFor="videoDesc" className='form__label'>
            ADD A VIDEO DESCRIPTION
          </label>
          <textarea 
            name="videoDesc" 
            id="videoDesc"
            placeholder='Add a description to your video'  
            className='form__textarea'
            onChange={handleDesc}
            value={videoDesc}
          ></textarea>
          <div className='form__nonmobile-container'>
            <button className='form__button'>PUBLISH</button>
            <button 
              className='form__button form__button--cancel' 
              onClick={handleCancel}
            >CANCEL</button>
          </div>
        </form>
      </section>
    )
  }
  
  export default VideoUpload