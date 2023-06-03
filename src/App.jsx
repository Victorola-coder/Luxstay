import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/footer";
import Landing from "./components/main/landing/landing";
import Navbar from "./components/navbar/navbar";
import LoadingScreen from "./utilities/loadingScreen";
import Bookings from "./components/main/bookings/booking";

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route Component={Landing} path="/" />
				<Route Component={Bookings} path="/bookings" />
				<Route path="*" Component={Apple} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;

function Apple() {
	return (
		<section className="h-screen w-full flex items-center justify-center fixed z-50 inset-0 bg-white text-teal-900">
			<h1 className="text-3xl font-bold">UnImplemented Page</h1>
		</section>
	)
}