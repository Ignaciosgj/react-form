import React from "react";
import styles from "./CustomButton.module.css";

export const CustomButton = ({ children, disabled, funcion }) => {
	return (
		<button className={styles.boton} disabled={disabled} onClick={funcion}>
			{children}
		</button>
	);
};
