

export const getCookieFromStore = (store) => {
    const state = store.getState();
    return state.cookie.tokenRedux
};