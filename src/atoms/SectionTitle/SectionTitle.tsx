type SectionTitleProps = {
    title: string;
};

export const SectionTitle = ({ title }: SectionTitleProps) => {
    return (
        <div className='flex justify-center sm:py-6'>
            <div className='text-center md:w-2/4 lg:w-1/4 space-y-4'>
                <span className='text-white text-4xl font-semibold'>{title}</span>
                <div className='text-white/30 text-xl font-semibold'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </div>
            </div>
        </div>
    );
};
