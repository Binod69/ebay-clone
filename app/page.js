'use client';
import MainLayout from './Layouts/MainLayout';
import Carousel from './Components/Carousel/Carousel';
import Products from './Components/Products/Products';
import nepal from '../public/images/nepal.webp';
export default function Home() {
  const products = [
    {
      id: 1,
      title: 'Brown Laptop',
      description: 'desc',
      url: nepal,
      price: 2000, //25.00
    },
    {
      id: 2,
      title: 'Brown Laptop 2',
      description: 'desc',
      url: nepal,
      price: 2400,
    },
  ];
  return (
    <>
      <Carousel />
      <div className="max-w-[1200px] mx-auto">
        <div className="text-2xl font-bold mt-4 mb-6 px-4">Products</div>
        <div className="grid grid-cols-5 gap-4">
          {products.map((product) => (
            <Products key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
}
