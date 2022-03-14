import './Navigation.css'
import { NavLink } from "react-router-dom";

function AlbumsButton() {
  return (
    <>
      <NavLink to='/albums'><button className='nav-button feature'>Albums</button></NavLink>
    </>
  )
};

export default AlbumsButton;
