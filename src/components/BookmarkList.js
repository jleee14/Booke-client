import React, { useEffect, useState } from React;
import BookmarkItem from "./BookmarkItem";
import axios from "axios";

export default function BookmarkList() {
  const [bookmarks, setBookmarks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    try {
      const res = await axios.get('http://localhost:8000/api/bookmarks')
      setBookmarks(res);
    }
    catch (error) {console.log(error)}
  }, [])

  return (<ul>{bookmarks.map((bookmark) => (
    <BookmarkItem key={bookmark._id} bookmark={bookmark} />
  ))}
  <li>test from bookmark list</li></ul>);

}