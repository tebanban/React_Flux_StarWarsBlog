import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Navbar, DropdownButton, Dropdown } from "react-bootstrap";

export const NavbarMenu = () => {
	const { store, actions } = useContext(Context);

	return (
		<Navbar className="navbar navbar-light bg-light mb-3">
			<DropdownButton id="dropdown-basic-button" title="Favorites">
				{store.favorites.map((item, index) => {
					return (
						<Dropdown.Item key={index} href="#/action-1">
							{item}
						</Dropdown.Item>
					);
				})}
			</DropdownButton>
		</Navbar>
	);
};
