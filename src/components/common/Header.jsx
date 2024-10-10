import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Avatar from '../../assets/avatars/avatar.png'
import HomeIcon from '../../assets/icons/home.svg'
import Notification from '../../assets/icons/notification.svg'
import Logo from '../../assets/meetoza.png'
import Logout from '../auth/Logout'
const Header = () => {
  const { user } = useSelector((state) => state.auth.user)
  console.log(user)
  return (
    <nav className="sticky top-0 z-50 border-b border-[#B7B7B7] bg-[#C4D7FF] py-4">
      <div className="container flex flex-col items-center justify-between gap-6 sm:flex-row">
        <Link to="/">
          <img
            className="max-w-[150px] lg:max-w-[70px] object-cover"
            src={Logo}
            alt="logo"
          />
        </Link>

        <div className="flex items-center space-x-4">
          <Link to="/" className="btn-primary">
            <img src={HomeIcon} alt="Home" />
            Home
          </Link>
          <button className="icon-btn">
            <img src={Notification} alt="Notification" />
          </button>
          <Logout />
          <Link to="/me" className="flex-center !ml-8 gap-3">
            <span className="text-lg font-medium lg:text-xl">
              {user?.firstName}
            </span>
            <img
              className="max-h-[32px] max-w-[32px] lg:max-h-[44px] lg:max-w-[44px]"
              src={Avatar}
              alt="avatar"
            />
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Header
