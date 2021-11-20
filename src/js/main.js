function handleShowProject(project){
    let currentImg = 0;
    let numberImg = 0;
    
    let listImg = project.querySelectorAll(".project-item__img");
    listImg = Array.from(listImg);
    numberImg = listImg.length;

    listImg[currentImg].classList.add('active');
    setInterval(() => {
        if(listImg[currentImg].classList.contains('active')){
            listImg[currentImg].classList.remove('active');
        }
        
        currentImg = ++currentImg;
        if(currentImg >= numberImg){
            currentImg = 0;
        }
        listImg[currentImg].classList.add('active');
    
    }, 3000)
}

function slideShowProject(){
    let listProjectDemo = document.querySelectorAll('.project-item__list-img');
    listProjectDemo = Array.from(listProjectDemo);
    listProjectDemo.forEach((project) => handleShowProject(project));
}

    
slideShowProject();