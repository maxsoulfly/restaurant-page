export default function loadMenu() {
    const content = document.getElementById("content");
    content.innerHTML = "";

    const container = document.createElement("div");

    const title = document.createElement("h1");
    title.classList.add("glitch");
    title.textContent = "Maxx's Tavern - Menu";
    container.appendChild(title);

    const description = document.createElement("div");
    description.innerHTML = `
        <h2 class="glitch">Beer Protocol</h2>
        <ul>
            <li>Neon Bock</li>
            <li>Data Dump Lager</li>
            <li>Glitch IPA</li>
            <li>Blackout Stout</li>
            <li>404 Pale Ale</li>
            <li>Synthwave Wheat</li>
            <li>Kilobyte Kolsch</li>
            <li>Viral Pils</li>
            <li>RAM Red Ale</li>
            <li>Zero-Day Porter</li>
        </ul>

        <h2 class="glitch">Food Subroutines</h2>
        <ul>
            <li>Deep-Fried Data Chips</li>
            <li>Street Soy Noodles</li>
            <li>Grilled Synth-Meat Skewers</li>
        </ul>
        `;

    container.appendChild(description);

    content.appendChild(container);
}
