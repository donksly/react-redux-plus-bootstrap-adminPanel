import React from "react";
import Rainbow from "../components/hoc/Rainbow";
const About = () => {
  return (
    <div className="container">
      <h4>About</h4>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
        voluptates hic, eum reiciendis cumque eligendi nam tempora asperiores
        ducimus doloremque amet dicta dolorem aliquam magnam voluptate totam
        quisquam omnis? Fugit.
      </p>
    </div>
  );
};

export default Rainbow(About);
