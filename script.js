const myForm = document.getElementById("memeForm");
const topTextEntry = document.getElementById("topTextBox")
const bottomTextEntry = document.getElementById("bottomTextBox")
const fontSize = document.getElementById("fontSize");
const topTextColorBox = document.getElementById("topTextColor");
const bottomTextColorBox = document.getElementById("bottomTextColor");
const imageBox = document.getElementById("imageURL");
let memeArray
if(localStorage.getItem("memeArray") != null){
    memeArray = JSON.parse(localStorage.getItem("memeArray"));
}else{
    memeArray = [];
}

function removeImage(imageToRemove){
    let index = imageToRemove.dataset.index;
    for(let i = parseInt(index) + 1; i < memeArray.length; i++){
        let newElement = document.querySelector(`[data-index = "${i}"]`);
        console.log(i);
        newElement.dataset.index = newElement.dataset.index - 1;
    }
    memeArray.splice(imageToRemove.dataset.index, 1)
    imageToRemove.remove();
    localStorage.setItem("memeArray", JSON.stringify(memeArray));

}
function addMeme(image, top, bottom, topColor, bottomColor, size, i){
    let newImage = document.createElement("img");
    let newTopText = document.createElement("div");
    let newBottomText = document.createElement("div");
    newTopText.classList = "textDiv topText";
    newBottomText.classList = "textDiv bottomText";
    let newDiv = document.createElement("section");
    newTopText.innerHTML = top;
    newBottomText.innerHTML = bottom;
    newImage.src = image;
    newDiv.append(newTopText);
    newDiv.append(newBottomText);
    newDiv.append(newImage);
    let newButton = document.createElement("input");
    newButton.type = "button";
    newButton.value = "remove";
    newBottomText.style=`color: ${bottomColor};`;
    newTopText.style=`color: ${topColor};`;
    if(size != "" && parseInt(size) != NaN){
        newBottomText.style.fontSize =`${size}px`;
        newTopText.style.fontSize =`${size}px`;
    }
    newDiv.classList = "imageDiv";
    newDiv.dataset.index = i;
    newDiv.append(newButton);
    document.body.append(newDiv);
}
function submitForm(evt){
    evt.preventDefault();
    addMeme(imageBox.value, topTextEntry.value, bottomTextEntry.value, topTextColorBox.value, bottomTextColorBox.value, fontSize.value, memeArray.length);
    memeArray.push({iURL: imageBox.value, tt: topTextEntry.value, bt: bottomTextEntry.value, ttc: topTextColorBox.value, btc: bottomTextColorBox.value, fSize: fontSize.value});
    localStorage.setItem("memeArray", JSON.stringify(memeArray));
}
for(let i = 0; i < memeArray.length; i++){
    addMeme(memeArray[i].iURL, memeArray[i].tt, memeArray[i].bt, memeArray[i].ttc, memeArray[i].btc, memeArray[i].fSize, i)
}
document.addEventListener("click",function(evt){
    console.log("click Event");
    if(evt.target.type == 'button'){
        removeImage(evt.target.parentElement);
    }
})
myForm.addEventListener("submit", function(evt){
    submitForm(evt);
});