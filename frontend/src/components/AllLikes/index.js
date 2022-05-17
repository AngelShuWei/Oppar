import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, NavLink, Link} from "react-router-dom";
import { useEffect, useState} from 'react';
import { getAllLikes } from '../../store/likes';

function AllLikes() {
  const dispatch = useDispatch();
  const allLikes = useSelector(state => Object.values(state.likes));
  console.log(allLikes);

  useEffect(() => {
    dispatch(getAllLikes());
  }, [dispatch]);

  return (
    <div>
      {/* {allLikes.map(like => {
        like.photo
      })} */}
    </div>
  );
};

export default AllLikes;
