document.addEventListener("DOMContentLoaded", init);

function init() {
  fetch("  http://localhost:3000/data")
    .then((resp) => resp.json())
    .then((teamsArray) => {
      const teamsList = document.getElementById("team-collection");
      teamsArray.forEach((team) => {
        if (team.conference === "West") {
          const teamWestOpt = document.createElement("option");

          const teamWestSelect = document.getElementById("team-west-dropdown");
          teamWestOpt.value = team.id;
          teamWestOpt.textContent = team.abbreviation;

          teamWestSelect.append(teamWestOpt);
        } else if (team.conference === "East") {
          const teamEastOpt = document.createElement("option");

          const teamEastSelect = document.getElementById("team-east-dropdown");
          teamEastOpt.value = team.id;
          teamEastOpt.textContent = team.abbreviation;

          teamEastSelect.append(teamEastOpt);
        }
      });
      const selectedWestTeam = document.getElementById("team-west-dropdown");

      const selectedTeamEast = document.getElementById("team-east-dropdown");

      function handleEvent(event) {
        const homeCardContainer = document.getElementById(
          "home-card-container"
        );
        const awayCardContainer = document.getElementById(
          "away-card-container"
        );

        const teamCard = document.createElement("div");
        teamCard.classList = "card";

        let selectedTeamId = event.target.value;
        let selectedTeamObj = teamsArray.find(
          (team) => team.id == selectedTeamId
        );

        if (homeCardContainer.innerHTML == "") {
          homeCardContainer.append(teamCard);
        } else if (awayCardContainer.innerHTML == "") {
          awayCardContainer.append(teamCard);
        }
        const teamName = document.createElement("h2");
        teamName.innerHTML = selectedTeamObj.full_name;
        teamCard.append(teamName);

        const teamLogo = document.createElement("img");
        teamLogo.classList = "team-logo";
        teamLogo.src = selectedTeamObj.logo;
        teamCard.append(teamLogo);

        const retroLogo = document.createElement("img");
        retroLogo.classList = "team-logo";
        retroLogo.src = selectedTeamObj.oldLogo;

        const logoBtn = document.createElement("button");
        logoBtn.classList = logoBtn.textContent = "THROW BACK LOGO";
        teamCard.append(logoBtn);

        logoBtn.addEventListener("click", () => {
          if (logoBtn.textContent === "THROW BACK") {
            logoBtn.textContent = "STANDARD";
            teamLogo.style.display = "none";
            retroLogo.style.display = "block";
            teamCard.append(retroLogo);
          } else {
            logoBtn.textContent === "STANDARD";
            logoBtn.textContent = "THROW BACK";
            retroLogo.style.display = "none";
            teamLogo.style.display = "block";
          }
        });
      }

      selectedTeamEast.addEventListener("change", handleEvent);

      selectedWestTeam.addEventListener("change", handleEvent);
    });
}
