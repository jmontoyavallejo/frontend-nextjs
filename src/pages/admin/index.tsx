import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const AdminPage = () => {
  return (
    <>
      <Navbar />
      <main className="container mx-auto p-4">
        <h1 className="text-2xl font-bold">Admin Panel</h1>
        <p>Manage users, content, and applications from this panel.</p>
        {/* Add admin panel components here */}
      </main>
      <Footer />
    </>
  );
};

export default AdminPage;
