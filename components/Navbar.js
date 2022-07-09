import {HiOutlineMenuAlt1} from 'react-icons/hi';
import { useSelector } from 'react-redux';

export default function Navbar(){
    const user = useSelector(state => state.user.data);
    return(
      <div className="md:flex bg-white-primary">
        <div className="flex md:w-4/5 sm:w-full justify-between align-middle p-3.5">
          <div className='flex gap-6'>
            <button>
              <HiOutlineMenuAlt1 className="text-orange-primary my-auto" size={30}/>
            </button>
            <p className="font-bold md:text-xl text-blue-primary my-auto">Repository {user.name}</p>
          </div>
          <div></div>
        </div>
      </div>
    )
}