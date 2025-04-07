import React from 'react';
import './intro.css';
import bg from '../../assets/profile.png';
import {Link} from 'react-scroll';
import btnImg from '../../assets/hireme.png';

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Heloo,</span>
                <span className="introText">I'm  <span className="introName">Parthiv</span> <br/>Developer </span>
                <p className="introPara">i am a skilled developer blah blah introos</p>
                {/*<Link><button className="btn"><img src={btnImg} alt="hire" className='btnImg'/>hire me</button></Link>*/}
            </div>
            <img src={bg} alt="Profile" className="bg"/>
        </section>
    )
}

export default Intro;