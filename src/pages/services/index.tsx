import ServiceCard from '@/components/ServiceCard';

const ServicesPage = () => {
  return (
    <>
      
      <main className="container mx-auto p-4">
        <h1 className="text-2xl font-bold">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <ServiceCard title="Service 1" description="Detailed description of service 1" />
          <ServiceCard title="Service 2" description="Detailed description of service 2" />
          <ServiceCard title="Service 3" description="Detailed description of service 3" />
        </div>
      </main>
    </>
  );
};

export default ServicesPage;
