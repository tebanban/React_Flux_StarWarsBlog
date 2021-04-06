import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/blog.scss";
import cardImg from "../../img/400x200.png";
import { Card, Row, Button } from "react-bootstrap";

export const Blog = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.fetchPeople();
	}, []);

	return (
		<div className="container">
			{/* <span>{JSON.stringify(store.peopleList)}</span> */}
			<h3>Characters</h3>
			<span>{JSON.stringify(store.favorites)}</span>
			<Row className="d-flex justify-content-between overflow-auto">
				{store.peopleList.map((item, index) => {
					return (
						<Card className="mb-3" key="index" style={{ width: "16rem" }}>
							<img src={cardImg} />
							<Link to={"/single/" + index}>
								<h5>{item.name}</h5>
							</Link>
							<p>
								Gender:
								{" " + item.gender}
							</p>
							<p>
								Birth year:
								{" " + item.birth_year}
							</p>
							<Button variant="primary" onClick={() => actions.setFavorites(item.name)}>
								&#9825;
							</Button>
						</Card>
					);
				})}
			</Row>

			<br />
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
};
