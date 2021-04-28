import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Container, Row, Col, Media } from "react-bootstrap";
import detailImg from "../../img/800x600.png";

export const Singleplanet = () => {
	const { store } = useContext(Context);
	const params = useParams();
	return (
		<>
			<Container className="singleContent">
				<Media>
					<img width={600} height={400} className="mr-3" src={detailImg} alt="Generic placeholder" />
					<Media.Body className="align-text-center">
						<h5>{store.planetsList[params.theid].name}</h5>
						<p>
							Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin
							commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce
							condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. Cras
							purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
							nisi vulputate fringilla.
						</p>
					</Media.Body>
				</Media>
				<hr />
				<Row>
					<Col>
						<p>Rotational period</p>
						<p>{store.planetsList[params.theid].rotation_period}</p>
					</Col>
					<Col>
						<p>Orbital period</p>
						<p>{store.planetsList[params.theid].orbital_period}</p>
					</Col>
					<Col>
						<p>Diameter</p>
						<p>{store.planetsList[params.theid].diameter}</p>
					</Col>
					<Col>
						<p>Climate</p>
						<p>{store.planetsList[params.theid].climate}</p>
					</Col>
					<Col>
						<p>Gravity</p>
						<p>{store.planetsList[params.theid].gravity}</p>
					</Col>
					<Col>
						<p>Terrain</p>
						<p>{store.planetsList[params.theid].terrain}</p>
					</Col>
				</Row>
				<hr />

				<Link to="/blog" className="btn btn-success">
					THE BLOG
				</Link>
			</Container>
		</>
	);
};
