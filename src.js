let options = {
    threshold: 1.0
};

let timer = 0;
function typeWriter(target, paragraph, index){
    if(index < paragraph.length){
        target.innerHTML += paragraph[index];
        index++;
        setTimeout(()=>{typeWriter(target, paragraph, index)}, 10);
    }
    else
        target.classList.remove('animated');
}

function callback(entries, observer){
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            let paragraph = entry.target.innerHTML;
            entry.target.innerHTML = "";
            entry.target.classList.remove("unloaded");
            setTimeout(()=>{typeWriter(entry.target, paragraph, 0)}, timer);
            timer += 1000;
            setTimeout(()=>{timer=0}, 1000);

            // entry.target.classList.remove('animated')
                
            
            observer.unobserve(entry.target);
        }
    })
}

let observer = new IntersectionObserver(callback, options);
let targets = document.querySelectorAll('.unloaded');
targets.forEach((target)=>observer.observe(target));

//hover animation
function hoverAnimation(element){
    if(element.classList.contains("bounce"))
        return;
    element.classList.add("bounce");
    setTimeout(()=>{console.log("removing class");element.classList.remove("bounce")}, 500);
}