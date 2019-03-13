import React, { Component } from "react";
import axios from "axios";
import Loader from "../components/widgets/Loader";
import Pokeball from "../components/assets/pokeball.png";

class Post extends Component {
  state = {
    post: null
  };
  //find route params
  componentDidMount() {
    console.log(this.props);
    if (this.props) {
      console.log(this.props);
      let id = this.props.match.params.post_id;
      axios
        .get("https://jsonplaceholder.typicode.com/posts/" + id)
        .then(res => {
          //\console.log(res);
          this.setState({
            post: res.data
          });
        });
    }
  }
  render() {
    const post = this.state.post ? (
      <div className="post">
        <h2 className="text-center">{this.state.post.id}</h2>
        <h4 className="text-center">{this.state.post.title}</h4>
        <p>
          <img className="pokeball-icon" src={Pokeball} alt="" />
          {this.state.post.body}
        </p>
      </div>
    ) : (
      <Loader />
    );
    return <div className="container">{post}</div>;
  }
}

export default Post;
