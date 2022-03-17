import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import BookmarkList from "./components/BookmarkList";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<BookmarkList />} />
				<Route path="/bookmarks/:id" element={<Bookmark />} />
			</Routes>
		</>
	);
}

export default App;
