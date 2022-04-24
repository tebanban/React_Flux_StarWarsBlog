import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import cardImg from "../../img/400x200.png";
import { Card, Button } from "react-bootstrap";

const Characters = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.fetchPeople();
	}, []);

	return (
		<div className="container pb-4">
			<h3 className="blogSubtitle">Characters</h3>
			<span className="altfavList">{JSON.stringify(store.favorites)}</span>
			<div className="d-flex justify-content-between overflow-auto">
				{store.peopleList.map((item, index) => {
					return (
						<Card className="mx-2 p-1 card" key={Math.random() * 1000} style={{ minWidth: "16rem" }}>
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
							<div className="d-flex justify-content-between">
								<Link to={"/single/" + index}>
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
export default Characters;
