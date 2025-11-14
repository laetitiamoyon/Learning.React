import { useNavigate, useLocation } from "react-router-dom";
import { createBooking } from "../api";
import { STEPS_ROUTES, LAST_STEP } from "../constants/bookingSteps";
import { useBookingState } from "./useBooking";

export interface BookingNavigation {
    currentStep: number;
    canNext: boolean;
    handleNext: () => Promise<void>;
    handleBack: () => void;
}

export function useBookingNavigation(): BookingNavigation {
  const navigate = useNavigate();
  const location = useLocation();
  const state = useBookingState();

  const currentStep = STEPS_ROUTES.indexOf(location.pathname as (typeof STEPS_ROUTES)[number]) + 1;

  const validationRules: Record<number, boolean> = {
    1: state.items.length > 0,
    2: !!state.address,
    3: !!state.appointment,
  };

  const canNext = validationRules[currentStep] ?? false;

  const goToStep = (step: number): void => {
    const path = STEPS_ROUTES[step - 1];
    if (path) navigate(path);
  };

  const handleNext = async (): Promise<void> => {
    if (!canNext) return;

    if (currentStep === LAST_STEP - 1) {
      try {
        const appointmentISO = new Date(state.appointment!).toISOString();

        await createBooking({
          prestations: state.items.map(item => item.prestation.reference),
          appointment: appointmentISO,
          address: state.address!,
        });

        return goToStep(LAST_STEP);
      } catch (e) {
        console.error("Erreur lors de la réservation :", e);
        alert("Une erreur est survenue lors de la réservation.");
        return;
      }
    }

    goToStep(currentStep + 1);
  };

  const handleBack = () : void => {
    if (currentStep > 1) goToStep(currentStep - 1);
  };

  return { currentStep, canNext, handleNext, handleBack };
}
