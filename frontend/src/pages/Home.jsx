import React, { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import Hero from "../components/Hero";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import CountUp from "react-countup";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import {
  FaBuilding,
  FaHandshake,
  FaGlobe,
  FaAward,
  FaUserCircle,
  FaLightbulb,
  FaSeedling,
  FaUsers,
} from "react-icons/fa";
import "aos/dist/aos.css";
import AOS from "aos";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const navigate = useNavigate();



  useEffect(() => {
    if (!AOS.isInitialized) {
      AOS.init({
        duration: 800,
        easing: "ease-out-cubic",
        once: true,
        offset: 150,
        delay: 200,
        mirror: false,
        anchorPlacement: "top-bottom",
      });
    }
  }, []);

  const videoUrl = "/public/test.mp4";

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Add event listener
    window.addEventListener("scroll", toggleVisibility);

    // Cleanup function to remove the listener
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className={`h-full ${isDarkMode ? "dark" : ""}`}>
      <Hero />
      {/* Dynamic Counter Section */}
      <section className="bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 dark:from-gray-800 dark:via-gray-700 dark:to-gray-900 py-10 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <h2
            className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-6"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Our Achievements
          </h2>
          <div
            className="grid grid-cols-1 sm:grid-cols-3 gap-8"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="flex flex-col items-center bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform">
              <div className="text-blue-600 dark:text-blue-400 text-5xl mb-4">
                <i className="fas fa-tasks"></i>
              </div>
              <h3 className="text-5xl font-extrabold text-blue-600 dark:text-blue-400">
                <CountUp end={50} duration={5} />+
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                Projects Completed
              </p>
            </div>
            <div className="flex flex-col items-center bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform">
              <div className="text-green-600 dark:text-green-400 text-5xl mb-4">
                <i className="fas fa-building"></i>
              </div>
              <h3 className="text-5xl font-extrabold text-green-600 dark:text-green-400">
                <CountUp end={20} duration={5} />+
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                Global Offices
              </p>
            </div>
            <div className="flex flex-col items-center bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform">
              <div className="text-yellow-600 dark:text-yellow-400 text-5xl mb-4">
                <i className="fas fa-award"></i>
              </div>
              <h3 className="text-5xl font-extrabold text-yellow-600 dark:text-yellow-400">
                <CountUp end={10} duration={5} />+
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                Years of Excellence
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* About Section */}
      <section className="bg-white dark:bg-gray-900 py-16 px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">
          About Us
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
          Holding Co. is a global leader in fostering innovation and driving
          sustainable growth across diverse industries.
        </p>
      </section>
      {/* Key Features Section */}
      <section className="bg-gray-100 dark:bg-gray-800 py-16 text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 dark:text-gray-100 mb-10">
          Why Choose Us?
        </h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
          {[
            {
              id: 1,
              title: "Global Presence",
              description: "Expanding across multiple industries worldwide.",
              icon: <FaGlobe className="text-5xl text-blue-600 mb-4" />,
            },
            {
              id: 2,
              title: "Innovation-Driven",
              description: "Committed to creating cutting-edge solutions.",
              icon: <FaLightbulb className="text-5xl text-yellow-500 mb-4" />,
            },
            {
              id: 3,
              title: "Sustainable Growth",
              description:
                "Focusing on long-term success for all stakeholders.",
              icon: <FaSeedling className="text-5xl text-green-500 mb-4" />,
            },
            {
              id: 4,
              title: "Trusted by Clients",
              description: "Building strong and lasting relationships.",
              icon: <FaHandshake className="text-5xl text-teal-500 mb-4" />,
            },
            {
              id: 5,
              title: "Expert Team",
              description: "Experienced professionals driving innovation.",
              icon: <FaUsers className="text-5xl text-purple-600 mb-4" />,
            },
            {
              id: 6,
              title: "Award-Winning",
              description: "Recognized for excellence and innovation.",
              icon: <FaAward className="text-5xl text-red-500 mb-4" />,
            },
          ].map(({ id, title, description, icon }) => (
            <div
              key={id}
              className="bg-white dark:bg-gray-700 shadow-lg rounded-lg p-8 flex flex-col items-center transform hover:scale-105 transition-transform"
            >
              {icon}
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-4">
                {title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2 text-center">
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Partners Section */}
      <section className="bg-gray-100 dark:bg-gray-800 py-16 text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-8">
          Our Partners
        </h2>
        <div className="max-w-4xl mx-auto">
          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={3}
            navigation
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {[
              {
                id: 1,
                Icon: <FaBuilding className="text-6xl text-blue-500" />,
              },
              {
                id: 2,
                Icon: <FaHandshake className="text-6xl text-green-500" />,
              },
              { id: 3, Icon: <FaGlobe className="text-6xl text-yellow-500" /> },
              {
                id: 4,
                Icon: <FaBuilding className="text-6xl text-purple-500" />,
              },
              {
                id: 5,
                Icon: <FaHandshake className="text-6xl text-teal-500" />,
              },
              { id: 6, Icon: <FaGlobe className="text-6xl text-orange-500" /> },
            ].map(({ id, Icon }) => (
              <SwiperSlide key={id}>
                <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform flex flex-col items-center">
                  {Icon}
                  <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-100">
                    Partner {id}
                  </h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-100 dark:bg-gray-800 py-16 px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-8">
          What Our Partners Say
        </h2>
        <div className="max-w-4xl mx-auto">
          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 5000 }}
            pagination={{ clickable: true }}
          >
            {[
              {
                id: 1,
                quote:
                  "Holding Co. has been a game-changer for our business growth.",
                name: "John Doe",
                position: "CEO, TechCorp",
                image: null,
              },
              {
                id: 2,
                quote: "Their commitment to innovation is unmatched.",
                name: "Jane Smith",
                position: "CFO, FinGrow",
                image: null,
              },
              {
                id: 3,
                quote:
                  "They helped us achieve our global expansion goals seamlessly.",
                name: "Mark Johnson",
                position: "CTO, InnovateX",
                image: null,
              },
            ].map(({ id, quote, name, position, image }) => (
              <SwiperSlide key={id}>
                <div className="flex flex-col items-center bg-white dark:bg-gray-900 shadow-lg rounded-lg p-6">
                  <div className="flex items-center justify-center w-20 h-20 rounded-full border-4 border-blue-500 shadow-md bg-gray-200 dark:bg-gray-700 overflow-hidden">
                    {image ? (
                      <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <FaUserCircle className="text-6xl text-gray-500" />
                    )}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 italic mt-4">
                    “{quote}”
                  </p>
                  <h4 className="text-xl font-bold text-gray-800 dark:text-gray-100 mt-4">
                    {name}
                  </h4>
                  <p className="text-gray-500 dark:text-gray-400">{position}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Blog/News Section */}
      <section className="bg-gray-100 dark:bg-gray-800 py-16 px-8">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-12 text-center">
          Latest News
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              id: 1,
              image: "/assets/news1.jpg",
              title: "New Partnership Announced",
              description:
                "Holding Co. has partnered with XYZ Corp to drive innovation...",
            },
            {
              id: 2,
              image: "/assets/news2.jpg",
              title: "Sustainability Goals Achieved",
              description:
                "Our company reached its 2023 sustainability milestones...",
            },
            {
              id: 3,
              image: "/assets/news3.jpg",
              title: "Technology Breakthrough",
              description:
                "Innovative solutions launched to transform the industry...",
            },
          ].map(({ id, image, title, description }) => (
            <div
              key={id}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition"
            >
              <div className="relative">
                <img src={image} className="w-full h-48 object-cover" />
                <div className="absolute top-0 left-0 bg-blue-600 text-white text-xs px-3 py-1 rounded-br-lg">
                  Featured
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100">
                  {title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  {description}
                </p>
                <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Video Section */}
      <section
        className={`relative bg-black py-16 ${
          !videoUrl ? "bg-cover bg-center" : ""
        }`}
      >
        {/* Overlay for Text */}
        <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>

        <div
          className="relative z-10 text-center px-4 py-8 mx-auto max-w-3xl bg-gray-100 dark:bg-gray-800 bg-opacity-85 dark:bg-opacity-85 rounded-lg shadow-lg"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h2 className="text-4xl font-bold mb-6 text-gray-800 dark:text-white">
            Discover Our Story
          </h2>
          <p
            className="text-lg mb-6 text-gray-700 dark:text-gray-300"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            See how we’re making an impact around the globe.
          </p>
        </div>

        {/* Video or Placeholder */}
        {videoUrl ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0"
          >
            <source src={videoUrl} type="video/mp4" />
          </video>
        ) : (
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/path-to-placeholder-image.jpg')",
            }}
          ></div>
        )}
      </section>

      {/* Awards Section */}
      <section className="bg-gray-100 dark:bg-gray-800 py-16 px-8 text-center">
        <h2
          className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-12"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Awards & Recognition
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            {
              id: 1,
              title: "Best Innovation Award",
              year: "2023",
              description:
                "Recognized for pioneering innovative solutions globally.",
            },
            {
              id: 2,
              title: "Global Impact Leader",
              year: "2022",
              description:
                "Awarded for outstanding contributions to global industries.",
            },
            {
              id: 3,
              title: "Excellence in Sustainability",
              year: "2021",
              description:
                "Honored for achieving remarkable sustainability goals.",
            },
          ].map((award) => (
            <div
              key={award.id}
              className="p-6 bg-white dark:bg-gray-700 shadow-lg rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              data-aos="zoom-in"
              data-aos-delay={award.id * 200}
              data-aos-duration="1000"
            >
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                {award.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {award.year}
              </p>
              <p className="text-gray-600 dark:text-gray-300 mt-4">
                {award.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="bg-white dark:bg-gray-900 py-16 px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2
            className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-5"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Our Global Presence
          </h2>
          <p
            className="text-lg text-gray-600 dark:text-gray-300 mb-5"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            Explore our global offices and operational hubs, enabling us to
            impact industries worldwide.
          </p>
          <div
            className="relative h-96 w-full overflow-hidden rounded-lg shadow-lg"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1000"
          >
            <MapContainer center={[20, 0]} zoom={2} className="h-full w-full">
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker position={[37.7749, -122.4194]}>
                <Popup>
                  <strong>San Francisco Office</strong>
                  <br />
                  Driving innovation in technology.
                </Popup>
              </Marker>
              <Marker position={[51.5074, -0.1278]}>
                <Popup>
                  <strong>London Office</strong>
                  <br />
                  Our hub for global business operations.
                </Popup>
              </Marker>
              <Marker position={[35.6895, 139.6917]}>
                <Popup>
                  <strong>Tokyo Office</strong>
                  <br />
                  Expanding our presence in Asia.
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-16 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2
            className="text-4xl font-bold mb-6"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Ready to Partner with Us?
          </h2>
          <p
            className="text-lg mb-8"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            Let’s build the future together. Contact us to learn how we can
            help.
          </p>
          <div
            className="flex justify-center"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1000"
          >
            <button
              onClick={() => (window.location.href = "/contact")}
              className="flex items-center px-8 py-4 bg-white text-blue-700 font-bold rounded-full shadow-lg hover:bg-gray-100 hover:scale-105 transition-transform"
            >
              <i className="fas fa-envelope mr-3"></i> Contact Us
            </button>
          </div>
        </div>
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-20 h-20 bg-yellow-400 opacity-40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-indigo-400 opacity-40 rounded-full blur-3xl"></div>
      </section>

      <div className="fixed bottom-6 right-6 group hover:cursor-pointer z-50">
        {/* Ensure it's on top */}
        <button
          onClick={() => navigate("/contact")} // Navigate to the contact page
          className="flex items-center justify-center w-16 h-16 bg-blue-600 text-white font-bold rounded-full shadow-lg transition transform hover:scale-110 hover:bg-blue-700 relative z-50"
          data-aos="zoom-in"
          data-aos-duration="800"
        >
          <i className="fas fa-envelope text-2xl"></i>
        </button>
        {/* Tooltip */}
        <span className="absolute right-10 bottom-16 bg-gray-800 text-white text-sm px-4 py-2 w-28 h-8 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
          Get in Touch
        </span>
        {/* Glowing Effect */}
        <div className="absolute inset-0 w-16 h-16 rounded-full bg-blue-500 opacity-30 blur-xl animate-ping"></div>
      </div>

      {/* Back to Top Button */}
      {isVisible && (
        <div
          className="fixed bottom-6 left-6 group hover:cursor-pointer z-50"
          id="back-to-top"
        >
          {/* Button */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white font-bold rounded-full shadow-lg transition transform hover:scale-110 hover:bg-blue-700 relative z-50"
            data-aos="zoom-in"
            data-aos-duration="800"
            aria-label="Scroll back to top"
          >
            <i className="fas fa-arrow-up text-2xl"></i>
          </button>

          {/* Glowing Effect */}
          <div
            className="absolute inset-0 w-16 h-16 rounded-full bg-blue-500 opacity-30 blur-xl animate-ping"
            aria-hidden="true"
          ></div>
        </div>
      )}
    </div>
  );
};

export default Home;
