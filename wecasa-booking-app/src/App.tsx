import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import AddressPage from "./pages/AddressPage";
import AppointmentPage from "./pages/AppointmentPage";
import ConfirmationPage from "./pages/ConfirmationPage";
import PrestationsPage from "./pages/PrestationsPage";
import { BookingProvider } from "./store/BookingProvider";


export default function App() {
  return (
    <BookingProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
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
