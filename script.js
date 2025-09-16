document.addEventListener('DOMContentLoaded', () => {
  const dialog = document.getElementById("birddialog"), title = dialog.querySelector("h2"), img = dialog.querySelector("img"), counter = document.getElementById("imageCounter");
  const images = ["adler", "antarktis", "papagei", "pinguin", "download", "hai", "huhn", "hammerhai", "schildkröte", "schlange", "dinosaurier", "wal", "frosch"]
    .map((n, i) => ({ title: n.charAt(0).toUpperCase() + n.slice(1).replace('.jpeg', '').replace('download', 'Peking, China'), src: `img/${n}.jpeg`, i }));
  let i = 0;
  function show() {
    let { title: t, src } = images[i];
    title.textContent = t; img.src = src; img.alt = t; counter.textContent = `${i + 1}/${images.length}`;
    dialog.showModal(); dialog.classList.add("opendialog");
  }
  window.openDialog = (_, __, index) => { i = index; show(); };
  window.navigateImage = d => { i = (i + d + images.length) % images.length; show(); };
  window.closeDialog = () => dialog.close();
  dialog.addEventListener("click", e => { if (!dialog.contains(e.target)) dialog.close(); });
  dialog.addEventListener("cancel", () => dialog.classList.remove("opendialog"));
});
