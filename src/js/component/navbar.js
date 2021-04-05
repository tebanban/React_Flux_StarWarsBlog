import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span>Home</span>
			</Link>
			<div className="ml-auto">
				<Link to="/blog">
					<button className="btn btn-primary">Go to the Blog</button>
				</Link>
			</div>
		</nav>
	);
};
