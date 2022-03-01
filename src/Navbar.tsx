import React from 'react';

export const Navbar = () => {
    return (
        <div className='flex items-center text-white justify-between pt-4'>
            <div className='w-2/3 space-x-4'>
                <span className='text-2xl font-bold'>
                    Psycho<span className='text-[#A149F7]'>Art</span>
                </span>
                <input
                    className='p-1 rounded-md bg-white/10 w-1/3 pl-2 font-semibold'
                    placeholder='Search items and collections'
                />
            </div>
            <div className='flex space-x-5 text-xl items-center'>
                <span>Collections</span>
                <span>Feature</span>
                <span>FAQ</span>
                <div className='px-3 cursor-pointer h-10 bg-gradient-to-tr flex items-center to-[#B75CFF] from-[#671AE4] rounded-lg'>
                    <span>Select Wallet</span>
                </div>
            </div>
        </div>
    );
};
