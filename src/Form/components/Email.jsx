import React from "react";

export const Email = ({ formData, setFormData }) => {
	return (
		<>
			<label>Email </label>
			<input
				value={formData.email}
				onChange={(e) =>
					setFormData({ ...formData, email: e.target.value })
				}
				type="text"
			></input>
		</>
	);
};
