import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const ClientDashboardPage = () => {
  return (
    <>
      <Navbar />
      <main className="container mx-auto p-4">
        <h1 className="text-2xl font-bold">Client Dashboard</h1>
        <p>Welcome to your dashboard. Here you can view your reports and manage your settings.</p>
        {/* Add dashboard components here */}
      </main>
      <Footer />
    </>
  );
};

export default ClientDashboardPage;
