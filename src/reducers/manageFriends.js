export function manageFriends(state = {
    friends: [], //the initial state should be an object with a key, friends, set to an empty array
  }, action) {
    switch(action.type) {
  
      case "ADD_FRIEND":
        return (
          {...state,
              friends: [
                ...state.friends,
                action.friend
              ]
          }
      )
  
      case "REMOVE_FRIEND":
        const removalIndex = state.friends.findIndex(friend => friend.id === action.id);
        return (
          {...state,
              friends: [
                ...state.friends.slice(0, removalIndex),
                ...state.friends.slice(removalIndex + 1)
              ]
          }
        )
  
      default:
        return state;
  
    }
  };

