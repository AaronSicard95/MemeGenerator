const myForm = document.getElementById("memeForm");
const topTextEntry = document.getElementById("topTextBox")
const bottomTextEntry = document.getElementById("bottomTextBox")
function submitForm(evt){
    console.log("submitted form");
    evt.preventDefault();
    let newImage = document.createElement("img");
    let newTopText = document.createElement("div");
    let newBottomText = document.createElement("div");
    newTopText.classList = "textDiv topText";
    newBottomText.classList = "textDiv bottomText";
    console.log(topTextEntry.value);
    let newDiv = document.createElement("div");
    newTopText.innerHTML = topTextEntry.value;
    newBottomText.innerHTML = bottomTextEntry.value;
    newImage.src = document.getElementById("imageURL").value;
    newDiv.append(newTopText);
    newDiv.append(newBottomText);
    newDiv.append(newImage);
    newBottomText.style=`color: ${document.getElementById("bottomTextColor").value}`;
    newTopText.style=`color: ${document.getElementById("topTextColor").value}`;
    newDiv.classList = "imageDiv";
    document.body.append(newDiv);
    console.log("didstuff");
}
myForm.addEventListener("submit", function(evt){
    submitForm(evt);
});