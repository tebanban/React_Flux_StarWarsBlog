import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/blog.scss";
import { Card } from "react-bootstrap";

export const Blog = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.fetchPeople();
	}, []);

	return (
		<div className="container">
			{/* <span>{JSON.stringify(store.peopleList)}</span> */}
			<h3>Characters</h3>
			<ul>
				{store.peopleList.map((item, index) => {
					return (
						<Card key="index" style={{ width: "14rem" }}>
							<Link to={"/single/" + index}>
								<h5>{item.name}</h5>
								<p>{item.gender}</p>
								<p>{item.birth_year}</p>
							</Link>
						</Card>
					);
				})}
			</ul>

			<br />
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
};
