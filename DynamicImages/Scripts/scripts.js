let imageFiles = [
  {
    name: "https://loremflickr.com/320/240/animal",
    description: "Wildcard",
  },
  {
    name: "https://loremflickr.com/320/240/dog",
    description: "A cute dog",
  },
  {
    name: "https://loremflickr.com/320/240/kitten",
    description: "A cute cat",
  },
  {
    name: "https://loremflickr.com/320/240/marsupial",
    description: "A... marsupial?",
  },
  {
    name: "https://loremflickr.com/320/240/bird",
    description: "A majestic bird",
  },
  {
    name: "https://loremflickr.com/320/240/reptile",
    description: "A fearsome reptile",
  },
];
console.log("JS working");
//Page El
const imgDropdownEl = document.getElementById("imgDropdown");
const imgGalleryEl = document.getElementById("gallery");
//Btn El
const imageGeneratorBtnEl = document.getElementById("imageGeneratorBtn");
const galleryResetBtnEl = document.getElementById("galleryResetBtn");
//global counter
let i = 0;

//populate Dropdown
imageFiles.forEach((object) => {
  const newOption = new Option(object.description, object.description);
  imgDropdownEl.appendChild(newOption);
});

//populate gallery
imageGeneratorBtnEl.onclick = () => {
  console.log("imageGenerator start");
  const selectedImg = imgDropdownEl.value;

  imageFiles.forEach((object) => {
    if (object.description === selectedImg) {
      const newImage = new Image();
      const randomSrc = object.name + "?random=" + i;
      newImage.src = randomSrc;
      newImage.alt = object.description;
      imgGalleryEl.appendChild(newImage);
      i++;
      console.log(i);
      return;
    }
  });
};

//Reset Gallery
galleryResetBtnEl.onclick = () => {
  console.log("Reset Start");
  const allImages = document.getElementsByTagName("img");
  Array.from(allImages).forEach((imgEl) => imgGalleryEl.removeChild(imgEl));
};
