//save user info when they submit on signup.html and redirect to profile.html


const signUpForm = document.forms.signUpForm

//create listener for forms submission event
//alt syntax adds onsubmit listener directly in html
signUpForm.addEventListener("submit", event => {

  //prevent page from refreshing
  event.preventDefault();

  //extract input data  //look-up alt ways to do this:
  const profileName = signUpForm.elements.name.value;
  const profession = signUpForm.elements.profession.value;

  //use helper function to save user data
  saveUserToLocalStorage(profileName, profession);

  //redirect user to profile page (should be able to do in html also)
  window.location.href = "/user/profile.html";
});

//helper function- use function declaration
function saveUserToLocalStorage(profileName, profession) {
  const profile = {
    "Profile Name": profileName,
    "profession": profession //object shorthand notation
  }
};

//"Serialize" data: convert it into usable format for local storage (string)
const profileJSON = JSON.stringify(profile);

//save user JSON to local storage using localStorage.setItem with key "_cb_user"
localStorage.setItem("\_cb_user", profileJSON);