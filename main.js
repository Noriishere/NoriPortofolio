const body = document.body;
document.title = "Portofolio Nori";

import { data } from './data.js';
import { navbar } from './component/navbar.js';
import { container } from './component/container.js';
import { content } from './component/content.js';
import { wrapper } from './component/wrapper.js';
import { banner } from './component/banner.js';
import { main } from './component/main-content.js';
import { aboutme } from './aboutme.js';
import { myproject } from './component/titleProject.js';
import { certificate } from './data.js';
import { myCertificate } from './component/myCertificate.js';

// ================= NAVBAR & HERO =================
body.appendChild(navbar());
body.appendChild(banner("./asset/my.jpg", "Noriishere"));


// ================= PROJECT SECTION =================
const contentElements = data.map(item =>
    content(item.title, item.description, item.link)
);

const wrappedProjects = wrapper(contentElements);


// ================= CERTIFICATE SECTION =================
const certificateList = certificate.map(item => {
    const el = myCertificate(item.title, item.description, item.link);

    // Inverted styling
    el.classList.remove("bg-main", "text-secondary");
    el.classList.add("bg-secondary", "text-main", "border-main");

    return el;
});

const wrappedCertificate = wrapper(certificateList);
wrappedCertificate.classList.add("bg-main", "py-20");


// ================= ABOUT ME SECTION =================
const mainElement = aboutme.map(item =>
    main(item.title, item.description, item.side)
);

const mainFragment = document.createDocumentFragment();
mainElement.forEach(el => mainFragment.appendChild(el));


// ================= TITLES =================
const titleMy = myproject("My Project🔥");

const titleCertificate = myproject("Certificate");
titleCertificate.classList.add("mt-20");


// ================= RENDER CONTAINER =================
body.appendChild(
    container([
        mainFragment,
        titleMy,
        wrappedProjects,
        titleCertificate,
        wrappedCertificate
    ])
);


// ================= SCROLL ANIMATION =================
const observerOptions = {
    root: null,
    threshold: 0.3,
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "translate-y-8");
            entry.target.classList.add("opacity-100", "translate-y-0");
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);


// Observe all animated elements
document.querySelectorAll('.opacity-0').forEach(element =>
    observer.observe(element)
);