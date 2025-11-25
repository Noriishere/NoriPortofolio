const body = document.body
document.title = "Portofolio Nori"
import { data } from './data.js'
import { navbar } from './component/navbar.js'
import { container } from './component/container.js'
import { content } from './component/content.js'
import { wrapper } from './component/wrapper.js'
import { banner } from './component/banner.js'
import { main } from './component/main-content.js'
import { aboutme } from './aboutme.js'
import { myproject } from './component/titleProject.js'
import { certificate } from './data.js'

body.appendChild(navbar())
body.appendChild(banner("./asset/my.jpg", "Noriishere"))

// Ngambil data dari data.js masukin ke content element
const contentElements = data.map(item => content(item.title, item.description, item.link));
// dimasukin ke wrapper
const wrapped = wrapper(contentElements);

const certificateList = certificate.map(item => {
    const el = content(item.title, item.description, item.link)
    el.classList.add("card-inverted")
    return el
})

const wrappedCertificate = wrapper(certificateList)
wrappedCertificate.classList.add("wrapper-inverted")

// Paragraph about me
const mainElement = aboutme.map(item =>
    main(item.title, item.description, item.side)
);

// Inisiasi semacam Div
const mainFragment = document.createDocumentFragment();

// ambil data array dimasukin ke fragments
mainElement.forEach(el => mainFragment.appendChild(el));

// judul My Project
const titleMy = myproject("My Project🔥")

const titleCertificate = myproject("Certificate")
titleCertificate.classList.add("text-myCertificate")

body.appendChild(container([mainFragment, titleMy, wrapped, titleCertificate, wrappedCertificate]));

// Animated scroll
const observerOptions = {
    root: null,
    threshold: 0.5,
}
const observer = new IntersectionObserver((entries, observer) =>{
    entries.forEach(entry => {
        if (entry.isIntersecting){
            entry.target.classList.add("show")
            observer.unobserve(entry.target)
        }
    })
},observerOptions)
document.querySelectorAll('.fade-section').forEach(element =>
    observer.observe(element)
);