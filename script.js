const form = document.querySelector("#add__form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = form.elements["email"].value;
  const password = form.elements["password"].value;
  const checkbox = form.elements["checkbox"].checked;

  if (!email || !password || !checkbox) {
    alert("Please Enter all the details");
  }

  let data = JSON.parse(sessionStorage.getItem('formData')) || []
  let newData = {email, password, checkbox}
  data.push(newData)
  sessionStorage.setItem('formData',JSON.stringify(data))

  alert("Record Saved")
  console.log(data);
  form.reset()

});

