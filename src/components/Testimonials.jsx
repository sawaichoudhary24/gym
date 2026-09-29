import React, { useState } from "react";

function Testimonials() {
  const testimonials = [
     {
    quote: "Fitlife completely transformed my fitness journey. The trainers are knowledgeable and the community is so supportive!",
    author: "Jennifer K.",
    role: "Member since 2020",
    image:  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=80",
    rating: 5,
  },
  {
    quote: "I've tried many gyms, but Fitlife stands out with its premium equipment and excellent class variety. Worth every penny!",
    author: "Michael T.",
    role: "Member since 2021",
    image:  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&auto=format&fit=crop&q=80",
    rating: 5,
  },
    {
    quote: "The personal training at Fitlife helped me achieve results I never thought possible. I'm stronger and healthier than ever.",
    author: "Sarah M.",
    role: "Member since 2019",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&auto=format&fit=crop&q=80",
    rating: 4,
  },
  {
    quote: "As a busy professional, the 24/7 access and variety of quick, effective classes make Fitlife perfect for my schedule.",
    author: "David L.",
    role: "Member since 2022",
    image:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&auto=format&fit=crop&q=80",
    rating: 5,
  },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () =>{
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  }

    const prevTestimonial = () =>{
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const renderStart = (rating)=>{
   return Array.from({length: 5}, (_, index) =>(
      <svg
              key={index}
              className={`h-5 w-5 ${
                index < rating ? "text-yellow-400" : "text-gray-300"}`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
   )); 
  };


  return (
    <div id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Memebrs Say
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            Don't just take our word for it - hear from our satisfied members
          </p>
        </div>
        <div className="relative">
          <div className="flex flex-col md:flex-row items-center bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="w-full md:w-1/3 p-8">
              <div className="aspect-square rounded-full overflow-hidden w-32 h-32 mx-auto mb-6 border-4 border-red-100">
                <img src={testimonials[activeIndex].image} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">{renderStart(testimonials[activeIndex].rating)}</div>
                <h4 className="text-xl font-semibold text-gray-900
                 mb-1">{testimonials[activeIndex].author}</h4>
                  <p className="text-gray-500">{testimonials[activeIndex].role}</p>
              </div>
            </div>

            <div className="w-full md:w-2/3 bg-gradient-to-r from-red-50 to-gray-50 p-8 md:p-12">
             <svg 
                className="h-16 w-16 text-red-200 mb-6" 
                fill="currentColor" 
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
               <path d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z" />
              </svg>
                <p className="text-xl md:text-2xl text-gray-700 italic mb-8">"{testimonials[activeIndex].quote}"</p>
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-4">
            <button className="p-2 rounded-full bg-white hover:shadow-md transition duration-300" onClick={prevTestimonial}>
                <svg 
                className="h-6 w-6 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                >
                  <path 
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                  />
                </svg>
            </button>
            <div className="flex space-x-2 items-center">
              {/* Map method */}
              <button className={`w-3 h-3 rounded-full transition duration-300`}></button>
            </div>

            <button className="p-2 rounded-full bg-white hover:shadow-md transition duration-300" onClick={nextTestimonial}>
              {" "}
               <svg 
                className="h-6 w-6 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                >
                  <path 
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                  />
                </svg>
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
