
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Navbar from '../components/Navbar';
import { getData } from '../slices/dataSlice';
import CardProfile from '../components/cards/CardProfile';
import CardListRepo from '../components/cards/CardListRepo';
import CardResume from '../components/cards/CardResume';

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  return (
    <div className="bg-primary font-poppins">
      <Navbar />
      <div className="lg:grid lg:grid-cols-4 gap-4 m-4">
        <div className="">
          <CardProfile/>
        </div>
        <div className="my-4 md:my-0 col-span-2">
            <CardListRepo/>
        </div>
        <div className="my-4 md:my-0">
          <CardResume/>
        </div>
      </div>
  </div>
  )
}
