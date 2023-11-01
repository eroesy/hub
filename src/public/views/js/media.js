const div = document.querySelector(".images");
const button = document.querySelector(".limpar");

const redirect = (event) => {
    const splitters = event.target.id.split("post_");
    const id = splitters[splitters.length - 1];
    window.location.href = "/media/" + id;
};

button.addEventListener("click", async () => {
    await fetch("/api/clear");
    window.location.reload();
});