import React from "react";
import "../../styles/home.scss";
import Characters from "../component/characters";
import Planets from "../component/planets";
import Starships from "../component/starships";

export const Blog = () => (
	<div className="blog">
		<Characters />
		<Planets />
		<Starships />
	</div>
);
