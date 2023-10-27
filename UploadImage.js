import React, { useState } from "react";
import { storage } from "./Firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import "./UploadImage.css";

function UploadImage({ onImageUpload }) {
  const [imageUpload, setImageUpload] = useState(null);
  const [uploadedFileName, setUploadedFileName] = useState("");

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImageUpload(file);
    setUploadedFileName(file ? file.name : "");
  };

  const handleUpload = () => {
    if (imageUpload === null) return;

    const uniqueFileName = `${uuidv4()}_${imageUpload.name}`;
    const imageRef = ref(storage, `images/${uniqueFileName}`);
    uploadBytes(imageRef, imageUpload).then(() => {
      getDownloadURL(imageRef).then((url) => {
        // Pass the image URL back to the parent component
        onImageUpload(url);
      });
    });
  };

  return (
    <div className="Imager">
      <div className="file-info-container">
        {uploadedFileName || "No file selected"} {/* Show uploaded file name or "No file selected" */}
      </div>
      <label className="custom-file-upload">
        <input type="file" onChange={handleImageChange} />
        Choose Photo
      </label>
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}

export default UploadImage;
