'use client';

import Footer from './includes/Footer';
import MainHeader from './includes/MainHeader';
import SubMenu from './includes/SubMenu';
import TopMenu from './includes/TopMenu';

const MainLayout = () => {
  return (
    <>
      <div id="Mainlayout" className="min-w-[1050px] max-w-[1300px] mx-auto">
        <div>
          <TopMenu />
          <MainHeader />
          <SubMenu />
        </div>
      </div>
    </>
  );
};

export default MainLayout;
