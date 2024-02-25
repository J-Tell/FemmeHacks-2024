var text_area = document.getElementById("text-area");

if (localStorage.getItem("notes")) {
    text_area.value = localStorage.getItem("notes");
}

function saveNotes() {
    localStorage.setItem("notes", text_area.value);
}