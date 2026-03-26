export function wrapper(child = []) {

    const wrapper = document.createElement('div');

    wrapper.classList.add(
        "flex",
        "flex-wrap",
        "justify-center",
        "gap-6",
        "mt-4",
        "w-full"
    );

    child.forEach(element =>
        wrapper.appendChild(element)
    );

    return wrapper;
}