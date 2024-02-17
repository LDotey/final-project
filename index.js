document.addEventListener("DOMContentLoaded", init)

function init () {
    fetch("  http://localhost:3000/data")
    .then((resp) => resp.json())
    .then((teamsArray) => {
        const teamsList = document.getElementById("team-collection")
        teamsArray.forEach(team => {
            // const teamCard = document.createElement('div')
            // teamCard.classList = "card"
            // // teamsList.append(teamCard)

            // const teamName = document.createElement('h2')
            // teamName.innerHTML = team.full_name
            // teamCard.append(teamName)
            
            // const trophyCount = document.createElement('p')
            // trophyCount.innerHTML = "number of trophies"
            // teamCard.append(trophyCount)

            // const teamLogo = document.createElement('img')
            // teamLogo.classList = "team-logo"
            // teamLogo.src = team.logo
            // teamCard.append(teamLogo)

            // const retroLogo = document.createElement("img")
            // retroLogo.classList = "team-logo"
            // retroLogo.src = team.oldLogo

            // const logoBtn = document.createElement('button')
            // logoBtn.classList = 
            // logoBtn.textContent = "THROW BACK"
            // teamCard.append(logoBtn)
         
            
            if (team.conference === "West") {
                const teamWestOpt = document.createElement('option')

                const teamWestSelect = document.getElementById("team-west-dropdown")
                teamWestOpt.value = team.id
                teamWestOpt.textContent = team.abbreviation

                teamWestSelect.append(teamWestOpt)

            } 
            
            else if(team.conference === "East") {
                const teamEastOpt = document.createElement('option')

                const teamEastSelect = document.getElementById("team-east-dropdown")
                teamEastOpt.value = team.id
                teamEastOpt.textContent = team.abbreviation

                teamEastSelect.append(teamEastOpt)

            }
            
            
        })
        const homeTeamContainer = document.getElementById('home-court')
        const selectedWestTeam = document.getElementById('team-west-dropdown')

        const awayTeamContainer = document.getElementById('away-court')
        const selectedTeamEast = document.getElementById('team-east-dropdown')

        selectedTeamEast.addEventListener("change", () => {})

        selectedWestTeam.addEventListener("change", (event) => {
            const emptyHomeDiv = homeTeamContainer.lastElementChild
            const teamCard = document.createElement('div')
            homeTeamContainer.replaceChild(teamCard,emptyHomeDiv)
            
            const homeTeamId = event.target.value
            const homeTeamObj = teamsArray.find((team) => team.id == homeTeamId)
            teamCard.classList = "card"
            homeTeamContainer.append(teamCard)
        
        

            const teamName = document.createElement('h2')
            teamName.innerHTML = homeTeamObj.full_name
            teamCard.append(teamName)
            
            const trophyCount = document.createElement('p')
            trophyCount.innerHTML = "number of trophies"
            teamCard.append(trophyCount)

            const teamLogo = document.createElement('img')
            teamLogo.classList = "team-logo"
            teamLogo.src = homeTeamObj.logo
            teamCard.append(teamLogo)

            const retroLogo = document.createElement("img")
            retroLogo.classList = "team-logo"
            retroLogo.src = homeTeamObj.oldLogo

            const logoBtn = document.createElement('button')
            logoBtn.classList = 
            logoBtn.textContent = "THROW BACK LOGO"
            teamCard.append(logoBtn)
            console.log(homeTeamObj)

            logoBtn.addEventListener("click", (event) => {
                if (logoBtn.textContent === "THROW BACK") {
                    logoBtn.textContent = "STANDARD"
                    teamLogo.style.display = "none"
                    retroLogo.style.display = "block"
                    teamCard.append(retroLogo)
                } else {
                    logoBtn.textContent === "STANDARD"
                    logoBtn.textContent = "THROW BACK"
                    retroLogo.style.display = "none"
                    teamLogo.style.display = "block"                  
                }
            })
        })  
        })
        const playBtn = document.querySelector('.button')
        // console.log(playBtn)
        playBtn.addEventListener("click", (event) => {
            const myArray = ['winner','loser']
            const randomElement = myArray[Math.floor(Math.random()*myArray.length)]
            console.log(randomElement)
            
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
        // if both home and away slots have been filled the "play" button becomes active
// Selecting the "PLAY" button activates a randomizer that picks a winning team
        // apply numbers to each team 1, 2 or 3 then have a randomizer math.random() run to select winner
// An image of a trophy appears beside the winning team's logo
        // add event listener that renders image of trophy to page for the winning team
        // keep a tally of how many trophies each team has won
// Another button at the top of the page can activate "throw-back mode"
        // add event listener to "throw-back" button that replaces logo with retro logo
// in "throw-back mode" all logos are retro logos