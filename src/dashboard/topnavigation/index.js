import { useToggle } from '../provider/context';
import {IoMdLogIn} from 'react-icons/io'
import IMG1 from '../../images/logo.png'

export default function TopNavigation() {
  const { toggle } = useToggle();
  return (
    <header className="bg-[#334257] h-20 items-center relative w-full z-10">
      <div className="flex flex-col h-full justify-center mx-auto px-3 relative">
        <div className="flex items-center pl-1 relative w-full sm:ml-0 sm:pr-2 lg:max-w-68">
          <div className="flex left-0 relative w-3/4">
            <div className="flex group h-full items-center relative w-12">
              <button
                type="button"
                aria-expanded="false"
                aria-label="Toggle sidenav"
                onClick={toggle}
                className="text-4xl text-white focus:outline-none lg:hidden"
              >
                &#8801;
              </button>
            </div>
          </div>
          <div className="flex items-center justify-end ml-5 p-1 relative w-full sm:mr-0 sm:right-auto">
            <a href="#" className='text-white hover:shadow-lg'>Login</a>
            <a href="#">
              <img
                src='https://cdn3d.iconscout.com/3d/premium/thumb/man-avatar-6299539-5187871.png'
                className="h-10 mx-auto object-cover hover:shadow-lg rounded-full w-10"
              />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
