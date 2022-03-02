export const BottomNav = () => {
    return (
        <div className='text-white text-[0.5rem] sm:text-lg flex justify-between pb-20'>
            <ul className='w-1/4 space-y-4'>
                <li className='font-semibold'>
                    Psycho<span className='text-[#A149F7] font-semibold'>Art</span>
                </li>
                <li className='opacity-30'>
                    The best NFT marketplace website in the world and feel your experience in selling or buy our work
                </li>
            </ul>
            <ul className='space-y-4'>
                <li className='font-semibold'>About</li>
                <li className='opacity-30'>Product</li>
                <li className='opacity-30'>Resource</li>
                <li className='opacity-30'>Term & Condition</li>
                <li className='opacity-30'>FAQ</li>
            </ul>
            <ul className='space-y-4'>
                <li className='font-semibold'>Company</li>
                <li className='opacity-30'>Our Team</li>
                <li className='opacity-30'>Partner With Us</li>
                <li className='opacity-30'>Privacy & Policy</li>
                <li className='opacity-30'>Features</li>
            </ul>
            <ul className='space-y-4'>
                <li className='font-semibold'>Contact</li>
                <li className='opacity-30'>+012 3456789</li>
                <li className='opacity-30'>adorableprogrammer@gmail.com</li>
            </ul>
        </div>
    );
};
