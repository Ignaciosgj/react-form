import React from "react";

export const ShowData = ({ formData }) => {
	return (
		<div style={{ display: "flex", flexDirection: "column" }}>
			<h1>Nombre: {formData.nombre}</h1>
			<h1>Apellido: {formData.apellido}</h1>
			<h1>Email: {formData.email}</h1>
			<h1>Contraseña: {formData.contraseña}</h1>
		</div>
	);
};
