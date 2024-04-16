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