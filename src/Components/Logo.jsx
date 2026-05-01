import { Link } from "react-router";
import logo from "../../src/assets/banner/logo.png";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center -gap-2 group">
      {/* Logo Image */}
      <img
        src={logo}
        alt="ZapShift Logo"
        className="w-8 h-8 md:w-10 md:h-10 object-contain transition-transform group-hover:scale-110"
      />

      {/* Logo Text */}
      <h1 className="text-xl md:text-2xl font-bold tracking-tight text-gray-800 ">
        Zap<span className="text-gray-900 font-extrabold">Shift</span>
      </h1>
    </Link>
  );
};

export default Logo;
