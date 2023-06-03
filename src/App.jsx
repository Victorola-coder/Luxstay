import { Route, Routes, useNavigate } from "react-router-dom";
import Footer from "./components/footer/footer";
import Landing from "./components/main/landing/landing";
import Navbar from "./components/navbar/navbar";
import LoadingScreen from "./utilities/loadingScreen";
import Bookings from "./components/main/bookings/booking";
import BookRoom from "./components/main/bookingDetailed/bookRoom";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import Cart from "./components/main/cart/cart";

function App() {
	return (
		<>
			<Navbar />
			<main className="flex-grow">
				<Routes>
					<Route Component={Landing} path="/" />
					<Route Component={Bookings} path="/bookings" />
					<Route Component={BookRoom} path="/bookings/:id" />
					<Route Component={Cart} path="/cart" />
					<Route path="*" Component={Error404Page} />
				</Routes>
			</main>
			<Footer />
		</>
	);
}

export default App;

function Error404Page() {
	const navigate = useNavigate();
	return (
		<section className="h-screen w-full flex items-center justify-center fixed z-50 inset-0 bg-white text-teal-900 flex-col gap-4">
			<h1 className="text-3xl font-bold">UnImplemented Page</h1>
			<div className="px-3 container mx-auto flex justify-center items-center">
				<button
					onClick={() => navigate(-1)}
					className="bg-teal-200 text-teal-900 font-bold text-lg flex  items-center gap-3 rounded-lg border-2 border-teal-300 py-1.5 px-6 hover:bg-teal-300 transition-all duration-300 group"
				>
					<span>
						<ArrowLeftIcon className="w-6 h-6 transition-all duration-300 group-hover:mr-3" />
					</span>
					Go back
				</button>
			</div>
		</section>
	);
}
