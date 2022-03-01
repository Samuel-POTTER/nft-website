import { CounterInformation } from './CounterInformation';
import { ImageHero } from './ImageHero';
import { Navbar } from './Navbar';
import { Partners } from './Partners';

export const Home = () => {
    return (
        <div className='h-screen bg-gradient-to-r px-40 from-[#5B363C] to-[#181E41]'>
            <Navbar />
            <div className='flex mt-20 justify-between'>
                <div className='text-white w-2/5'>
                    <span className='text-5xl font-bold'>Create, Sell & Collect Your Own Creative NFT</span>
                    <div className='text-white/30 text-xl font-semibold mt-4'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi exercitationem dolor itaque
                        doloremque nesciunt!
                    </div>
                    <div className='flex text-white space-x-4 mt-6'>
                        <div className='px-3 cursor-pointer h-10 bg-gradient-to-tr flex items-center to-[#B75CFF] from-[#671AE4] rounded-lg'>
                            <span>Explore Now</span>
                        </div>
                        <div className='px-3 cursor-pointer h-10 flex items-center bg-white/20 rounded-lg'>
                            <span>Sell NFT</span>
                        </div>
                    </div>
                    <CounterInformation />
                    <Partners />
                </div>
                <ImageHero />
            </div>
        </div>
    );
};
