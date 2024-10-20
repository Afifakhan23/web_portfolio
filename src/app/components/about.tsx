
import Image from 'next/image';
import myImage from "../images/my.jpg";
import Aboutcss from "../../app/styles/about.module.css";

const About = () => {
  return (
    <>
    <h2 className={Aboutcss.h2}>About Me</h2>
    <div className={Aboutcss.wrapper}>
        <div className={Aboutcss.img}>
            <Image className={Aboutcss.myimg}  src={myImage} alt='mypic' width={350} height={350}></Image>
        </div>
        <div className={Aboutcss.text}>
          <h3 className={Aboutcss.h3}>Web Developer | Full-Stack Developer | Programmer</h3>
          <p className={Aboutcss.p}>I am Afifa Khan is a dedicated Software Developer. My journey in the tech world is driven by a deep understanding of both frontend and backend development, ensuring seamless and efficient user experiences.</p>
          <p className={Aboutcss.p}>As I work towards becoming a Certified Cloud Applied Generative AI Engineer, I am developing in-depth knowledge and hands-on experience in deploying and managing generative AI models in cloud environments.</p>
        </div>
    </div>
    </>
  )
}

export default About