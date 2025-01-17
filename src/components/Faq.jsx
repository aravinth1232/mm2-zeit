import { ChevronDown, ChevronDownCircle } from 'lucide-react';
import React, { useState } from 'react';


const faqData = [
  {
    question: "What services do you offer?",
    answer: "We offer a range of bike modification services, including custom builds, performance upgrades, and aesthetic enhancements.",
  },
  {
    question: "How long does a bike modification take?",
    answer: "The time frame depends on the complexity of the project. Typically, it ranges from a few days to a couple of weeks.",
  },
  {
    question: "Do you offer a warranty on modifications?",
    answer: "Yes, we offer a limited warranty on our modifications. Please contact us for more details.",
  },
  {
    question: "Can I bring my own parts for customization?",
    answer: "Yes, you are welcome to bring your own parts, and we will incorporate them into your custom build.",
  },
  {
    question: "Do you provide consultations for customization ideas?",
    answer: "Yes, we offer free consultations to discuss your customization ideas and provide expert recommendations.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept cash, credit cards, and online payments through major payment platforms.",
  },
  {
    question: "Can you help restore vintage bikes?",
    answer: "Absolutely! We specialize in restoring vintage bikes to their original glory or with modern upgrades.",
  },
  {
    question: "Do you provide pickup and delivery services?",
    answer: "Yes, we offer pickup and delivery services for your convenience. Additional charges may apply depending on the location.",
  },
];


const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };


  return (
    <section className=" font-primary flex flex-col  gap-8 px-4 py-8">
      <h2 className="text-2xl font-semibold  text-tertiary-900  font-karla">Frequently Asked Questions</h2>
      <div className="px-2 lg:px-8 grid lg:grid-cols-2 gap-8 ">
        {faqData.map((item, index) => (
          <div key={index} className=" pb-4">
            <button
              className="flex justify-between w-full text-base lg:text-lg font-bold text-left font-karla text-tertiary-900 focus:outline-none group  "
              onClick={() => toggleAccordion(index)}
             
            >
              {item.question}
              <span className={`transition-transform transform
                group-hover:text-tertiary-400 
                ${activeIndex === index ? '-rotate-0' : '-rotate-45'}`}>
                <ChevronDown  />
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                activeIndex === index ? 'max-h-96' : 'max-h-0'
              }`}
            >
              <p className="pt-4 text-tertiary-700 text-base lg:text-base font-inconsolata">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;