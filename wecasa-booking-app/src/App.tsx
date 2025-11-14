import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BookingStepsLayout } from "./components/BookingStepsLayout";
import AddressPage from "./pages/AddressPage";
import AppointmentPage from "./pages/AppointmentPage";
import ConfirmationPage from "./pages/ConfirmationPage";
import PrestationsPage from "./pages/PrestationsPage";
import { BookingProvider } from "./store/BookingProvider";
import type { JSX } from "react";


export default function App(): JSX.Element {
  return (
    <BookingProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<BookingStepsLayout />}>
            <Route path="/" element={<PrestationsPage />} />
            <Route path="/address" element={<AddressPage />} />
            <Route path="/appointment" element={<AppointmentPage />} />
            <Route path="/confirmation" element={<ConfirmationPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </BookingProvider>
  );
}
