import  { Suspense, lazy } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./Components/Reusables/Header";
import Footer from "./Components/Reusables/Footer";

import React from "react";

// Lazy-loaded pages
const LoginForm= lazy(() => import("./pages/LoginForm"));
const Registration = lazy(() => import("./pages/Registration"));
const Homepage = lazy(() => import("./pages/Homepage"));
const DetailsPage = lazy(() => import("./pages/DetailsPage"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const BookingPage = lazy(() => import("./pages/BookingPage"));
const ConciergeServicePage = lazy(() => import("./pages/ConciergeServicePage"));
const ContactusPage = lazy(() => import("./pages/ContactusPage"));
const ConfirmPayPage = lazy(() => import("./pages/ConfirmPayPage"));
const Eventpage = lazy(() => import("./pages/Eventpage"));
const PaymentPage = lazy(() => import("./pages/PaymentPage"));
const EventDetailspage = lazy(() => import("./pages/EventDetailpage"));
const PropertiesPage = lazy(() => import("./pages/PropertiesPage"));
const BookingList = lazy(() => import("./pages/BookingList"));
const BookingConfirm = lazy(() => import("./pages/BookingConfirm"));
const VendorForm = lazy(() => import("./pages/VendorForm"));
const VendorSelfEmpForm = lazy(() => import("./pages/VendorSelfEmpForm"));
const HostForm = lazy(() => import("./pages/HostForm"));
const GuestBooking = lazy(() => import("./pages/GuestBooking"));
const Notification = lazy(() => import("./pages/Notification"));
const Wishlist = lazy(() => import("./pages/Wishlist"));
const Messages = lazy(() => import("./pages/Messages"));
const ServiceBooking = lazy(() => import("./pages/ServiceBooking"));
const TaxiBooking = lazy(() => import("./pages/TaxiBooking"));
const EventBooking = lazy(() => import("./pages/EventBooking"));
const MyAccount = lazy(() => import("./pages/MyAccount"));
const Reviews = lazy(() => import("./pages/Reviews"));
const Memberlist = lazy(() => import("./pages/Memberlist"));

function App() {
  const location = useLocation();

  const transparentRoutes = ["/", "/conciergeservices", "/contactus", "/event"];
  const hideHeaderFooterRoutes = ["/booking","/booking-taxi-list" ,"/booking-confirm","/guest-trip-booking","/notification","/wishlist","/messages","/service-booking","/taxi-booking","/event-booking","/my-account","/reviews", "/member-list"];

  const isTransparent = transparentRoutes.includes(location.pathname);
  const shouldHideLayout = hideHeaderFooterRoutes.includes(location.pathname);

  return (
    <>
      {!shouldHideLayout && <Header isTransparent={isTransparent} />}

      <Suspense >
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/details" element={<DetailsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/conciergeservices" element={<ConciergeServicePage />} />
          <Route path="/contactus" element={<ContactusPage />} />
          <Route path="/payment" element={<ConfirmPayPage />} />
          <Route path="/event" element={<Eventpage />} />
          <Route path="/payment-two" element={<PaymentPage />} />
          <Route path="/event-details" element={<EventDetailspage />} />
          <Route path="/properties" element={<PropertiesPage />} />
          <Route path="/booking-taxi-list" element={<BookingList />} />
          <Route path="/booking-confirm" element={<BookingConfirm />} />
          <Route path="/vendor-form" element={<VendorForm />} />
          <Route path="/vendor-self-emp-form" element={<VendorSelfEmpForm />} />
          <Route path="/host-form" element={<HostForm />} />
          <Route path="/guest-trip-booking" element={<GuestBooking/>} />
          <Route path="/notification" element={<Notification/>} />
          <Route path="/wishlist" element={<Wishlist/>} />
          <Route path="/messages" element={<Messages/>} />
           <Route path="/service-booking" element={<ServiceBooking/>} />
             <Route path="/taxi-booking" element={<TaxiBooking/>} />
              <Route path="/event-booking" element={<EventBooking/>} />
                <Route path="/my-account" element={<MyAccount/>} />
                <Route path="/reviews" element={<Reviews/>} />
                  <Route path="/member-list" element={<Memberlist/>} />
                   <Route path="/registration" element={<Registration/>} />
                   <Route path="/login" element={<LoginForm/>} />
        </Routes>
      </Suspense>

      {!shouldHideLayout && <Footer />}
    </>
  );
}

export default App;
