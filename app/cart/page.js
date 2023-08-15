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
        </div>
      </div>
      <SimilarProducts />
    </>
  );
};

export default page;
