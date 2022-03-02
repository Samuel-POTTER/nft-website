import { SectionTitle } from '../atoms/SectionTitle/SectionTitle';
import { NftCard } from '../molecule/NftCard/NftCard';
import { FilterButton } from '../organism/FilterButton/FilterButton';

import data from '../data.json';

export const Collection = () => {
    return (
        <div className='mt-20'>
            <SectionTitle title='Collection' />
            <FilterButton />
            <div className='mt-8 grid sm:grid-cols-4 grid-cols-2 gap-4'>
                {data.map((i: { image: string }, key: number) => {
                    return <NftCard key={key} picture={i.image} />;
                })}
            </div>
        </div>
    );
};
