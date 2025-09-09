import "./custom-bootstrap.scss";

import "./App.css";
import { Card, Container } from "react-bootstrap";
import Name from "./Name";
import Price from "./Price";
import Description from "./Description";
import Image from "./Image";
import { motion } from "framer-motion";

const myName = "Yosef Berrak";

function App() {
	return (
		<>
			<Container className="mt-5 d-flex justify-content-center m-20 bg-light">
				<Card style={{ width: "44rem" }} className="shadow-lg">
					<Image />

					<Card.Body className="m-22 h4">
						<Name />
						<Price />
						<Description />
					</Card.Body>
				</Card>
			</Container>
			<div
				style={{
					textAlign: "center",
					marginTop: "55px",
				}}>
				<Card.Text
					as={motion.p}
					animate={{ y: [0, -10, 0] }}
					transition={{
						duration: 1.5,
						repeat: Infinity,
						ease: "easeInOut",
					}}
					style={{ fontSize: "44px", fontFamily: "fantasy" }}>
					{myName ? (
						<>
							{`Hello ${myName}!`}
							<br />{" "}
							<img
								src="https://i.pinimg.com/originals/67/d0/13/67d0137c6517d5ed0fcc461f2582dcfd.gif"
								width="200px"
							/>
						</>
					) : (
						"Hello There!"
					)}
				</Card.Text>
			</div>
		</>
	);
}

export default App;
