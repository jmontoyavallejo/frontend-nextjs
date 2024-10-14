import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <main className="container mx-auto p-4">
        <h1 className="text-2xl font-bold">Contact Us</h1>
        <ContactForm />
      </main>
      <Footer />
    </>
  );
};

export default ContactPage;
