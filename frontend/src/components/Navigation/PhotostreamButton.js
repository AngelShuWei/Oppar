import './Navigation.css'
import { NavLink } from "react-router-dom";

function PhotostreamButton() {
  return (
    <>
      <NavLink to='/photos'><button className='nav-button'>Photostream</button></NavLink>
    </>
  )
};

export default PhotostreamButton;
