let imageFiles = [
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

//populate Dropdown
imageFiles.forEach((object) => {
  const newOption = new Option(object.description, object.description);
  imgDropdownEl.appendChild(newOption);
});

//populate gallery
imageGeneratorBtnEl.onclick = () => {
  console.log("imageGenerator start");
  const selectedImg = imgDropdownEl.value;
  if (selectedImg === "select") {
    alert("Please Choose a Category");
    return;
  } else {
    imageFiles.forEach((object) => {
      if (object.description === selectedImg) {
        const newImage = new Image();
        newImage.src = object.name;
        newImage.alt = object.description;
        imgGalleryEl.appendChild(newImage);
        return;
      }
    });
  }
};

//Reset Gallery
galleryResetBtnEl.onclick = () => {
  console.log("Reset Start");
  const allImages = document.getElementsByTagName("img");
  Array.from(allImages).forEach((imgEl) => imgGalleryEl.removeChild(imgEl));
};
