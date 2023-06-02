```javascript
const [isLoading, setIsLoading] = useState(true);
const imagePaths = [imageX, imageY, imageZ]; // Replace with the paths to your images

useEffect(() => {
	const imageLoaders = imagePaths.map((path) => {
		const imageLoader = new Image();
		imageLoader.src = path;
		return new Promise((resolve) => {
			imageLoader.onload = resolve;
		});
	});

	Promise.all(imageLoaders).then(() => {
		setIsLoading(false);
	});
}, []);
```
maybe add this as a function, which takes in a list of images, a state and maybe a function to set loading to false

