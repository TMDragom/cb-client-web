//save user info when they submit on signup.html and redirect to profile.html


const signUpForm = document.forms.SignUp;

//create listener for forms submission event
//alt syntax adds onsubmit listener directly in html
signUpForm.addEventListener("submit", function(event) {

  //prevent page from refreshing
  event.preventDefault();

  //extract input data  //look-up alt ways to do this:
  const name = signUpForm.elements.name.value;
  const jobTitle = signUpForm.elements.profession.value;

  //use helper function to save user data
  saveUserToLocalStorage(name, jobTitle);

  //redirect user to profile page (should be able to do in html also)
  window.location.href = "/user/profile.html";
});

//helper function- use function declaration
function saveUserToLocalStorage(name, jobTitle) {
  const profileJSON = {
    "name": name,
    "jobTitle": jobTitle
  }

  //"Serialize" data: convert it into usable format for local storage (string)
  const profileString = JSON.stringify(profileJSON);

  //save user JSON to local storage using localStorage.setItem with key "_cb_user"
  localStorage.setItem("_cb_user", profileString);
};
