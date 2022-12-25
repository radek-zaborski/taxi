import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="bg-slate-500 h-14 w-screen border-black border-solid border-2 flex flex-nowrap ">
      <nav className=" pl-8 w-4/6 h-full border-solid border-r-black border-r flex items-center flex-auto flex-nowrap">
        <ul className="w-full h-full flex flex-auto flex-nowrap items-center">
          <li className="h-full active:bg-slate-300 w-1/3 flex items-center justify-center">
            <Link to="/">Strona główna</Link>
          </li>

          <li className="h-full active:bg-slate-400 w-1/3  flex items-center justify-center">
            <Link to="/SingleDay">Dodaj dzienny raport</Link>
          </li>

          <li className="h-full active:bg-slate-400 w-1/3  flex items-center justify-center">
            <Link to="/AllEvents">Wydarzenia</Link>
          </li>
        </ul>
      </nav>
      <div className="h-full pr-8 w-2/6 border-solid border-l-black border-l flex justify-end items-center">
        logowanie
      </div>
    </div>
  );
}

export default Header;
