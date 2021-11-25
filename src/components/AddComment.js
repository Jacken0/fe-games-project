import { useContext } from "react";
import { UserContext } from "../contexts/user";

export default function AddComment() {
  const { user } = useContext(UserContext);

  return (
    <div>
      <form>
        <fieldset>
          <legend>Post a comment</legend>
          <input
            type="text"
            name="comment_body"
            id="comment_body"
            required
          ></input>
          <button
            type="submit"
            id="submit"
            onClick={(e) => {
              e.preventDefault();
              const comment = {
                body: e.target.form[1].value,
                author: user.username,
              };
              console.log(comment);
            }}
          >
            Post
          </button>
        </fieldset>
      </form>
    </div>
  );
}
