const clubs = [ "я хз що тут писати" ];
document.addEventListener("DOMContentLoaded", () => {
    const clubSelect = document.getElementById("club-select");
    if (!clubSelect) return;
  
    clubs.forEach(breed => {
      const option = document.createElement("option");
      option.value = breed;
      option.textContent = breed;
      clubSelect.appendChild(option);
    });
  });