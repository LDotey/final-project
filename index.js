document.addEventListener("DOMContentLoaded", init)

function init () {
    fetch("  http://localhost:3000/data")
    .then((resp) => resp.json())
    .then((teamsArray) => {
        const teamsList = document.getElementById("team-collection")
        teamsArray.forEach(team => {
            const teamCard = document.createElement('div')
            teamCard.classList = "card"
            teamsList.append(teamCard)

            const teamName = document.createElement('h2')
            teamName.innerHTML = team.full_name
            teamCard.append(teamName)

            const teamLogo = document.createElement('img')
            teamLogo.src = team.logo
            teamCard.append(teamLogo)

            const trophyCount = document.createElement('p')
            trophyCount.innerHTML = 
            teamCard.append(trophyCount)

            const rosterWest = document.getElementById("western-conference")
            const rosterEast = document.getElementById("eastern-conference")
            
            const teamConf = document.createElement('option')
            teamConf.value = team.conference
            
            if (teamConf.textContent === "West") {
                rosterWest.append(team.city)
            } else if (teamConf.textContent === "East") {
                rosterEast.append(team.city)
            }


            console.log(teamConf.textContent)

    })


})
}

// On page open, 2 drop down forms are shown containing each conference's teams
        // create drop down lists
        // "choose a home team" & "choose a visiting team"
        // apply options to drop down so team names are populated in each by "conference"
        // first team selected will be home team no matter from which list

// User can select one home team and one away team
// When the team is selcted their logo will populate either home or away "court"
        // add event listener to "submit" that renders the team logo to the page 
// Selecting the "PLAY" button activates a randomizer that picks a winning team
        // apply numbers to each team 1, 2 or 3 then have a randomizer math.random() run to select winner
// An image of a trophy appears beside the winning team's logo
        // add event listener that renders image of trophy to page for the winning team
        // keep a tally of how many trophies each team has won
// Another button at the top of the page can activate "throw-back mode"
        // add event listener to "throw-back" button that replaces logo with retro logo
// in "throw-back mode" all logos are retro logos