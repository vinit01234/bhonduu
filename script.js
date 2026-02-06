const messages = [
  "I love you ❤️",
  "Bhot jyda gussa krti ho hm to ragebait v ni kiye aur khud se itna jydaaaaaa gusaaa 😡👿",
  "Ye lo pucchi 😚😚😚😚",
  "Get well asap anushka 🥺🥺",
  "hehehehe 😝😛😛😝"
];

function showLove() {
  const msg = messages[Math.floor(Math.random() * messages.length)];
  document.getElementById("msg").innerText = msg;
}
