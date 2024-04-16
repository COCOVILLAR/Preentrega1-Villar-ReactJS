const NavBar = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col my-5">
                        <ul className="nav justify-content-center">
                            <li className="nav-item">
                                <a className="nav-link" href="#">MudanzascasiFREE</a>
                            </li>
                            <li className="nav-item">
                                 <a className="nav-link" href="#">Contacto</a>
                             </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Rutas y trayectos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Tipos de Transportes</a>
                            </li>  
                            <li className="nav-item">
                             <a className="nav-link" href="#"><CartWidget /></a>
                            </li>
                        </ul>
                   </div>
               </div>
         </div>
    )
}

export default NavBar;