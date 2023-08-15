'use client';

import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import Textinput from '../Components/TextInput/Textinput';
const page = () => {
  return (
    <>
      <div id="AddressPage" className="mt-4 max-w-[600px] mx-auto px-2">
        <div className="mx-auto bg-white rounded-lg p-3">
          <h6 className="text-xl text-bold mb-2">Address Details:</h6>
          <form>
            <div className="mb-4">
              <Textinput
                className="w-full"
                string={'test'}
                placeholder={'Name'}
                error={'error'}
              />
            </div>
            <button className="mt-6 w-full text-white text-lg font-semibold p-3 rounded bg-blue-600">
              update
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default page;
