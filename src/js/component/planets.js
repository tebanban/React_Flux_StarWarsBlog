import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/blog.scss";
import cardImg from "../../img/400x200.png";
import { Card, Button } from "react-bootstrap";

const Planets = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.fetchPlanets();
	}, []);

	return (
		<div className="container pb-4">
			<h3>Planets</h3>
			<span className="altfavList">{JSON.stringify(store.favorites)}</span>
			<div className="d-flex justify-content-between overflow-auto">
				{store.planetsList.map((item, index) => {
					return (
						<Card className="mx-2 p-1" key={Math.random() * 1000} style={{ minWidth: "16rem" }}>
							<img src={cardImg} />
							<Link to={"/single/" + index}>
								<h5>{item.name}</h5>
							</Link>
							<p>
								Climate:
								{" " + item.climate}
							</p>
							<p>
								Diameter:
								{" " + item.diameter}
							</p>
							<div className="d-flex justify-content-between">
								<Link to={"/singleplanet/" + index}>
									<Button variant="outline-primary">Learn more...</Button>
								</Link>
								{store.favorites.includes(item.name) ? (
									<Button style={{ width: "3rem" }} disabled>
										&#9825;
									</Button>
								) : (
									<Button
										style={{ width: "3rem" }}
										variant="outline-warning"
										onClick={() => actions.setFavorites(item.name)}>
										&#9825;
									</Button>
								)}
							</div>
						</Card>
					);
				})}
			</div>

			<br />
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
};
export default Planets;
