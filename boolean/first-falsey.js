let isLogin = true;
let isAdmin = false;
let hasAccess = false;

hasAccess = isLogin && isAdmin;

let isGuest = false;
let isMember = true;

let isAllowed = isGuest || isMember;