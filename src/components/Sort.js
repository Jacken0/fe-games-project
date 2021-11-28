export default function Sort({ setSort, setOrder }) {
  return (
    <div>
      <label>Sort by:</label>
      <select
        onChange={(e) => {
          setSort(e.currentTarget.value);
        }}
      >
        <option value="reviews.created_at">Date</option>
        <option value="comment_count">Comments</option>
        <option value="reviews.votes">Votes</option>
      </select>
      <select
        onChange={(e) => {
          setOrder(e.currentTarget.value);
        }}
      >
        <option value="asc">Asc</option>
        <option value="desc">Desc</option>
      </select>
    </div>
  );
}
