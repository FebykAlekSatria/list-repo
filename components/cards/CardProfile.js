import Link from 'next/link';
import { useEffect, useState } from 'react';
import { AiTwotoneMail } from 'react-icons/ai';
import { BsTelephoneFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../slices/userSlice';

export default function CardProfile(){
    const [isOpen, setIsOpen] = useState(false);
    const toggleModal = () => setIsOpen(!isOpen);
    const dispatch = useDispatch();
    const user = useSelector(state => state.user.data);

    useEffect(() => {
        dispatch(getUser());
        console.log(user);
    }, [dispatch]);
    
    return(
        <div className="flex flex-row md:block rounded-xl shadow-md bg-white-primary md:text-center py-6 px-4 md:px-0 md:items-center">
            <div className="w-1/3 md:w-full">
              <img className="md:w-32 md:h-32 w-24 h-24 md:mx-auto mx-2 rounded-full shadow" alt="profile" src={user.avatar_url}/>
            </div>
            <div className="w-2/3 md:w-full gap-2">
              <p className="font-bold mb-2">{user.name}</p>
              <a href={user.blog} className="text-gray-icon text-sm mb-2">{user.blog}</a>
              <p className="text-blue-primary text-sm mb-2">{user.location}</p>
              {user.html_url &&
                <Link href={user.html_url} > 
                  <a> 
                    <p className="w-1/3 bg-blue-primary rounded-md p-2 px-4 font-bold md:mx-auto my-4 text-white">Github </p> 
                  </a> 
                </Link>
              }
              
            </div>
          </div>

    )
}