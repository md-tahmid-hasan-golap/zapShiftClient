import React, { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question: "How does this posture corrector work?",
      answer:
        "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day. Here's how it typically functions: A posture corrector works by providing support and gentle alignment to your shoulders.",
    },
    {
      question: "Is it suitable for all ages and body types?",
      answer:
        "Yes, it is designed with adjustable straps to fit various body sizes, making it suitable for both teenagers and adults.",
    },
    {
      question: "Does it really help with back pain and posture improvement?",
      answer:
        "Absolutely. By keeping your spine aligned, it reduces muscle strain and helps build muscle memory for long-term posture improvement.",
    },
    {
      question: "Does it have smart features like vibration alerts?",
      answer:
        "Our smart version includes high-precision sensors that vibrate gently to remind you whenever you slouch.",
    },
    {
      question: "How will I be notified when the product is back in stock?",
      answer:
        "You can sign up for our newsletter to receive instant email notifications or follow us on social media for updates.",
    },
  ];

  return (
    <div className="bg-[#F3F4F6] py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-[#03464D] text-3xl md:text-5xl font-bold mb-5">
            Frequently Asked Question (FAQ)
          </h2>
          <p className="text-gray-500 text-sm md:text-lg max-w-3xl mx-auto leading-relaxed">
            Enhance posture, mobility, and well-being effortlessly with Posture
            Pro. Achieve proper alignment, reduce pain, and strengthen your body
            with ease!
          </p>
        </div>

        {/* Accordion Section */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-2xl border transition-all duration-300 ${
                activeIndex === index
                  ? "bg-[#EBF7F8] border-[#03464D]/30 shadow-sm"
                  : "bg-white border-transparent shadow-sm"
              }`}
            >
              <button
                className="w-full flex justify-between items-center p-5 md:p-6 text-left"
                onClick={() =>
                  setActiveIndex(activeIndex === index ? -1 : index)
                }
              >
                <span
                  className={`text-base md:text-lg font-bold ${
                    activeIndex === index ? "text-[#03464D]" : "text-gray-800"
                  }`}
                >
                  {faq.question}
                </span>
                <span
                  className={`text-xl transition-transform duration-300 ${
                    activeIndex === index
                      ? "rotate-180 text-[#03464D]"
                      : "text-gray-400"
                  }`}
                >
                  {activeIndex === index ? "▲" : "▼"}
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ${
                  activeIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-5 md:p-6 pt-0 text-gray-500 text-sm md:text-base leading-relaxed border-t border-[#03464D]/10">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="flex justify-center mt-12">
          <button className="flex items-center gap-0 rounded-xl overflow-hidden group">
            <span className="bg-[#B4E34C] text-[#03464D] font-bold py-4 px-8 md:px-10 hover:bg-[#a2cc43] transition-colors">
              See More FAQ's
            </span>
            <span className="bg-[#1A1A1A] text-white py-4 px-4 font-bold text-xl transition-all group-hover:bg-black">
              ↗
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
