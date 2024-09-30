import { Link } from "react-router-dom";
import Logo from "../../asset/img/logo.png";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

function Navbar() {
  const theme = useContext(ThemeContext);
  return (
    <div className={"nav-" + theme}>
      <img src={Logo} alt="logo" width={40} height={40} />
      <ul>
        <li>
          <Link to={`/`}>Home</Link>
        </li>
        <li>
          <Link to={`/product`}>Product</Link>
        </li>
        <li>
          <Link to={"/album"}>Album</Link>
        </li>
        <li>
          <Link to={"/service"}>Service</Link>
        </li>
        <li>About us</li>
      </ul>
    </div>
  );
}

export default Navbar;
