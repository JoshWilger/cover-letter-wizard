import { Outlet } from 'react-router-dom';
import Heading from '../../Heading';
// import Footer from '../../Footer';
import Nav from '../../Nav';
import NavBar from '../../Nav/NavBar';

const RootLayout = () => {
  return (
    <div className="flex w-full h-[100vh] bg-[#011D28]">
      <Nav />
      <div className="flex flex-col items-center w-full h-full gap-8 py-24 xl:py-20 lg:pt-0 lg:pb-16 overflow-y-auto">
        <NavBar />
        <Heading />
        <Outlet />
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default RootLayout;
