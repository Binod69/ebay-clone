import CheckoutItems from '../Components/CheckoutItems/CheckoutItems';
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
        </div>
      </div>
    </>
  );
};

export default page;
