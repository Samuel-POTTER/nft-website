import Ethe from '../../assets/ethereum.svg';
import Block from '../../assets/blockchain.svg';
import Bin from '../../assets/binance.svg';

export const Partners = () => {
    return (
        <div className='flex items-center sm:mt-40 mt-20'>
            <img className='w-28 md:w-56 lg:w-full' src={Ethe} alt='ethereum' />
            <img className='w-28 md:w-56 lg:w-full' src={Block} alt='block' />
            <img className='w-28 md:w-56 lg:w-full' src={Bin} alt='bin' />
        </div>
    );
};
