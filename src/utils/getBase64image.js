// export function getBase64Image(img) {
//   var canvas = document.createElement("canvas");
//   canvas.width = img.width;
//   canvas.height = img.height;

//   var ctx = canvas.getContext("2d");
//   ctx.drawImage(img, 0, 0);

//   var dataURL = canvas.toDataURL("image/png");

//   return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
// }

export async function getBase64Image(img) {
  const base64CachedImg = localStorage.getItem("image");
  if (base64CachedImg) {
    const response = await fetch(base64CachedImg);
    const blob = await response.blob();
    return URL.createObjectURL(blob);
  } else {
    const response = await fetch(img);
    if (response.status === 429) {
      console.log("too many requests");
    }
    const blob = await response.blob();
    const imageUrl = URL.createObjectURL(blob);
    const base64String = await convertBlobToBase64(blob);
    localStorage.setItem("image", base64String);
    return imageUrl;
  }
}
