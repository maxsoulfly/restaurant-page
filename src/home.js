export default function loadHome() {
    const content = document.getElementById("content");
    content.innerHTML = "";

    const container = document.createElement("div");

    const title = document.createElement("h1");
    title.classList.add("glitch");
    title.textContent = "Welcome to Maxx's Tavern";
    container.appendChild(title);

    const description = document.createElement("p");
    description.textContent =
        "Welcome to Maxx's Tavern. Neon flickers against the rain-slicked chrome of the alley as the door hisses open. Inside, it's low light and lower loyalty—just synth smoke, rusted beats, and stories soaked in old code and older whiskey. No questions, no promises. Just drink, deals, and the dying hum of forgotten tech.";

    container.appendChild(description);

    content.appendChild(container);
}
