//message section

let massages = [];
let massageBtn = document.getElementById("sendb");

massageBtn.addEventListener("click", function () {
  //input checking and sending
  let gotMail = document.getElementById("inmail").value;
  let gotText = document.getElementById("inmassage").value;
  let geted = {
    email: null,
    text: null,
  };
  if (
    gotMail.length > 5 &&
    gotMail.includes("@") &&
    gotText.length > 7 &&
    gotText.length < 150
  ) {
    geted.email = gotMail;
    geted.text = gotText;
    alert("We've got your massage");
    document.getElementById("inmail").value = "";
    document.getElementById("inmassage").value = "";
  } else {
    document.getElementById("inmail").style.borderColor = "red";
    document.getElementById("inmassage").style.borderColor = "red";
    document.getElementById("sendb").style.borderColor = "red";
    document.getElementById("inmail").value = "";
    document.getElementById("inmassage").value = "";
    document.getElementById("inmail").placeholder = "Wrong input";

    console.log(gotMail, gotText, "wrongInput");
    return 0;
  }
  massages.push(geted);
  console.log(massages);
});

//admin and editing section-----------

// const adminPass = "Vidal23";

// document.getElementById("adminBtn").addEventListener("click", function () {
//   if (document.getElementById("passInp").value === adminPass) {
//     let lis = document.getElementsByClassName("liEditable");
//     let editBtn = document.createElement("button");
//     editBtn.setAttribute("class", "editiBtn");
//     lis.appendChild(editBtn);
//     console.log(lis);
//   }
// });
