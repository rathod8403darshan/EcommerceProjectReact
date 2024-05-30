import React from 'react'
import { Link } from 'react-router-dom'
import "./ErrorCss.css"

function ErrorPage() {
  return (
    <>
         <div id="errorMain">
        <div class="not-found parallax">
            <div class="sky-bg"></div>
            <div class="wave-7"></div>
            <div class="wave-6"></div>
            <Link class="wave-island" to="/">
                    <img src="http://res.cloudinary.com/andrewhani/image/upload/v1524501929/404/island.svg" alt="Island"/>
                </Link>
            <div class="wave-5"></div>
            <div class="wave-lost wrp position-absolute top-0 start-50">
                <span>4</span>
                <span>0</span>
                <span>4</span>
            </div>
            <div class="wave-4"></div>
            <div class="wave-boat">
                <img class="boat" src="http://res.cloudinary.com/andrewhani/image/upload/v1524501894/404/boat.svg" alt="Boat"/>
            </div>
            <div class="wave-3"></div>
            <div class="wave-2"></div>
            <div class="wave-1"></div>
            <div class="wave-message position-absolute top-50 mt-5 pt-5 start-50">
                <p>Click on the island to Home</p>
            </div>
        </div>
    </div> 
    </>
  )
}

export default ErrorPage
