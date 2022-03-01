import Ethe from './assets/ethereum.svg';
import Block from './assets/blockchain.svg';
import Bin from './assets/binance.svg';

export const Partners = () => {
    return (
        <div className='flex items-center mt-40'>
            <img src={Ethe} alt='ethereum' />
            <img src={Block} alt='block' />
            <img src={Bin} alt='bin' />
        </div>
    );
};
