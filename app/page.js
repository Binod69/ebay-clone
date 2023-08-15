'use client';
import Carousel from './Components/Carousel/Carousel';
import MainLayout from './Layouts/MainLayout';
export default function Home() {
  return (
    <>
      <MainLayout>
        <Carousel />
      </MainLayout>
    </>
  );
}
