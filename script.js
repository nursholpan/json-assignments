// Get references to the elements
let outputElement = document.getElementById('outputElement');
let outputHeader = document.getElementById('outputHeader');
let contentGridElement = document.getElementById('contentGrid');

// JSON database
let jsonDatabase = [
  {
    "title": "Instrumental",
    "picture_url": "https://kartinki.pibig.info/uploads/posts/2023-04/thumbs/1682316907_kartinki-pibig-info-p-muzikalnie-instrumenti-kazakhskie-kartinki-75.jpg",
    "background_color": "#fff",
    "types": ["dombra", "kobyz", "sybyzgy"]
  },
  {
    "title": "Classical Vocal",
    "picture_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Kudaibergen_at_New_Wave_in_2019.jpg/1200px-Kudaibergen_at_New_Wave_in_2019.jpg",
    "background_color": "#fff",
    "types": ["patriotic", "love songs", "ritualistic"]
  },
  {
    "title": "Modern Style",
    "picture_url": "https://c.files.bbci.co.uk/E882/production/_116222595_91photo2020.jpg",
    "background_color": "#fff",
    "types": ["Q-pop", "rap", "hip-hop"]
  }
];

// Loop through JSON database and create elements
for (var i = 0; i < jsonDatabase.length; i++) {
  createElementProper(jsonDatabase[i], i); // Pass index to alternate speeds
}

// Function to create content items with Rellax speed
function createElementProper(incomingJSON, index) {
  // Create whole content item div and set class
  let newContentElement = document.createElement("DIV");
  newContentElement.style.backgroundColor = incomingJSON['background_color'];
  newContentElement.classList.add('contentItem', 'rellax'); // Add 'rellax' class
  newContentElement.setAttribute('data-rellax-speed', index % 2 === 0 ? 2 : -2); // Alternate speeds

  // Create HEADLINE h3, set class, set content
  let newContentHeading = document.createElement("H3");
  newContentHeading.classList.add('contentTitle');
  newContentHeading.innerText = incomingJSON['title'];
  // Add the HEADLINE to the item
  newContentElement.appendChild(newContentHeading);

  // Create & add LIST HEADLINE to the item
  let newContentSubhead = document.createElement("H4");
  newContentSubhead.innerText = "Types:";
  newContentElement.appendChild(newContentSubhead);

  // Create & add type LIST to the item
  let newContentTypeList = document.createElement("UL");
  newContentElement.appendChild(newContentTypeList);

  // Create & add all the type LIST ITEMS to the TYPE LIST
  for (var i = 0; i < incomingJSON['types'].length; i++) {
    var currentTypeString = incomingJSON['types'][i];
    var newTypeItem = document.createElement("LI");
    newTypeItem.innerText = currentTypeString;
    newContentTypeList.appendChild(newTypeItem);
  }

  // Add an image to the content element
  let newImage = document.createElement("IMG");
  newImage.classList.add("footerImage");
  newImage.src = incomingJSON['picture_url'];
  newImage.style.width = "100%"; // Set the image to fit the container width
  newImage.style.height = "250px"; // Set a fixed height 
  newImage.style.objectFit = "cover";
  newContentElement.appendChild(newImage);

  // Append the content element to the grid
  contentGridElement.appendChild(newContentElement);
}

// Initialize Rellax
var rellax = new Rellax('.rellax');
