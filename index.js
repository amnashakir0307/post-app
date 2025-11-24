
// // ---------------- WALLPAPER + CARD FUNCTION ---------------- //
// function addCard(title, desc, bgIndex = 0) {
//     const wallpapers = [
//         "images/download (1).jfif",
//         "images/download .jfif",
//         "images/download (2).jfif",
//         "images/download (3).jfif"
//     ];

//     const row = document.querySelector(".row");
//     const wallpaperUrl = wallpapers[bgIndex] || wallpapers[0];
// const cardHTML = `
// <div class="col-md-6 col-lg-4 col-sm-12 mt-3">
//     <div class="card custom-card"
//         style="background:url('${wallpaperUrl}') center/cover no-repeat;">
        
//         <div class="card-body custom-body">

//             <h5 class="card-title custom-title">${title}</h5>

//             <p class="card-text custom-desc">${desc}</p>

//             <div class="card-buttons">
//                 <button class="btn btn-warning btn-sm edit-btn">Edit</button>
//                 <button class="btn btn-danger btn-sm remove-btn">Remove</button>
//             </div>

//         </div>
//     </div>
// </div>`;



//     row.insertAdjacentHTML("beforeend", cardHTML);

//     // Remove Button
//     row.querySelectorAll(".remove-btn").forEach(btn => {
//         btn.onclick = function () {
//             Swal.fire({
//                 title: "Delete Post?",
//                 text: "Do you really want to remove this post?",
//                 icon: "warning",
//                 showCancelButton: true,
//                 confirmButtonColor: "#d33",
//                 cancelButtonColor: "#3085d6",
//                 confirmButtonText: "Yes, Delete"
//             }).then((result) => {
//                 if (result.isConfirmed) {
//                     this.closest(".col-md-6").remove();
//                     checkEmptyState();
//                 }
//             });
//         };
//     });

//     // Edit Button
//     row.querySelectorAll(".edit-btn").forEach(btn => {
//         btn.onclick = function () {
//             const cardDiv = this.closest(".col-md-6");
//             const currentTitle = cardDiv.querySelector(".card-title").innerText;
//             const currentDesc = cardDiv.querySelector(".card-text").innerText;
//             let currentBgIndex = wallpapers.findIndex(img => cardDiv.querySelector(".card").style.background.includes(img));
//             if(currentBgIndex === -1) currentBgIndex = 0;

//             editPost(cardDiv, currentTitle, currentDesc, currentBgIndex);
//         };
//     });

//     checkEmptyState();
// }

// // ---------------- EDIT FUNCTION ---------------- //
// function editPost(cardDiv, title, desc, bgIndex) {
//     const wallpapers = [
//         "images/download (1).jfif",
//         "images/download (2).jfif",
//         "images/download (3).jfif",
//          "images/123.jfif",
//     ];

//     let selectedIndex = bgIndex;

//     let wallpaperDivs = wallpapers.map((img, idx) => {
//         return `<div class="wallpaper-preview" data-index="${idx}" 
//             style="
//                 display:inline-block;
//                 width:50px;
//                 height:50px;
//                 margin:3px;
//                  margin-top:23px;
//                 border:2px solid ${idx === selectedIndex ? '#0B1D51':'#ccc'};
//                 border-radius:8px;
//                 background:url('${img}') center/cover no-repeat;
//                 cursor:pointer;
//             ">
//         </div>`;
//     }).join("");

//     Swal.fire({
//         title: "Edit Your Post",
//         html: `
//             <input id="title" class="swal2-input" placeholder="Enter Title" value="${title}">
//             <textarea id="desc" class="swal2-textarea" placeholder="Enter Description">${desc}</textarea>
//             <div style="margin-top:10px;">${wallpaperDivs}</div>
//         `,
//         confirmButtonText: "Update Post",
//         showCancelButton: true,
//         didOpen: () => {
//             const divs = Swal.getHtmlContainer().querySelectorAll(".wallpaper-preview");
//             divs.forEach(div => {
//                 div.addEventListener("click", () => {
//                     selectedIndex = parseInt(div.getAttribute("data-index"));
//                     divs.forEach(d => d.style.border = "2px solid #ccc");
//                     div.style.border = "2px solid #0B1D51";
//                 });
//             });
//         },
//         preConfirm: () => {
//             const newTitle = document.getElementById("title").value.trim();
//             const newDesc = document.getElementById("desc").value.trim();
//             if (!newTitle || !newDesc) Swal.showValidationMessage("Please enter both Title & Description");
//             return { newTitle, newDesc, newBgIndex: selectedIndex };
//         }
//     }).then((result) => {
//         if(result.isConfirmed){
//             const wallpapersUrls = wallpapers;
//             const cardInner = cardDiv.querySelector(".card");
//             cardInner.style.background = `url('${wallpapersUrls[result.value.newBgIndex]}') center/cover no-repeat`;
//             cardDiv.querySelector(".card-title").innerText = result.value.newTitle;
//             cardDiv.querySelector(".card-text").innerText = result.value.newDesc;

