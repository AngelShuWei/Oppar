import './Navigation.css'
import { NavLink } from "react-router-dom";

function PhotostreamButton() {
  return (
    <>
      <NavLink to='/photos'><button className='nav-button feature'>Photostream</button></NavLink>
    </>
  )
};

export default PhotostreamButton;
