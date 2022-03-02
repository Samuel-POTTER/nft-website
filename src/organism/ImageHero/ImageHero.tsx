import Skull from '../../assets/Rectangle15.png';
import Heart from '../../assets/Rectangle16.png';
import Ball from '../../assets/Rectangle17.png';
import Book from '../../assets/Rectangle18.png';
import Brain from '../../assets/Rectangle19.png';
import Rabbit from '../../assets/Rectangle20.png';
import Man from '../../assets/Rectangle21.png';

export const ImageHero = () => {
    return (
        <div className='hidden xl:h-full xl:flex xl:justify-end'>
            <div className='grid grid-cols-3 grid-rows-5 w-3/5 gap-5 h-2/3'>
                <img className='w-full rounded-lg h-full row-span-2 object-cover' src={Skull} alt='skull' />
                <img className='w-full rounded-lg h-full object-cover' src={Heart} alt='heart' />
                <img
                    className='w-full rounded-lg h-4/5 object-cover row-span-5 place-self-center'
                    src={Man}
                    alt='man'
                />
                <img className='w-full rounded-lg h-full object-cover row-start-3 row-span-2' src={Ball} alt='ball' />
                <img className='w-full rounded-lg h-full object-cover row-span-2' src={Brain} alt='brain' />
                <img className='w-full rounded-lg h-full object-cover row-start-5' src={Book} alt='book' />
                <img
                    className='w-full rounded-lg h-full object-cover row-start-4 row-span-2'
                    src={Rabbit}
                    alt='rabbit'
                />
            </div>
        </div>
    );
};
