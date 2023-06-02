import { useEffect, useRef, useState } from "react";
import Footer from "./components/footer/footer";
import Landing from "./components/main/landing";
import Navbar from "./components/navbar/navbar";
import imageX from "./assets/images/house3.jpeg";
import imageY from "./assets/images/house4.jpg";
import imageZ from "./assets/images/house3.jpeg";

function App() {
	return (
		<>
			{/* <Navbar />
			<Landing />
			<Footer /> */}
			<MyComponent />
		</>
	);
}

export default App;

// const LoadingPage = () => {
// 	return (
// 		<div>
// 			<h2>Loading...</h2>
// 			<p className="absolute left-0 right-0">testing image loader hence i commented all the other codes.</p>
// 		</div>
// 	);
// };

// const MyComponent = () => {
// 	const [isLoading, setIsLoading] = useState(true);

// 	useEffect(() => {
// 		const imageLoader = new Image();
// 		const imageUrl = imageZ

// 		imageLoader.src = imageUrl;

// 		imageLoader.onload = () => {
// 			setIsLoading(false);
// 		};
// 	}, []);

// 	return (
// 		<div>
// 			{isLoading ? (
// 				<LoadingPage />
// 			) : (
// 				<div>
// 					<h2>Images Loaded</h2>
// 					{/* Render your images here */}
// 					<img
// 						src={imageZ}
// 						alt="Your Image"
// 					/>
// 				</div>
// 			)}
// 		</div>
// 	);
// };

// const MyComponent = () => {
// 	const [isLoading, setIsLoading] = useState(true);
// 	const imagePaths = [
// 		imageX,
// 		imageY,
// 		imageZ,
// 	]; // Replace with the paths to your images

// 	useEffect(() => {
// 		const imageLoaders = imagePaths.map((path) => {
// 			const imageLoader = new Image();
// 			imageLoader.src = path;
// 			return new Promise((resolve) => {
// 				imageLoader.onload = resolve;
// 			});
// 		});

// 		Promise.all(imageLoaders).then(() => {
// 			setIsLoading(false);
// 		});
// 	}, []);

// 	return (
// 		<div>
// 			{isLoading ? (
// 				<LoadingPage />
// 			) : (
// 				<div>
// 					<h2>Images Loaded</h2>
// 					{/* Render your images here */}
// 					{imagePaths.map((path, index) => (
// 						<img key={index} src={path} alt={`Image ${index}`} />
// 					))}
// 				</div>
// 			)}
// 		</div>
// 	);
// };
