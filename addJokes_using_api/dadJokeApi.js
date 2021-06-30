const getDadJokes = async () => {
  try {
    const config = { headers: { Accept: "application/json" } };
    const res = await axios.get("https://icanhazdadjoke.com/", config);
    const jokeText = res.data.joke;
    const li = document.createElement("li");
    li.innerHTML = jokeText;
    list.appendChild(li);
  } catch (err) {
    console.log("ERROR ", err);
  }
};

const list = document.querySelector("ul");
const button = document.getElementById("btn");
button.addEventListener("click", getDadJokes);
