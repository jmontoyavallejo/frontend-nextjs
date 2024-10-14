import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="bg-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Image src="/images/logo.jpg" alt="Logo" width={50} height={50} />
          <span className="ml-2 text-purple-700 font-bold">CX360</span>
        </div>
        <div className="flex space-x-6">
          <Link href="/" className="text-gray-700 hover:text-gray-900">
            Home
          </Link>
          <Link href="/services" className="text-gray-700 hover:text-gray-900">
            Soluciones
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-gray-900">
            Sobre nosotros
          </Link>
          <Link href="/blog" className="text-gray-700 hover:text-gray-900">
            Blog
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-gray-900">
            Contáctanos
          </Link>
        </div>
        <button className="bg-gray-800 text-white px-4 py-2 rounded">
          Acceder
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
