import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { CiDark } from 'react-icons/ci';

const Header = () => {
  const [theme,setTheme] = useState(null)
  const {user,logOut} = useContext(AuthContext)
  // console.log(user?.photoURL)
  const handleSignOut = () =>{
    logOut()
    .then(res =>{
      console.log(res.user)
    })
    .catch(error =>{
      console.error(error)
    })
  }

  const handleThemeSwitch = () =>{
   setTheme(theme === 'dark' ? 'light' :"dark");
  }

  // darkmode
  //  const changeTheme = () =>{
  //    const html = document.documentElement
  //    if(mode === "light"){
  //      html.classList.remove('light')
  //      html.classList.add('dark')
  //      setMode("dark")
  //    }
  //    else{
  //     html.classList.remove('dark')
  //     html.classList.add('light')
  //     setMode("light") 
  //    }
  //  }

    useEffect(()=>{
      if(window.matchMedia('(prefers-color-sheme: dark)').mathces ){
        setTheme:('dark');
      }else{
        setTheme:("light");
      }
    })

     useEffect(() =>{
       if(theme === "dark"){
        document.documentElement.classList.add("dark");
       }else{
        document.documentElement.classList.remove("dark");
       }
     },[theme])





    const navs = <>
    <NavLink to='/' className={({isActive, isPending}) =>
      isPending ? 'pending' : isActive ? "text-red-700" : ""}>Home</NavLink>
    <NavLink to='/product' className={({isActive, isPending}) =>
      isPending ? 'pending' : isActive ? "text-red-700" : ""}>Add Product</NavLink>
    <NavLink to='/cart' className={({isActive, isPending}) =>
      isPending ? 'pending' : isActive ? "text-red-700" : ""}>My Cart</NavLink>
   
    
    
    </>
    return (
        <div className="navbar px-4 py-4 ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navs}
            </ul>
          </div>
          <div className="flex justify-center gap-3 items-center">
           <img className="w-15 h-10 rounded-lg" src="https://i.ibb.co/8rhJLMz/12121.png"/>

            <span className="font-bold text-3xl text-pink-700">ELEGENT</span></div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal text-xl font-semibold text-blue-700 gap-7 px-1">
           {navs}
          </ul>
        </div>
        <div className="navbar-end gap-8]
        ">

          {
            user ?
            <div className="flex">

                <div><img className="w-8 h-8 rounded-full" src={user?.photoURL}/> </div>
            
              <button className="text-md w-4" onClick={handleSignOut}>Sign out</button>
              </div>
           
            :
            <Link to='/register'>
            <button className="btn text-md bg-orange-400">Sign In</button>
            </Link>
          }
          <button onClick={ handleThemeSwitch} className="btn"><CiDark/></button>
        
         
        </div>
      </div>
    );
};

export default Header;