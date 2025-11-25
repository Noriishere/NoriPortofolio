export function content(titleText, paragraphText, link) {

    const card = document.createElement("div")
    card.classList.add("card",  'fade-section')

    const contents = document.createElement("div")
    contents.classList.add('content')

    const title = document.createElement("h1");
    title.textContent = titleText;

    const paragraph = document.createElement("p");
    paragraph.textContent = paragraphText;

    contents.appendChild(title)
    contents.appendChild(paragraph)
    if (link) {
        const plink = document.createElement("a");
        plink.href = link;
        plink.textContent = "Visit Project →"
        plink.classList.add("project-link")
        plink.target = "_blank"
        contents.appendChild(plink)
    }

    card.appendChild(contents)

    return card
}