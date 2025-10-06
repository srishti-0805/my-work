import React from "react";

const features = [
  {
    title: "Speaking Practice",
    desc: "Daily sessions to improve your fluency and confidence.",
  },
  {
    title: "Mock Tests",
    desc: "Real exam simulation with instant feedback.",
  },
  {
    title: "AI Band Score",
    desc: "Get AI-evaluated scores to track your progress.",
  },
  {
    title: "Grammar Correction",
    desc: "Advanced AI tools to enhance your writing skills.",
  },
];

const Features = () => {
  return (
    <section className="px-8 py-16 bg-white text-center">
      <h2 className="text-3xl font-bold text-blue-700 mb-10">
        Why Choose IELTSPro?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {features.map((f, i) => (
          <div
            key={i}
            className="bg-blue-100 p-6 rounded-xl shadow-md hover:bg-blue-200 transition"
          >
            <h3 className="text-xl font-semibold mb-3">{f.title}</h3>
            <p className="text-gray-700">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
