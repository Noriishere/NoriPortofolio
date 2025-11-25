export function banner(src, nameText) {
    const wrapper = document.createElement("div");
    wrapper.classList.add("banner-wrapper");

    const img = document.createElement("img");
    img.src = src;
    img.classList.add("banner-photo");

    const text = document.createElement("div");
    text.classList.add("banner-name");
    text.textContent = nameText;

    wrapper.appendChild(img);
    wrapper.appendChild(text);

    return wrapper;
}