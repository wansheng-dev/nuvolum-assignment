import { lazy, Suspense } from "react";
import "./App.scss";

const Carousel = lazy(() => import("./components/Carousel/Carousel"));
const renderLoader = () => <h3 className="loading">Loading</h3>;

const data = require("./data/slider-data.json");

function App() {
	return (
		<div className="App">
			<div className="container">
				<h1>Lorem Ipsum</h1>
				<div className="row">
					<p className="paragraph">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Auctor
						elit sed vulputate mi sit amet mauris. Tortor condimentum lacinia
						quis vel eros donec.
					</p>
				</div>
				<div className="row">
					<Suspense fallback={renderLoader()}>
						<Carousel data={data} />
					</Suspense>
				</div>
				<div className="row signature">
					<p>Created by Wan Sheng</p>
					<p>
						Tech Stack: Create-React-App, Sass, Node-Sass, and React-Icons,
						Heroku
					</p>
				</div>
			</div>
		</div>
	);
}

export default App;
