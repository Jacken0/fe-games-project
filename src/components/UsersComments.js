import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/user";
import { getUsersComments, deleteComment } from "../Utils/api";

export default function UsersComments() {
  const { user } = useContext(UserContext);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getUsersComments(user).then((commentsFromServer) => {
      setComments(commentsFromServer);
    });
  }, [comments]);
  const handleClick = (e) => {
    e.preventDefault();
    deleteComment(e.target.id).then((res) => {
      setComments([res]);
    });
  };

  return (
    <div className="UsersComments">
      <h2>My Comments</h2>
      <ul>
        {comments.map((comment) => {
          return (
            <li key={comment.comment_id}>
              <p>{comment.body}</p>
              <p>Created: {comment.created_at}</p>
              <p>Likes: {comment.votes}</p>
              <button
                id={comment.comment_id}
                onClick={handleClick}
                className="Delete__Button"
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
