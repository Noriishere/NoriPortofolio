export function container(children = []){
    const container = document.createElement("div")
    container.classList.add('container')
    children.forEach(child => container.appendChild(child))
    return container
}