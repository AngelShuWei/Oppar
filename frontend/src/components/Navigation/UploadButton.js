import './Navigation.css'
import { NavLink } from "react-router-dom";

function UploadButton () {
  return (
    <>
      <NavLink to='/upload'><button className='nav-button'>Upload</button></NavLink>
    </>
  )
}

export default UploadButton;
