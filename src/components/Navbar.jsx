import logo from "../assets/jalajlogo.png";
import { FaGithub } from "react-icons/fa";
const Navbar = () => {
  return( <nav  className="  mb-20 flex items-center justify-between py-6"> 
   <div className="flex flex-shrink-0 items-center">
   <a href="https://github.com/Jalaj1973">
    <img src={logo} alt="logo"  /> 
    </a>
   </div>
   <div className="m-8 flex items-center justify-center gap-4 text-3xl">
    <FaGithub />
   </div>
   </nav>
  );
};

export default Navbar;