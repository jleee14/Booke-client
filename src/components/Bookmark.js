import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import BookmarkList from "./BookmarkList";

function Bookmark() {
  const { id } = useParams();
  const [bookmark, setBookmark] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:8000/api/bookmarks/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setBookmark(data);
        console.log(data);
      })
      .catch(console.error);
    // async await syntax didn't work
    // try {
    //   const res = axios.get(`http://localhost:8000/api/bookmarks/${id}`);
    //   console.log("test here too");

    //   console.log("test data");
    //   console.log(res);
    //   setBookmark(res.data);
    // } catch (error) {}
  }, [id]);

  const handleDelete = async (event) => {
    const confirm = window.confirm(
      "are you sure you want to delete this bookmark?"
    );
    if (confirm) {
      try {
        const res = await axios.delete(
          `http://localhost:8000/api/bookmarks/${id}`
        );
        if (res.status === 200) {
          navigate("/");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div>
      <p>Bookmark Name: {bookmark.title}</p>
      <p>
        URL: <a href={bookmark.url}>{bookmark.url}</a>
      </p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default Bookmark;
