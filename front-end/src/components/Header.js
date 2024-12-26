const Header = (props) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1
        style={{ color: "white", backgroundColor: "black"  }}
        className="title  mt-3"
      >
        {props.title}
      </h1>
    </div>
  );
};

Header.defaultProps = {
  title: "",
};

export default Header;
