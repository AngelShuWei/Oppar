import './Footer.css'
import { UilGithub, UilLinkedin } from '@iconscout/react-unicons';
import { SiHeroku, SiPostgresql, SiExpress, SiSequelize, SiNodedotjs, SiReact, SiRedux, SiHtml5, SiCss3 } from 'react-icons/si';
import css from '../../assets/icons/css3.png'
import expressjs from '../../assets/icons/expressjs.png'
import github from '../../assets/icons/github.png'
import heroku from '../../assets/icons/heroku.png'
import html from '../../assets/icons/html5.png'
import linkedin from '../../assets/icons/linkedin.png'
import nodejs from '../../assets/icons/nodejs.png'
import postgresql from '../../assets/icons/postgresql.png'
import react from '../../assets/icons/react.png'
import redux from '../../assets/icons/redux.png'
import sequelize from '../../assets/icons/sequelize.png'
import vscode from '../../assets/icons/vscode.png'

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
        <a href='https://github.com/AngelShuWei'>
          <UilGithub className='tech-icon' id='github' size={30} style={{ color: `rgb(255, 255, 255)` }}/>
        </a>
        <a href='https://www.linkedin.com/in/angel-wei-21952b16a/'>
          <UilLinkedin className='tech-icon' size={30} style={{ color: `rgb(255, 255, 255)` }}/>
        </a>
      </div>
      {/* <div className='social-links'>
        <UilGithub size={30}/>
        <UilLinkedin size={30}/>
      </div> */}
        {/* <img className='tech-icon' src={expressjs} alt='expressjs-icon' style={{width:"2%"}}/>
        <img className='tech-icon' src={css} alt='sequelize-icon' style={{width:"2%"}}/>
        <img className='tech-icon' src={html} alt='expressjs-icon' style={{width:"2%"}}/>
        <img className='tech-icon' src={SiHeroku} alt='expressjs-icon' style={{width:"2%"}}/>
        <img className='tech-icon' src={nodejs} alt='expressjs-icon' style={{width:"2%"}}/>
        <img className='tech-icon' src={postgresql} alt='expressjs-icon' style={{width:"2%"}}/>
        <img className='tech-icon' src={react} alt='expressjs-icon' style={{width:"2%"}}/>
        <img className='tech-icon' src={redux} alt='expressjs-icon' style={{width:"2%"}}/>
        <img className='tech-icon' src={sequelize} alt='expressjs-icon' style={{width:"2%"}}/>
        <img className='tech-icon' src={vscode} alt='expressjs-icon' style={{width:"2%"}}/>
        <a href='https://github.com/AngelShuWei' className='tech-icon' id='github'><img src={github} alt='expressjs-icon' style={{width:"12%"}}/></a>
        <a href='https://www.linkedin.com/in/angel-wei-21952b16a/' className='tech-icon'><img src={linkedin} alt='expressjs-icon' style={{width:"12%"}}/></a> */}
    </div>
  )
}

export default Footer;
