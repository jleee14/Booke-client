import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Bookmark() {
	const { id } = useParams();
	const [bookmark, setBookmark] = useState(null);

	useEffect(async () => {
		try {
			axios
				.get(`http://localhost:4000/api/bookmarks/${id}`)
				.then((response) => {
					setBookmark(response);
				});
		} catch (error) {}
	});
	return <div>Test</div>;
}

export default Bookmark;
