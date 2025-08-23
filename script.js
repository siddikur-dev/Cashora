document.getElementById("login-btn").addEventListener("click", function (e) {
  e.preventDefault();

  //Our Provided Number and pin
  const mobileNumber = "01751920983";
  const pinNumber = 1234;

  //Mobile Number And Login Pin Number get
  const MobileNumberValue = document.getElementById("mobileNumber").value;
  const pinNumberValue = document.getElementById("pinNumber").value;

  //   convert string to number: Mobile and  PinNumber
  const convertedMobileNumberValue = parseInt(MobileNumberValue);
  const convertedPinNumberValue = parseInt(pinNumberValue);
  //   Our Provided Number
  const convertedOurProvidedNumber = parseInt(mobileNumber);

// alertShowingInnerHTMLCreate
const showingAlert = document.getElementById("messageContainer");

if (
  convertedOurProvidedNumber === convertedMobileNumberValue &&
  pinNumber === convertedPinNumberValue
) {
//   showingAlert.innerHTML = `
//     <div role="alert" class="alert alert-success alert-soft">
//       <span>Credential Matched</span>
//     </div>
//   `;
  console.log("match");
  window.location.href = "./home.html";
  alert("Credential Matched")
} else {
//   showingAlert.innerHTML = `
//     <div role="alert" class="alert alert-error alert-soft">
//       <span>Invalid Credential!</span>
//     </div>
//   `;
  alert("Invalid Credential !")
}

});
