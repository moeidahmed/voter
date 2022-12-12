function repeat(end, data) {
  console.log(end);
  let xhttp = new XMLHttpRequest();
  let url = `http://localhost:4000/${end}/${data}`;
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let data = JSON.parse(this.responseText);
      for (let i = 0; i < data.length; i++) {
        const element = data[i];
        console.log(element);
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

function filter(a) {
  console.log(a);
  province = document.getElementById("province").value;
  repeat(a, province);
}

function go(b) {
  gender = document.getElementById("gender").value;
  repeat(b, gender);
}

function now(c) {
  ward = document.getElementById("ward").value;
  repeat(c, ward);
}
