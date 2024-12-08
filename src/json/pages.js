export const pages = [
  {
    id: "1",
    path: "/",
    title: "home",
    allowed: true,
    auth: false,
    allowedRole: "ALL",
  },
  {
    id: "2",
    path: "/myPets",
    title: "My Pets",
    allowed: true,
    auth: true,
    allowedRole: "User",
  },
  {
    id: "3",
    path: "/shop",
    title: "Shop",
    allowed: true,
    auth: false,
    allowedRole: "ALL",
  },
  {
    id: "4",
    path: "/adoption",
    title: "Adopt",
    allowed: true,
    auth: false,
    allowedRole: "ALL",
  },
  {
    id: "5",
    path: "/community",
    title: "Community",
    allowed: true,
    auth: false,
    allowedRole: "ALL",
  },
  {
    id: "6",
    path: "/admin",
    title: "admin",
    allowed: true,
    auth: true,
    allowedRole: "Admin",
  },
];

export const authLinks = [
  {
    id: "1",
    path: "/login",
    title: "Login",
    allowed: true,
    auth: false,
    allowedRole: "ALL",
  },
  {
    id: "2",
    path: "/register",
    title: "Register",
    allowed: true,
    auth: false,
    allowedRole: "ALL",
  },
];
