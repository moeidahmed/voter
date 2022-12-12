function submitData(e) {
  e.preventDefault();
  let name = document.getElementById("name").value;
  let fname = document.getElementById("fname").value;
  let cnic = document.getElementById("Cnic").value;
  let address = document.getElementById("address").value;
  let dob = document.getElementById("dob").value;
  var city = document.getElementById("mySelect").value;
  let province = document.getElementById("province").value;
  let gender = document.getElementById("gender").value;
  let ward = document.getElementById("ward").value;
  let district = document.getElementById("mySelect1").value;
  let uc = document.getElementById("uc").value;
  let contact = document.getElementById("contact").value;
  let email = document.getElementById("email").value;
  const data = `{
        "name": "${name}",
        "fatherName": "${fname}",
        "cnic": "${cnic}",
        "dob": "${dob}",
        "contact": "${contact}",
        "address": "${address}",
        "city": "${city}",
        "province": "${province}",
        "district": "${district}",
        "uc": "${uc}",
        "ward": "${ward}",
        "gender": "${gender}",
        "email": "${email}"
      }`;
  fetch("http://localhost:4000/create/new_user", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: data,
  })
    .then((res) => console.log(res))
    .catch((err) => ("Error occured", err));
  location.assign("all.html");
}

async function userdata() {
  let xhttp = new XMLHttpRequest();
  let url = "http://localhost:4000/user/data";
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let data = JSON.parse(this.responseText);
      for (let i = 0; i < data.length; i++) {
        const element = data[i];
        let name = element.name;
        let fname = element.fatherName;
        let cnic = element.cnic;
        let dob = element.dob;
        let address = element.address;
        let ward = element.ward;
        let province = element.province;
        let district = element.district;
        let email = element.email;
        let contact = element.contact;
        let uc = element.uc;
        let gender = element.gender;
        let city = element.city;
        document.getElementById("userPro").innerHTML = " ";
        voter(
          name,
          fname,
          cnic,
          dob,
          address,
          ward,
          province,
          district,
          email,
          contact,
          uc,
          gender,
          city
        );
      }
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}
userdata();
