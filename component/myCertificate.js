export function myCertificate(titleText, paragraphText, link) {

    const card = document.createElement("div");
    card.classList.add(
        "w-56",
        "p-10",
        "bg-secondary",
        "text-main",
        "border-2",
        "border-main",
        "rounded-xl",
        "transition",
        "duration-500",
        "cursor-pointer",
        "hover:scale-110",
        "hover:rounded-3xl",

        // fade animation initial state
        "opacity-0",
        "translate-y-8",
        "transition-all",
        "duration-700"
    );

    const contents = document.createElement("div");
    contents.classList.add(
        "text-center"
    );

    const title = document.createElement("h1");
    title.textContent = titleText;
    title.classList.add(
        "text-xl",
        "font-bold",
        "mb-4"
    );

    const paragraph = document.createElement("p");
    paragraph.textContent = paragraphText;
    paragraph.classList.add(
        "text-sm"
    );

    contents.appendChild(title);
    contents.appendChild(paragraph);

    if (link) {
        const plink = document.createElement("a");
        plink.href = link;
        plink.textContent = "Visit certificate →";
        plink.target = "_blank";

        plink.classList.add(
            "block",
            "mt-6",
            "underline",
            "decoration-2",
            "hover:opacity-80",
            "transition"
        );

        contents.appendChild(plink);
    }

    card.appendChild(contents);

    return card;
}