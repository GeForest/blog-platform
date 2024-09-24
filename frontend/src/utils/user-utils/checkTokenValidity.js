import signOut from "./signOut";

export const checkTokenValidity = (dispatch, isSession) => {
  const token = localStorage.getItem('token');

  if (token) {
    const tokenPayload = JSON.parse(atob(token.split('.')[1]));
    const expirationTime = tokenPayload.exp * 1000;
    if (Date.now() > expirationTime) {
      signOut(dispatch, isSession)
    }
  } else {
    signOut(dispatch, isSession)
  }
}
