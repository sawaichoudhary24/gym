import React from "react";

function Traners() {
  const trainers = [
    {
        name: "Alex Johnson",
        role: "CrossFit Specialist",
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        bio: "10+ years experience in CrossFit and functional training",
        instagram: "#",
        facebook: "#",
        twitter: "#"
      },
      {
        name: "Sarah Chen",
        role: "Yoga Instructor",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIjHhmH6E0PTwG8eTVUGL93_33r05ME0qqFm6SdCA8Cg&s=10",
        bio: "Certified yoga teacher with expertise in multiple disciplines",
        instagram: "#",
        facebook: "#",
        twitter: "#"
      },

      {
          name: "Mike Peterson",
          role: "Strength Coach",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE2kMuprJTvbpJsC6Jyx9GwPGsui3Q4mSQU2tj8QbAUw&s=10",
          bio: "Former athlete specializing in strength and power development",
          instagram: "#",
          facebook: "#",
          twitter: "#"
        },

         {
            name: "Emma Wilson",
            role: "Pilates Expert",
            image: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
            bio: "Certified pilates instructor focusing on core strength and flexibility",
            instagram: "#",
            facebook: "#",
            twitter: "#"
          },
  ]
  return (
    <div id="trainers" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Expert Trainers
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            {" "}
            Our certified professionals are here to help you achieve your
            fitness goals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* map method */}
          {trainers.map((trainer, index)=>{
            return(
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-md transition duration-300">
            <div className="h-72 overflow-hidden">
              <img
                src={trainer.image}
                alt=""
                className="w-full h-full object-center transition duration-500 hover:scale-110"
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold mb-1 text-gray-800">
                {trainer.name}
              </h3>
              <div className="text-red-600 font-medium mb-2">{trainer.role}</div>
              <p className="text-gray-600 mb-4">{trainer.bio}</p>
              <div className="flex justify-center space-x-4">
                <a
                  href=""
                  className="text-gray-400 hover:text-red-600 transition duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>

                <a
                  href=""
                  className="text-gray-400 hover:text-red-600 transition duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </a>

                <a
                  href=""
                  className="text-gray-400 hover:text-red-600 transition duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
            );
          })}
        </div>
        <div className="text-center mt-12">
          <a href="" className="inline-block border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-6 py-3 rounded-md font-medium transition duration-300"
          >
            Book a Training Session
            </a>

        </div>
      </div>
    </div>
  );
}

export default Traners;
