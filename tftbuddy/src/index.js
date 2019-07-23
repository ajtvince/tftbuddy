import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import emblemIron from './etc/emblems/Emblem_Iron.png';
import emblemBronze from './etc/emblems/Emblem_Bronze.png';
import emblemSilver from './etc/emblems/Emblem_Silver.png';
import emblemGold from './etc/emblems/Emblem_Gold.png';
import emblemPlatinum from './etc/emblems/Emblem_Platinum.png';
import emblemDiamond from './etc/emblems/Emblem_Diamond.png';
import emblemMaster from './etc/emblems/Emblem_Master.png';
import emblemGrandmaster from './etc/emblems/Emblem_Grandmaster.png';
import emblemChallenger from './etc/emblems/Emblem_Challenger.png';


class Shop extends React.Component {
    render() {
        return (

            <div id="content-container">

                <div id="containerL">
                
                    <div id="profile-container">
                        <img id="profile-icon" src={this.props.profileIcon} ></img>
                        <div id="profile-level"><em>Level {this.props.level}</em></div>
                        <h2 id="profile-name">{this.props.summoner}</h2>
                    </div>
                    
                    <div id="ranks-container">
                            <img id="rank-tier" src={this.props.tftTier}></img>
                            <div id="rank-rank">
                            <h2>{this.props.tftRank}</h2>
                            <p>{this.props.tftWins}W - {this.props.tftLosses}L ({ Math.trunc( 100 * (this.props.tftWins / (this.props.tftLosses + this.props.tftWins) ) ) }%) </p>
                            <p>{this.props.tftLP} LP</p>
                            </div>
                    </div>

                </div>

                <div id="containerR">

                    <div id="match-history-container">match history here</div>

                </div>

            </div>
        );
    }
}

const key = "?api_key=RGAPI-0ef63d08-33bb-4896-87a1-91dbe85358a8"
const lolVersion="9.13.1";
const urlSummonerLookup = "https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/"
const urlMatchHistory="https://na1.api.riotgames.com/lol/match/v4/matchlists/by-account/";
const urlRank="https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/";
const urlGameID="https://na1.api.riotgames.com/lol/match/v4/matches/";
const emblems = ["src/etc/emblems/Emblem_Iron.png", "etc/emblems/Emblem_Bronze.png", "etc/emblems/Emblem_Silver.png", "etc/emblems/Emblem_Gold.png", "etc/emblems/Emblem_Platinum.png", "etc/emblems/Emblem_Diamond.png", "etc/emblems/Emblem_Master.png", "etc/emblems/Emblem_Grandmaster.png", "etc/emblems/Emblem_Challenger.png"];
const urlChampionsSplash="http://ddragon.leagueoflegends.com/cdn/img/champion/splash/";
const urlChampions="http://ddragon.leagueoflegends.com/cdn/" + lolVersion + "/data/en_US/champion.json";
const urlProfileIcon = "http://ddragon.leagueoflegends.com/cdn/" + lolVersion + "/img/profileicon/";

let lolSummonerLevel,
    lolSummonerID,
    lolAccount,
    lolName,
    lolSummonerName,
    lolProfileIcon,
    lolTFTTier,
    tftRank,
    tftWins,
    tftLosses,
    tftLP,
    slotCounter = 1;


document.getElementById("search-button").addEventListener("click", function() {
    on_search()
});






async function on_search() {

    let summonerName = document.getElementById("search-input").value;

    await fetch(urlSummonerLookup + summonerName + key)
        .then(resp => resp.json())
        .then(data => {
            lolAccount = data.accountId;
            lolName = data.name;
            lolProfileIcon =  urlProfileIcon + data.profileIconId + ".png";
            lolSummonerLevel = data.summonerLevel;
            lolSummonerID = data.id;
            lolSummonerName = data.name;
        });

    await fetch(urlRank + lolSummonerID + key)
        .then(resp => resp.json())
        .then(data => {
            //TFT
            let queueType = "RANKED_TFT";
            let queueNum = data.length - 1;
            let queueFinal;
            if (data[queueNum].queueType === queueType) {
                queueFinal = queueNum;
            } else if (data[queueNum - 1].queueType === queueType) {
                queueFinal = queueNum - 1;
            } else if (data[queueNum - 2].queueType === queueType) {
                queueFinal = queueNum - 2;
            } else if (data[queueNum - 3].queueType === queueType) {
                queueFinal = queueNum - 3;
            }
            lolTFTTier = get_emblem(data[queueFinal].tier);
            tftRank = data[queueFinal].tier + " " + data[queueFinal].rank;
            tftWins = data[queueFinal].wins;
            tftLosses = data[queueFinal].losses;
            tftLP = data[queueFinal].leaguePoints;
        });

    await ReactDOM.render(<Shop 
        summoner={lolSummonerName} profileIcon={lolProfileIcon} level={lolSummonerLevel} 
        tftTier={lolTFTTier} tftRank={tftRank} tftWins={tftWins} tftLosses={tftLosses} tftLP={tftLP}
        slotCounter={slotCounter}
        />, document.getElementById("root"));

        
}


function get_emblem(rankEmblem) {
    switch(rankEmblem) {
    case "IRON": return emblemIron; break;
    case "BRONZE": return emblemBronze; break;
    case "SILVER": return emblemSilver; break;
    case "GOLD": return emblemGold; break;
    case "PLATINUM": return emblemPlatinum; break;
    case "DIAMOND": return emblemDiamond; break;
    case "MASTER": return emblemMaster; break;
    case "GRANDMASTER": return emblemGrandmaster; break;
    case "CHALLENGER": return emblemChallenger; break;
    }
}












// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
