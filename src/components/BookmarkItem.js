import { Link } from "react-router-dom";

function BookmarkItem({ bookmark }) {
  return (
    <li>
      <Link to={`/bookmarks/${bookmark._id}`}>{bookmark.title}</Link>
    </li>
  );
}

export default BookmarkItem;
