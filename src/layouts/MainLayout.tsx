import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import ViewSwitcher from '@/views/index';

const MainLayout = () => {
  return (
    <>
      <Navbar /> 
      <ViewSwitcher />
      <Footer />
    </>
  );
};

export default MainLayout;
