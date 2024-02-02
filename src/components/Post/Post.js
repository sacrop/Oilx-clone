import React, { useEffect, useState } from 'react'
import Heart from '../../assets/Heart'
import './Post.css'
import { collection, getDocs, where, query } from 'firebase/firestore'
import { db } from '../firebase/ConfigFirebase'
import { useUserAuth } from '../context/UserAuthContext'
import { shuffle } from 'lodash'
import { usePostDetail } from '../store/PostContext'
import { useNavigate } from 'react-router-dom'
const Post = () => {
  const [products, setProducts] = useState([]);
  const shuffledproducts=shuffle(products)
  const { user } = useUserAuth();
  const {setPostDetails}=usePostDetail();
  const navigate=useNavigate();
  useEffect(() => {
    const loadData = async () => {
      try {
        if (user && user.uid) {
          const q = query(collection(db, "products"), where("userId", "==", user.uid));
          const querySnapshot = await getDocs(q);
          const fetchProducts = querySnapshot.docs.map((product) => {
            return { ...product.data(), id: product.id }
          })
          console.log(fetchProducts)
          setProducts(fetchProducts)
        }

      } catch (error) {
        console.log(error)
      }

    }
    loadData();
  }
    , [user])
  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">
          {
            products.map((product,id) => {
              return (
                <div key={id}
                  className="card"
                  onClick={()=>{
                    setPostDetails(product) ;
                    navigate("/viewpost")
                  }}
                >
                  <div className="favorite">
                    <Heart></Heart>
                  </div>
                  <div className="image">
                    <img src={product.imageUrl} alt="" />
                  </div>
                  <div className="content">
                    <p className="rate">&#x20B9; {product.price}</p>
                    <span className="kilometer">{product.category}</span>
                    <p className="name"> {product.name}</p>
                  </div>
                  <div className="date">
                    <span>{product.createdAt}</span>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
          {
            shuffledproducts.map((product,id) => {
              return (
                <div key={id}
                  className="card"
                  onClick={()=>{
                    setPostDetails(product) ;
                    navigate("/viewpost")
                  }}
                >
                  <div className="favorite">
                    <Heart></Heart>
                  </div>
                  <div className="image">
                    <img src={product.imageUrl} alt="" />
                  </div>
                  <div className="content">
                    <p className="rate">&#x20B9; {product.price}</p>
                    <span className="kilometer">{product.category}</span>
                    <p className="name"> {product.name}</p>
                  </div>
                  <div className="date">
                    <span>{product.createdAt}</span>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Post