import { Button } from '../../atoms/Button/Button';

type NftCardProps = {
    picture: any;
};

export const NftCard = ({ picture }: NftCardProps) => {
    return (
        <div className='bg-white/10 rounded-lg h-full w-full max-w-md p-8'>
            <img src={picture} alt='marshmallow' className='w-full' />
            <div className='text-white mt-4'>
                <div className='flex justify-between'>
                    <span className='opacity-30'>@Johnny</span>
                    <div>
                        <span className='opacity-30'>Current Bid</span>
                        <div className='font-bold'>0.0005 ETH</div>
                    </div>
                </div>
                <div className='font-bold mb-4'>Yellow Painting</div>
                <Button content='Place a bid' />
            </div>
        </div>
    );
};
