
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getData } from '../slices/dataSlice';
import { getUser } from '../slices/userSlice';
// import dataSoal from './features/soaltest';

export default function Home() {
  const dispatch = useDispatch();
  const  data = useSelector(state => state.data.data);
  const  user = useSelector(state => state.user.data);
  useEffect(() => {
    dispatch(getData());
    dispatch(getUser());
  }, [dispatch]);

  return (
    <h1 className="text-3xl font-bold underline">
      {/* {data} */}
    </h1>
  )
}
