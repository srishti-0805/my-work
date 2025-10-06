import React from "react";
import "./index.css";

function App() {
  return (
    <div className="font-sans text-gray-800">

      {/* Navbar */}
      <nav className="flex justify-between items-center p-4 shadow-md bg-white sticky top-0 z-50">
        <div className="text-2xl font-bold text-blue-600">IELTSPro</div>
        <ul className="hidden md:flex space-x-6 font-medium">
          <li className="hover:text-blue-600 cursor-pointer">Home</li>
          <li className="hover:text-blue-600 cursor-pointer">Courses</li>
          <li className="hover:text-blue-600 cursor-pointer">Features</li>
          <li className="hover:text-blue-600 cursor-pointer">Contact</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="grid md:grid-cols-2 gap-8 items-center px-6 py-16 bg-blue-50">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Achieve Your Dream IELTS Band
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Expert trainers, AI-powered tools, and personalized guidance to help
            you succeed.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-xl text-lg hover:bg-blue-700 transition">
            Get Started
          </button>
        </div>
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
          alt="IELTS Banner"
          className="rounded-2xl shadow-lg"
        />
      </section>

      {/* Features Section */}
      <section className="px-6 py-16 text-center">
        <h2 className="text-3xl font-bold mb-10">Why Choose IELTSPro?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Speaking Practice",
              desc: "Daily live speaking sessions with trainers.",
            },
            {
              title: "Mock Tests",
              desc: "Weekly full-length tests to track progress.",
            },
            {
              title: "AI Band Score",
              desc: "Instant feedback with predicted band scores.",
            },
          ].map((f, i) => (
            <div
              key={i}
              className="p-6 shadow-lg rounded-2xl bg-white hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 py-16 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-10">
          What Our Students Say
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[
            {
              name: "Riya Sharma",
              review:
                "IELTSPro helped me score Band 8! The mock tests were exactly like the real exam.",
            },
            {
              name: "Amit Verma",
              review:
                "The AI band predictor was so accurate, I improved faster than expected.",
            },
          ].map((t, i) => (
            <div
              key={i}
              className="p-6 bg-white rounded-2xl shadow-md relative"
            >
              <p className="text-gray-700 mb-4 italic">“{t.review}”</p>
              <p className="font-semibold text-gray-900">— {t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 bg-blue-600 text-white text-center md:text-left">
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div>
            <h3 className="text-xl font-bold mb-2">IELTSPro</h3>
            <p>Your trusted partner for IELTS preparation.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-1">
              <li>Home</li>
              <li>Courses</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Contact Us</h4>
            <p>Email: info@ieltspro.com</p>
            <p>Phone: +91 98765 43210</p>
          </div>
        </div>
        <p className="mt-6 text-sm text-gray-200">
          © 2025 IELTSPro. All rights reserved.
        </p>
      </footer>

    </div>
  );
}

export default App;
