import React from 'react'
import '../styles/css/adda52.css'
import logo from '../images/logo.svg'
import ios_icon from '../images/ios-icon.png'
import android_icon from '../images/android-icon.png'
import supporticon from '../images/supportIcon.png'

function Header() {
    return (
        <>
            <section id="adda-header">
                <div class="adda-top-header">
                    <div class="container">
                    <div class="row">
                        <div class="col-md-6 col-6">
                        <ul class="adda-lang">
                            <li><a href="#">English</a></li>
                            <li><a href="#">தமிழ்</a></li>
                            <li><a href="#">తెలుగు</a></li>
                        </ul>
                        </div>
                        <div class="col-md-6 col-6 ">
                        <div class="adda-support">
                            <span><img src={supporticon} alt=""/></span>
                            <span>1800 419 8519</span>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="adda-main-nav">
                    <div class="container">
                    <div class="row">
                        <div class="col-sm-2 col-7">
                        <div class="adda-micon">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </div>
                        <div class="adda-brand">
                            <a href=""><img class="img-responsive" src={logo} alt="Adda52Rummy"/></a>
                        </div>
                        </div>
                        <div class="col-sm-6 hidden-mobile">
                        <ul class="adda-nav-links">
                            <li><a href="/">Home</a></li>
                            <li><a href="/how-to-play">How to Play</a></li>
                            <li><a href="/promotions">Promotions</a></li>
                            <li><a href="/promotions">Refer a Friend</a></li>
                        </ul>
                        </div>
                        <div class="col-sm-4 col-5">
                        <ul class="adda-header-action">
                            <li class="hidden-mobile"><a href=""><img src={android_icon} alt=""/></a></li>
                            <li class="hidden-mobile"><a href=""><img src={ios_icon} alt=""/></a></li>
                            <li><a href="" class="common-btn login-btn">Sign IN / Sign UP</a></li>
                            <li class="hidden-mobile"><a href="" class="common-btn playnow">Play Now</a></li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Header
