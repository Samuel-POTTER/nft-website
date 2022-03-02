import { About } from './Sections/About';
import { Navbar } from './organism/Navbar/Navbar';
import { Collection } from './Sections/Collection';
import { Feature } from './Sections/Feature';
import { Creator } from './Sections/Creator';
import { Faq } from './Sections/Faq';
import { GetStarted } from './Sections/GetStarted';
import { BottomNav } from './Sections/BottomNav';
import { HeroPage } from './Sections/HeroPage';

export const Home = () => {
    return (
        <div className='bg-gradient-to-r md:px-10 lg:px-40 px-4 from-[#5B363C] to-[#181E41]'>
            <Navbar />
            <HeroPage />
            <About />
            <Collection />
            <Feature />
            <Creator />
            <Faq />
            <GetStarted />
            <BottomNav />
        </div>
    );
};
