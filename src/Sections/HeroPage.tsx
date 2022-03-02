import { Button } from '../atoms/Button/Button';
import { CounterInformation } from '../molecule/CounterInformation/CounterInformation';
import { ImageHero } from '../organism/ImageHero/ImageHero';
import { Partners } from '../atoms/Partners/Partners';

export const HeroPage = () => {
    return (
        <div className='sm:flex mt-20 sm:justify-between'>
            <div className='text-white lg:w-2/5'>
                <span className='text-5xl font-bold'>Create, Sell & Collect Your Own Creative NFT</span>
                <div className='text-white/30 text-xl font-semibold mt-4'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi exercitationem dolor itaque
                    doloremque nesciunt!
                </div>
                <div className='flex text-white space-x-4 mt-6'>
                    <Button content='Explore Now' />
                    <Button content='Sell NFT' color='bg-white/20' />
                </div>
                <CounterInformation />
                <Partners />
            </div>
            <ImageHero />
        </div>
    );
};
