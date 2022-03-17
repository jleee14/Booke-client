import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import BookmarkList from "./components/BookmarkList";
import Bookmark from "./components/Bookmark";

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
