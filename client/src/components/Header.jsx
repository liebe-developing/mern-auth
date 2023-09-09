import { Link } from "react-router-dom";
const navLinks = [
  { text: "Home", href: "/" },
  { text: "About", href: "/about" },
  { text: "Sign In", href: "/sign-in" },
];
const Header = () => {
  return (
    <div className="bg-slate-200">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold">Auth App</h1>
        </Link>
        <ul className="flex gap-4">
          {navLinks.map((link) => (
            <Link to={link.href} key={link.text}>
              <li>{link.text}</li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
