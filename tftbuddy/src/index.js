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


class SummonerSearch extends React.Component {
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


const key = "?api_key=RGAPI-d2bfc955-9ed1-429d-bae5-dc7c0fc2dbaa"
const lolVersion="9.13.1";
const urlSummonerLookup = "https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/"
const urlMatchHistory="https://na1.api.riotgames.com/lol/match/v4/matchlists/by-account/";
const urlRank="https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/";
const urlGameID="https://na1.api.riotgames.com/lol/match/v4/matches/";
const emblems = ["src/etc/emblems/Emblem_Iron.png", "etc/emblems/Emblem_Bronze.png", "etc/emblems/Emblem_Silver.png", "etc/emblems/Emblem_Gold.png", "etc/emblems/Emblem_Platinum.png", "etc/emblems/Emblem_Diamond.png", "etc/emblems/Emblem_Master.png", "etc/emblems/Emblem_Grandmaster.png", "etc/emblems/Emblem_Challenger.png"];
const urlChampionsSplash="http://ddragon.leagueoflegends.com/cdn/img/champion/splash/";
const urlChampions="http://ddragon.leagueoflegends.com/cdn/" + lolVersion + "/data/en_US/champion.json";
const urlProfileIcon = "http://ddragon.leagueoflegends.com/cdn/" + lolVersion + "/img/profileicon/";
const urlChampIcon = "http://ddragon.leagueoflegends.com/cdn/" + lolVersion + "/img/champion/";

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

document.getElementById("goto-team-planner").addEventListener("click", function() {
    open_team_planner()
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

    await ReactDOM.render(<SummonerSearch 
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

let check_fill = 0;

let type_glacial,
    type_ranger,
    type_assassin,
    type_blademaster,
    type_brawler,
    type_elementalist,
    type_guardian,
    type_gunslinger,
    type_knight,
    type_shapeshifter,
    type_sorcerer,
    type_demon,
    type_dragon,
    type_exile,
    type_imperial,
    type_noble,
    type_ninja,
    type_phantom,
    type_pirate,
    type_robot,
    type_void,
    type_wild,
    type_yordle;

let num_glacial=0,
    num_ranger=0,
    num_assassin=0,
    num_blademaster=0,
    num_brawler=0,
    num_elementalist=0,
    num_guardian=0,
    num_gunslinger=0,
    num_knight=0,
    num_shapeshifter=0,
    num_sorcerer=0,
    num_demon=0,
    num_dragon=0,
    num_exile=0,
    num_imperial=0,
    num_noble=0,
    num_ninja=0,
    num_phantom=0,
    num_pirate=0,
    num_robot=0,
    num_void=0,
    num_wild=0,
    num_yordle=0;  

function add_champion(url, num) {
    let champ_url = url;
    let added_champ = document.createElement("img");
    added_champ.src = champ_url;
    get_type(champion_array[num].type);
    get_type(champion_array[num].type2);
    get_type(champion_array[num].type3);

    if (champion_array[num].type === "Glacial" || champion_array[num].type2 === "Glacial" || champion_array[num].type3 === "Glacial") {
        document.getElementById("glacialType").style.display = "inline-block";
        document.getElementById("glacialType").getElementsByTagName("span")[0].innerHTML = num_glacial;
    }
    if (champion_array[num].type === "Ranger" || champion_array[num].type2 === "Ranger" || champion_array[num].type3 === "Ranger") {
        document.getElementById("rangerType").style.display = "inline-block";
        document.getElementById("rangerType").getElementsByTagName("span")[0].innerHTML = num_ranger;
    }
    if (champion_array[num].type === "Assassin" || champion_array[num].type2 === "Assassin" || champion_array[num].type3 === "Assassin") {
        document.getElementById("assassinType").style.display = "inline-block";
        document.getElementById("assassinType").getElementsByTagName("span")[0].innerHTML = num_assassin;
    }
    if (champion_array[num].type === "Blademaster" || champion_array[num].type2 === "Blademaster" || champion_array[num].type3 === "Blademaster") {
        document.getElementById("blademasterType").style.display = "inline-block";
        document.getElementById("blademasterType").getElementsByTagName("span")[0].innerHTML = num_blademaster;
    }
    if (champion_array[num].type === "Brawler" || champion_array[num].type2 === "Brawler" || champion_array[num].type3 === "Brawler") {
        document.getElementById("brawlerType").style.display = "inline-block";
        document.getElementById("brawlerType").getElementsByTagName("span")[0].innerHTML = num_brawler;
    }
    if (champion_array[num].type === "Elementalist" || champion_array[num].type2 === "Elementalist" || champion_array[num].type3 === "Elementalist") {
        document.getElementById("elementalistType").style.display = "inline-block";
        document.getElementById("elementalistType").getElementsByTagName("span")[0].innerHTML = num_elementalist;
    }
    if (champion_array[num].type === "Guardian" || champion_array[num].type2 === "Guardian" || champion_array[num].type3 === "Guardian") {
        document.getElementById("guardianType").style.display = "inline-block";
        document.getElementById("guardianType").getElementsByTagName("span")[0].innerHTML = num_guardian;
    }
    if (champion_array[num].type === "Gunslinger" || champion_array[num].type2 === "Gunslinger" || champion_array[num].type3 === "Gunslinger") {
        document.getElementById("gunslingerType").style.display = "inline-block";
        document.getElementById("gunslingerType").getElementsByTagName("span")[0].innerHTML = num_gunslinger;
    }
    if (champion_array[num].type === "Knight" || champion_array[num].type2 === "Knight" || champion_array[num].type3 === "Knight") {
        document.getElementById("knightType").style.display = "inline-block";
        document.getElementById("knightType").getElementsByTagName("span")[0].innerHTML = num_knight;
    }
    if (champion_array[num].type === "Shapeshifter" || champion_array[num].type2 === "Shapeshifter" || champion_array[num].type3 === "Shapeshifter") {
        document.getElementById("shapeshifterType").style.display = "inline-block";
        document.getElementById("shapeshifterType").getElementsByTagName("span")[0].innerHTML = num_shapeshifter;
    }
    if (champion_array[num].type === "Sorcerer" || champion_array[num].type2 === "Sorcerer" || champion_array[num].type3 === "Sorcerer") {
        document.getElementById("sorcererType").style.display = "inline-block";
        document.getElementById("sorcererType").getElementsByTagName("span")[0].innerHTML = num_sorcerer;
    }
    if (champion_array[num].type === "Demon" || champion_array[num].type2 === "Demon" || champion_array[num].type3 === "Demon") {
        document.getElementById("demonType").style.display = "inline-block";
        document.getElementById("demonType").getElementsByTagName("span")[0].innerHTML = num_demon;
    }
    if (champion_array[num].type === "Dragon" || champion_array[num].type2 === "Dragon" || champion_array[num].type3 === "Dragon") {
        document.getElementById("dragonType").style.display = "inline-block";
        document.getElementById("dragonType").getElementsByTagName("span")[0].innerHTML = num_dragon;
    }
    if (champion_array[num].type === "Exile" || champion_array[num].type2 === "Exile" || champion_array[num].type3 === "Exile") {
        document.getElementById("exileType").style.display = "inline-block";
        document.getElementById("exileType").getElementsByTagName("span")[0].innerHTML = num_exile;
    }
    if (champion_array[num].type === "Imperial" || champion_array[num].type2 === "Imperial" || champion_array[num].type3 === "Imperial") {
        document.getElementById("imperialType").style.display = "inline-block";
        document.getElementById("imperialType").getElementsByTagName("span")[0].innerHTML = num_imperial;
    }
    if (champion_array[num].type === "Noble" || champion_array[num].type2 === "Noble" || champion_array[num].type3 === "Noble") {
        document.getElementById("nobleType").style.display = "inline-block";
        document.getElementById("nobleType").getElementsByTagName("span")[0].innerHTML = num_noble;
    }
    if (champion_array[num].type === "Ninja" || champion_array[num].type2 === "Ninja" || champion_array[num].type3 === "Ninja") {
        document.getElementById("ninjaType").style.display = "inline-block";
        document.getElementById("ninjaType").getElementsByTagName("span")[0].innerHTML = num_ninja;
    }
    if (champion_array[num].type === "Phantom" || champion_array[num].type2 === "Phantom" || champion_array[num].type3 === "Phantom") {
        document.getElementById("phantomType").style.display = "inline-block";
        document.getElementById("phantomType").getElementsByTagName("span")[0].innerHTML = num_phantom;
    }
    if (champion_array[num].type === "Pirate" || champion_array[num].type2 === "Pirate" || champion_array[num].type3 === "Pirate") {
        document.getElementById("pirateType").style.display = "inline-block";
        document.getElementById("pirateType").getElementsByTagName("span")[0].innerHTML = num_pirate;
    }
    if (champion_array[num].type === "Robot" || champion_array[num].type2 === "Robot" || champion_array[num].type3 === "Robot") {
        document.getElementById("robotType").style.display = "inline-block";
        document.getElementById("robotType").getElementsByTagName("span")[0].innerHTML = num_robot;
    }
    if (champion_array[num].type === "Void" || champion_array[num].type2 === "Void" || champion_array[num].type3 === "Void") {
        document.getElementById("voidType").style.display = "inline-block";
        document.getElementById("voidType").getElementsByTagName("span")[0].innerHTML = num_void;
    }
    if (champion_array[num].type === "Wild" || champion_array[num].type2 === "Wild" || champion_array[num].type3 === "Wild") {
        document.getElementById("wildType").style.display = "inline-block";
        document.getElementById("wildType").getElementsByTagName("span")[0].innerHTML = num_wild;
    }
    if (champion_array[num].type === "Yordle" || champion_array[num].type2 === "Yordle" || champion_array[num].type3 === "Yordle") {
        document.getElementById("yordleType").style.display = "inline-block";
        document.getElementById("yordleType").getElementsByTagName("span")[0].innerHTML = num_yordle;
    }

    document.getElementById("selected-champion-list").appendChild(added_champ);

}

function get_type(unit_type) {
    switch(unit_type) {
    case "Glacial": return (num_glacial += 1); break;
    case "Ranger": return (num_ranger += 1); break;
    case "Assassin": return (num_assassin += 1); break;
    case "Blademaster": return (num_blademaster += 1); break;
    case "Brawler": return (num_brawler += 1); break;
    case "Elementalist": return (num_elementalist += 1); break;
    case "Guardian": return (num_guardian += 1); break;
    case "Gunslinger": return (num_gunslinger += 1); break;
    case "Knight": return (num_knight += 1); break;
    case "Shapeshifter": return (num_shapeshifter += 1); break;
    case "Sorcerer": return (num_sorcerer += 1); break;
    case "Demon": return (num_demon += 1); break;
    case "Dragon": return (num_dragon += 1); break;
    case "Exile": return (num_exile += 1); break;
    case "Imperial": return (num_imperial += 1); break;
    case "Noble": return (num_noble += 1); break;
    case "Ninja": return (num_ninja += 1); break;
    case "Phantom": return (num_phantom += 1); break;
    case "Pirate": return (num_pirate += 1); break;
    case "Robot": return (num_robot += 1); break;
    case "Void": return (num_void += 1); break;
    case "Wild": return (num_wild += 1); break;
    case "Yordle": return (num_yordle += 1); break;
    case "null": break;
    }
}


class TeamPlanner extends React.Component {

    fill_modal_champions = () => {
        document.getElementById("modal").style.display = "block";
        document.getElementById("modal-overlay").style.display = "block";
        let i;
        if (check_fill === 0) {
            for (i=0; i < champion_array.length; i++) {
                let champ_icon = document.createElement("img");
                let url_icon = urlChampIcon + champion_array[i].name + ".png";
                let champ_num = i;
                champ_icon.src = url_icon;
                champ_icon.addEventListener('click', function () {
                    add_champion(url_icon, champ_num);
                });
                let test1 = this.champPool = React.createRef();
                document.getElementById("modal").appendChild(champ_icon);
                check_fill++;
            }
        }
    }

    close_modal = () => {
        document.getElementById("modal").style.display = "none";
        document.getElementById("modal-overlay").style.display = "none";
    }
    


    render() {

        return (
            <div>
                <div id="content-container">

                <div id="team-planner-container">

                    <h1>TFT Team Planner</h1>

                    <div id="champ-select-container">

                        <div id="selected-champion-list"></div>

                        <button id="add-champ-button" onClick={this.fill_modal_champions}><strong>+</strong></button>
                        
                        <div id="modal-overlay"></div>
                        <div id="modal">
                            <h1>Select a Champion</h1>
                            <div onClick={this.close_modal} id="modal-quit">X</div>
                        </div>
                        
                        <div id="selected-champion-type">
                            <div id="glacialType">
                                <img alt="Glacial"></img>
                                <div><span></span> / 6</div>
                                <div>
                                    Glacials have a chance to stun for 2s on hit.<br/>
                                    <span id="num-of-type">2</span> 20% Chance to Stun<br/>
                                    <span id="num-of-type">4</span> 30% Chance to Stun<br/>
                                    <span id="num-of-type">6</span> 45% Chance to Stun<br/>
                                </div>
                            </div>
                            <div id="rangerType">
                                <img alt="Ranger"></img>
                                <div><span></span> / 4</div>
                                <div>
                                    Rangers have a chance to double their Attack Speed on hit for the next 3s.<br/>
                                    <span id="num-of-type">2</span> 25% Chance to Double Attack Speed<br/>
                                    <span id="num-of-type">4</span> 65% Chance to Double Attack Speed
                                </div>
                            </div>
                            <div id="assassinType">
                                <img alt="Assassin"></img>
                                <div><span></span> / 6</div>
                                <div id="assassinInfo">
                                    Innate: Assassins leap to the farthest enemy at the start of combat and deal additional Critical Strike Damage.<br/>
                                    <span id="num-of-type">3</span> +125% Critical Strike Damage<br/>
                                    <span id="num-of-type">6</span> +350% Critical Strike Damage
                                </div>
                            </div>
                            <div id="blademasterType">
                                <img alt="Blademaster"></img>
                                <div><span></span> / 6</div>
                                <div id="blademasterInfo">
                                    Blademasters have a 35% chance to strike additional times each attack.<br/>
                                    <span id="num-of-type">3</span> One Additional Attack<br/>
                                    <span id="num-of-type">6</span> Two Additional Attacks
                                </div>
                            </div>
                            <div id="brawlerType">
                                <img alt="Brawler"></img>
                                <div><span></span> / 4</div>
                                <div id="brawlerInfo">
                                    All Brawlers gain bonus maximum health.<br/>
                                    <span id="num-of-type">2</span> +300 Bonus Health<br/>
                                    <span id="num-of-type">4</span> +700 Bonus Health
                                </div>
                            </div>
                            <div id="elementalistType">
                                <img alt="Elementalist"></img>
                                <div><span></span> / 3</div>
                                <div id="elementalistInfo">
                                    Innate: Elementalists gain double mana from attacks.<br/>
                                    <span id="num-of-type">3</span> At the start of combat, summon a Golem with 2200 Health
                                </div>
                            </div>
                            <div id="guardianType">
                                <img alt="Guardian"></img>
                                <div><span></span> / 2</div>
                                <div id="guardianInfo">
                                    <span id="num-of-type">2</span> At the start of combat, all Guardians and adjacent allies gain +40 Armor. This Armor can stack.
                                </div>
                            </div>
                            <div id="gunslingerType">
                                <img alt="Gunslinger"></img>
                                <div><span></span> / 6</div>
                                <div id="gunslingerInfo">
                                    Gunslingers have a 50% chance to fire additional attacks on other enemies.<br/>
                                    <span id="num-of-type">3</span> One Additional Enemy<br/>
                                    <span id="num-of-type">6</span> Two Additional Enemeies
                                </div>
                            </div>
                            <div id="knightType">
                                <img alt="Knight"></img>
                                <div><span></span> / 6</div>
                                <div id="knightInfo">
                                    Knights block damage from basic attacks.<br/>
                                    <span id="num-of-type">2</span> 20 Damage Blocked<br/>
                                    <span id="num-of-type">4</span> 40 Damage Blocked<br/>
                                    <span id="num-of-type">6</span> 80 Damage Blocked
                                </div>
                            </div>
                            <div id="shapeshifterType">
                                <img alt="Shapeshifter"></img>
                                <div><span></span> / 3</div>
                                <div id="shapeshifterInfo">
                                    Shapeshifters gain Bonus Maximum Health when they transform.<br/>
                                    <span id="num-of-type">3</span> +60% Bonus Max Health 
                                </div>
                            </div>
                            <div id="sorcererType">
                                <img alt="Sorcerer"></img>
                                <div><span></span> / 6</div>
                                <div id="sorcererInfo">
                                    Innate: Sorcerers gain double mana from attacking and All Allies have increased Spell Damage.<br/>
                                    <span id="num-of-type">3</span> +45% Spell Damage<br/>
                                    <span id="num-of-type">6</span> +100% Spell Damage
                                </div>
                            </div>
                            <div id="demonType">
                                <img alt="Demon"></img>
                                <div><span></span> / 6</div>
                                <div id="demonInfo">
                                    Attacks from Demons have a chance to burn enemy's mana and deal the additional True Damage based on mana burned.<br/>
                                    <span id="num-of-type">2</span> 25% Chance on hit to Burn Mana<br/>
                                    <span id="num-of-type">4</span> 50% Chance on hit to Burn Mana<br/>
                                    <span id="num-of-type">6</span> 80% Chance on hit to Burn Mana
                                </div>
                            </div>
                            <div id="dragonType">
                                <img alt="Dragon"></img>
                                <div><span></span> / 2</div>
                                <div id="dragonInfo">
                                    <span id="num-of-type">2</span> Dragons are immune to Magic Damage
                                </div>
                            </div>
                            <div id="exileType">
                                <img alt="Exile"></img>
                                <div><span></span> / 1</div>
                                <div id="exileInfo">
                                    <span id="num-of-type">1</span> If an Exile has no adjacent allies at the start of combat, they gain a shield equal to 100% of their Max Health
                                </div>
                            </div>
                            <div id="imperialType">
                                <img alt="Imperial"></img>
                                <div><span></span> / 4</div>
                                <div id="imperialInfo">
                                    Imperials deal Double Damage.<br/>
                                    <span id="num-of-type">2</span> One Random Imperial<br/>
                                    <span id="num-of-type">4</span> All Imperials
                                </div>
                            </div>
                            <div id="nobleType">
                                <img alt="Noble"></img>
                                <div><span></span> / 6</div>
                                <div id="nobleInfo">
                                    Nobles gain +100 Armor and Heal 35 Health per attack.<br/>
                                    <span id="num-of-type">3</span> One Random Ally<br/>
                                    <span id="num-of-type">6</span> Ally Allies
                                </div>
                            </div>
                            <div id="ninjaType">
                                <img alt="Ninja"></img>
                                <div><span></span> / 4</div>
                                <div id="ninjaInfo">
                                    The Ninja Trait is only active when you have exactly 1 or 4 Ninjas.<br/>
                                    <span id="num-of-type">1</span> The Ninja gains +40% Attack Damage<br/>
                                    <span id="num-of-type">4</span> All Ninjas gain +80% Attack Damage
                                </div>
                            </div>
                            <div id="phantomType">
                                <img alt="Phantom"></img>
                                <div><span></span> / 2</div>
                                <div id="phantomInfo">
                                    <span id="num-of-type">2</span> Curse a random enemy at the start of combat, their Health is reduced to 100
                                </div>
                            </div>
                            <div id="pirateType">
                                <img alt="Pirate"></img>
                                <div><span></span> / 3</div>
                                <div id="pirateInfo">
                                    <span id="num-of-type">3</span> Earn up to 4 additional Gold after combat against another player 
                                </div>
                            </div>
                            <div id="robotType">
                                <img alt="Robot"></img>
                                <div><span></span> / 1</div>
                                <div id="robotInfo">
                                    <span id="num-of-type">1</span> Robots start combat at full mana
                                </div>
                            </div>
                            <div id="voidType">
                                <img alt="Void"></img>
                                <div><span></span> / 3</div>
                                <div id="voidInfo">
                                    <span id="num-of-type">3</span> All basic attacks ignore 50% of the enemy's Armor
                                </div>
                            </div>
                            <div id="wildType">
                                <img alt="Wild"></img>
                                <div><span></span> / 4</div>
                                <div id="wildInfo">
                                    Attacks generate stacks of Fury (stacks up to 5 times). Each stack of fury gives +10% Attack Speed.<br/>
                                    <span id="num-of-type">2</span> Wild Allies Only<br/>
                                    <span id="num-of-type">4</span> All Allies
                                </div>
                            </div>
                            <div id="yordleType">
                                <img alt="Yordle"></img>
                                <div><span></span> / 6</div>
                                <div id="yordleInfo">
                                    Attacks against Ally Yordles have a chance to miss.<br/>
                                    <span id="num-of-type">3</span> 25% Chance to Miss<br/>
                                    <span id="num-of-type">6</span> 60% Chance to Miss
                                </div>
                            </div>
                        </div>

                        
                    
                    </div>

                </div>
                        
                </div>
            </div>
        );
    }
}

let champion_array = [{name: "Aatrox", type: "Demon", type2: "Blademaster", type3: "null"}, {name: "Ahri", type: "Wild", type2: "Sorcerer", type3: "null"}, {name: "Akali", type: "Ninja", type2: "Assassin", type3: "null"}, {name: "Anivia", type: "Glacial", type2: "Elementalist", type3: "null"}, {name: "Ashe", type: "Glacial", type2: "Ranger", type3: "null"}, {name: "AurelionSol", type: "Dragon", type2: "Sorcerer", type3: "null"}, {name: "Blitzcrank", type: "Robot", type2: "Brawler", type3: "null"}, {name: "Brand", type: "Demon", type2: "Elementalist", type3: "null"}, {name: "Braum", type: "Glacial", type2: "Guardian", type3: "null"}, {name: "Chogath", type: "Void", type2: "Brawler", type3: "null"}, {name: "Darius", type: "Imperial", type2: "Knight", type3: "null"}, {name: "Draven", type: "Imperial", type2: "Blademaster", type3: "null"}, {name: "Elise", type: "Demon", type2: "Shapeshifter", type3: "null"}, {name: "Evelynn", type: "Demon", type2: "Assassin", type3: "null"}, {name: "Fiora", type: "Noble", type2: "Blademaster", type3: "null"}, {name: "Gangplank", type: "Pirate", type2: "Gunslinger", type3: "Blademaster"}, {name: "Garen", type: "Noble", type2: "Knight", type3: "null"}, {name: "Gnar", type: "Wild", type2: "Yordle", type3: "Shapeshifter"}, {name: "Graves", type: "Pirate", type2: "Gunslinger", type3: "null"}, {name: "Karthus", type: "Phantom", type2: "Sorcerer", type3: "null"}, {name: "Kassadin", type: "Void", type2: "Sorcerer", type3: "null"}, {name: "Katarina", type: "Imperial", type2: "Assassin", type3: "null"}, {name: "Kayle", type: "Noble", type2: "Knight", type3: "null"}, {name: "Kennen", type: "Ninja", type2: "Yordle", type3: "Elementalist"}, {name: "Khazix", type: "Void", type2: "Assassin", type3: "null"}, {name: "Kindred", type: "Phantom", type2: "Ranger", type3: "null"}, {name: "Leona", type: "Noble", type2: "Guardian", type3: "null"}, {name: "Lissandra", type: "Glacial", type2: "Elementalist", type3: "null"}, {name: "Lucian", type: "Noble", type2: "Gunslinger", type3: "null"}, {name: "Lulu", type: "Yordle", type2: "Sorcerer", type3: "null"}, {name: "MissFortune", type: "Pirate", type2: "Gunslinger", type3: "null"}, {name: "Mordekaiser", type: "Phantom", type2: "Knight", type3: "null"}, {name: "Morgana", type: "Demon", type2: "Sorcerer", type3: "null"}, {name: "Nidalee", type: "Wild", type2: "Shapeshifter", type3: "null"}, {name: "Poppy", type: "Yordle", type2: "Knight", type3: "null"}, {name: "Pyke", type: "Pirate", type2: "Assassin", type3: "null"}, {name: "RekSai", type: "Void", type2: "Brawler", type3: "null"}, {name: "Rengar", type: "Wild", type2: "Assassin", type3: "null"}, {name: "Sejuani", type: "Glacial", type2: "Knight", type3: "null"}, {name: "Shen", type: "Ninja", type2: "Blademaster", type3: "null"}, {name: "Shyvana", type: "Dragon", type2: "Shapeshifter", type3: "null"}, {name: "Swain", type: "Imperial", type2: "Demon", type3: "Shapeshifter"}, {name: "Tristana", type: "Yordle", type2: "Gunslinger", type3: "null"}, {name: "TwistedFate", type: "Pirate", type2: "Sorcerer", type3: "null"}, {name: "Varus", type: "Demon", type2: "Ranger", type3: "null"}, {name: "Vayne", type: "Noble", type2: "Ranger", type3: "null"}, {name: "Veigar", type: "Yordle", type2: "Sorcerer", type3: "null"}, {name: "Volibear", type: "Glacial", type2: "Brawler", type3: "null"}, {name: "Warwick", type: "Wild", type2: "Brawler", type3: "null"}, {name: "Yasuo", type: "Exile", type2: "Blademaster", type3: "null"}, {name: "Zed", type: "Ninja", type2: "Assassin", type3: "null"},]

const modalStyles = {
    modal: {
        backgroundColor: "rgb(32, 48, 48)",
        color: "white"
    }

}

function open_team_planner() {
    ReactDOM.render(<TeamPlanner />, document.getElementById("root"));
}

function select_ashe() {

}


function select_champion() {
    let champ_container = <div id="champ-container">test</div>

}










// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
