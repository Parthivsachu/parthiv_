import React, {useRef} from "react";
import './contact.css';
import LinkedinIcon from '../../assets/linkedin.png';
import InstaIcon from '../../assets/insta.png';
import XIcon from '../../assets/X.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_lyxhstf', 'template_lqamxpr', form.current, {
                publicKey: '4pEeiw_uuLcgE4zhk',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    e.target.reset();
                    alert('Email sent successfully!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <section id="contactPage">
            {/*<div id="clients">*/}
            {/*    <h1 className="contactPageTitle">My Clients</h1>*/}
            {/*    <p className="clientDesc">Descriptionjdfnkjsdbvjkbsk</p>*/}
            {/*</div>*/}
            {/*<div className="clientImg">*/}
            {/*    <img src={Walmart} alt="Client" className="clientImg"/>*/}
            {/*    <img src={Adobe} alt="Client" className="clientImg"/>*/}
            {/*    <img src={Microsoft} alt="Client" className="clientImg"/>*/}
            {/*    <img src={Facebook} alt="Client" className="clientImg"/>*/}
            {/*</div>*/}
            <div id="contact">
                <h1 className="contactPageTitle"></h1>
                <span className="contactDesc"></span>
                <form className="contactForm" ref={form} onSubmit={sendEmail} >
                    <span className="contactTitle">Contact</span>
                    <input type="name" className="name" placeholder='Your Name' name='your_name'/>
                    <input type="email" className="email" placeholder='Your Email' name='your_email'/>
                    <textarea className='msg' name="message" rows="5" placeholder='Your Message'></textarea>
                    <button type='submit' value='send' className="submitBtn">Submit</button>

                    <div className="links">
                        <a href="https://www.linkedin.com/in/parthiv-prakash-4100a532a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                           target="_blank" rel="noopener noreferrer">
                            <img src={LinkedinIcon} alt="LinkedinIcon" className="link"/>
                        </a>
                        <a href="https://www.instagram.com/parthiv_prakash/?igsh=MWs1ODN0MTBncnh3dg==" target="_blank"
                           rel="noopener noreferrer">
                            <img src={InstaIcon} alt="InstaIcon" className="link"/>
                        </a>
                        <a href="https://x.com/ParthivPrakashh?t=BPOLeiB81-9K0QHghwNmPw&s=09" target="_blank"
                           rel="noopener noreferrer">
                            <img src={XIcon} alt="XIcon" className="link"/>
                        </a>
                        {/*<a href="https://www.youtube.com/c/YourChannel" target="_blank" rel="noopener noreferrer">*/}
                        {/*    <img src={YoutubeIcon} alt="YoutubeIcon" className="link"/>*/}
                        {/*</a>*/}
                    </div>

                </form>
            </div>
        </section>
    );
}

export default Contact;