const Footer = () => {
	const link = "https://github.com/Vismaad-Singh/mernCRUD";
	const target = "_blank";

	return (
		<div className="container">
			Copyright © <small>{new Date().getFullYear()}</small>{" "}
			<a href={link} target={target}>
				Vismaad Singh
			</a>
		</div>
	);
};

export default Footer;