//             Swal.fire({
//                 icon: "success",
//                 title: "Post Updated!",
//                 showConfirmButton: false,
//                 timer: 1000
//             });
//         }
//     });
// }

// // ---------------- EMPTY STATE FUNCTION ---------------- //
// function checkEmptyState() {
//     const row = document.querySelector(".row");
//     let emptyState = document.getElementById("empty-state");

//     if (!emptyState) {
//         emptyState = document.createElement("div");
//         emptyState.id = "empty-state";
//         emptyState.style = `
//             text-align:center;
//             padding:60px 20px;
//             animation: fadeIn 0.8s ease-in-out;
//             margin-top:90px;
//         `;
//         emptyState.innerHTML = `
//             <img src="https://cdn-icons-png.flaticon.com/512/4076/4076503.png" 
//                  style="width:120px; opacity:0.85; margin-bottom:20px;" />
//             <h2 style="font-weight:700; color:#0B1D51; margin-bottom:10px;">
//                 No Posts Yet!
//             </h2>
//             <p style="font-size:17px; color:#666; max-width:350px; margin:auto;">
//                 Create your first post and start adding your ideas 💡✨
//             </p>
//         `;
//         row.parentNode.insertBefore(emptyState, row);
//     }

//     if (row.children.length === 0) {
//         emptyState.style.display = "block";
//     } else {
//         emptyState.style.display = "none";
//     }
// }

// // ---------------- ADD BUTTON FUNCTION ---------------- //
// function add() {
//     const wallpapers = [
//         "images/download (1).jfif",
//         "images/download .jfif",
//         "images/download (2).jfif",
//         "images/download (3).jfif"
//     ];

//     let selectedIndex = 0;

//     let wallpaperDivs = wallpapers.map((img, idx) => {
//         return `<div class="wallpaper-preview" data-index="${idx}" 
//             style="
//                 display:inline-block;
//                 width:50px;
//                 height:50px;
//                 margin:3px;
//                 border:2px solid ${idx===0?'#0B1D51':'#ccc'};
//                 border-radius:8px;
//                 background:url('${img}') center/cover no-repeat;
//                 cursor:pointer;
//             ">
//         </div>`;
//     }).join("");

//     Swal.fire({
//         title: "Add Your Post",
//         html: `
//             <input id="title" class="swal2-input" placeholder="Enter Title">
//             <textarea id="desc" class="swal2-textarea" placeholder="Enter Description"></textarea>
//             <div style="margin-top:10px;">${wallpaperDivs}</div>
//         `,
//         confirmButtonText: "Add The Post",
//         showCancelButton: true,
//         didOpen: () => {
//             const divs = Swal.getHtmlContainer().querySelectorAll(".wallpaper-preview");
//             divs.forEach(div => {
//                 div.addEventListener("click", () => {
//                     selectedIndex = parseInt(div.getAttribute("data-index"));
//                     divs.forEach(d => d.style.border = "2px solid #ccc");
//                     div.style.border = "2px solid #0B1D51";
//                 });
//             });
//         },
//         preConfirm: () => {
//             const title = document.getElementById("title").value.trim();
//             const desc = document.getElementById("desc").value.trim();
//             if(!title || !desc) Swal.showValidationMessage("Please enter both Title & Description");
//             return { title, desc, bgIndex: selectedIndex };
//         }
//     }).then((result) => {
//         if(result.isConfirmed){
//             addCard(result.value.title, result.value.desc, result.value.bgIndex);
//             Swal.fire({
//                 icon: "success",
//                 title: "Post Added!",
//                 showConfirmButton: false,
//                 timer: 1000
//             });
//         }
//     });
// }

// // ---------------- INIT EMPTY STATE ---------------- //
// document.addEventListener("DOMContentLoaded", () => {
//     checkEmptyState();
// });
// Swal.fire({
//     title: "Add Your Post",
//     html: `
//         <input id="title" class="swal2-input" placeholder="Enter Title">
//         <textarea id="desc" class="swal2-textarea" placeholder="Enter Description"></textarea>
//         <div style="margin-top:10px;">${wallpaperDivs}</div>
//     `,
//     confirmButtonText: "Add The Post",
//     showCancelButton: true,
//     width: '90%',        // Responsive width
//     maxWidth: '450px',   // Limit on large screens
//     didOpen: () => {
//         const divs = Swal.getHtmlContainer().querySelectorAll(".wallpaper-preview");
//         divs.forEach(div => {
//             div.addEventListener("click", () => {
//                 selectedIndex = parseInt(div.getAttribute("data-index"));
//                 divs.forEach(d => d.style.border = "2px solid #ccc");
//                 div.style.border = "2px solid #0B1D51";
//             });
//         });
//     },
//     preConfirm: () => {
//         const title = document.getElementById("title").value.trim();
//         const desc = document.getElementById("desc").value.trim();
//         if(!title || !desc) Swal.showValidationMessage("Please enter both Title & Description");
//         return { title, desc, bgIndex: selectedIndex };
//     }
// });

