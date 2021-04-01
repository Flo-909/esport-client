export default function (token = "", action) {
  if (action.type === "addToken") {
    console.log("ADDTOKEN", action.token);
    localStorage.setItem("tokenLocal", action.token);
    return action.token;
  } else if (action.type === "removeToken") {
    localStorage.clear();
    console.log("REMOVE TOKEN", action.token);
    return action.token;
  } else {
    const tokenLocal = localStorage.getItem("tokenLocal");
    console.log("GET TOKEN LOCALSTORAGE ", tokenLocal);
    return tokenLocal;
  }
}
