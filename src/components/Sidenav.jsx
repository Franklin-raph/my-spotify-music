import React from 'react'

const Sidenav = ({ logout }) => {
    return (
        <div className='sideNav flex flex-col gap-4 relative'>
            <i className="ph ph-list absolute right-5 font-bold text-lg"></i>
            <p className='mt-10 font-bold text-xl'>
                <span className='text-yellow-400'>Bee</span>
                <span>Music</span>
            </p>
            <div className='flex items-center gap-3 text-lg py-2 rounded-xl px-2 bg-black text-white'>
                <i className="ph ph-house"></i>
                <p>Home</p>
            </div>
            <div className='flex items-center gap-3 text-lg py-2 rounded-lg px-2' onClick={logout}>
                <i className="ph ph-sign-out"></i>
                <p>Logout</p>
            </div>
        </div>
    )
}

export default Sidenav