// Swal.fire({
//     title: "Add Your Post",
//     html: `
//         <input id="title" class="swal2-input" placeholder="Enter Title">
//         <textarea id="desc" class="swal2-textarea" placeholder="Enter Description"></textarea>
//         <div style="margin-top:10px;">${wallpaperDivs}</div>
//     `,
//     confirmButtonText: "Add The Post",
//     showCancelButton: true,
//     customClass: {
//         popup: 'responsive-swal'
//     },
//     preConfirm: () => {
//         const title = document.getElementById("title").value.trim();
//         const desc = document.getElementById("desc").value.trim();
//         if(!title || !desc) Swal.showValidationMessage("Please enter both Title & Description");
//         return { title, desc, bgIndex: selectedIndex };
//     }
// });
// Wallpaper options
const wallpapers = [
    "images/download (1).jfif",
    "images/download .jfif",
    "images/download (2).jfif",
    "images/download (3).jfif"
];

// Add Post Button
document.getElementById("add").addEventListener("click", () => {
    Swal.fire({
        title: "Add the Post",
        html: `
            <input id="swal-title" class="swal2-input" placeholder="Enter title">
            <textarea id="swal-desc" class="swal2-textarea" placeholder="Enter description"></textarea>
            <select id="swal-bg" class="swal2-input">
                <option value="0">Wallpaper 1</option>
                <option value="1">Wallpaper 2</option>
                <option value="2">Wallpaper 3</option>
                <option value="3">Wallpaper 4</option>
            </select>
        `,
        confirmButtonText: "Add Post",
        showCancelButton: true
    }).then(result => {
        if (result.isConfirmed) {
            const title = document.getElementById("swal-title").value.trim();
            const desc = document.getElementById("swal-desc").value.trim();
            const bg = document.getElementById("swal-bg").value;

            if (!title || !desc) {
                Swal.fire("Please fill all fields");
                return;
            }

            addCard(title, desc, bg);
        }
    });
});

// Add Card Function
function addCard(title, desc, bgIndex) {
    const row = document.getElementById("post-row");

    const col = document.createElement("div");
    col.className = "col-md-4 col-sm-6 col-12 mb-3";

    col.innerHTML = `
        <div class="custom-card" style="background-image: url('${wallpapers[bgIndex]}')">
            <div class="custom-body">
                <h5 class="custom-title">${title}</h5>
                <p class="custom-desc">${desc}</p>
            </div>

            <div class="card-actions">
                <button class="btn btn-light btn-sm edit-btn">Edit</button>
                <button class="btn btn-danger btn-sm remove-btn">Remove</button>
            </div>
        </div>
    `;

    row.appendChild(col);

    // Remove Button
    col.querySelector(".remove-btn").addEventListener("click", () => {
        col.remove();
    });

    // Edit Button
    col.querySelector(".edit-btn").addEventListener("click", () => {
        editCard(col, title, desc, bgIndex);
    });
}

// Edit Card
function editCard(cardElement, oldTitle, oldDesc, oldBg) {
    Swal.fire({
        title: "Edit Post",
        html: `
            <input id="edit-title" class="swal2-input" value="${oldTitle}">
            <textarea id="edit-desc" class="swal2-textarea">${oldDesc}</textarea>
            <select id="edit-bg" class="swal2-input">
                <option value="0">Wallpaper 1</option>
                <option value="1">Wallpaper 2</option>
                <option value="2">Wallpaper 3</option>
                <option value="3">Wallpaper 4</option>
            </select>
        `,
        confirmButtonText: "Save",
        showCancelButton: true
    }).then(result => {
        if (result.isConfirmed) {
            const newTitle = document.getElementById("edit-title").value.trim();
            const newDesc = document.getElementById("edit-desc").value.trim();
            const newBg = document.getElementById("edit-bg").value;

            if (!newTitle || !newDesc) {
                Swal.fire("All fields required!");
                return;
            }

            // Update card
            cardElement.querySelector(".custom-title").textContent = newTitle;
            cardElement.querySelector(".custom-desc").textContent = newDesc;
            cardElement.querySelector(".custom-card").style.backgroundImage =
                `url('${wallpapers[newBg]}')`;
        }
    });
}
