import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const MysteryShopperPage = () => {
  return (
    <>
      <Navbar />
      <main className="container mx-auto p-4">
        <h1 className="text-2xl font-bold">Mystery Shopper Application</h1>
        <p>Apply to become a mystery shopper and help us improve our services.</p>
        {/* Add application form here */}
      </main>
      <Footer />
    </>
  );
};

export default MysteryShopperPage;
