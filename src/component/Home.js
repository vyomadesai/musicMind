import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
        <section className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Music School</h1>
        {/* Add content here */}
      </section>
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
};

export default Home;

  