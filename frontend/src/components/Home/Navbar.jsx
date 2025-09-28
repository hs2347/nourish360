// src/components/Home/Navbar.jsx
import {React,useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
import logo from '/logo.png';
import { useAuth } from '../../context/AuthContext'; // CORRECT: Import useAuth from our context

const Navbar = () => {
  const navigate = useNavigate();
  const [isNav, setNav] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // CORRECT: Get userInfo and logout function from our context instead of Auth0
  const { userInfo, logout } = useAuth();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <>
      {/* --- MOBILE NAVBAR (Your existing structure) --- */}
      <div className="md:hidden py-0 pl-4 flex items-center justify-between mt-2 mx-auto shadow-md border" style={{ width: "97%" }}>
        <div>
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <div className="mt-3 relative right-0" onClick={()=>{setNav(!isNav)}}>
            {isNav ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="90" height="60" viewBox="0 0 46 30" fill="none" >
                <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" fill="#e66934" fillOpacity="0.9"/>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="90" height="60" viewBox="0 0 46 30" fill="none">
                <path d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" fill="#e66934" fillOpacity="0.9"/>
              </svg>
            )}
        </div>
      </div>
      <div className='md:hidden'>
        {(isNav || !isMobile) && (
          <nav className='overflow-x-hidden mx-auto'>
            <div className="right mx-auto">
              {/* CORRECT: Check for `userInfo` instead of `isAuthenticated` */}
              {!userInfo && (
                <div id="nav-part2" className='flex flex-wrap items-center justify-center'>
                  <h4><a href="#home" onClick={() => navigate('/')}>Home</a></h4>
                  <h4><a href="#donate" onClick={() => navigate('/donate')}>Donate</a></h4>
                  <h4><a href="#blog">Blog</a></h4>
                  <h4 onClick={() => navigate('/login')}><a href="#login">Login</a></h4>
                  <h4 onClick={() => navigate('/signup')}><a href="#signup">Sign up</a></h4>
                </div>
              )}
              {userInfo && (
                <div id="nav-part2">
                  <h4><a href="#home" onClick={() => navigate('/')}>Home</a></h4>
                  <h4><a href="#donate" onClick={() => navigate('/donate')}>Donate</a></h4>
                  <h4><a href="#blog">Blog</a></h4>
                  <h4 onClick={handleLogout}><a href="#logout">Logout</a></h4>
                  {/* You can add user profile info here if needed */}
                </div>
              )}
            </div>
          </nav>
        )}
      </div>

      {/* --- DESKTOP NAVBAR (Your existing structure) --- */}
      <nav className='hidden md:flex overflow-x-hidden mx-auto bg-[]'>
        <div className="left">
          <img src="/logo.png" alt="Logo" className="logo" />
        </div>
        <div className="right">
          {!userInfo && (
            <div id="nav-part2">
              <h4><a href="#home" onClick={() => navigate('/')}>Home</a></h4>
              <h4><a href="#donate" onClick={() => navigate('/donate')}>Donate</a></h4>
              <h4><a href="#blog">Blog</a></h4>
              <h4 onClick={() => navigate('/login')}><a href="#login">Login</a></h4>
              <h4 onClick={() => navigate('/signup')}><a href="#signup">Sign up</a></h4>
            </div>
          )}
          {userInfo && (
            <div id="nav-part2">
              <h4><a href="#home" onClick={() => navigate('/')}>Home</a></h4>
              <h4><a href="#donate" onClick={() => navigate('/donate')}>Donate</a></h4>
              <h4><a href="#blog">Blog</a></h4>
              <h4 onClick={handleLogout}><a href="#logout">Logout</a></h4>
              {/* <h4 className="font-semibold text-orange-600">{userInfo.email}</h4> */}
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;

