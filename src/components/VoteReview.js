import { useState } from "react";
import { patchVotes } from "../Utils/api";

export default function VoteReview({ singleReview }) {
  const [addedVote, setAddedVote] = useState(0);

  const handleClick = () => {
    setAddedVote((prevVotes) => prevVotes + 1);
    patchVotes(singleReview.review_id, 1).catch(() => {
      setAddedVote((prevVotes) => prevVotes - 1);
    });
  };
  const handleClick2 = () => {
    setAddedVote((prevVotes) => prevVotes - 1);
    patchVotes(singleReview.review_id, -1).catch(() => {
      setAddedVote((prevVotes) => prevVotes + 1);
    });
  };

  return (
    <>
      <h4>Votes: {singleReview.votes + addedVote}</h4>
      <button onClick={handleClick} className="Vote__Button">
        +
      </button>
      <button onClick={handleClick2} className="Vote__Button">
        -
      </button>
    </>
  );
}
