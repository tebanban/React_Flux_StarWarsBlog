import React from "react";
import starwars_logo from "../../img/Star-Wars-Logo-700x394.png";
import "../../styles/home.scss";
import { Link } from "react-router-dom";

export const Home = () => (
	<div className="text-center mt-5">
		<p>
			<img src={starwars_logo} />
		</p>
		<Link to="/blog" className="btn btn-success">
			ENTER THE BLOG
		</Link>
	</div>
);
