const treebuild = document.querySelector("button")
treebuild.style = "padding: 5px 10px;"
const input = document.querySelector("input")
input.style.padding = '10px 20px'
treebuild.addEventListener("click", () => {
    const height = document.querySelector("input").value
    function treebuild (){
        for(let w = 1; w <= height; w++){
            const treediv = document.createElement("div")
            const treeContainer = document.querySelector(".treeContainer")
            treeContainer.appendChild(treediv)
            treediv.classList = "treeblocks"
            treediv.style.width = 400 - w*50 + 'px';
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
