type ButtonProps = {
    content: string;
    color?: string;
};

export const Button = ({ content, color = 'bg-gradient-to-tr to-[#B75CFF] from-[#671AE4]' }: ButtonProps) => {
    return (
        <div className={`px-3 cursor-pointer h-10 flex items-center justify-center text-white rounded-lg ${color}`}>
            <span>{content}</span>
        </div>
    );
};
