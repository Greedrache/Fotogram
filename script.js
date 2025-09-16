document.addEventListener('DOMContentLoaded', () => {
  const d = document.getElementById("birddialog"), t = d.querySelector("h2"), i = d.querySelector("img"), c = document.getElementById("imageCounter");
  const imgs = ["adler","antarktis","papagei","pinguin","download","hai","huhn","hammerhai","schildkröte","schlange","dinosaurier","wal","frosch"]
    .map((n,x)=>({title:(n=="download"?"Peking, China":n.charAt(0).toUpperCase()+n.slice(1)),src:`img/${n}.jpeg`,x}));
  let x = 0;
  const show = () => {
    let { title, src } = imgs[x];
    t.textContent = title; i.src = src; i.alt = title; c.textContent = `${x + 1}/${imgs.length}`;
    d.showModal(); d.classList.add("opendialog");
  };
  window.openDialog = (_, __, i) => (x = i, show());
  window.navigateImage = dlt => (x = (x + dlt + imgs.length) % imgs.length, show());
  window.closeDialog = () => d.close();
  d.addEventListener("click", e => e.target === d && d.close());
  d.addEventListener("close", () => d.classList.remove("opendialog"));
});