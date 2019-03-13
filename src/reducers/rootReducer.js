//we're initiating our state here with these dummy data
const initState = {
  posts: [
    {
      id: 1,
      title: "Cras ultricies ligula sed magna dictum porta.",
      body: "Curabitur aliquet quam id dui posuere blandit."
    },
    {
      id: 2,
      title: "Vivamus suscipit tortor eget felis porttitor volutpat.",
      body: "Sed porttitor lectus nibh. Nulla porttitor accumsan tincidunt."
    },
    {
      id: 3,
      title: "Sed porttitor lectus nibh.",
      body:
        "Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla porttitor accumsan tincidunt."
    }
  ]
};

const rootReducer = (state = initState, action) => {
  console.log(action);
  //DELETING A POST
  if (action.type === "DELETE_POST") {
    let newPosts = state.posts.filter(post => {
      return action.id !== post.id;
    });
    return {
      ...state,
      posts: newPosts
    };
  }

  return state;
};

export default rootReducer;
