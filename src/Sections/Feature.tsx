import { SectionTitle } from '../atoms/SectionTitle/SectionTitle';
import { NftCard } from '../molecule/NftCard/NftCard';

import data from '../data.json';

export const Feature = () => {
    return (
        <div className='py-40'>
            <SectionTitle title='Featured Artworks' />
            <div className='flex justify-between mt-10 space-x-4'>
                {data.slice(0, 3).map((i: { image: string }, key: number) => {
                    return <NftCard picture={i.image} key={key} />;
                })}
            </div>
        </div>
    );
};
