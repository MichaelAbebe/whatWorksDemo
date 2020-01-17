import { createReducer } from "../../app/Common/Util/ReducerUtils";
import { CREATE_POST, UPDATE_POST, DELETE_POST } from "./PostConstants";
const initialState = [
  {
    id: "1",
    hostedBy: "Yonathan ",
    ticker: "DRRX",
    catalyst: "culture",
    catalystDate:'2019-01-01',
    date: "2018-03-27",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",

    hostPhotoURL: "https://randomuser.me/api/portraits/men/21.jpg",
    comments: [
      {
        id: "a",
        name: "mikea",
        photoURL: "/assets/user.jpg",
        description: "this is a comment "
      }
    ]
  },
  {
    id: "2",
    hostedBy: "Tom",
    ticker: "URGN",
    catalyst: "Earnings",
    date: "2018-03-28",
    category: "drinks",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
    hostPhotoURL: "https://randomuser.me/api/portraits/men/22.jpg",
    comments: [
      {
        id: "a",

        name: "joni",
        photoURL: "https://randomuser.me/api/portraits/men/22.jpg",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget  "
      }
    ]
  }
];

const createPost = (state, payload) => {
  return [...state, payload.post];
};
const updatePost = (state, payload) => {
  return [...state.filter(post => post.id !== payload.post.id), payload.post];
};
const deletePost = (state, payload) => {
  return [...state.filter(post => post.id !== payload.postId)];
};

export default createReducer(initialState, {
  [CREATE_POST]: createPost,
  [UPDATE_POST]: updatePost,
  [DELETE_POST]: deletePost
});
