export default function (role = "", action) {
  if (action.type === "addRole") {
    localStorage.setItem("role", action.role);
    return action.role;
  } else if (action.type === "removeRole") {
    localStorage.clear();
    return action.role;
  } else {
    const roleLocal = localStorage.getItem("role");
    return roleLocal;
  }
}
