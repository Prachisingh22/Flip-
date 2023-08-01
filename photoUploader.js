import React, { useState } from 'react';
import './App.css';

const PhotoUploader = () => {
  const [photo1, setPhoto1] = useState(null);
  const [photo2, setPhoto2] = useState(null);
  const [showBigPhotoIndex, setShowBigPhotoIndex] = useState(-1);

  const handlePhoto1Change = (e) => {
    const file = e.target.files[0];
    setPhoto1(URL.createObjectURL(file));
  };

  const handlePhoto2Change = (e) => {
    const file = e.target.files[0];
    setPhoto2(URL.createObjectURL(file));
  };
  const handleButtonClick = () => {
    // If no photos are available, return
    if (!photo1 && !photo2) {
      return;
    }

  const handleUpload = () => {
    console.log('Uploading photo 1:', photo1);
    console.log('Uploading photo 2:', photo2);
    // Reset the state after uploading
    setPhoto1(null);
    setPhoto2(null);
  };
  setShowBigPhotoIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
  };

  return (
    <div>
    <h2>Upload Photos</h2>
    <div>
      <h4>Photo 1:</h4>
      <input type="file" onChange={handlePhoto1Change} />
      {photo1 && showBigPhotoIndex === 0 && (
        <img
          src={photo1}
          alt="Uploaded Photo 1"
          className={`uploaded-photo ${showBigPhotoIndex === 0 ? 'big-photo' : ''}`}
          
        />
      )}
    </div>
    <div>
      <h4>Photo 2:</h4>
      <input type="file" onChange={handlePhoto2Change} />
      {photo2 && showBigPhotoIndex === 1 && (
        <img
          src={photo2}
          alt="Uploaded Photo 2"
          className={`uploaded-photo ${showBigPhotoIndex === 1 ? 'big-photo' : ''}`}
          
          
        />
      )}
      
    </div>
    <button onClick={handleButtonClick}> Click </button>
  </div>
);
};
export default PhotoUploader;
