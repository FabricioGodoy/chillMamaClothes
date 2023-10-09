import { Link } from "react-router-dom";
import burgerMenu from "../../../public/bars-solid.svg";
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
          src= {burgerMenu}
          alt="menu"
        />{" "}
      </label>

      <div className="navigation">
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
            <Link to="/#">Kids</Link>
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
      </div>


      <div className="navigation2">      
        <ul> 
          <li>
            <Link to="#">Favs</Link>
            <ul>
              <li>
                <Link to="/#">prod favs</Link>
              </li>
            </ul> 
          </li>
       
          <li>
            <Link to="#">Compras</Link>
            <ul>
              <li>
                <Link to="/#">Mis compras</Link>
              </li>
            </ul> 
          </li>

          <li>
            <Link to="#">Perfil</Link>
            <ul>
              <li>
                <Link to="/#">Mi perfil</Link>
              </li>
              <li>
                <Link to="/#">Cerrar sesion</Link>
              </li>
            </ul> 
          </li>
        </ul>
      </div>
    </header>
  );
};