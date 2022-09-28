import React, { useEffect, useState } from "react";
import { CustomButton } from "../components/CustomButton/CustomButton";
import { Apellido } from "./components/Apellido";
import { Contraseña } from "./components/Contraseña";
import { Email } from "./components/Email";
import { Nombre } from "./components/Nombre";
import { Progress } from "./components/Progress";
import { ShowData } from "./components/ShowData";

import "./Form.css";

export const Form = () => {
	const [disable, setDisable] = useState(true);
	const [page, setPage] = useState(0);
	const [formData, setFormData] = useState({
		nombre: "",
		apellido: "",
		email: "",
		contraseña: "",
	});

	const testing = () => {
		if (page === 0 && formData.nombre === "") {
			setDisable(true);
		} else if (page === 1 && formData.apellido === "") {
			setDisable(true);
		} else if (page === 2 && formData.email === "") {
			setDisable(true);
		} else if (page === 3 && formData.contraseña === "") {
			setDisable(true);
		} else {
			setDisable(false);
		}
	};

	useEffect(() => {
		testing();
	}, [formData, page, disable]);

	const pageDisplay = (number) => {
		const pages = [
			<Nombre formData={formData} setFormData={setFormData} />,
			<Apellido formData={formData} setFormData={setFormData} />,
			<Email formData={formData} setFormData={setFormData} />,
			<Contraseña formData={formData} setFormData={setFormData} />,
			<ShowData formData={formData} />,
		];
		return pages[number];
	};

	const FormTitles = [
		"Nombre",
		"Apellido",
		"Email",
		"Contraseña",
		"Información",
	];

	return (
		<div className="form">
			<div className="form-container">
				<div className="header">
					<h1>{FormTitles[page]}</h1>
				</div>
				<div className="body">{pageDisplay(page)}</div>
				<div className="footer">
					<Progress
						percentage={(100 / (FormTitles.length - 1)) * page}
					/>
					<div className="button-container">
						<CustomButton
							disabled={page == 0}
							funcion={() =>
								setPage((currentPage) => currentPage - 1)
							}
						>
							Anterior
						</CustomButton>
						<CustomButton
							// disabled={page == FormTitles.length - 1}
							disabled={disable || page == FormTitles.length - 1}
							funcion={() =>
								setPage((currentPage) => currentPage + 1)
							}
						>
							Siguiente
						</CustomButton>
					</div>
				</div>
			</div>
		</div>
	);
};
