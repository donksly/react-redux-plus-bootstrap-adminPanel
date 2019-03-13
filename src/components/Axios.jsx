import React, { Component } from "react";
import Rainbow from "../components/hoc/Rainbow";
import axios from "axios";
import Loader from "../components/widgets/Loader";
import { Link } from "react-router-dom";
import Pokeball from "../components/assets/pokeball.png";

//REACT REDUX

class Axios extends Component {
  state = {
    posts_array: []
  };
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(res => {
      console.log(res);
      this.setState({
        posts_array: res.data.slice(0, 10)
      });
    });
  }

  style_card = {
    maxWidth: "100%"
  };
  render() {
    const { posts_array } = this.state;
    const postList = posts_array.length ? (
      posts_array.map(posts_array => {
        return (
          <div key={posts_array.id}>
            <div className="card" style={this.style_card}>
              <div className="card-content">
                <div className="card-body">
                  <div className="card-title">
                    <h4>
                      <Link to={"/" + posts_array.id}>{posts_array.title}</Link>
                    </h4>
                  </div>
                  <div className="card-subtitle">777 subtitle</div>
                  <div className="card-text">
                    <img className="pokeball-icon" src={Pokeball} alt="" />
                    {posts_array.body}
                  </div>
                </div>
              </div>
            </div>
            <br />
          </div>
        );
      })
    ) : (
      //set loader here
      <div>
        <Loader />
        <div className="text-center">No posts yet!</div>
      </div>
    );
    return (
      <div className="container">
        <h4>Axios</h4>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi nisi
          error quos molestias animi. Nisi unde debitis temporibus libero optio,
          veniam harum vel soluta pariatur nulla. Aliquam eligendi ab iure?
        </p>
        {postList}
      </div>
    );
  }
}

export default Rainbow(Axios);
