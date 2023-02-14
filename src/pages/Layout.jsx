import { Navbar } from "../components";
const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <hr />
      {children}
    </>
  );
};
export default Layout;
