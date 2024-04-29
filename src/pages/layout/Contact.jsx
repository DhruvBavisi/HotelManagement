import React from 'react'
import '../../styles/Contact.css'

export default function Contact() {
    return (
        <>
            <div className="getInTouch">
                <div className="getouch-left">
                    <section>
                        <h1>Get in Touch</h1>
                        <p>Ante sed dictum nisi suscipit ac ut faucibus pretium. Ultrices interdum viverra pharetra, tellus. Sapien eu diam ipsum volutpat, amet fringilla.</p>
                        <p><b>Address: </b>Tea Berry, Marinette, India</p>
                        <p><b>Phone: </b>+91 93977 74546</p>
                        <p><b>Email: </b>palmoasisinn@gmail.com</p>
                        <form action="">
                            <input type="text" placeholder='Write your Message' />
                            <input type="text" placeholder='Write your Full Name' />
                            <input type="text" placeholder='Write your Email address' />
                            <button>Submit</button>
                        </form>
                    </section>
                </div>
                <div className="getouch-right">
                    <img src='/src/Images/contactus.png' />
                </div>
            </div>
        </>
    )
}
