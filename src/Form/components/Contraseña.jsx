import React from "react";

export const Contraseña = ({ formData, setFormData }) => {
	return (
		<>
			<label>Contraseña </label>
			<input
				value={formData.contraseña}
				onChange={(e) =>
					setFormData({ ...formData, contraseña: e.target.value })
				}
				type="text"
			></input>
		</>
	);
};
