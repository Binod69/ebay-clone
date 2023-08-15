import Image from 'next/image';
import CheckoutItems from '../Components/CheckoutItems/CheckoutItems';
import nepal from '../../public/images/nepal.webp';
import logo from '../../public/images/logo.svg';
const page = () => {
  const product = {
    id: 1,
    title: 'Brown Laptop',
    description: 'desc',
    url: nepal,
    price: 2000, //25.00
  };
  return (
    <>
      <div id="CheckoutPage" className="mt-4 max-w-[1100px] mx-auto">
        <div className="text-2xl font-bold mt-4 mb-4">Checkout</div>
        <div className="relative flex items-baseline gap-4 justify-between mx-auto w-full">
          <div className="w-[65%]">
            <div className="bg-white rounded-lg p-4 border">
              <div className="text-sl font-semibold mb-2">
                Shipping Address:
              </div>
              <div>
                <ul className="text-sm mt-2">
                  <li>Name: test</li>
                  <li>Address: test</li>
                  <li>Zipcode: test</li>
                  <li>City: test</li>
                  <li>Country: test</li>
                </ul>
              </div>
            </div>
            <div id="Items" className="bg-white rounded-lg mt-4">
              <CheckoutItems key={product.id} product={product} />
            </div>
          </div>
          <div
            id="PlaceOrder"
            className="relative -top-[6px] w-[35%] border rounded-lg"
          >
            <div className="p-4">
              <div className="flex items-baseline justify-between text-sm mb-1">
                <div>Items: (3)</div>
                <div>रु‎12.99</div>
              </div>
              <div className="flex items-baseline justify-between text-sm mb-1">
                <div>Shipping</div>
                <div>Free</div>
              </div>
              <div className="border-t" />
              <div className="flex items-center justify-between my-4">
                <div className="font-semibold">Order total</div>
                <div className="text-2xl font-semibold">रु‎12.99</div>
              </div>
              <form>
                <div
                  className="border border-gray-500 p-2 rounded-sm"
                  id="card-element"
                />
                <p
                  id="card-error"
                  role="alert"
                  className="text-red-700 text-center font-semibold relative top-2"
                />
                <button
                  type="submit"
                  className="mt-4 bg-blue-600 text-lg w-full text-white font-semibold p-3 rounded-full"
                >
                  Confirm & Pay
                </button>
              </form>
            </div>
            <div className="flex items-center p-4 justify-center gap-2 border-t">
              <Image src={logo} alt="logo.svg" width={50} />
              <div className="font-light mb-2 mt-2">Money Back Guarantee</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
