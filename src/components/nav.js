import React from 'react'
import './style.css'

function nav() {
  return (
   <>
   
   <div>
      <div className="navbar bg-base-100">
  <div className="flex-1">
    <a  href='/' className="btn btn-ghost text-xl">VividVendors
    </a>


  </div>
  
  <div className="flex-none ">
    <div className="dark">
      
    </div>
  <div class="relative  flex items-center max-w-[190px] group">
  <svg viewBox="0 0 24 24" aria-hidden="true" class="absolute left-4 w-4 h-4 fill-[#bdbecb] pointer-events-none">
    <g>
      <path
        d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"
      ></path>
    </g>
  </svg>
  

  <input
    id="query"
    class="w-full h-[45px] pl-[2.5rem] text-[#bdbecb] bg-[#16171d] border-0 rounded-[12px] shadow-[0_0_0_1.5px_#2b2c37,0_0_25px_-17px_#000] outline-none transition-all duration-250 ease-[cubic-bezier(0.19,1,0.22,1)] cursor-text placeholder:text-[#bdbecb] focus:shadow-[0_0_0_2.5px_#2f303d] active:scale-[0.95] hover:shadow-[0_0_0_2.5px_#2f303d,0px_0px_25px_-15px_#000]"
    type="search"
    placeholder="Search..."
    name="searchbar"
  />
</div>

    <div className="dropdown dropdown-end">

      <div tabindex="0" role="button" className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <span className="badge badge-sm indicator-item">0</span>
        </div>
      </div>
      <div
        tabindex="0"
        className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
        <div className="card-body">
          <span className="text-lg font-bold">8 Items</span>
          <span className="text-info">Subtotal: $999</span>
          <div className="card-actions">
            <button className="btn btn-primary btn-block">View cart</button>
          </div>
        </div>
      </div>
    </div>
    <div className="dropdown dropdown-end">
      <div tabindex="0" role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://static.vecteezy.com/ti/vetor-gratis/p3/7069364-3d-user-icon-in-a-minimalistic-style-user-symbol-for-your-website-design-logo-app-ui-vetor.jpg" />
        </div>
      </div>
      <ul
        tabindex="0"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li>
          <a href='https://codeunique4565.github.io/Codevista/'  className="justify-between">
            Signup/login
            <span className="badge">New</span>
          </a>
        </li>
        <li><a href='/'    >Settings</a></li>
        <li><a href='/' >Logout</a></li>
      </ul>
    </div>
  </div>
  
</div>


    </div>
   </>
  )
}

export default nav
