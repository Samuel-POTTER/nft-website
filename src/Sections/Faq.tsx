import { Question } from '../atoms/Question/Question';
import { SectionTitle } from '../atoms/SectionTitle/SectionTitle';

export const Faq = () => {
    return (
        <div className='py-40'>
            <SectionTitle title='Frequently Asked Question' />
            <div className='grid grid-cols-2 gap-4 mt-10'>
                <Question />
                <Question />
                <Question />
                <Question />
                <Question />
                <Question />
            </div>
        </div>
    );
};
