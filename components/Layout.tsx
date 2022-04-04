import { ReactChild, ReactFragment, ReactPortal } from "react";
import Header from "./Header";
import NavBar from "./NavBar";

const layoutStyle = {
  display: "flex",
  flexDirection: "column",
  height: "100%",
  width: "100%"
};

const contentStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column"
};

const Layout = (props: { children: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; }) => (
  <div className="Layout" style={{...layoutStyle, background: props.color}}>
    <Header />
    <div className="Content" style={contentStyle}>
      {props.children}
    </div>
    <NavBar />
  </div>
);

export default Layout;