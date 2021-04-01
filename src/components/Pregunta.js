import React, { Fragment, useState } from "react";
import Error from "./Error";
import PropTypes from "prop-types";

const Pregunta = ({
  setPresupuesto,
  setRestante,
  setMostrarPregunta,
}) => {
  //Definimos el state
  const [cantidad, setCantidad] = useState(0);

  const [error, setError] = useState(false);

  //Funcion que lee el presupuesto
  const definirPresupuesto = (e) => {
    setCantidad(parseInt(e.target.value, 10));
  };

  //Submit para definir el presupuesto
  const agregarPresupuesto = (e) => {
    e.preventDefault();

    if (cantidad < 1 || isNaN(cantidad)) {
      setError(true);
      return;
    }
    setError(false);
    setPresupuesto(cantidad);
    setRestante(cantidad);
    setMostrarPregunta(false);
  };

  //Validar

  //Si es que pasa la validacion

  return (
    <Fragment>
      <h2>Indica tu presupuesto</h2>

      {error ? (
        <Error mensaje="El presupuesto es Incorrecto" />
      ) : null}

      <form onSubmit={agregarPresupuesto}>
        <input
          type="number"
          className="u-full-width"
          placeholder="Coloca tu presupuesto"
          onChange={definirPresupuesto}
        />
        <input
          type="submit"
          className="u-full-width"
          value="Confirmar Presupuesto"
        />
      </form>
    </Fragment>
  );
};
Pregunta.propTypes = {
  setPresupuesto: PropTypes.func.isRequired,
  setRestante: PropTypes.func.isRequired,
  setMostrarPregunta: PropTypes.func.isRequired,
};

export default Pregunta;
