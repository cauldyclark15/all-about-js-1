window.onload = async function () {
  var pre = document.createElement("pre");
  var samp = document.createElement("samp");
  var users = [];

  try {
    var resp = await fetch("/users");
    users = await resp.json();
  } catch (error) {
    console.log({ error });
  }

  var usersStr = JSON.stringify(users, null, 2);
  samp.innerText = usersStr;

  pre.appendChild(samp);
  var body = document.body;

  body.appendChild(pre);
};
