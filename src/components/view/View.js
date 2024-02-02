import React from 'react'
import './View.css';
import { usePostDetail } from '../store/PostContext';
const View = () => {
  const {postDetails}=usePostDetail();
  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postDetails.imageUrl}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetails.price} </p>
          <span>{postDetails.name}</span>
          <p>{postDetails.category}</p>
          <span>{postDetails.createdAt}</span>
        </div>
        <div className="contactDetails">
          <p>{postDetails.userId}</p>
          <p>No name</p>
          <p>1234567890</p>
        </div>
      </div>
    </div>
  )
}

export default View