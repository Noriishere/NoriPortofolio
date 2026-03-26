export function myproject(text) {

    const wrapper = document.createElement("div");
    wrapper.classList.add(
        "m-4",
        "ml-10",
        "opacity-0",
        "translate-y-8",
        "transition-all",
        "duration-700"
    );

    const h1 = document.createElement("h1");
    h1.classList.add(
        "text-3xl",
        "font-bold",
        "text-main"
    );

    h1.textContent = text;

    wrapper.appendChild(h1);

    return wrapper;
}