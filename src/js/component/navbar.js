import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Navbar, DropdownButton, Dropdown, Button } from "react-bootstrap";

export const NavbarMenu = () => {
	const { store, actions } = useContext(Context);

	return (
		<Navbar className="navbar navbar-light bg-light mb-3">
			<DropdownButton id="dropdown-basic-button" title={`Favorites ${store.favorites.length}`}>
				{store.favorites.map((item, index) => {
					return (
						<div className="row" key={Math.random() * 1000}>
							<Dropdown.Item className="d-flex justify-content-between">
								{item}{" "}
								<Button
									onClick={() => {
										actions.deleteFavorite(item);
									}}>
									<i className="fa fa-trash p-1" aria-hidden="true" />
								</Button>
							</Dropdown.Item>
							;
						</div>
					);
				})}
			</DropdownButton>
		</Navbar>
	);
};
