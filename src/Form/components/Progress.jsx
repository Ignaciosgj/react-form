import React from "react";
import "./Progress.css";

export const Progress = ({ percentage }) => {
	return (
		<div className="container">
			<div className="advance" style={{ width: `${percentage}%` }}></div>
		</div>
	);
};
