export function navbar() {
    const navbar = document.createElement("nav")
    navbar.classList.add('navbar')
    const brand = document.createElement('p')
    brand.classList.add('navbar-brand')
    brand.textContent = "Noriishere"
    brand.addEventListener("click", ()=>{
        location.href = './';
    })
    
    const div = document.createElement("div")
    const home = document.createElement("a")
    home.classList.add('navbar-link')
    home.textContent = "Home"
    home.addEventListener("click", ()=>{
        location.href = './';
    })
    
    const contact = document.createElement("a")
    contact.classList.add('navbar-link')
    contact.textContent = "Contact"
    
    const support = document.createElement("a")
    support.classList.add('navbar-link')
    support.textContent = "Support"
    
    div.appendChild(home)
    div.appendChild(contact)
    div.appendChild(support)

    navbar.appendChild(brand)
    navbar.appendChild(div)
    
    return navbar
}