import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div class="header__container h-14 w-screen border-black border-solid border-2 flex flex-nowrap ">
      <nav class="pl-8 w-4/6 h-full border-solid border-r-black border-r flex items-center flex-auto flex-nowrap">
        <ul class="w-full flex flex-auto flex-nowrap">
          <li className="w-1/3">
            <Link to="/">Strona główna</Link>
          </li>

          <li className="w-1/3">
            <Link to="/SingleDay">Dodaj dzienny raport</Link>
          </li>

          <li className="w-1/3">
            <Link to="/AllEvents">Wydarzenia</Link>
          </li>
        </ul>
      </nav>
      <div class="pr-8 w-2/6 h-full border-solid border-l-black border-l flex justify-end items-center">
        logowanie
      </div>
    </div>
  );
}

export default Header;
