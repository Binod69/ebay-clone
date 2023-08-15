'use client';
import Link from 'next/link';
const Textinput = ({ string, placeholder, error, onUpdate }) => {
  return (
    <>
      <input
        type="text"
        placeholder={placeholder}
        className=" w-full bg-white text-gray-800 border text-sm border-[#272727] p-3 placeholder-gray-500 focus:outline-none"
        value={string || ''}
        onChange={(e) => onUpdate(e.target.value)}
        autocomplete="off"
      />
      <div className="text-red-500 text-[14px] font-semibold">
        {error ? error : null}
      </div>
    </>
  );
};

export default Textinput;
