import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <Link href="/">Home</Link>
        <Link href="/gallery">Gallery</Link>
        {/* Add more links here */}
      </div>
    </nav>
  );
};

export default Navbar;
