import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Navbar, DropdownButton, Dropdown } from "react-bootstrap";

export const NavbarMenu = () => {
	const { store, actions } = useContext(Context);

	return (
		<Navbar className="navbar navbar-light bg-light mb-3">
			<DropdownButton id="dropdown-basic-button" title="Dropdown button">
				<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
				<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
				<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
			</DropdownButton>
		</Navbar>
	);
};
