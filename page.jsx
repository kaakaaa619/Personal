import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Home() {
  const [followers, setFollowers] = useState(null);

  useEffect(() => {
    const fetchFollowers = async () => {
      try {
        const res = await fetch("https://api.example.com/ig-follower?rhnvlys");
        const data = await res.json();
        setFollowers(data.followers);
      } catch (err) {
        console.error("Failed to fetch followers", err);
      }
    };

    fetchFollowers();
    const interval = setInterval(fetchFollowers, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-8 py-6 border-b border-gray-800">
        <h1 className="text-2xl font-bold text-white">
          Raihan <span className="text-pink-500">Nouval</span>
        </h1>
        <ul className="flex gap-6 text-gray-400">
          <li className="hover:text-white cursor-pointer">Profil</li>
          <li className="hover:text-white cursor-pointer">Portofolio</li>
          <li className="hover:text-white cursor-pointer">Kontak</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row items-center justify-between px-8 py-20 max-w-7xl mx-auto">
        {/* Text Area */}
        <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
          <p className="uppercase text-sm text-pink-400 font-semibold mb-2">
            Mahasiswa | Programmer
          </p>
          <h2 className="text-4xl font-extrabold mb-4">
            Hello, I’m <span className="text-pink-500">Raihan!</span>
          </h2>
          <p className="text-gray-400 mb-6">
            Saya Mahasiswa. Tujuan saya membuat web ini untuk personal branding dan sekaligus sebagai hasil dari pelajaran yang saya dapatkan dari Universitas Perjuangan Tasikmalaya.
          </p>

          <div className="text-sm text-gray-500 mb-4">
            <p>Universitas Perjuangan Tasikmalaya (UNPER)</p>
            <p>NIM: 2303010122</p>
          </div>

          <motion.a whileHover={{ scale: 1.05 }} href="#portfolio">
            <Button className="bg-pink-500 text-white font-semibold px-6 py-2 rounded-full">
              Lihat Portofolio
            </Button>
          </motion.a>
        </div>

        {/* Image Placeholder */}
        <div className="lg:w-1/2">
          <img
            src="/your-image.jpg"
            alt="Raihan coding"
            className="rounded-xl shadow-xl object-cover w-full h-auto max-h-[500px]"
          />
        </div>
      </section>

      {/* Social Media Buttons */}
      <section className="flex justify-center gap-6 pb-20">
        <motion.a
          whileHover={{ scale: 1.1 }}
          href="https://instagram.com/rhnvlys"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="outline" className="flex items-center gap-2">
            <FaInstagram className="text-pink-500" />
            {followers !== null ? `${followers} followers` : "Instagram"}
          </Button>
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.1 }}
          href="https://linkedin.com/in/rhnvlys"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="outline" className="flex items-center gap-2">
            <FaLinkedin className="text-blue-500" />
            LinkedIn
          </Button>
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.1 }}
          href="https://github.com/rhnvlys"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="outline" className="flex items-center gap-2">
            <FaGithub className="text-gray-400" />
            GitHub
          </Button>
        </motion.a>
      </section>
    </div>
  );
}
