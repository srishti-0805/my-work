import React from "react";

const testimonials = [
  {
    name: "Aarav Sharma",
    text: "The mock tests helped me understand my weaknesses. I scored Band 8!",
  },
  {
    name: "Priya Mehta",
    text: "The AI Band Score system is amazing. It tracks progress perfectly!",
  },
  {
    name: "Rohit Kumar",
    text: "The mentors were really supportive. Highly recommended!",
  },
];

const Testimonials = () => {
  return (
    <section className="px-8 py-16 bg-blue-50 text-center">
      <h2 className="text-3xl font-bold text-blue-700 mb-10">
        What Our Students Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-xl shadow-md border border-blue-100"
          >
            <p className="text-gray-700 italic mb-4">“{t.text}”</p>
            <h4 className="font-semibold text-blue-700">{t.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
