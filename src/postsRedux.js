//selectors
export const getAllPosts= (state) => state.posts;

// actions
const createActionName = actionName => `app/posts/${actionName}`;

export const LOAD_POSTS= createActionName('LOAD_POSTS');
export const REMOVE_POST=createActionName('REMOVE_POST');
export const ADD_POST = createActionName('ADD_POST')

export const removePost=id=> ({type:REMOVE_POST, payload:id});

export const addPost=(post) => ({type:ADD_POST, payload:post})

// action creators
const postsReducer = (statePart = [], action) => {
  switch (action.type) {
    case REMOVE_POST:
      return statePart.filter(post=>post.id !== action.payload);
    case ADD_POST:
      return [...statePart, action.payload]
    default:
      return statePart;
  };
};

export default postsReducer;