document.lastScrollPosition = 0;
document.lastCentered = 0;
document.onWayTo = null;

document.addEventListener(type: 'scroll', listener: () => {
    const direction = window.pageYOffset - document.lastScrollPosition > 0 ? 'down' : 'up';
    const sections = [...document.querySelectorAll('section')];

    if(document.onWayTo === null) {
        const destIndex = direction === 'up' ? document.lastCentered - 1 : document.lastCentered + 1;
        if (destIndex >= 0 && destIndex < sections.length) {
            document.onWayTo = destIndex;
            window.scroll(x:0, sections[destIndex].offsetTop);
        }
    }

    


    sections.forEach((section, index : number) => {
        if (window.pageYOffset === section.offsetTop) {
            document.lastCentered = index;
            section.className = 'active';
            if(document.onWayTo === index) {
                document.onWayTo = null;
            }
        }
        else {
            section.className = '';
        }
    })


    document.lastScrollPosition = window.pageYOffset;
})