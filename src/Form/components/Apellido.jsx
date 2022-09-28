import React from "react";

export const Apellido = ({ formData, setFormData }) => {
	return (
		<>
			<label>Apellido </label>
			<input
				value={formData.apellido}
				onChange={(e) =>
					setFormData({ ...formData, apellido: e.target.value })
				}
				type="text"
			></input>
		</>
	);
};
