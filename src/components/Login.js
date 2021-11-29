export default function Login({ setUser }) {
  const handleSubmit = (e) => {
    console.log(e);
  };

  return (
    <div className="Login">
      <h2>LOGIN</h2>
      <p>Please log in</p>
      <form onSubmit={handleSubmit}>
        <input type="text" name="Username" id="username"></input>
        <button type="submit">Login</button>
        <h2 id="Error">Error</h2>
      </form>
    </div>
  );
}
