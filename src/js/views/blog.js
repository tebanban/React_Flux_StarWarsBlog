import React from "react";
import "../../styles/home.scss";
import Character from "../component/character";
import Planet from "../component/planet";
import Starship from "../component/starship";

export const Blog = () => (
	<div className="blog">
		<Character />
		<Planet />
		<Starship />
	</div>
);
