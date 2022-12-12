async function city() {
  const response = await fetch("template/cities.html");
  const city = await response.text();
  document.getElementById("city").innerHTML = city;
}
city();

async function voter(
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
) {
  const response = await fetch("template/voter.html");
  const voter = await response.text();

  let userProfile = voter
    .replace("#name", name)
    .replace("#fname", fname)
    .replace("#cnic", cnic)
    .replace("#dob", dob)
    .replace("#address", address)
    .replace("#ward", ward)
    .replace("#district", district)
    .replace("#province", province)
    .replace("#gender", gender)
    .replace("#uc", uc)
    .replace("#city", city)
    .replace("#contact", contact)
    .replace("#email", email);
  document.getElementById("userPro").innerHTML += userProfile;
}
voter();

async function district() {
  const response = await fetch("template/district.html");
  const district = await response.text();
  document.getElementById("district").innerHTML = district;
}
district();

function unionCouncil() {
  var opt = document
    .getElementById("mycontainer")
    .getElementsByTagName("select")[0];
  for (var i = 1; i <= 300; i++) {
    var theOption = new Option();
    theOption.text = i;
    theOption.value = i;
    opt.options[i] = theOption;
  }
}
unionCouncil();
