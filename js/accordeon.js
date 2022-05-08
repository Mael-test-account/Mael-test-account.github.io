const btnAccordeon = document.querySelectorAll('.btn-accordeon');

btnAccordeon.forEach((accordeon) =>{
    accordeon.addEventListener('click', () => {
        accordeon.classList.toggle('open');

        let content = accordeon.nextElementSibling;
        content.classList.toggle('open');

        if(content.style.maxHeight){
            content.style.maxHeight = null;
        } else{
            content.style.maxHeight = content.scrollHeight + 'px';
        }
    })
})