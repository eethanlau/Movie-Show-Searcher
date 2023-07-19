const form = document.querySelector("#searchForm");
form.addEventListener("submit", async function (e) {
  e.preventDefault();
  const searchTerm = form.elements.query.value;
  const config = { params: { q: searchTerm } };
  const res = await axios.get(`http://api.tvmaze.com/search/shows?`, config);
  // const res = axios.get(`http://api.tvmaze.com/search/shows?q=${searchTerm}`);
  //Run function with the nested object's data retrieved from variable res
  makeImages(res.data);
  //Resets form element query values after every search
  form.elements.query.value = "";
});

const makeImages = (shows) => {
  for (let result of shows) {
    //Not every single show has an image, and this resolves the situation
    if (result.show.image) {
      const img = document.createElement("IMG");
      img.src = result.show.image.medium;
      document.body.append(img);
    }
  }
};

//Somehow clear the images on  the page
const clearImages = (images) => {
  for (let image of images) {
    if (result.show.image) {
      const img = document.querySelectorAll("IMG");
      document.body.img.remove();
    }
  }
};
