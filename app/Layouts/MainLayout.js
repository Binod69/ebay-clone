'use client';

import MainHeader from './includes/MainHeader';
import TopMenu from './includes/TopMenu';

const MainLayout = ({ children }) => {
  return (
    <>
      <div id="Mainlayout" className="min-w-[1050px] max-w-[1300px] mx-auto">
        <div>
          <TopMenu />
          <MainHeader />
        </div>
      </div>
    </>
  );
};

export default MainLayout;
