const ContactForm = () => {
    return (
      <div className="p-10 bg-gray-100 w-full max-w-2xl mx-auto rounded-md">
        <form className="">
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="fname"
                id="fname"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-b-2 border-b-green-500 appearance-none    focus:outline-none focus:ring-0 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="fname"
                className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                पहिलो नाम
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="lname"
                id="lname"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-b-2  appearance-none border-b-green-500   focus:outline-none focus:ring-0 focus:border-green-500 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="lname"
                className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                थर
              </label>
            </div>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="email"
              name="email"
              id="email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-b-2 border-b-green-500 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="email"
              className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              इ - मेल ठेगाना
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="subject"
              id="subject"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent  border-b-2 border-b-green-500 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="subject"
              className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-500  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              विषय
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <textarea
              name="message"
              id="message"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-b-2 border-b-green-500 appearance-none  focus:outline-none focus:ring-0 focus:border-green-500 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="message"
              className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-500  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              सन्देश
            </label>
          </div>
         
  
          <button
            type="submit"
            className="text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
          >
            पेश गर्नुहोस्
          </button>
        </form>
      </div>
    );
  };
  
  export default ContactForm;
  
  