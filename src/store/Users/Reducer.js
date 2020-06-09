import { Actions } from './Actions';
import { INITIAL_STATE } from './InitialState';

const ACTION_HANDLERS = {
    [Actions.GET_USERS_SUCCESS]: (state, action) => {
        const tempState = { ...state };
        tempState.list = action.users;
        return { ...state, ...tempState};
    },

    [Actions.SAVE_USER_SUCCESS]: (state) => {
        return { ...state };
    }
};

export default function reduce(state, action) {
    state = state || INITIAL_STATE;
    const handler = ACTION_HANDLERS[action.type];
    return handler ? handler(state, action) : state;
}
