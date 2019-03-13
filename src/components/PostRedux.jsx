import React, { Component } from "react";
import Loader from "./widgets/Loader";
import Pokeball from "../components/assets/pokeball.png";

//Redux
import { connect } from "react-redux";

//Redux - action creators
import { deletePost } from "../actions/postActions";

class PostRedux extends Component {
  handleDeleteButtonClick = () => {
    //execute post delete
    this.props.deletePost(this.props.post.id);

    //rediret to redux route
    this.props.history.push("/redux");
  };

  render() {
    console.log(this.props);
    const post = this.props.post ? (
      <div className="post">
        <h2 className="text-center">{this.props.post.id}</h2>
        <h4 className="text-center">{this.props.post.title}</h4>
        <p>
          <img className="pokeball-icon" src={Pokeball} alt="" />
          {this.props.post.body}
        </p>
        <div className="text-center">
          <button
            className="btn btn-danger"
            onClick={this.handleDeleteButtonClick}
          >
            <i className="fa fa-trash-o" /> DELETE POST
          </button>
        </div>
      </div>
    ) : (
      <div>
        <Loader />
        <div className="text-center">Loading Post!</div>
      </div>
    );
    return <div className="container">{post}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.post_id;
  return {
    post: state.posts.find(post => post.id == id)
  };
};

const mapDispatchTProps = dispatch => {
  return {
    deletePost: id => {
      //working well but replaced with postActions for code reusability
      //dispatch({ type: "DELETE_POST", id: id });
      dispatch(deletePost(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchTProps
)(PostRedux);
