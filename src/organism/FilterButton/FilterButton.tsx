import { Button } from '../../atoms/Button/Button';

export const FilterButton = () => {
    return (
        <div className='flex space-x-4 mt-8'>
            <Button content='Art' color='bg-white/20 w-full' />
            <Button content='Sport ' color='w-full bg-gradient-to-tr to-[#B75CFF] from-[#671AE4]' />
            <Button content='Photography' color='w-full bg-white/20' />
            <Button content='Pattern' color='bg-white/20 w-full' />
        </div>
    );
};
