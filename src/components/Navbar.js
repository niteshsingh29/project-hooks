function Navbar() {
  return (
    <div className="navbar">
      <ul
        className="navbar-ul"
        style={{
          listStyle: "none",
          display: "flex",
          flexDirection: "row",
          
        }}
      >
        <a href="www.google.com" style={{textDecoration: "none"}}>
          <li style={{ marginRight: "10px" }}>Home</li>
        </a>
        <a href="www.google.com" style={{textDecoration: "none"}}>
          <li style={{ marginRight: "10px" }}>Add Users</li>
        </a>
        <a href="www.google.com" style={{textDecoration: "none"}}>
          <li style={{ marginRight: "10px" }}>Details</li>
        </a>
      </ul>
    </div>
  );
}

export default Navbar;
