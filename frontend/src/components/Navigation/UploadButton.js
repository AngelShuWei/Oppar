import './Navigation.css'
import { NavLink } from "react-router-dom";

function UploadButton () {
  return (
    <>
      <NavLink to='/upload'><button className='nav-button'><i className="fa-lg fa-solid fa-upload"></i></button></NavLink>
    </>
  )
}

export default UploadButton;
