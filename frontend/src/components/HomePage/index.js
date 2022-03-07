import './Homepage.css'
import landingImg from '../../assets/cha.jpg'
import Footer from '../Footer';
import { NavLink } from 'react-router-dom';

function Homepage() {

  return (
    <div className='page-container'>
      <img src={landingImg} alt="chaeunwoo" style={{width:"100%"}}/>
      <div className='homepage-text'>
        <h1 className='h1-text'>Find your oppa.</h1>
        <h3 className='h3-text'>Join the Oppar community, home to tens of billions of <br/> oppas and 2 million groups.</h3>
        <NavLink className='start-button' to='/signup'>Start for free</NavLink>
        <h3 className='h3-footer-text'>Cute oppa <br/> by Whoever</h3>
      </div>
      <div className='footer-container'>
        <Footer />
      </div>
    </div>
  );
}

export default Homepage;
