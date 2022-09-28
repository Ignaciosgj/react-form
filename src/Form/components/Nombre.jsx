import React from "react";

export const Nombre = ({ formData, setFormData }) => {
	return (
		<>
			<label>Nombre </label>
			<input
				value={formData.nombre}
				onChange={(e) =>
					setFormData({ ...formData, nombre: e.target.value })
				}
				type="text"
			></input>
		</>
	);
};
