import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useState } from 'react';
import HomePage from '@/pages/home/index';
import ServicesPage from '@/pages/services/index';
import CaseStudiesPage from '@/pages/case-studies';
import BlogPage from '@/pages/blog';
import ContactPage from '@/pages/contact';
import MysteryShopperPage from '@/pages/mystery-shopper';
import ClientDashboardPage from '@/pages/client-dashboard';
import AdminPage from '@/pages/admin';

const ViewSwitcher = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [currentView] = useState('home'); // Default view

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return <HomePage />;
      case 'services':
        return <ServicesPage />;
      case 'case-studies':
        return <CaseStudiesPage />;
      case 'blog':
        return <BlogPage />;
      case 'contact':
        return <ContactPage />;
      case 'mystery-shopper':
        return <MysteryShopperPage />;
      case 'client-dashboard':
        return <ClientDashboardPage />;
      case 'admin':
        return <AdminPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <>
      {<Navbar />} 
      <div className="container mx-auto p-4">
        {renderView()}
      </div>
      <Footer /> 
    </>
  );
};

export default ViewSwitcher;
