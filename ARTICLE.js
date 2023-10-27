import React, { useState } from 'react';
//import './ArticleForm.css';
//import { getDatabase, reference, set } from "firebase/database";
import{collection, addDoc} from "firebase/firestore"
import {vansh } from "./Firebase";
import Image from './UploadImage'

import './Article.css';

function ArticleSection() {
  const [title, setTitle] = useState("");
  const [abstract, setAbstract] = useState("");
  const [article, setArticle] = useState("");
  const [tag, setTag] = useState("");
  const [imageURL, onImageUpload] = useState(""); 


  const userCollectionRef = collection(vansh, "article");

  const writeUserData = async () => {
    await addDoc(userCollectionRef, {
      title: title,
      abstract: abstract,
      article: article,
      tag: tag,
      imageURL: imageURL,
      
    }).then(() => {
      alert("Data Uploaded!");
    });
  };
  
  
  return (
    <>
    <div className='Article-section'>
    <div className="img">
          <h3>Add an image:</h3>
          <Image onImageUpload={onImageUpload} />
        </div>
      <div className='A1'>
        <label>Title:</label>
        <input type="text" placeholder="Enter a suitable title" onChange={(event) => {setTitle(event.target.value)}}  />
      </div>
      <div className='A2'>
        <label>Abstract:</label>
        <input type="text" placeholder="Start your article title with how, what, why, etc." onChange={(event) => {setAbstract(event.target.value)}} />
      </div>
      <div className='A3'>
        <label>Article Text:</label>
        <input type="text" placeholder="Enter the article text" onChange={(event) => {setArticle(event.target.value)}}/>
      </div>
      
      <div className='A4'>
        <label>Tags:</label>
        <input type="text" placeholder="Please add up to three tags to describe what your article is about, e.g., Technology" onChange={(event) => {setTag(event.target.value)}}/>
      </div>
      <button className= "post" onClick={writeUserData}>Post</button>
    </div>
    </>
    
  );
  }

export default ArticleSection;

