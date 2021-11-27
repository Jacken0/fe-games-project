import { useContext } from "react";
import { UserContext } from "../contexts/user";
import { postComment } from "../Utils/api";

export default function AddComment({ review_id, setComments }) {
  const { user } = useContext(UserContext);

  function clearText() {
    document.getElementById("comment_body").value = "";
  }

  return (
    <div>
      <form>
        <fieldset>
          <legend>Post a comment</legend>
          <textarea
            type="text"
            name="comment_body"
            id="comment_body"
            required
          ></textarea>
          <button
            type="submit"
            id="submit"
            onSubmit={(e) => {
              e.preventDefault();
              const comment = {
                body: e.target.form[1].value,
                username: user.username,
                review_id: Number(review_id),
              };
              clearText();
              postComment(Number(review_id), comment).then((res) => {
                if (res.status === 201) {
                  setComments([res]);
                } else {
                  return <h2>Oops! Something went wrong</h2>;
                }
              });
            }}
          >
            Post
          </button>
        </fieldset>
      </form>
    </div>
  );
}
