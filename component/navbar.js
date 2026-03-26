export function navbar() {

    const navbar = document.createElement("nav");
    navbar.classList.add(
        "w-full",
        "h-[10vh]",
        "bg-main",
        "text-secondary",
        "flex",
        "items-center",
        "justify-between",
        "px-5"
    );

    const brand = document.createElement("p");
    brand.classList.add(
        "text-3xl",
        "font-bold",
        "cursor-pointer"
    );
    brand.textContent = "Noriishere";

    brand.addEventListener("click", () => {
        location.href = './';
    });

    const div = document.createElement("div");
    div.classList.add("flex", "items-center");

    const home = document.createElement("a");
    home.textContent = "Home";
    home.href = "/index.html";
    home.classList.add(
        "mx-2",
        "transition",
        "duration-200",
        "hover:scale-150",
        "text-sm",
        "sm:text-base",
        "md:text-lg"
    );

    const contact = document.createElement("a");
    contact.textContent = "Contact";
    contact.href = "mailto:noriyamashin@gmail.com";
    contact.classList.add(
        "mx-2",
        "transition",
        "duration-200",
        "hover:scale-150",
        "text-sm",
        "sm:text-base",
        "md:text-lg"
    );

    const support = document.createElement("a");
    support.textContent = "Support";
    support.classList.add(
        "mx-2",
        "transition",
        "duration-200",
        "hover:scale-150",
        "text-sm",
        "sm:text-base",
        "md:text-lg"
    );

    div.appendChild(home);
    div.appendChild(contact);
    div.appendChild(support);

    navbar.appendChild(brand);
    navbar.appendChild(div);

    return navbar;
}