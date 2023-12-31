import PropTypes from "prop-types";

import SideBar from "./components/SideBar";

const ServicesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="md:flex">
      <SideBar />
      {children}
    </div>
  );
};

ServicesLayout.propsType = {
  children: PropTypes.node.isRequired,
};

export default ServicesLayout;
