const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let body = action.newMessageBody;
      return {
        ...state,
        messages: [...state.messages, { id: 6, message: body }],
      };
    default:
      return state;
  }
};

export const sendMessageCreator = (newMessageBody) => ({
  type: SEND_MESSAGE,
  newMessageBody,
});

export default dialogsReducer;
