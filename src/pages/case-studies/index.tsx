import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CaseStudyCard from '@/components/CaseStudyCard';

const CaseStudiesPage = () => {
  return (
    <>
      <Navbar />
      <main className="container mx-auto p-4">
        <h1 className="text-2xl font-bold">Case Studies</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <CaseStudyCard title="Case Study 1" summary="Summary of case study 1" />
          <CaseStudyCard title="Case Study 2" summary="Summary of case study 2" />
          <CaseStudyCard title="Case Study 3" summary="Summary of case study 3" />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CaseStudiesPage;
