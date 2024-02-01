import React, { useEffect, useRef, useState } from 'react'
import OlxLogo from '../../assets/OlxLogo'
import Search from '../../assets/Search'
import Arrow from '../../assets/Arrow'
import SellButton from '../../assets/SellButton'
import SellButtonPlus from '../../assets/SellButtonPlus'
import './Header.css'
import { useUserAuth } from '../context/UserAuthContext'
import { db,auth } from "../firebase/ConfigFirebase"
import { getDoc, doc } from 'firebase/firestore'
import profilePictureUrl from '../../assets/images/usericon.png'
import { Link,useNavigate } from 'react-router-dom'

const Header = () => {
  const { user,logout } = useUserAuth();
  const [userData, setUserData] = useState(null);
  const navigate=useNavigate();
  const logoutfunc=()=>{
    logout(auth);
    console.log("logout successfull")
  }
  const SellItem=()=>{
    navigate("/create")
  }

  useEffect(() => {
    if (user && user.uid) {
      const fetchUserData = async () => {
        const docref = doc(db, "users", user.uid)
        const docsnap = await getDoc(docref)
        if (docsnap.exists) {
          setUserData(docsnap.data())
        }
        else {
          console.log("user data does not exist")
        }
      }
      fetchUserData();
    }
  }, [user]

  )

  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        {/* <div className="loginPage">
          <span>Login</span>
          <hr />
        </div> */}
        <div className="loginPage">
          {user ? (
            <div className='dropdown'>
              <a className="btn btn-light dropdown-toggle" data-toggle="dropdown" type="button" aria-expanded="false">
                <img className='usericon' src={profilePictureUrl} alt="User Icon" />
                <span>{userData?.username}</span>
              </a>
              <div className="dropdown-menu">
                <a onClick={logoutfunc} className="dropdown-item" href="#">logout</a>
              </div>
            </div>
          ) : (
            <Link to="/login"><span>Login</span></Link>
          )}
          <hr />
        </div>
        <div onClick={SellItem} className="sellMenu">
          <SellButton ></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus ></SellButtonPlus>
            <span>SELL</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header