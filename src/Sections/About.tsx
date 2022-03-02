import { Button } from '../atoms/Button/Button';
import { SectionTitle } from '../atoms/SectionTitle/SectionTitle';

import Colors from '../assets/colors.png';

export const About = () => {
    return (
        <div className='mt-40'>
            <SectionTitle title='About Us' />
            <div className='sm:flex sm:items-center'>
                <img src={Colors} alt='color' className='sm:w-96 w-64 m-auto hidden sm:block' />
                <div className='sm:w-1/3 mt-10 sm:mt-0 m-auto'>
                    <span className='text-white text-3xl font-semibold'>Get Popular NFT</span>
                    <div className='text-white/30 text-lg'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a,
                        mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
                        interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class
                        aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent
                        auctor purus luctus enim egestas, ac scelerisque ante pulvinar.
                    </div>
                    <div className='mt-4 w-28'>
                        <Button content='Show more' />
                    </div>
                </div>
            </div>
        </div>
    );
};
