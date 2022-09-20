import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/Analytics";
import About from "./pages/About";
import Product from "./pages/Product";
import Comment from "./pages/Comment";
import AddProduct from "./pages/AddProduct";

function App() {
	return (
		<BrowserRouter>
			<Sidebar>
				<Routes>
					<Route path="/dashboard" element={<Dashboard />} />
					<Route path="/analytics" element={<Analytics />} />
					<Route path="/about" element={<About />} />
					<Route path="/product" element={<Product />} />
					<Route path="/comment" element={<Comment />} />
					<Route path="/add-product" element={<AddProduct />} />
				</Routes>
			</Sidebar>
		</BrowserRouter>
	);
}

export default App;
