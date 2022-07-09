
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setData } from '../slices/dataSlice';
// import dataSoal from './features/soaltest';

export default function Home() {
  const dispatch = useDispatch();
  const  data = useSelector(state => state.data.data);
  useEffect(() => {
    dispatch(setData('Hello World'));
  }, [dispatch]);

  return (
    <h1 className="text-3xl font-bold underline">
      {data}
    </h1>
  )
}
