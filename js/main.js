const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target.tagName === 'H1') {
                entry.target.classList.add('flow-in-h1');
              } else if (entry.target.tagName === 'P') {
                entry.target.classList.add('flow-in-p');
              }
            observer.unobserve(entry.target);
        }
    });
});

document.querySelectorAll('.box').forEach(el => {
    el.childNodes.forEach(node => { 
        if (node.tagName){
            observer.observe(node);
        }
    })
  });