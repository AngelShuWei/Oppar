import './Footer.css'
import { UilGithub, UilLinkedin } from '@iconscout/react-unicons';
import { SiHeroku, SiPostgresql, SiExpress, SiSequelize, SiNodedotjs, SiReact, SiRedux, SiHtml5, SiCss3 } from 'react-icons/si';

function Footer () {
  return (
    <div className="footer-container">
      <div className='tech-icons-container'>
        <SiExpress className='tech-icon' size={30} style={{ color: `white` }}/>
        <SiPostgresql className='tech-icon' size={30} style={{ color: `rgb(51, 103, 145)` }}/>
        <SiSequelize className='tech-icon' size={30} style={{ color: `rgb(3, 175, 239)` }}/>
        <SiNodedotjs className='tech-icon' size={30} style={{ color: `rgb(78, 136, 68)` }}/>
        <SiRedux className='tech-icon' size={30} style={{ color: `rgb(104, 63, 174)` }}/>
        <SiReact className='tech-icon' size={30} style={{ color: `rgb(83, 206, 242)` }}/>
        <SiHeroku className='tech-icon' size={30} style={{ color: `rgb(103, 98, 166)`}}/>
        <SiCss3 className='tech-icon' size={30} style={{ color: `rgb(21, 114, 182)` }}/>
        <SiHtml5 className='tech-icon' size={30} style={{ color: `rgb(228, 77, 38)` }}/>
        <div className='social-links'>
          <a href='https://github.com/AngelShuWei'>
            <UilGithub className='social-icon' id='github' size={30} style={{ color: `rgb(255, 255, 255)` }}/>
          </a>
          <a href='https://www.linkedin.com/in/angel-wei-21952b16a/'>
            <UilLinkedin className='social-icon' id='linkedin' size={30} style={{ color: `rgb(255, 255, 255)` }}/>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer;
