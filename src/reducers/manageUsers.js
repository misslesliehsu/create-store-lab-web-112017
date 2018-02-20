export default function manageUsers(state = {users: []}, action){
  if (action.type === 'ADD_USER'){
    return ({...state, users: [...state.users, action.user]})
  }
  return state
}
