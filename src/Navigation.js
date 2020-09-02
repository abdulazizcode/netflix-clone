import React, {useState,useEffect} from "react";
import "./Navigation.css";
import logo from "./img/logo.png";
import avatar from "./img/avatar.png";

const Navigation = () => {
const [show, handleShow] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', ()=>{
            if(window.scrollY > 100){
                handleShow(true);
            }else{
                handleShow(false)
            }
        });

        return () =>{
            window.removeEventListener("scroll");
        }
    },[]);


    return(
        <div className={`navigation ${show && "navigation__black"}`}>
            <img
                className="netflix__logo"
                src={logo}
                alt="NetflixLogo"
            />

               <img
                className="nav__avatar"
                src={avatar}
                alt="NetflixLogo"
            />
        </div>
    )
}

export default Navigation;