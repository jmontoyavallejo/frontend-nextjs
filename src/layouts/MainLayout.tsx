import ViewSwitcher from '@/views/index';

const MainLayout = () => {
  return (
    <>
      <Navbar /> {/* This could be causing the duplication */}
      <ViewSwitcher />
      <Footer />
    </>
  );
};

export default MainLayout;
