import { orange } from "../constants/colors";

const Divider: React.FC<{ className?: string }> = ({ className }) => {
    return(
        <div className={`max-w-screen-xl mx-auto px-4 md:px-10 ${className}`}>
            <div className={`h-px bg-gradient-to-r from-transparent ${orange.gradientViaSoft} to-transparent`} />
        </div>
    );
};

export default Divider;