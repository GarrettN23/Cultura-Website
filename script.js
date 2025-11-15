// Make all "Sign Up" buttons go to the contact page
document.querySelectorAll(".cta-signup").forEach(btn => {
  btn.addEventListener("click", () => {
    window.location.href = "contact.html";
  });
});

// "Submit your picture now" button on Community Page
const photoBtn = document.querySelector(".btn-submit-photo");
if (photoBtn) {
  photoBtn.addEventListener("click", () => {
    window.location.href = "mailto:hello@culturabox.com?subject=Community Photo Submission";
  });
}
