function toggleTextArea() {
    var checkBox = document.getElementById("incorrectBalance");
    var textArea = document.getElementById("problemTextArea");
    var submitBtn = document.getElementById("submitBtn");
    if (checkBox.checked == true) {
        textArea.style.display = "block";
        submitBtn.style.display = "block";
    } else {
        textArea.style.display = "none";
        submitBtn.style.display = "none";   
    }
}

function submitProblem() {
    var problemDescription = document.getElementById("problemTextArea").value;
    alert("Are you stupid I took all your money, the website name is 'Fells Wargo' not 'Wells Fargo'. You wasted your time typing: " + problemDescription);
    
}

function showPicture() {
    var selectedValue = document.getElementById("pictureDropdown").value;
    var pictureContainer = document.getElementById("pictureContainer");

    // Clear previous content
    pictureContainer.innerHTML = "";

    // Create and append the image element based on the selected value
    if (selectedValue === "picture1") {
        var img1 = document.createElement("img");
        img1.src = "picture1.jpg"; // Replace "picture1.jpg" with the actual path to your picture
        img1.alt = "Picture 1";
        pictureContainer.appendChild(img1);
    } else if (selectedValue === "picture2") {
        var img2 = document.createElement("img");
        img2.src = "picture2.jpg"; // Replace "picture2.jpg" with the actual path to your picture
        img2.alt = "Picture 2";
        pictureContainer.appendChild(img2);
    }
}
