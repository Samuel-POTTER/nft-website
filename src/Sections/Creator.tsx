import { CreatorCard } from '../molecule/CreatorCard/CreatorCard';
import { SectionTitle } from '../atoms/SectionTitle/SectionTitle';
import data from '../creator.json';

export const Creator = () => {
    return (
        <div className=' pb-20'>
            <SectionTitle title='Top Creator' />
            <div className='flex flex-col space-y-6 sm:space-y-0 sm:flex-row items-center sm:justify-between mt-4'>
                {data.map(
                    (
                        i: {
                            image: string;
                            profile: string;
                        },
                        key: number
                    ) => {
                        return <CreatorCard key={key} background={i.image} profil={i.profile} />;
                    }
                )}
            </div>
        </div>
    );
};
