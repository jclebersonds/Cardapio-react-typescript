import {Link} from 'react-scroll';

function Menu() {
  return (
    <nav id="navbar" className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Mamamia Massas</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
               <Link className="nav-link" to="inicio" smooth={true} duration={500}>Início</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="gnocchi-title" smooth={true} duration={500}>Gnocchi</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="pasta-title" smooth={true} duration={500}>Pastas</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="bebidas-title" smooth={true} duration={500}>Bebidas</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Menu;
