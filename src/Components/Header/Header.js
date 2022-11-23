import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div class="bg-slate-500 h-14 w-screen border-black border-solid border-2 flex flex-nowrap ">
      <nav class=" pl-8 w-4/6 h-full border-solid border-r-black border-r flex items-center flex-auto flex-nowrap">
        <ul class="w-full h-full flex flex-auto flex-nowrap items-center">
          <li className="h-full active:bg-slate-300 w-1/3 flex items-center justify-center">
            <NavLink exact to="/">
              Strona główna
            </NavLink>
          </li>

          <li className="h-full active:bg-slate-400 w-1/3  flex items-center justify-center">
            <NavLink exact to="/SingleDay">
              Dodaj dzienny raport
            </NavLink>
          </li>

          <li className="h-full active:bg-slate-400 w-1/3  flex items-center justify-center">
            <NavLink exact to="/AllEvents">
              Wydarzenia
            </NavLink>
          </li>
        </ul>
      </nav>
      <div class="h-full pr-8 w-2/6 h-full border-solid border-l-black border-l flex justify-end items-center justify-center">
        logowanie
      </div>
    </div>
  );
}

export default Header;
