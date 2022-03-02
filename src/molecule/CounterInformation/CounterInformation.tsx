import { Counter } from '../../atoms/Counter/Counter';

export const CounterInformation = () => {
    return (
        <div className='flex w-full sm:space-x-40 space-x-12 mt-16'>
            <Counter count={37} information='Artworks' />
            <Counter count={20} information='Artists' />
            <Counter count={99} information='Aucations' />
        </div>
    );
};
