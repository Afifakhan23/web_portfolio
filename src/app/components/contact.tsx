import React from 'react'
import Link from 'next/link'
import Contactcss from '../styles/contact.module.css'

const Contact = () => {
  return (
    <div className={Contactcss.container}>
        <form className={Contactcss.form}>
            <h2 className={Contactcss.h2}>Contact Us</h2>
            <label htmlFor="name" className={Contactcss.label}>Full Name</label>
            <input type="text" className={Contactcss.input} id='name' placeholder='Enter Your Name'/>

            <label htmlFor="name" className={Contactcss.label}>Email Address</label>
            <input type="text" className={Contactcss.input} id='name' placeholder='Enter Your Email'/>

            <label htmlFor="message" className={Contactcss.label}>Message</label>
            <textarea name="message" rows={5} id="message" className={Contactcss.input}></textarea>

            <div className={Contactcss.button}>
                <Link href="/" className={Contactcss.btn}>Submit</Link>
            </div>
        </form>
    </div>
  )
}

export default Contact