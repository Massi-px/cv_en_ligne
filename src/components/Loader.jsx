import React from 'react';
import Logo from '../assets/img/Logo2.png';
import Loaders from '../assets/img/Loaders.gif'
import '../assets/css/Loaders.scss'
export default function loader(){
    return(
        <div className="Loader">
            <img src={Logo} alt="Logo" className="Logo"/>
            <img src={Loaders} alt="Loaders" className="Loaders-img"/>
        </div>
    )
}