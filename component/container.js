export function container(children = []) {
    const container = document.createElement("div");

    container.classList.add(
        "w-full",
        "min-h-screen",
        "m-0",
        "p-0",
        "box-border"
    );

    children.forEach(child => container.appendChild(child));

    return container;
}