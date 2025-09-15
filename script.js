document.addEventListener('DOMContentLoaded', () => {
    const dialogRef = document.getElementById("birddialog");
    const dialogTitle = document.getElementById("dialogTitle");
    const dialogImg = document.querySelector(".dialogimg");

    function openDialog(title, imgSrc) {
        if (dialogRef && dialogTitle && dialogImg) {
            dialogTitle.textContent = title; // Setzt den Titel
            dialogImg.src = imgSrc; // Setzt die Bild-URL
            dialogImg.alt = title; // Setzt den alt-Text
            dialogRef.showModal();
            dialogRef.classList.add('opendialog');
        } else {
            console.error("Dialog-Element oder Inhalt nicht gefunden!");
        }
    }

    function closeDialog() {
        if (dialogRef) {
            dialogRef.close();
            dialogRef.classList.remove('opendialog');
        } else {
            console.error("Dialog-Element nicht gefunden!");
        }
    }

    // Event-Listener für Klicks auf den Dialog (Schließen bei Klick auf Hintergrund)
    dialogRef.addEventListener('click', (event) => {
        const rect = dialogRef.getBoundingClientRect();
        const isInDialog = (
            event.clientX >= rect.left &&
            event.clientX <= rect.right &&
            event.clientY >= rect.top &&
            event.clientY <= rect.bottom
        );

        if (!isInDialog) {
            closeDialog();
        }
    });

    // Schließen bei Esc-Taste
    dialogRef.addEventListener('cancel', () => {
        dialogRef.classList.remove('opendialog');
    });

    // Funktionen global verfügbar machen
    window.openDialog = openDialog;
    window.closeDialog = closeDialog;
});