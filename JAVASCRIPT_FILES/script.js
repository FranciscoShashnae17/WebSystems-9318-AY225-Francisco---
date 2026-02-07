/* =====================
   ANNOUNCEMENTS DATA
===================== */
const announcements = [
  "City Hall will be closed on February 25.",
  "Free medical check-up available this weekend.",
  "Deadline for business permit renewal extended."
];

/* =====================
   LOAD ANNOUNCEMENTS
===================== */
const newsList = document.getElementById("newsList");

announcements.forEach(text => {
  const item = document.createElement("li");
  item.textContent = text;
  item.addEventListener("click", () => openModal(text));
  newsList.appendChild(item);
});

/* =====================
   MODAL CONTROLS
===================== */
function openModal(message) {
  document.getElementById("modalText").textContent = message;
  document.getElementById("newsModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("newsModal").style.display = "none";
}

/* =====================
   DEPARTMENT SEARCH
===================== */
document.getElementById("deptSearch").addEventListener("input", e => {
  const keyword = e.target.value.toLowerCase();
  document.querySelectorAll(".department").forEach(dept => {
    dept.style.display = dept.textContent.toLowerCase().includes(keyword)
      ? "block"
      : "none";
  });
});

/* =====================
   FORM HANDLING (Optional)
===================== */
const serviceForm = document.getElementById("serviceForm");
if (serviceForm) {
  serviceForm.addEventListener("submit", e => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const service = document.getElementById("service").value;

    if (!name || !service) {
      showStatus("Please complete all required fields.", true);
      return;
    }

    localStorage.setItem("lastServiceUsed", service);
    showStatus("Your request has been submitted successfully.", false);
    e.target.reset();
  });
}

/* =====================
   STATUS MESSAGE
===================== */
function showStatus(message, isError) {
  const status = document.getElementById("formStatus");
  if (!status) return;
  status.textContent = message;
  status.style.color = isError ? "crimson" : "green";
}

/* =====================
   LOCAL STORAGE
===================== */
window.addEventListener("load", () => {
  const lastService = localStorage.getItem("lastServiceUsed");
  if (lastService) {
    console.log("Last service requested:", lastService);
  }
});
