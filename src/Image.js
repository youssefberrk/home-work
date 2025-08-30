import React from "react";
import product from "./product";
import { Card } from "react-bootstrap";

const Image = () => {
	return <Card.Img src={product.image} alt="tv image" />;
};

export default Image;
