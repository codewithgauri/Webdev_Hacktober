// Vanilla JS code

// const isCheckBox = document.getElementById("darkMode");
// isCheckBox.addEventListener("change", function () {
//     if (this.checked) {
//         console.log("Checkbox is checked..");
//         document.getElementsByTagName("body")[0].style.backgroundColor = "black";
//         document.getElementsByTagName("body")[0].style.color = "white"
//     } else {
//         document.getElementsByTagName("body")[0].style.backgroundColor = "white";
//         document.getElementsByTagName("body")[0].style.color = "black"
//     }
// });

// JQuerry code

$("#darkMode").change(function() {

    if(this.checked) {
        $("body").css({
            backgroundColor: "#000000e6",
            color: "#ffffff"
        })
    } else {
        $("body").css({
            backgroundColor: "white",
            color: "black"
        })
    }
});