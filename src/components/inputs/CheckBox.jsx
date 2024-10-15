function CheckBox(props) {
  return (
    <input
      type="checkbox"
      style={{
        accentColor: "#297281",
        borderRadius: "25px",
        width: "15px",
        height: "15px",
      }}
      {...props}
    />
  );
}

export default CheckBox;
