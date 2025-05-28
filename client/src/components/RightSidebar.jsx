import React from 'react';
import assets, { imagesDummyData } from '../assets/assets';

const RightSidebar = ({ selectedUser }) => {
  return selectedUser && (
    <div className={`bg-[#8185B2]/10 text-white w-full relative overflow-y-scroll ${selectedUser ? "max-md:hidden" : ''}`}>
      
      {/* ✨ Profile Section (moved higher & tightened spacing) */}
      <div className='pt-10 pb-3 flex flex-col items-center gap-1 text-xs font-light mx-auto'>
        <img
          src={selectedUser?.profilePic || assets.avatar_icon}
          alt=""
          className='w-24 h-24 rounded-full object-cover mb-2'
        />
        <h1 className='text-lg font-semibold flex items-center gap-2'>
          <span className='w-2 h-2 rounded-full bg-green-500'></span>
          {selectedUser.fullName}
        </h1>
        <p className='text-center text-sm px-6 leading-tight'>
          {selectedUser.bio}
        </p>
      </div>

      <hr className='border-[#ffffff50] my-4' />

      {/* ✨ Media Section */}
      <div className='px-5 text-xs'>
        <p className='text-sm font-medium mb-1'>Media</p>
        <div className='mt-2 max-h-[180px] overflow-y-scroll grid grid-cols-2 gap-2 opacity-80 pr-1'>
          {imagesDummyData.map((url, index) => (
            <div key={index} onClick={() => window.open(url)} className='cursor-pointer rounded'>
              <img src={url} alt="" className='w-full h-auto rounded-md object-cover' />
            </div>
          ))}
        </div>
      </div>

      {/* ✨ Logout Button (spaced lower for clarity) */}
      <div className='absolute bottom-2 left-0 right-0 flex justify-center'>
        <button className='bg-gradient-to-r from-purple-400 to-violet-600 text-white text-sm font-light py-2 px-20 rounded-full'>
          Logout
        </button>
      </div>
    </div>
  );
};

export default RightSidebar;
