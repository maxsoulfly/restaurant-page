export default function loadAbout() {
    const content = document.getElementById("content");
    content.innerHTML = "";

    const container = document.createElement("div");

    const title = document.createElement("h1");
    title.classList.add("glitch");
    title.textContent = "About Maxx's Tavern";
    container.appendChild(title);

    const description = document.createElement("p");
    description.innerHTML = `
        <p>
            In a city that never sleeps—just glitches—Maxx’s Tavern stands like a glitch of its own: a stubborn relic glowing in the underbelly of Sector 7. We’re not on the grid, and we like it that way.
        </p>
        <p>
            Founded by Maxx Dee, ex-smuggler turned bartender, this haven serves as neutral ground for hackers, mercs, rogue AIs, and weary drifters looking for more than just a drink. We pour homebrewed truth serum, run silent barter trades, and spin vinyl when the net’s too loud.
        </p>
        <p>
            No cameras. No corps. No bullshit. Just stories, static, and the hum of something real.
        </p>
        <p><em>Welcome home, ghost.</em></p>
        `;

    container.appendChild(description);

    content.appendChild(container);
}
