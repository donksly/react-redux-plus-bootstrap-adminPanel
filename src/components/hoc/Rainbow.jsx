import React from "react";

const Rainbow = WrappedComponent => {
  const colors = ["teal", "grey", "cornflowerblue", "purple"];
  const randomColor = colors[Math.floor(Math.random() * 5)];
  const colorStyles = { color: randomColor };
  //const colorStyles = randomColor;

  return props => {
    return (
      <div style={colorStyles}>
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default Rainbow;
