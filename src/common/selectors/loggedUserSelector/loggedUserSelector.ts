import {User} from "../../types/user/User";

type StateWithUser = { users: { loggedInUser?: User } }


const loggedUserSelector = (state: StateWithUser) => state.users.loggedInUser;

export default loggedUserSelector;