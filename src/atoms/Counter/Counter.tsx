type CounterProps = {
    count: number;
    information: string;
};

export const Counter = ({ count, information }: CounterProps) => {
    return (
        <div className='flex flex-col text-center space-y-2'>
            <span className='font-bold text-2xl'>{count}k+</span>
            <span className='font-semibold text-xl text-white/30'>{information}</span>
        </div>
    );
};
