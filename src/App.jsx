import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { Route, Routes, useNavigate } from "react-router-dom";
import logo from "./assets/images/logo.png";
import { Booking, Footer, Landing, Navbar } from "./components";
import { CursorCircle } from "./components/utilities";

function App() {
	return (
		<>
			<Navbar />
			<main className="flex-grow selection:bg-sandy-brown">
				<CursorCircle />
				<Routes>
					<Route path="/" Component={Landing} />
					<Route path="/bookings" Component={Booking} />
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
		<section className="h-screen fixed z-50 inset-0 bg-white">
			<div className="flex items-center justify-center flex-col gap-4 h-full text-amber-900">
				<h1 className="flex items-center justify-center gap-2 flex-col  md:flex-row">
					<div className="w-20 h-20">
						<img src={logo} alt="img" />
					</div>
					<span className="font-bold text-[40px] text-center mx-auto">
						Hold on Chief I still dey cooook!☹
					</span>
				</h1>
				<div className="px-3 container mt-10 mx-auto flex justify-center items-center"></div>
				<button
					onClick={() => navigate(-1)}
					className="bg-sandy-brown/40 text-amber-900 font-bold text-lg flex  items-center gap-3 rounded-lg border-2 border-sandy-brown py-1.5 px-6 hover:bg-sandy-brown/50 transition-all duration-300 group"
				>
					<span>
						<ArrowLeftIcon className="w-6 h-6 transition-all duration-300 group-hover:mr-3" />
					</span>
					Previous page
				</button>
			</div>
		</section>
	);
}
