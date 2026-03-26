export function main(title, desc, side) {

    const wrapper = document.createElement("div");
    wrapper.classList.add(
        "flex",
        "gap-1",
        "items-stretch",
        "w-full",
        "animate-slideDown",
        "flex-wrap",
        "lg:flex-nowrap"
    );

    const description = document.createElement("div");
    description.classList.add(
        "flex-1",
        "p-8",
        "bg-main",
        "min-h-[28vh]"
    );

    const h1 = document.createElement("h1");
    h1.classList.add(
        "text-secondary",
        "text-3xl",
        "font-bold",
        "mb-4",
        "animate-wave"
    );

    const p = document.createElement("p");
    p.classList.add(
        "text-secondary",
        "animate-wave"
    );

    const sideDescription = document.createElement("div");
    sideDescription.classList.add(
        "flex-1",
        "border-2",
        "border-black",
        "p-8",
        "bg-main",
        "min-w-[20rem]"
    );

    const sideP = document.createElement("p");
    sideP.classList.add(
        "text-secondary",
        "break-words",
        "animate-wave"
    );

    h1.textContent = title;
    p.textContent = desc;
    sideP.textContent = side;

    description.appendChild(h1);
    description.appendChild(p);
    sideDescription.appendChild(sideP);

    wrapper.appendChild(description);
    wrapper.appendChild(sideDescription);

    return wrapper;
}