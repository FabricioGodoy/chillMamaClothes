import { Link } from "react-router-dom";
import "./navBar.css";

export const NavBar = () => {
  window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
  });

  
  return (
    <header className="header">
      <span className="lineaRoja" />

      <input type="checkbox" id="toggle" />
      <label htmlFor="toggle">
        <img
          className="menu"
          src="https://img.icons8.com/ios-filled/50/null/menu-rounded.png"
          alt="menu"
        />{" "}
      </label>

      <nav className="navigation">
        <ul>
       {/*    <li>
            <Link to="collection">Collection</Link>
            <ul>
              <li className="listadoScroll">
                <div title="MARCAS" id="navbarScrollingDropdown">
                  {marcasMapeadas.map((link) => {
                    return (
                      <div key={link.Codigo}>
                        <Link
                          to={`/marcas/${link.Codigo}`}
                          className="listMarcas"
                        >
                          {link.Descripcion}
                        </Link>
                      </div>
                    );
                  })}
                </div> 
              </li>
            </ul>
          </li> */}
          <li>
            <Link to="#">Mens</Link>
            <ul>
              <li>
                <Link to="/#">Buzos</Link>
              </li>
              <li>
                <Link to="/#">Remeras</Link>{" "}
              </li>
              <li>
                <Link to="/#">Camperas</Link>
              </li>
              <li>
                <Link to="/#">Consoladores con forma de tentaculo</Link>{" "}
              </li>
              <li>
                <Link to="#">dickring</Link>
              </li>
            </ul> 
          </li>
          <li>
            <Link to="/#">Womens</Link>
            <ul>
              <li>
                <Link to="/#">Buzos</Link>
              </li>
              <li>
                <Link to="/#">Remeras</Link>{" "}
              </li>
              <li>
                <Link to="/#">Camperas</Link>
              </li>
              <li>
                <Link to="/#">Consoladores con forma de tentaculo</Link>{" "}
              </li>
              <li>
                <Link to="#">dickring</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/#">Kinds</Link>
            <ul>
              <li>
                <Link to="/#">Buzos</Link>
              </li>
              <li>
                <Link to="/#">Remeras</Link>{" "}
              </li>
              <li>
                <Link to="/#">Camperas</Link>
              </li>
              <li>
                <Link to="/#">Consoladores con forma de tentaculo</Link>{" "}
              </li>
              <li>
                <Link to="#">dickring</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/#">Core</Link>
            <ul>
              <li>
                <Link to="/#">Buzos</Link>
              </li>
              <li>
                <Link to="/#">Remeras</Link>{" "}
              </li>
              <li>
                <Link to="/#">Camperas</Link>
              </li>
              <li>
                <Link to="/#">Consoladores con forma de tentaculo</Link>{" "}
              </li>
              <li>
                <Link to="#">dickring</Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
};