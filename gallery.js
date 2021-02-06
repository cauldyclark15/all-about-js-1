(function () {
  if (typeof window !== "undefined") {
    var btn1 = document.createElement("button");
    btn1.id = "btn1";
    btn1.innerText = "Fire";
    btn1.addEventListener("click", function () {
      console.log("IS THIS GONNA WORK?");
    });

    var body = document.body;

    if (body) {
      body.appendChild(btn1);
    }
  }
})();
