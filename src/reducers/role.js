export default function (role = "", action) {
  if (action.type === "addRole") {
    console.log("ADDROLE", action.role);
    localStorage.setItem("role", action.role);
    return action.role;
  } else if (action.type === "removeRole") {
    localStorage.clear();
    console.log("REMOVE ROLE", action.role);
    return action.role;
  } else {
    const roleLocal = localStorage.getItem("role");
    console.log("GET ROLE LOCALSTORAGE", roleLocal);
    return roleLocal;
  }
}
