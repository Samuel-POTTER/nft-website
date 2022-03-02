import { Button } from '../../atoms/Button/Button';

export const Navbar = () => {
    return (
        <div className='flex items-center text-white justify-between pt-4'>
            <div className='w-2/3 space-x-4'>
                <span className='text-2xl font-bold'>
                    Psycho<span className='text-[#A149F7]'>Art</span>
                </span>
                <input
                    className='hidden sm:p-1 sm:rounded-md sm:bg-white/10 sm:w-1/3 sm:pl-2 sm:font-semibold'
                    placeholder='Search items and collections'
                />
            </div>
            <div className='hidden sm:flex sm:space-x-5 sm:text-xl sm:items-center'>
                <span>Collections</span>
                <span>Feature</span>
                <span>FAQ</span>
                <Button content='Select Wallet' />
            </div>
        </div>
    );
};
