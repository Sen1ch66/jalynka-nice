const treebuil = document.querySelector("button")
treebuil.style = "padding: 5px 10px; "
const clear = document.querySelector(".clearButton")
const input = document.querySelector("input").style = 'padding:10px 20px; outline: 1px solid red;'
const treeContainer = document.querySelector(".treeContainer")
treebuil.addEventListener("click", () => {
    const height = document.querySelector("input").value;
    treebuil.disabled = true;
    function treebuild (){
        for(let w = 1; w <= height; w++){
            const treediv = document.createElement("div")
            treeContainer.appendChild(treediv)
            treediv.classList = "treeblocks"
            treediv.style.width = 400 - 300/w + 'px';
            clear.addEventListener("click", () => treediv.style = "display: none;")
        }
    }
    if(height<= 0){
        alert("так не може бути")
    } else if(height == 1 || height == 2){
        alert("Ялинка замала")
    } else if(height >= 20){
        alert("Ялинка завелика") 
    } else {
        treebuild();
    }
})

