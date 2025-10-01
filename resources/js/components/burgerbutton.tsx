
type BurgerButtonProps = {
    isOpen: boolean;
    onClick: () => void;
};

export default function BurgerButton({ isOpen, onClick }: BurgerButtonProps) {
    return (
        <button
            onClick={onClick}
            className="relative w-8 h-6 flex flex-col justify-between items-center"
        >
            <span
                className={`h-1 w-full bg-white rounded transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""
                    }`}
            />
            <span
                className={`h-1 w-full bg-white rounded transition-all duration-300 ${isOpen ? "opacity-0" : ""
                    }`}
            />
            <span
                className={`h-1 w-full bg-white rounded transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""
                    }`}
            />
        </button>
    );
}

