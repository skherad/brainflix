import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './VideoUpload.scss'

const VideoUpload = () => {
    let navigate = useNavigate();

    const [state, setState] = useState({
      videoTitle: "",
      videoDesc: ""
    })

    const handleChange = (event) => {
      const value = event.target.value;
      setState({
        ...state,
        [event.target.name]: value
      })
    }

    const handleCancel = (event) => {
      event.preventDefault();
      setState({
        videoDesc: "",
        videoTitle: ""
      })
    }

    const handleSubmit = (event) => {
      event.preventDefault();
      if(!state.videoTitle || !state.videoDesc) {
        alert("Failed to upload, ensure all fields are filled!")
        return;
      } else {
        axios.post("http://localhost:8080/videos", {
          title: state.videoTitle, 
          description: state.videoDesc,
          image: "http://localhost:8080/public/thumbnail"
        })
        alert ("Upload successful")
        navigate('/')
      }
    }

    return (
      <section className='upload'>
        <h1 className='upload__title'>Upload Video</h1>
     

        {/* upload video form */}
        <form className='form' onSubmit={handleSubmit}>
          <div  className='form__container-desktop'>
            <div className='form__left-container'>
              <h3 className='upload__label'>VIDEO THUMBNAIL</h3>
              <div className='upload__thumbnail'></div>
            </div>
            <div className='form__right-container'>
              <label htmlFor="videoTitle" className='form__label'>
                TITLE YOUR VIDEO
              </label>
              <input 
                name="videoTitle" 
                id="videoTitle" 
                placeholder='Add a title to your video'  
                className='form__input'
                onChange={handleChange}
                value={state.videoTitle}
              ></input>
              
              <label htmlFor="videoDesc" className='form__label'>
                ADD A VIDEO DESCRIPTION
              </label>
              <textarea 
                name="videoDesc" 
                id="videoDesc"
                placeholder='Add a description to your video'  
                className='form__textarea'
                onChange={handleChange}
                value={state.videoDesc}
              ></textarea>
            </div>
          </div>
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