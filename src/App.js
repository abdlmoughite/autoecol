import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

// Public components (Header, Hero, Courses, etc.)
import Header from "./components/Header";
import WhatsAppButton from "./components/WhatsAppButton";
import ChatbotComponent from "./components/ChatbotComponent";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Courses from "./components/Courses";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import About from "./components/About";
import CertificationsSection from "./components/CertificationsSection";
import ReservationSection from "./components/Reservation";
import DrivingSchoolForm from "./components/dd";
import BranchMap from "./components/map";

// Dashboard components (Navbar, Sidebar, Dashboard pages)
import Navbar from "./Backend/Navbar";
import Sidebar from "./Backend/Sidebar";
import Dashboard from "./Backend/Dashboard";
import Clients from "./Backend/pages/Clients";
import Categories from "./Backend/pages/Categories";
// login 
import LoginSignUp from './login/login'
import Dashbordclient from "./client/dashbordClient";
import Dashbordadmine from "./admin/dashborddmin";
import Dashbordmoniteur from "./moniteur/dashbordmoniteur";
import Sidebarclient from "./client/SidebarClient";
import DashboardC from "./client/DashboardC";
import SidebarClient from "./client/SidebarClient";
import VideoListPage from "./client/vedio";
import ProfileC from "./client/ProfileC";
import PermisC from "./client/Permis";
import PaymentsC from "./client/Payments";

// Custom hook to check the current route inside the BrowserRouter
const useIsDashboardRoute = () => {
  const location = useLocation();
  return location.pathname.startsWith("/dashboard") ||
         location.pathname.startsWith("/VideoListPage") ||
         location.pathname.startsWith("/ProfileC") ||
         location.pathname.startsWith("/PaymentsC") ||
         location.pathname.startsWith("/PermisC") ||
         location.pathname.startsWith("/DashboardC") ||
         location.pathname.startsWith("/Dashbordclient");
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </div>
  );
}

function Main() {
  const isDashboardRoute = useIsDashboardRoute(); // Now inside Router context

  return (
    <>
      {/* Conditionally render public components */}
      {!isDashboardRoute && (
        <>
          <Header />
          <WhatsAppButton />
          <ChatbotComponent />
        </>
      )}

<Routes>
  {/* Public Routes (non-dashboard) */}
  <Route
    path="/"
    element={
      <>
        <Hero />
        <Courses />
        <ReservationSection />
        <CertificationsSection />
        <Testimonials />
        <BranchMap />
      </>
    }
  />
  <Route path="/courses" element={<Courses />} />
  <Route path="/testimonials" element={<Testimonials />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/about" element={<About />} />
  <Route path="/reservation" element={<DrivingSchoolForm />} />
  <Route path="/login" element={<LoginSignUp />} /> {/* Route ajoutée */}

  {/* Dashboard Routes */}
  <Route
    path="/dashboard/*"
    element={
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div style={{ flex: 1 }}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/categories" element={<Categories />} />
          </Routes>
        </div>
      </div>
    }
  />
  <Route
    path="/Dashbordclient/*"
    element={
      <div style={{ display: "flex" }}>
        {/* <Sidebar /> */}
        <SidebarClient/>
        <div style={{ flex: 1 }}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Dashbordclient />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/categories" element={<Categories />} />
          </Routes>
        </div>
      </div>
    }
  />
  <Route
    path="/Dashbordadmine/*"
    element={
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div style={{ flex: 1 }}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Dashbordadmine />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/categories" element={<Categories />} />
          </Routes>
        </div>
      </div>
    }
  />
  <Route
    path="/Dashbordmoniteur/*"
    element={
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div style={{ flex: 1 }}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Dashbordmoniteur />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/categories" element={<Categories />} />
          </Routes>
        </div>
      </div>
    }
  />
  <Route
    path="/PermisC"
    element={
      <div style={{ display: "flex" , background : 'gray' }}>
        <SidebarClient/>
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<PermisC />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/categories" element={<Categories />} />
          </Routes>
        </div>
      </div>
    }
  />
  <Route
    path="/VideoListPage"
    element={
      <div style={{ display: "flex" , background : 'gray'  }}>
        <SidebarClient/>
        <div style={{ flex: 1 }}>
          <Navbar />
          <Routes>
            <Route path="/" element={<VideoListPage />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/categories" element={<Categories />} />
          </Routes>
        </div>
      </div>
    }
  />
  <Route
    path="/DashboardC"
    element={
      <div style={{ display: "flex" , background : 'gray'  }}>
        <SidebarClient/>
        <div style={{ flex: 1 }}>
          <Navbar />
          <Routes>
            <Route path="/" element={<DashboardC />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/categories" element={<Categories />} />
          </Routes>
        </div>
      </div>
    }
  />
  <Route
    path="/PaymentsC"
    element={
      <div style={{ display: "flex", background : 'gray'  }}>
        <SidebarClient/>
        <div style={{ flex: 1 }}>
          <Navbar />
          <Routes>
            <Route path="/" element={<PaymentsC />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/categories" element={<Categories />} />
          </Routes>
        </div>
      </div>
    }
  />
  <Route
    path="/ProfileC"
    element={
      <div style={{ display: "flex" , background : 'gray'  }}>
        <SidebarClient/>
        <div style={{ flex: 1 }}>
          <Navbar />
          <Routes>
            <Route path="/" element={<ProfileC />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/categories" element={<Categories />} />
          </Routes>
        </div>
      </div>
    }
  />
</Routes>

      {/* Footer (only shown on public pages) */}
      {!isDashboardRoute && <Footer />}
    </>
  );
}

export default App;
