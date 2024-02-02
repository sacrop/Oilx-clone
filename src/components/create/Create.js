import React, { Fragment, useState,useEffect } from 'react'
import Header from '../header/Header'
import './Create.css'
import dummy from '../../assets/images/dummy.png'
import { v4 } from 'uuid'
import { db, storage } from '../firebase/ConfigFirebase'
import { getDownloadURL, ref ,uploadBytes} from 'firebase/storage'
import { doc, setDoc } from 'firebase/firestore'
import { useUserAuth } from '../context/UserAuthContext'
import { useNavigate } from 'react-router-dom'

const Create = () => {
  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState("");
  const [Price, setPrice] = useState(0);
  const [image, setImage] = useState(null);
  const {user}=useUserAuth();
  const navigate=useNavigate();
  const handleSubmit=async()=>{
    if(!user){
      alert("user not logged in")
      return;
    }
    
      if(image==null)return;
      const imageRef=ref(storage,`images/${image.name+v4()}`)
     try {
      const uploadTask=await uploadBytes(imageRef,image);
      const productId=v4();
      const date=new Date();
      const imageUrl=await getDownloadURL(imageRef);
      const productDoc=doc(db,"products",productId);
       await setDoc(productDoc,{
        name:productName,
        category:category,
        price:Price,
        imageUrl:image+"",
        userId:user.uid,
        createdAt:date.toDateString()
       })
       alert("product added successfully")
       navigate("/")
      
     } catch (error) {
      console.log(error);
      
     }
    }
    useEffect(()=>{})
  return (
    <Fragment>
      <Header />
      
      <card>
        <div className="centerDiv">
          
            <h4>Add product</h4>
            <div class="form-group">
              <label htmlFor="fname">Name</label>
              <br />
              <input
                className="input"
                type="text"
                id="fname"
                name="Name"
                onChange={(e) => { setProductName(e.target.value) }}
                value={productName}
              />
            </div>
            <div class="form-group">
              <label htmlFor="fname">Category</label>
              <br />
              <input
                className="input"
                type="text"
                id="fname"
                name="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>

            <div class="form-group">
              <label htmlFor="fname">Price</label>
              <br />
              <input className="input" type="number" id="fname" value={Price} name="Price" onChange={(e) => { setPrice(e.target.value) }} />

            </div>

          <br />
          <img alt="Posts" width="200px" height="200px" src={image ? URL.createObjectURL(image) : dummy}></img>
  
            <br />
            <input type="file" onChange={(e) => { setImage(e.target.files[0]) }} />
            <br />
            <button onClick={handleSubmit} className="uploadBtn">upload and Submit</button>
     
        </div>
      </card>
    </Fragment>
  )
}

export default Create