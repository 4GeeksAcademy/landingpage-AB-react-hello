import react from "react";

const Jumbotron = () => (
    <div className="jumbotron  p-5 mt-4 rounded glass-effect">

        <h1 className="display-4">Anderson DevLab</h1>
        <p className="lead text-center">
            Esta es la primera landing page desarrollada por Anderson Bernal, aprendimos la manera de hacer componentes en React usando, Navbar, Jumbotron, Card y Footer, usamos props text, title y descripcion.
            Por otro lado integramos Boostrap y sobre todo corregimos errores de importacion, estructuracion de carpetas y solucion de etiquetas.
        </p>

        <a className="btn btn-primary btn-lg" href="#" role="button">
            Call to action!
        </a>

    </div>
);

export default Jumbotron;