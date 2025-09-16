document.addEventListener('DOMContentLoaded', () => {
    const dialogRef = document.getElementById("birddialog");
    const dialogTitle = document.getElementById("dialogTitle");
    const dialogImg = document.querySelector(".dialogimg");
    const imageCounter = document.getElementById("imageCounter");

    const images = [
        { title: 'Adler', src: 'img/adler.jpeg' },
        { title: 'Antarktis', src: 'img/antarktis.jpeg' },
        { title: 'Papagei', src: 'img/papagei.jpeg' },
        { title: 'Pinguin', src: 'img/pinguin.jpeg' },
        { title: 'Peking, China', src: 'img/download.jpeg' },
        { title: 'Hai', src: 'img/hai.jpeg' },
        { title: 'Huhn', src: 'img/huhn.jpeg' },
        { title: 'Hammerhai', src: 'img/hammerhai.jpeg' },
        { title: 'Schildkröte', src: 'img/schildkröte.jpeg' },
        { title: 'Schlange', src: 'img/schlange.jpeg' },
        { title: 'Dinosaurier', src: 'img/dinosaurier.jpeg' },
        { title: 'Wal', src: 'img/wal.jpeg' },
        { title: 'Frosch', src: 'img/frosch.jpeg' }
    ];

    let currentIndex = 0;

    function openDialog(title, imgSrc, index) {
        if (dialogRef && dialogTitle && dialogImg && imageCounter) {
            currentIndex = index;
            dialogTitle.textContent = title;
            dialogImg.src = imgSrc;
            dialogImg.alt = title;
            imageCounter.textContent = `${currentIndex + 1}/${images.length}`;
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

    function navigateImage(direction) {
        currentIndex = (currentIndex + direction + images.length) % images.length;
        const { title, src } = images[currentIndex];
        dialogTitle.textContent = title;
        dialogImg.src = src;
        dialogImg.alt = title;
        imageCounter.textContent = `${currentIndex + 1}/${images.length}`;
    }

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

    dialogRef.addEventListener('cancel', () => {
        dialogRef.classList.remove('opendialog');
    });

    window.openDialog = openDialog;
    window.closeDialog = closeDialog;
    window.navigateImage = navigateImage;
});