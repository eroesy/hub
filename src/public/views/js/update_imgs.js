const div = document.querySelector(".images");
const button = document.querySelector(".limpar");

// const update_div = (imgs) => {
//     imgs.map((img, i) => {
//         const is_mp4 = img.format == "mp4";
//         if (is_mp4) {
//             const bideo = document.createElement("video");
//             bideo.src = "data:video/mp4;base64, " + img.data;
//             bideo.setAttribute("controls", "");
//             bideo.alt = img.name;

//             div.appendChild(bideo);
//         }
//         else {
//             const image = document.createElement("img");
//             image.src = "data:image/png;base64, " + img.data;
//             image.alt = img.name;
//             div.appendChild(image);
//         }
//     });
// };

// const get_images = async () => {
//     const response = await fetch(_URL + "/get_images");
//     const data = await response.json();
//     const images = JSON.parse(data.images);

//     update_div(images);
// };

// get_images().then(() => {
//     console.log("imagens carregadasss");
// });

button.addEventListener("click", async () => {
    await fetch("/api/clear");
    window.location.reload();
});