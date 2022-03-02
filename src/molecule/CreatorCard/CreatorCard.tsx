import { Button } from '../../atoms/Button/Button';

type CreatorCardProps = {
    background: any;
    profil: any;
};

export const CreatorCard = ({ background, profil }: CreatorCardProps) => {
    return (
        <div className='sm:w-1/4 w-1/2 h-[30rem] pb-6 lg:pb-0 bg-white/10 rounded-lg'>
            <div className='-space-y-12 h-full'>
                <img src={background} alt='wave' className='h-1/2 w-full object-cover rounded-lg' />
                <div className='flex flex-col items-center'>
                    <img src={profil} alt='girl' className='rounded-full w-24 h-24' />
                    <div className='text-white font-semibold text-lg'>John Wick</div>
                    <div className='text-white/20 text-center w-3/4 mb-6'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </div>
                    <Button content='+ Follow' color='w-2/3 bg-gradient-to-tr to-[#B75CFF] from-[#671AE4]' />
                </div>
            </div>
        </div>
    );
};
