import SimilarProducts from '../Components/SimilarProducts/SimilarProducts';
import CartItems from '../Components/CartItems/CartItems';
import nepal from '../../public/images/nepal.webp';
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
      <div className="max-w-[1200px] mx-auto mb-8 min-h-[300px]">
        <div className="text-2xl font-bold my-4">Shopping cart</div>
        <div className="relative flex items-baseline justify-between gap-2">
          <div className="w-[65%]">
            <CartItems key={product.id} product={product} />
          </div>
          <div
            id="GoToCheckout"
            className="md:w-[33%] absolute top-4 right-0 m-2"
          >
            <div className="bg-white p-4 border">
              <button className="flex items-center justify-center bg-blue-600 w-full text-white font-semibold p-3 rounded-full mt-4">
                Go to checkout
              </button>
              <div className="flex items-center justify-between mt-4 text-sm mb-1">
                <div className="">Items: (3)</div>
                <div>रु‎12.99</div>
              </div>
              <div className="flex items-center justify-between mb-4 text-sm ">
                <div className="">Shipping:</div>
                <div>Free</div>
              </div>
              <div className="border-b border-gray-300" />
              <div className="flex items-center justify-between mt-4 mb-1 text-lg font-semibold">
                <div>Subtotal</div>
                <div>रु‎12.99</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SimilarProducts />
    </>
  );
};

export default page;
