import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi, how are you?", likesCount: "2" },
        { id: 2, message: "It's my first post", likesCount: "16" },
        { id: 3, message: "Blabla", likesCount: "12" },
      ],
      newPostText: "",
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: "Dimych" },
        { id: 2, name: "Slava" },
        { id: 3, name: "Bossk" },
        { id: 4, name: "Sveta" },
        { id: 5, name: "Sasha" },
        { id: 6, name: "Victor" },
        { id: 7, name: "Merlin" },
      ],
      messages: [
        { id: 1, message: "Hi" },
        { id: 2, message: "How is your dogge?" },
        { id: 3, message: "blepblepblep" },
      ],
      newMessageBody: "",
    },
    sidebar: {},
  },
  _callSubscriber() {
    console.log("State changed");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  },
};

export default store;
window.store = store;
