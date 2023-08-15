import MainLayout from '@/app/Layouts/MainLayout';
import Image from 'next/image';
import SimilarProducts from '@/app/Components/SimilarProducts/SimilarProducts';
import nepal from '../../../public/images/nepal.webp';
const ProductDetails = ({ params }) => {
  const product = {
    id: 1,
    title: 'Brown Laptop',
    description: 'desc',
    url: nepal,
    price: 2000, //25.00
  };

  return (
    <>
      <MainLayout>
        <div className="max-w-[1200px] mx-auto">
          <div className="flex px-4 py-10">
            {product?.url ? (
              <Image
                className="w-[40%] rounded-lg"
                src={product?.url}
                alt={product.title}
              />
            ) : (
              <div className="w-[40%]"></div>
            )}
            <div className="px-4 w-full">
              <div className="font-bold text-xl">{product?.title}</div>
              <div className="font-sm text-gray-700 pt-2">
                Brand New - Full Warranty
              </div>
              <div className="border-b py-1" />
              <div className="pt-3 pb-3">
                <div className="flex items-center">
                  Condition:{' '}
                  <span className="font-bold text-[17px] ml-2">New</span>
                </div>
              </div>
              <div className="border-b py-1" />
              <div className="pt-3">
                <div className="w-full flex items-center justify-between">
                  <div className="flex items-center">
                    Price:{' '}
                    {product?.price ? (
                      <div className="font-bold text-[20px] ml-2">
                        NPR रु‎{(product?.price / 100).toFixed(2)}
                      </div>
                    ) : null}
                  </div>
                  <button className="bg-[#3498c9] text-white py-2 px-20 rounded-full cursor-pointer">
                    Add To Cart
                  </button>
                </div>
                <div className="border-b py-1" />
                <div className="pt-3">
                  <div className="font-semibold pb-1">Description:</div>
                  <div className="text-sm">{product?.description}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <SimilarProducts />
      </MainLayout>
    </>
  );
};

export default ProductDetails;
