const epicMix = [
    "Under the Bridge",
    "Give It Away",
    "Smells Like Teen Spirit",
    "Alive",
    "What I Got",
    "Creep",
    "Cherub Rock",
    "Say Hello 2 Heaven",
    "When I Come Around",
    "Would?",
    "Zombie",
    "Loser"
  ];
  
  const mixList = document.querySelector(".mix");
  const button = document.querySelector(".show-list");
  const total = document.querySelector(".total");
  
  button.addEventListener("click", () => {
    mixInfo(epicMix);
    mixList.classList.remove("hide");
    button.classList.add("hide");
  });
  
  total.innerText = `${epicMix.length} of the Best 90's Alternative Rock Songs`;
  
  const mixInfo = function (mix) {
    mix.forEach(function (song, index) {
      let li = document.createElement("li");
      li.classList.add("song");
      li.innerHTML = `<span class="song-number">#${index + 1}</span> ${song}`;
      mixList.append(li);
    });
  };
  