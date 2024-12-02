console.log("Frontend JS ishga tushdi")

function itemTemplate(item){
    return `
        <li
            class="list-group-item list-group-item-info d-flex align-items-center justify-content-between"
            >
            <span class="item-text">${item.reja}</span>
            <div>
                <button data-id="${item._id}" class="edit-me btn btn-secondary btn-sm mr-1">
                    Ozgartirish
                </button>
                <button data-id="${item._id}" class="delete-me btn btn-danger btn-sm">Ochirish</button>
            </div>
        </li>
    `;
}

let createField = document.getElementById("create-field");

document.getElementById("create-form").addEventListener("submit", function(e){
    console.log("Man ketdim Backendga")
    //STEP 1: Front End => Backend malumot jo'natish!
    e.preventDefault();

    axios.post("/create-item", {reja: createField.value}).then((response) => {
        //console.log("STEP6: Backenddan kelgan malumotni ro'yxat oxirsiga qo'shish")
        document.getElementById("item-list").insertAdjacentHTML("beforeend", itemTemplate(response.data)); //Tepadagi Function Templatedan design olindi
        createField.value="";  //HTML input field should be empty after sending POST request   
        createField.focus(); //HTML input field should be focused in the input field after sending the POST request
    }).catch((err) =>{
        console.log("Iltimos qaytadan harakat qiling")
    });
})

//DELETE FUNCTION   

document.addEventListener("click", function(e){
    //delete oper
    console.log("STEP1: Click eventi amalga oshdi")
    console.log("THIS is E: ", e);
    if(e.target.classList.contains("delete-me")){
        console.log("STEP2: delete-me classi borligi tekshirish")
        if(confirm("Aniq ochirmoqchimisiz?")){
            console.log("STEP3: Frontenddan Axios yordamida backendga request jo'natdik");
            axios.post("/delete-item", {id: e.target.getAttribute("data-id")})
            .then((respose)=>{
                console.log("STEP7: Qabul qilingan response orqali HTML parent elementidan 1ta element ochirildi");
                console.log(respose.data);
                e.target.parentElement.parentElement.remove();
            }).catch((err)=>{
                console.log("yana xarakat qiling");
            });
        } 
    }


//EDIT OPERATION    
    if(e.target.classList.contains("edit-me")){
        let userInput = prompt("O'zgartirish kiriting", e.target.parentElement.parentElement.querySelector(".item-text").innerHTML); //pop up chiqazib beradi o'zgartirish kiritadigan
        if(userInput){
            axios.post("/edit-item", {id: e.target.getAttribute("data-id"), new_input: userInput})
            .then((response) => {
                console.log(response.data);
                e.target.parentElement.parentElement.querySelector(".item-text").innerHTML = userInput;
            })
            .catch((err)=>{
                console.log("Iltimos yana xarakat qiling!")
            })
        }
    }
});

document.getElementById("clean-all").addEventListener("click", function () {
    axios.post("/delete-all", { delete_all: true })
        .then((response) => {
            alert(response.data.state);
            document.location.reload();
        })
        .catch((err) => {
            console.error("Error:", err);
        });
});