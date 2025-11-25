export function wrapper(child = []){
    const wrapper = document.createElement('div')
    wrapper.classList.add('wrapper')
    child.forEach(element => 
        wrapper.appendChild(element)
    );
    return wrapper
}