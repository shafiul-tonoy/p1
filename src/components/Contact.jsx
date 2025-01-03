export default function Contact() {
    return (
      <div className="min-h-screen bg-gray-100 py-10 px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Contact 
          </h1>
          <p className="text-center text-gray-600 mb-10">
            Have questions or want to work with me? Reach out using the information below.
          </p>
  
          {/* Contact Information Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Address */}
            <div className="flex items-center space-x-4">
              <div className="text-blue-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 21h8m0 0a3 3 0 01-3-3v-4a3 3 0 00-6 0v4a3 3 0 01-3 3m8 0h-8"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Address</h3>
                <p className="text-gray-600">Dhaka, Bangladesh</p>
              </div>
            </div>
  
            {/* Phone */}
            <div className="flex items-center space-x-4">
              <div className="text-green-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 10l2-2a2 2 0 012.828 0l2.172 2.172a4 4 0 005.656 0l2.172-2.172a2 2 0 012.828 0l2 2M4 6h16M4 6l2-2m12 2l2-2M4 12v10a2 2 0 002 2h8a2 2 0 002-2V12"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Phone</h3>
                <p className="text-gray-600">01521204372</p>
              </div>
            </div>
  
            {/* Email */}
            <div className="flex items-center space-x-4">
              <div className="text-red-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 12l4-4m0 0l-4-4m4 4H4m6-6v16m6-6h6m0 0l-6 6"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Email</h3>
                <p className="text-gray-600">tonoy.tech@gmail.com</p>
              </div>
            </div>
  
            
          </div>
  
          {/* Contact Form */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
              Send me a Message
            </h2>
            <form className="space-y-4">
              <div className="flex flex-col">
                <label className="text-gray-600">Your Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="input input-bordered"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-gray-600">Your Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="input input-bordered"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-gray-600">Message</label>
                <textarea
                  placeholder="Enter your message"
                  className="textarea textarea-bordered"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-full">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
  