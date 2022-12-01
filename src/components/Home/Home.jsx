import React, { Suspense } from 'react'
import "./Home.css"
import Spline from '@splinetool/react-spline';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const navigate = useNavigate()

    return (
        <div className='home-container'>
            <div className='home-content'>
                <h2 className='welcome-text'>Bienvenido a <span>STORE</span></h2> 
                <div className='controller-container'>
                    <Spline scene="https://prod.spline.design/n3rH5iy3usMw6s2F/scene.splinecode" />
                </div>
                <div className='products-button'>
                    <button onClick={() => navigate("/productos")}>Ver Productos</button>
                </div>
            </div>
        </div>
    )
}

export default Home