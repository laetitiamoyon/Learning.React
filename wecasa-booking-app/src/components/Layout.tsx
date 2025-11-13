import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Stepper } from "./Stepper";
import { useBookingState } from "../store/BookingProvider";
import { PrestationCart } from "./PrestationCart";

export const Layout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const state = useBookingState();

  const stepRoutes = ["/", "/address", "/appointment", "/confirmation"];
  const currentStep = stepRoutes.indexOf(location.pathname) + 1 || 1;

  const canNext = (() => {
    switch (currentStep) {
      case 1: return state.items.length > 0;  
      case 2: return !!state.address;       
      case 3: return !!state.appointment;  
      default: return false;
    }
  })();

  const handleNext = () => {
    if (currentStep === 1 && state.items.length === 0) return; 
    if (currentStep === 2 && !state.address) return;
    if (currentStep === 3 && !state.appointment) return;

  const nextPath = stepRoutes[currentStep];
    if (nextPath) navigate(nextPath);
  };

  const handleBack = () => {
    const prevPath = stepRoutes[currentStep - 2];
    if (prevPath) navigate(prevPath);
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-white">
        {currentStep > 1 && (
            <button
                onClick={handleBack}
                className="px-4 py-2 rounded text-gray-600 mr-auto cursor-pointer"
                >
                Retour
            </button>
        )}
      <div className="py-8 w-full flex justify-center">
        <Stepper
          steps={["Sélectionnez une prestation", "Votre adresse", "Rendez-vous", "Confirmation"]}
          currentStep={currentStep}
        />
      </div>
      <div className={`w-full px-4 mt-4 ${currentStep !== 4 && "grid grid-cols-1 justify-items-center lg:grid-cols-[2fr_1fr] lg:justify-items-normal gap-6"
        }`}>
        <Outlet />
        {currentStep !== 4 && (
        <aside>
            <PrestationCart />
        </aside>
        )}
    </div>
      {currentStep !== 4 && <div className="fixed bottom-0 left-0 w-full p-4 bg-white shadow-inner flex justify-center">
        <button
            onClick={handleNext}
            disabled={!canNext}
            className={`w-full max-w-md px-6 py-3 rounded-full text-white text-lg font-semibold
            ${canNext
                ? "bg-gradient-to-r from-orange-500 to-purple-600 hover:opacity-90 transition cursor-pointer"
                : "bg-gray-300 cursor-not-allowed"
            }`}
        >
            Suivant
        </button>
    </div>}
    </div>
  );
};
