import React from 'react';

const EnquiryModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      id='enquiry'
      className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 px-4 sm:px-6"
    >
      <div className="bg-[#f8f8fa] w-full max-w-3xl sm:w-[700px] h-auto sm:h-[450px] p-6 sm:p-10 rounded-2xl relative overflow-auto">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-2xl"
        >
          &times;
        </button>

        <h2 className="text-2xl sm:text-3xl text-[#67132f] mb-2">
          Connect with us
        </h2>
        <p className="mb-6 text-sm sm:text-base">
          To arrange a call-back and schedule a visit to our experience center,
          please submit your contact details
        </p>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Full Name*"
            required
            className="p-3 border border-[#67132f] rounded-lg text-[#67132f]"
          />
          <input
            type="email"
            placeholder="Email*"
            required
            className="p-3 border border-[#67132f] rounded-lg text-[#67132f]"
          />
          <input
            type="tel"
            placeholder="Phone Number*"
            required
            className="p-3 border border-[#67132f] rounded-lg text-[#67132f]"
          />
          <select
            required
            className="p-3 border border-[#67132f] rounded-lg text-[#67132f]"
          >
            <option>--Please choose an option--</option>
            <option>Residences at Estate 360</option>
            <option>Senior Living Residences at Estate 360</option>
          </select>

          <div className="col-span-1 md:col-span-2 flex justify-center mt-4">
            <button
              type="submit"
              className="bg-[#0a1a33] text-white/70 px-8 py-2 rounded-full font-medium hover:bg-[#112244] transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EnquiryModal;
