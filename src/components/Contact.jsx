import React from "react";

const Contact = props => {
  console.log(props);

  //auto redirect after 2 seconds by adding this to the history of the component
  //programatic redirect
  setTimeout(() => {
    props.history.push("/about");
  }, 20000);
  return (
    <div className="sample-data-table">
      <div className="container">
        <h4>Contact</h4>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem
          deleniti laboriosam repellendus alias adipisci quia, eos provident.
          Quae rem dolor asperiores facilis. Culpa explicabo est quis
          consectetur, aspernatur blanditiis ut.
        </p>
      </div>
    </div>
  );
};

export default Contact;
