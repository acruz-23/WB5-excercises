let imageFiles = [
  {
    name: "https://loremflickr.com/320/240/animal",
    description: "**Wildcard**",
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
  const selectedValue = imgDropdownEl.value;

  const selectedImage = imageFiles.find(
    (img) => selectedValue === img.description
  );
  const newImage = new Image();
  const randomSrc = selectedImage.name + "?random=" + i;
  newImage.src = randomSrc;
  newImage.alt = selectedImage.description;
  imgGalleryEl.appendChild(newImage);
  i++;
  return;
};

//Reset Gallery
galleryResetBtnEl.onclick = () => {
  const allImages = document.getElementsByTagName("img");
  Array.from(allImages).forEach((imgEl) => imgGalleryEl.removeChild(imgEl));
};
