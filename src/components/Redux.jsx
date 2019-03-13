import React, { Component } from "react";
import Loader from "../components/widgets/Loader";
import { Link } from "react-router-dom";
import Pokeball from "../components/assets/pokeball.png";

//REACT REDUX
//connect is a redux function that returns a higher order component
import { connect } from "react-redux";

class Redux extends Component {
  style_card = {
    maxWidth: "100%"
  };
  render() {
    console.log(this.props);
    const { posts } = this.props;
    const postList = posts.length ? (
      posts.map(post => {
        return (
          <div key={post.id}>
            <div className="card" style={this.style_card}>
              <div className="card-content">
                <div className="card-body">
                  <div className="card-title">
                    <h4>
                      <Link to={"/redux_post/" + post.id}>{post.title}</Link>
                    </h4>
                  </div>
                  <div className="card-subtitle">999 subtitle</div>
                  <div className="card-text">
                    <img className="pokeball-icon" src={Pokeball} alt="" />
                    {post.body}
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
        <h4>Redux</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur
          quia, provident quae qui, odit hic neque corporis molestiae repellat
          nam architecto voluptatum odio tempora esse totam voluptates, nemo
          dolore. Velit?
        </p>
        {postList}
      </div>
    );
  }
}

//we're mappig the state from redux store to this component's props
const mapStateToProps = state => {
  return {
    //we return only the properties we wish to fetch from the store
    //from the reduces, were taking the state of the component called posts and mapping it to this component props as posts
    posts: state.posts
  };
};

//connect is returning a higher order component that is wrapping the higher order component redux
export default connect(mapStateToProps)(Redux);
