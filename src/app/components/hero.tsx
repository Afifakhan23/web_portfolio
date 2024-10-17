import React from 'react'
import Image from 'next/image';
import myImage from '../images/my.jpg'
import Link from 'next/link'
import Page from '../styles/page.module.css';

const Hero = () => {
  return (
    <div className={Page.wrapper}>
        <div className={Page.text}>
            <h2 className={Page.h2}>Full Stack Developer</h2>
            <p className={Page.p}>I am Afifa Khan is a dedicated Software Developer. My journey in the tech world is driven by a deep understanding of both frontend and backend development, ensuring seamless and efficient user experiences.</p>
            <div className={Page.buttons}>
                <Link className={Page.btn} href={'./about'}>About me</Link>
                <a className={Page.btn} href='./cv/myCV.pdf' download>Download CV</a>
            </div>
        </div>
        <div className={Page.img}>
            <Image className={Page.myimg}  src={myImage} alt='mypic' width={350} height={350}></Image>
        </div>
    </div>
  )
}

export default Hero