export const getName = (state) => state?.auth?.user?.name;

export const getEmail = (state) => state?.auth?.user?.email;

export const getIsAuthenticated = (state) => state.auth.isAuthenticated;

export const getIsLoading = (state) => state.auth.loading;
