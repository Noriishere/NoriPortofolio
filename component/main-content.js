export function main(title, desc, side) {
    const wrapper = document.createElement("div")
    wrapper.classList.add("description-wrapper")
    
    const description = document.createElement("div")
    description.classList.add("description")
    
    const h1 = document.createElement("h1")
    h1.classList.add("description-title")
    
    const p = document.createElement("p")
    p.classList.add("description-paragraph")
    
    const sideDescription = document.createElement("div")
    sideDescription.classList.add("side-description")

    const sideP = document.createElement("p")
    sideP.classList.add("sideP")

    h1.textContent = title
    p.textContent = desc
    sideP.textContent = side

    description.appendChild(h1)
    description.appendChild(p)
    
    sideDescription.appendChild(sideP)

    wrapper.appendChild(description)
    wrapper.appendChild(sideDescription)
    return wrapper
}