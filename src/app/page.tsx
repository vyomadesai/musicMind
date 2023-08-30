import Image from 'next/image'
import Navbar from '../component/Navbar';
// import Footer from '../component/Footer';

export default function Home() {
  return (
    <main>
       <div>
        <section className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Music School</h1>
        {/* Add content here */}
      </section>
      <Navbar />
      <Home />
      {/* <Footer /> */}
    </div>
    </main>
  )
}
