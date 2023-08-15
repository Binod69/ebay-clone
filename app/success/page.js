import Link from 'next/link';
import { AiOutlineCheckCircle } from 'react-icons/ai';
const page = () => {
  return (
    <>
      <div
        id="SuccessPage"
        className="mt-12 max-w-[1200px] mx-auto px-2 min-h-[50vh]"
      >
        <div className="bg-white w-full p-6 min-h-[150px] flex items-center justify-center">
          <div>
            <div className="flex items-center text-xl">
              <AiOutlineCheckCircle size={35} className="text-green-500" />
              <span className="pl-4">Payment Successful</span>
            </div>
            <p>Thank you! we&apos;ve received your payment</p>
            <Link href="/" className="w-full">
              <div className="w-full text-center bg-blue-500 text-sm font-semibold text-white p-[11px] mt-4">
                Back to shop
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
