import { Outlet } from "react-router-dom";
import { Stepper } from "./Stepper";
import { PrestationCart } from "./PrestationCart";
import { NextButton } from "./NextButton";
import { useBookingNavigation } from "../hooks/useBookingNavigation";
import { BOOKING_STEPS } from "../constants/bookingSteps";
import type { JSX } from "react";

export function BookingStepsLayout(): JSX.Element {
  const { currentStep, canNext, handleNext, handleBack } = useBookingNavigation();

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-purple-50 via-white to-purple-100">
      {currentStep > 1 && (
        <button
          onClick={handleBack}
          className="px-4 py-2 rounded text-gray-600 mr-auto cursor-pointer"
        >
          Retour
        </button>
      )}

      <div className="py-8 w-full flex justify-center">
        <Stepper steps={BOOKING_STEPS} currentStep={currentStep} />
      </div>

      <div
        className={`w-full px-4 mt-4 ${
          currentStep !== BOOKING_STEPS.length &&
          "grid grid-cols-1 justify-items-center lg:grid-cols-[2fr_1fr] lg:justify-items-normal gap-6"
        }`}
      >
        <Outlet />
        {currentStep !== BOOKING_STEPS.length && (
          <aside>
            <PrestationCart />
          </aside>
        )}
      </div>

      {currentStep !== BOOKING_STEPS.length && (
        <NextButton
          onClick={handleNext}
          disabled={!canNext}
          isLastStep={currentStep === BOOKING_STEPS.length - 1}
        />
      )}
    </div>
  );
};
