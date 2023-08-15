'use client';
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import banner1 from '../../../public/images/1.webp';
import banner2 from '../../../public/images/2.webp';
import banner3 from '../../../public/images/3.webp';
const Carousels = () => {
  return (
    <>
      <div className="max-w-[1200px] mx-auto">
        <Carousel
          showArrows={true}
          autoPlay={true}
          interval={3000}
          infiniteLoop={true}
          showThumbs={false}
        >
          <div>
            <Image
              src={banner1}
              alt="banner"
              quality={80}
              placeholder="blur"
              className=" object-cover"
            />
          </div>
          <div>
            <Image
              src={banner2}
              alt="banner"
              quality={80}
              placeholder="blur"
              className=" object-cover"
            />
          </div>
          <div>
            <Image
              src={banner3}
              alt="banner"
              quality={80}
              placeholder="blur"
              className=" object-cover"
            />
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default Carousels;
