import React, {Fragment, useState} from 'react';
import Error from './Error';

const Pregunta = () => {
	//Definimos el state
	const [cantidad, setCantidad] = useState(0);
	const [error, setError] = useState(false);

	//Funcion que lee el presupuesto
	const definirPresupuesto = e => {
		setCantidad(parseInt(e.target.value, 10));
	};

	const agregarPresupuesto = e => {
		e.preventDefault();

		if (cantidad < 1 || isNaN(cantidad)) {
			setError(true);
			return;
		}
		setError(false);
	};

	//Submit para definir el presupuesto

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

export default Pregunta;
