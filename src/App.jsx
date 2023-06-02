import Footer from "./components/footer/footer";
import Landing from "./components/main/landing";
import Navbar from "./components/navbar/navbar";

function App() {
	return (
		<>
			<Navbar />
			<Landing />
			<Footer />
		</>
	);
}

export default App;

// const MyComponent = () => {
// 	const imagePaths = [imageX, imageY, imageZ];
// 	// const [isLoading, setIsLoading] = useState(true);
// 	// let { setLoadedFalse } = useContext(ImageContext);

// 	// useEffect(() => {
// 	// 	const imageLoaders = imagePaths.map((path) => {
// 	// 		const imageLoader = new Image();
// 	// 		imageLoader.src = path;
// 	// 		return new Promise((resolve) => {
// 	// 			imageLoader.onload = resolve;
// 	// 		});
// 	// 	});

// 	// 	Promise.all(imageLoaders).then(() => {
// 	// 		setLoadedFalse(false)
// 	// 	});
// 	// }, []);

// 	// useEffect(()=>{
// 	// 	setLoadedFalse(false)
// 	// }, [])

// 	return (
// 		<div>
// 			<div>
// 				<h2>Images Loaded</h2>
// 				{/* Render your images here */}
// 				{imagePaths.map((path, index) => (
// 					<img key={index} src={path} alt={`Image ${index}`} />
// 				))}
// 			</div>
// 		</div>
// 	);
// };
