export function myproject(text){
    const wrapper = document.createElement("div")
    wrapper.classList.add("text-myProject","fade-section")
    const h1 = document.createElement("h1")
    h1.classList.add("myProject")

    h1.textContent = text
    wrapper.appendChild(h1)

    return wrapper
}