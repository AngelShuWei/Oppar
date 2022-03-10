import { NavLink } from "react-router-dom";

function AlbumsButton() {
  return (
    <>
      <NavLink to='/albums'><button>Albums</button></NavLink>
    </>
  )
};

export default AlbumsButton;
