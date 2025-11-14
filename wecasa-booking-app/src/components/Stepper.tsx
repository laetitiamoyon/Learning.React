import { type JSX } from "react";

interface StepperProps {
  steps: readonly string[];
  currentStep: number;
}

export function Stepper({ steps, currentStep } : StepperProps) : JSX.Element {
  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="text-center">
        <h1 className="text-2xl font-semibold text-purple-700 flex items-center justify-center gap-2">
          ✂️ Wecasa Coiffure
        </h1>
        <p className="text-gray-600">Réservez votre coiffeur à domicile</p>
      </div>

      <div className="flex items-center justify-center w-full max-w-md">
        {steps.map((_, index) => (
          <div key={index} className="flex items-center w-full">
            <div
              className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-300
                ${
                  currentStep === index + 1
                    ? "bg-purple-600 border-purple-600 text-white"
                    : "bg-gray-100 border-gray-300 text-gray-500"
                }`}
            >
              {index + 1}
            </div>

            {index < steps.length - 1 && (
              <div className="flex-1 h-[2px] bg-gray-200 mx-2"></div>
            )}
          </div>
        ))}
      </div>

      <div className="text-center mt-4">
      <h1 className="text-2xl font-bold mb-3">
          {steps[currentStep - 1]}
        </h1>
      </div>
    </div>
  );
};
