const form = document.querySelector('#form');

form.addEventListener('input', function(e){
    let url = document.querySelector('#url').value;
    let toptext = document.querySelector('#topText').value;
    let bottomText = document.querySelector('#bottomText').value;
    let submit = document.querySelector('#submit');
    submit.disabled = false;
    if (url === "" || toptext === "" || bottomText === ""){
        submit.disabled = true;
    }
})

form.addEventListener('submit', function(e){
    e.preventDefault()
    createAndAppendElements()
})

function createAndAppendElements(){
    let [memeHolder, divTop, divBottom, createdImg, h2Top, h2Bottom, url, pictures, xBox] = createMemeElements()
   
    addTextAndClassName(xBox, divTop, divBottom, memeHolder, h2Top, h2Bottom, createdImg, url)
    append(pictures, memeHolder, divTop, divBottom, createdImg, h2Top, h2Bottom, xBox)
    resetForm()
}

function createMemeElements() {
    let memeHolder = document.createElement('div')
    let divTop = document.createElement('div')
    let divBottom = document.createElement('div')
    let createdImg = document.createElement('img')
    let h2Top = document.createElement('h2')
    let h2Bottom = document.createElement('h2')
    let url = document.querySelector('#url').value;
    let pictures = document.querySelector('.pictures')
    let xBox = document.createElement('p')

    memeHolder.addEventListener('click', function(e){
        this.remove()
    })

    return [memeHolder, divTop, divBottom, createdImg, h2Top, h2Bottom, url, pictures, xBox]
}

function resetForm(){
    document.querySelector('#url').value = ""
    document.querySelector('#topText').value = ""
    document.querySelector('#bottomText').value = ""
    submit.disabled = true;
}

function append(pictures, memeHolder, divTop, divBottom, createdImg, h2Top, h2Bottom, xBox){
    pictures.appendChild(memeHolder)
    memeHolder.appendChild(divTop)
    memeHolder.appendChild(divBottom)
    memeHolder.appendChild(createdImg)
    divTop.appendChild(h2Top)
    divBottom.appendChild(h2Bottom)
    memeHolder.appendChild(xBox)
}

function addTextAndClassName(xBox, divTop, divBottom, memeHolder, h2Top, h2Bottom, createdImg, url){
    xBox.innerText = "X"
    divTop.className = 'divTop'
    divBottom.className = 'divBottom'
    memeHolder.className = 'memeHolder'
    h2Top.className = 'h2Top'
    h2Bottom.className = 'h2Bottom'
    h2Top.innerText = document.querySelector('#topText').value.toUpperCase();
    h2Bottom.innerText = document.querySelector('#bottomText').value.toUpperCase();
    createdImg.src = url
}
