export default function (token = "", action) {
  if (action.type === "addToken") {
    localStorage.setItem("tokenLocal", action.token);
    return action.token;
  } else if (action.type === "removeToken") {
    localStorage.clear();
    return action.token;
  } else {
    const tokenLocal = localStorage.getItem("tokenLocal");
    return tokenLocal;
  }
}
