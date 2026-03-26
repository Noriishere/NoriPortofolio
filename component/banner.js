export function banner(src, nameText) {
    const wrapper = document.createElement("div");
    wrapper.classList.add(
        "relative",
        "w-full",
        "h-[55vh]",
        "overflow-hidden",
        "lg:h-[40vh]",
        "md:h-[35vh]",
        "sm:h-[30vh]"
    );

    const img = document.createElement("img");
    img.src = src;
    img.classList.add(
        "w-full",
        "h-full",
        "object-cover",
        "object-[center_40%]",
        "brightness-50",
        "transition",
        "duration-300"
    );

    const text = document.createElement("div");
    text.textContent = nameText;
    text.classList.add(
        "absolute",
        "left-8",
        "top-[90%]",
        "-translate-y-1/2",
        "text-secondary",
        "text-4xl",
        "font-bold",
        "drop-shadow-lg",
        "z-10",
        "lg:text-3xl",
        "md:text-2xl",
        "sm:text-xl",
        "lg:left-6",
        "md:left-4",
        "sm:left-3"
    );

    wrapper.appendChild(img);
    wrapper.appendChild(text);

    return wrapper;
}