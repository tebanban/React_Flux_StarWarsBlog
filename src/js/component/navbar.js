import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Navbar, DropdownButton, Dropdown } from "react-bootstrap";

export const NavbarMenu = () => {
	const { store, actions } = useContext(Context);

	return (
		<Navbar className="navbar navbar-light bg-light mb-3">
			<DropdownButton id="dropdown-basic-button" title={`Favorites ${store.favorites.length}`}>
				{store.favorites.map((item, index) => {
					return (
						<div className="row" key={index}>
							<Dropdown.Item>{item}</Dropdown.Item>;
						</div>
					);
				})}
			</DropdownButton>
		</Navbar>
	);
};
