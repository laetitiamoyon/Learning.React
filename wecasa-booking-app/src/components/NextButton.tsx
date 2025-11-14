import type { JSX } from "react";

interface NextButtonProps {
    onClick: () => void;
    disabled: boolean;
    isLastStep?: boolean;
}
  
export function NextButton({ onClick, disabled, isLastStep }: NextButtonProps): JSX.Element {
  return (      
    <div className="fixed bottom-0 left-0 w-full p-4 bg-white shadow-inner flex justify-center">
      <button
        onClick={onClick}
        disabled={disabled}
        className={`w-full max-w-md px-6 py-3 rounded-full text-white text-lg font-semibold ${
          !disabled
            ? "bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500 hover:opacity-90 transition cursor-pointer"
            : "bg-gray-300 cursor-not-allowed"
        }`}
      >
        {isLastStep ? "Confirmer la réservation" : "Suivant"}
      </button>
    </div>
  );
}
  