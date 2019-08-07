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
import itemNLR from './etc/tft-assets/icon_needlesslylargerod.tft.png';
import itemBF from './etc/tft-assets/icon_bfsword.tft.png';
import itemChain from './etc/tft-assets/tft_item_chainvest.tft.png';
import itemMR from './etc/tft-assets/tft_item_negatroncloak.tft.png';
import itemBow from './etc/tft-assets/tft_item_recurvebow.tft.png';
import itemBelt from './etc/tft-assets/icon_giantsbelt.tft.png';
import itemTear from './etc/tft-assets/icon_tearofthegoddess.tft.png';
import itemRageblade from './etc/tft-assets/tft_item_guinsoosrageblade.tft.png';
import itemDivine from './etc/tft-assets/tft_item_swordofthedivine.tft.png';
import itemBoRK from './etc/tft-assets/tft_item_bladeoftheruinedking.tft.png';
import itemGunblade from './etc/tft-assets/tft_item_hextechgunblade.tft.png';
import itemGhostblade from './etc/tft-assets/tft_item_youmuusghostblade.tft.png';
import itemLvlBlade from './etc/tft-assets/tft_item_cursedblade.tft.png';
import itemWarmogs from './etc/tft-assets/tft_item_warmogsarmor.tft.png';
import itemFH from './etc/tft-assets/tft_item_frozenheart.tft.png';
import itemZephyr from './etc/tft-assets/tft_item_zephyr.tft.png';
import itemKnight from './etc/tft-assets/tft_item_knightsvow.tft.png';
import itemRFC from './etc/tft-assets/tft_item_rapidfirecannon.tft.png';
import itemShojin from './etc/tft-assets/tft_item_spearofshojin.tft.png';
import itemBT from './etc/tft-assets/tft_item_bloodthirster.tft.png';
import itemFoN from './etc/tft-assets/tft_item_forceofnature.tft.png';
import itemEcho from './etc/tft-assets/tft_item_ludensecho.tft.png';
import itemMorello from './etc/tft-assets/tft_item_morellonomicon.tft.png';
import itemLocket from './etc/tft-assets/tft_item_locketoftheironsolari.tft.png';
import itemRedemption from './etc/tft-assets/tft_item_redemption.tft.png';
import itemIE from './etc/tft-assets/tft_item_infinityedge.tft.png';
import itemGA from './etc/tft-assets/tft_item_guardianangel.tft.png';
import itemRabadons from './etc/tft-assets/tft_item_rabadonsdeathcap.tft.png';
import itemSeraph from './etc/tft-assets/tft_item_seraphsembrace.tft.png';
import itemPD from './etc/tft-assets/tft_item_phantomdancer.tft.png';
import itemHurricane from './etc/tft-assets/tft_item_runaanshurricane.tft.png';
import itemThornmail from './etc/tft-assets/tft_item_thornmail.tft.png';
import itemFM from './etc/tft-assets/tft_item_frozenmallet.tft.png';
import itemZeke from './etc/tft-assets/tft_item_zekesherald.tft.png';
import itemRedBuff from './etc/tft-assets/tft_item_redbuff.tft.png';
import itemTitanic from './etc/tft-assets/tft_item_titanichydra.tft.png';
import itemSorcerer from './etc/tft-assets/tft_item_yuumi.tft.png';
import itemSS from './etc/tft-assets/tft_item_statikkshiv.tft.png';
import itemDragonClaw from './etc/tft-assets/tft_item_dragonsclaw.tft.png';
import itemSilence from './etc/tft-assets/tft_item_hush.tft.png';
import itemSwordBreaker from './etc/tft-assets/tft_item_swordbreaker.tft.png';
import itemSpatula from './etc/tft-assets/tft_item_spatula.tft.png';
import itemDemon from './etc/tft-assets/tft_item_darkin.tft.png';
import traitAssassin from './etc/tft-assets/trait_icon_assassin.png';
import traitBlademaster from './etc/tft-assets/trait_icon_blademaster.png';
import traitBrawler from './etc/tft-assets/trait_icon_brawler.png';
import traitDemon from './etc/tft-assets/trait_icon_demon.png';
import traitDragon from './etc/tft-assets/trait_icon_dragon.png';
import traitElementalist from './etc/tft-assets/trait_icon_elementalist.png';
import traitExile from './etc/tft-assets/trait_icon_exile.png';
import traitGlacial from './etc/tft-assets/trait_icon_glacial.png';
import traitGuardian from './etc/tft-assets/trait_icon_guardian.png';
import traitGunslinger from './etc/tft-assets/trait_icon_gunslinger.png';
import traitImperial from './etc/tft-assets/trait_icon_imperial.png';
import traitKnight from './etc/tft-assets/trait_icon_knight.png';
import traitNinja from './etc/tft-assets/trait_icon_ninja.png';
import traitNoble from './etc/tft-assets/trait_icon_noble.png';
import traitPhantom from './etc/tft-assets/trait_icon_phantom.png';
import traitPirate from './etc/tft-assets/trait_icon_pirate.png';
import traitRanger from './etc/tft-assets/trait_icon_ranger.png';
import traitRobot from './etc/tft-assets/trait_icon_robot.png';
import traitShapeshifter from './etc/tft-assets/trait_icon_shapeshifter.png';
import traitSorcerer from './etc/tft-assets/trait_icon_sorcerer.png';
import traitVoid from './etc/tft-assets/trait_icon_void.png';
import traitWild from './etc/tft-assets/trait_icon_wild.png';
import traitYordle from './etc/tft-assets/trait_icon_yordle.png';
import splashAatrox from './etc/splash/Aatrox_0.jpg';
import splashAhri from './etc/splash/Ahri_0.jpg';
import splashAkali from './etc/splash/Akali_0.jpg';
import splashAnivia from './etc/splash/Anivia_0.jpg';
import splashAshe from './etc/splash/Ashe_0.jpg';
import splashAurelionSol from './etc/splash/AurelionSol_0.jpg';
import splashBlitzcrank from './etc/splash/Blitzcrank_0.jpg';
import splashBrand from './etc/splash/Brand_0.jpg';
import splashBraum from './etc/splash/Braum_0.jpg';
import splashChogath from './etc/splash/Chogath_0.jpg';
import splashDarius from './etc/splash/Darius_0.jpg';
import splashDraven from './etc/splash/Draven_0.jpg';
import splashElise from './etc/splash/Elise_0.jpg';
import splashEvelynn from './etc/splash/Evelynn_0.jpg';
import splashFiora from './etc/splash/Fiora_0.jpg';
import splashGangplank from './etc/splash/Gangplank_0.jpg';
import splashGaren from './etc/splash/Garen_0.jpg';
import splashGnar from './etc/splash/Gnar_0.jpg';
import splashGraves from './etc/splash/Graves_0.jpg';
import splashKarthus from './etc/splash/Karthus_0.jpg';
import splashKassadin from './etc/splash/Kassadin_0.jpg';
import splashKatarina from './etc/splash/Katarina_0.jpg';
import splashKayle from './etc/splash/Kayle_0.jpg';
import splashKennen from './etc/splash/Kennen_0.jpg';
import splashKhazix from './etc/splash/Khazix_0.jpg';
import splashKindred from './etc/splash/Kindred_0.jpg';
import splashLeona from './etc/splash/Leona_0.jpg';
import splashLissandra from './etc/splash/Lissandra_0.jpg';
import splashLucian from './etc/splash/Lucian_0.jpg';
import splashLulu from './etc/splash/Lulu_0.jpg';
import splashMissFortune from './etc/splash/MissFortune_0.jpg';
import splashMordekaiser from './etc/splash/Mordekaiser_0.jpg';
import splashMorgana from './etc/splash/Morgana_0.jpg';
import splashNidalee from './etc/splash/Nidalee_0.jpg';
import splashPoppy from './etc/splash/Poppy_0.jpg';
import splashPyke from './etc/splash/Pyke_0.jpg';
import splashReksai from './etc/splash/RekSai_0.jpg';
import splashRengar from './etc/splash/Rengar_0.jpg';
import splashSejuani from './etc/splash/Sejuani_0.jpg';
import splashShen from './etc/splash/Shen_0.jpg';
import splashShyvana from './etc/splash/Shyvana_0.jpg';
import splashSwain from './etc/splash/Swain_0.jpg';
import splashTristana from './etc/splash/Tristana_0.jpg';
import splashTwistedFate from './etc/splash/TwistedFate_0.jpg';
import splashVarus from './etc/splash/Varus_0.jpg';
import splashVayne from './etc/splash/Vayne_0.jpg';
import splashVeigar from './etc/splash/Veigar_0.jpg';
import splashVolibear from './etc/splash/Volibear_0.jpg';
import splashWarwick from './etc/splash/Warwick_0.jpg';
import splashYasuo from './etc/splash/Yasuo_0.jpg';
import splashZed from './etc/splash/Zed_0.jpg';


const items_array = [{item: itemNLR}, {item: itemBF}, {item: itemChain}, {item: itemMR}, {item: itemBow}, {item: itemBelt}, {item: itemTear}, {item: itemRageblade}, {item: itemDivine}, {item: itemBoRK, type: "Blademaster"}, {item: itemGunblade}, {item: itemGhostblade, type: "Assassin"}, {item: itemLvlBlade}, {item: itemWarmogs}, {item: itemFH}, {item: itemZephyr}, {item: itemKnight, type: "Knight"}, {item: itemRFC}, {item: itemShojin}, {item: itemBT}, {item: itemFoN}, {item: itemEcho}, {item: itemMorello}, {item: itemLocket}, {item: itemRedemption}, {item: itemIE}, {item: itemGA}, {item: itemRabadons}, {item: itemSeraph}, {item: itemPD}, {item: itemHurricane}, {item: itemThornmail}, {item: itemFM, type: "Glacial"}, {item: itemZeke}, {item: itemRedBuff}, {item: itemTitanic}, {item: itemSorcerer, type: "Sorcerer"}, {item: itemSS}, {item: itemDragonClaw}, {item: itemSilence}, {item: itemSwordBreaker}, {item: itemSpatula}, {item: itemDemon, type: "Demon"}];


const key = "";
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

let check_fill = 0;
let check_fill_items = 0;

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

let current_champ = "";

function get_champ_splash(name) {
    switch(name) {
        case "Aatrox": return splashAatrox; break;
        case "Ahri": return splashAhri; break;
        case "Akali": return splashAkali; break;
        case "Anivia": return splashAnivia; break;
        case "Ashe": return splashAshe; break;
        case "AurelionSol": return splashAurelionSol; break;
        case "Blitzcrank": return splashBlitzcrank; break;
        case "Brand": return splashBrand; break;
        case "Braum": return splashBraum; break;
        case "Chogath": return splashChogath; break;
        case "Darius": return splashDarius; break;
        case "Draven": return splashDraven; break;
        case "Elise": return splashElise; break;
        case "Evelynn": return splashEvelynn; break;
        case "Fiora": return splashFiora; break;
        case "Gangplank": return splashGangplank; break;
        case "Garen": return splashGaren; break;
        case "Gnar": return splashGnar; break;
        case "Graves": return splashGraves; break;
        case "Karthus": return splashKarthus; break;
        case "Kassadin": return splashKassadin; break;
        case "Katarina": return splashKatarina; break;
        case "Kayle": return splashKayle; break;
        case "Kennen": return splashKennen; break;
        case "Khazix": return splashKhazix; break;
        case "Kindred": return splashKindred; break;
        case "Leona": return splashLeona; break;
        case "Lissandra": return splashLissandra; break;
        case "Lucian": return splashLucian; break;
        case "Lulu": return splashLulu; break;
        case "MissFortune": return splashMissFortune; break;
        case "Mordekaiser": return splashMordekaiser; break;
        case "Morgana": return splashMorgana; break;
        case "Nidalee": return splashNidalee; break;
        case "Poppy": return splashPoppy; break;
        case "Pyke": return splashPyke; break;
        case "Reksai": return splashReksai; break;
        case "Rengar": return splashRengar; break;
        case "Sejuani": return splashSejuani; break;
        case "Shen": return splashShen; break;
        case "Shyvana": return splashShyvana; break;
        case "Swain": return splashSwain; break;
        case "Tristana": return splashTristana; break;
        case "TwistedFate": return splashTwistedFate; break;
        case "Varus": return splashVarus; break;
        case "Vayne": return splashVayne; break;
        case "Veigar": return splashVeigar; break;
        case "Volibear": return splashVolibear; break;
        case "Warwick": return splashWarwick; break;
        case "Yasuo": return splashYasuo; break;
        case "Zed": return splashZed; break;

    }
}

let modal_count = 0;

function open_champion_info(num) {
    let champ_info = document.createElement("div");
    let champ_info_exit = document.createElement("div");
    champ_info_exit.id = "exit-champ-info";
    let exit_div1 = document.createElement("div");
    let exit_div2 = document.createElement("div");
    champ_info_exit.appendChild(exit_div1);
    champ_info_exit.appendChild(exit_div2);
    let champ_name = champion_array[num].name;
    let champ_splash_src = get_champ_splash(champ_name);
    let champ_splash = document.createElement("img");
    let splash_overlay = document.createElement("div");
    splash_overlay.id = "champ-info-overlay";
    let champ_name_h2 = document.createElement("h2");
    let champ_type1 = document.createElement("div");
    let champ_type2 = document.createElement("div");
    let champ_type3 = document.createElement("div");
    champ_type1.id = "champ-type-1";
    champ_type2.id = "champ-type-2";
    champ_type3.id = "champ-type-3";
    let champ_type1_img = document.createElement("img");
    let champ_type2_img = document.createElement("img");
    let champ_type3_img = document.createElement("img");
    let champ_type1_text = document.createElement("h4");
    let champ_type2_text = document.createElement("h4");
    let champ_type3_text = document.createElement("h4");
    champ_type1_img.src = traitDemon;
    champ_type2_img.src = traitBlademaster;
    champ_type3_img.src = traitAssassin;
    champ_type1_text.innerHTML = "Demon";
    champ_type2_text.innerHTML = "Blademaster";
    champ_type3_text.innerHTML = "Assassin";
    champ_type1.appendChild(champ_type1_img);
    champ_type1.appendChild(champ_type1_text);
    champ_type2.appendChild(champ_type2_img);
    champ_type2.appendChild(champ_type2_text);
    champ_type3.appendChild(champ_type3_img);
    champ_type3.appendChild(champ_type3_text);
    let champ_ad = document.createElement("p");
    let champ_ap = document.createElement("p");
    let champ_ar = document.createElement("p");
    let champ_mr = document.createElement("p");
    let champ_crit = document.createElement("p");
    let champ_crit_mult = document.createElement("p");
    champ_ad.innerHTML = "AD:";
    champ_ap.innerHTML = "AP:";
    champ_ar.innerHTML = "Armor:";
    champ_mr.innerHTML = "MR:";
    champ_crit.innerHTML = "Crit:";
    champ_crit_mult.innerHTML = "Crit Mult:";
    let stat_ad = document.createElement("p");
    let stat_ap = document.createElement("p");
    let stat_ar = document.createElement("p");
    let stat_mr = document.createElement("p");
    let stat_crit = document.createElement("p");
    let stat_crit_mult = document.createElement("p");
    stat_ad.innerHTML = "70";
    stat_ap.innerHTML = "40";
    stat_ar.innerHTML = "30";
    stat_mr.innerHTML = "20";
    stat_crit.innerHTML = "25%";
    stat_crit_mult.innerHTML = "125%";
    let stat_columnL = document.createElement("div");
    stat_columnL.appendChild(champ_ad);
    stat_columnL.appendChild(champ_ap);
    stat_columnL.appendChild(champ_ar);
    stat_columnL.appendChild(champ_mr);
    stat_columnL.appendChild(champ_crit);
    stat_columnL.appendChild(champ_crit_mult);
    stat_columnL.id = "modal-colL"
    let stat_columnR = document.createElement("div");
    stat_columnR.appendChild(stat_ad);
    stat_columnR.appendChild(stat_ap);
    stat_columnR.appendChild(stat_ar);
    stat_columnR.appendChild(stat_mr);
    stat_columnR.appendChild(stat_crit);
    stat_columnR.appendChild(stat_crit_mult);
    stat_columnR.id = "modal-colR";
    champ_name_h2.innerHTML = champ_name;
    champ_splash.src = champ_splash_src;
    champ_info.id ="champ-info-box";

    champ_info_exit.addEventListener('click', function () {
        modal_count++;
        document.getElementById("champ-modals").getElementsByTagName("div")[0].style.display = "none";
    });

    let champ_info_items = document.createElement("div")
    let champ_item1 = document.createElement("div");
    let champ_item2 = document.createElement("div");
    let champ_item3 = document.createElement("div");

    champ_item1.addEventListener('click', function () {
        this.fill_modal_items();
    });

    champ_info_items.id = "champ-items";
    champ_item1.innerHTML = "<strong>+</strong>";
    champ_info_items.appendChild(champ_item1);
    champ_info_items.appendChild(champ_item2);
    champ_info_items.appendChild(champ_item3);

    

    champ_info.appendChild(splash_overlay);
    champ_info.appendChild(champ_info_exit);
    champ_info.appendChild(champ_splash);
    champ_info.appendChild(champ_name_h2);
    champ_info.appendChild(stat_columnL);
    champ_info.appendChild(stat_columnR);
    champ_info.appendChild(champ_type1);
    champ_info.appendChild(champ_type2);
    champ_info.appendChild(champ_type3);
    champ_info.appendChild(champ_info_items);



    document.getElementById("champ-modals").appendChild(champ_info);
}

function add_champion(url, num) {
    let champ_url = url;
    let champ_container = document.createElement("div");
    let added_champ = document.createElement("img");
    let current_champ_split = champ_url.split(urlChampIcon);
    if (current_champ.search(current_champ_split) != -1) {
        console.log("duplicate");
    } else {
        current_champ += current_champ_split;
        console.log("new");
    }
    champ_container.appendChild(added_champ);
    added_champ.src = champ_url;
    get_type(champion_array[num].type);
    get_type(champion_array[num].type2);
    get_type(champion_array[num].type3);

    added_champ.addEventListener('click', function () {
        open_champion_info(num);
    });

    if (champion_array[num].type === "Glacial" || champion_array[num].type2 === "Glacial" || champion_array[num].type3 === "Glacial") {
        document.getElementById("glacialType").style.display = "inline-block";
        document.getElementById("glacialType").getElementsByTagName("span")[0].innerHTML = num_glacial;
        if (num_glacial >= 2) {
            document.getElementById("glacialInfo").getElementsByTagName("p")[0].style.color = "red";
            document.getElementById("glacialInfo").getElementsByTagName("span")[0].style.borderRightColor = "red";
            document.getElementById("glacialInfo").getElementsByTagName("p")[1].style.color = "white";
            document.getElementById("glacialInfo").getElementsByTagName("span")[1].style.borderRightColor = "white";
            document.getElementById("glacialInfo").getElementsByTagName("p")[2].style.color = "white";
            document.getElementById("glacialInfo").getElementsByTagName("span")[2].style.borderRightColor = "white";
        }
        if (num_glacial >= 4) {
            document.getElementById("glacialInfo").getElementsByTagName("p")[1].style.color = "red";
            document.getElementById("glacialInfo").getElementsByTagName("span")[1].style.borderRightColor = "red";
            document.getElementById("glacialInfo").getElementsByTagName("p")[0].style.color = "white";
            document.getElementById("glacialInfo").getElementsByTagName("span")[0].style.borderRightColor = "white";
            document.getElementById("glacialInfo").getElementsByTagName("p")[2].style.color = "white";
            document.getElementById("glacialInfo").getElementsByTagName("span")[2].style.borderRightColor = "white";
        }
        if (num_glacial >= 6) {
            document.getElementById("glacialInfo").getElementsByTagName("p")[2].style.color = "red";
            document.getElementById("glacialInfo").getElementsByTagName("span")[2].style.borderRightColor = "red";
            document.getElementById("glacialInfo").getElementsByTagName("p")[1].style.color = "white";
            document.getElementById("glacialInfo").getElementsByTagName("span")[1].style.borderRightColor = "white";
            document.getElementById("glacialInfo").getElementsByTagName("p")[0].style.color = "white";
            document.getElementById("glacialInfo").getElementsByTagName("span")[0].style.borderRightColor = "white";
        }
    }
    if (champion_array[num].type === "Ranger" || champion_array[num].type2 === "Ranger" || champion_array[num].type3 === "Ranger") {
        document.getElementById("rangerType").style.display = "inline-block";
        document.getElementById("rangerType").getElementsByTagName("span")[0].innerHTML = num_ranger;
        if (num_ranger >= 2) {
            document.getElementById("rangerInfo").getElementsByTagName("p")[0].style.color = "red";
            document.getElementById("rangerInfo").getElementsByTagName("span")[0].style.borderRightColor = "red";
            document.getElementById("rangerInfo").getElementsByTagName("p")[1].style.color = "white";
            document.getElementById("rangerInfo").getElementsByTagName("span")[1].style.borderRightColor = "white";
        }
        if (num_ranger >= 4) {
            document.getElementById("rangerInfo").getElementsByTagName("p")[1].style.color = "red";
            document.getElementById("rangerInfo").getElementsByTagName("span")[1].style.borderRightColor = "red";
            document.getElementById("rangerInfo").getElementsByTagName("p")[0].style.color = "white";
            document.getElementById("rangerInfo").getElementsByTagName("span")[0].style.borderRightColor = "white";
        }
    }
    if (champion_array[num].type === "Assassin" || champion_array[num].type2 === "Assassin" || champion_array[num].type3 === "Assassin") {
        document.getElementById("assassinType").style.display = "inline-block";
        document.getElementById("assassinType").getElementsByTagName("span")[0].innerHTML = num_assassin;
        if (num_assassin === 3) {
            document.getElementById("assassinInfo").getElementsByTagName("p")[0].style.color = "red";
            document.getElementById("assassinInfo").getElementsByTagName("span")[0].style.borderRightColor = "red";
            document.getElementById("assassinInfo").getElementsByTagName("p")[1].style.color = "white";
            document.getElementById("assassinInfo").getElementsByTagName("span")[1].style.borderRightColor = "white";
        }
        if (num_assassin >= 6) {
            document.getElementById("assassinInfo").getElementsByTagName("p")[1].style.color = "red";
            document.getElementById("assassinInfo").getElementsByTagName("span")[1].style.borderRightColor = "red";
            document.getElementById("assassinInfo").getElementsByTagName("p")[0].style.color = "white";
            document.getElementById("assassinInfo").getElementsByTagName("span")[0].style.borderRightColor = "white";
        }
    }
    if (champion_array[num].type === "Blademaster" || champion_array[num].type2 === "Blademaster" || champion_array[num].type3 === "Blademaster") {
        document.getElementById("blademasterType").style.display = "inline-block";
        document.getElementById("blademasterType").getElementsByTagName("span")[0].innerHTML = num_blademaster;
        if (num_blademaster >= 3) {
            document.getElementById("blademasterInfo").getElementsByTagName("p")[0].style.color = "red";
            document.getElementById("blademasterInfo").getElementsByTagName("span")[0].style.borderRightColor = "red";
            document.getElementById("blademasterInfo").getElementsByTagName("p")[1].style.color = "white";
            document.getElementById("blademasterInfo").getElementsByTagName("span")[1].style.borderRightColor = "white";
            document.getElementById("blademasterInfo").getElementsByTagName("p")[2].style.color = "white";
            document.getElementById("blademasterInfo").getElementsByTagName("span")[2].style.borderRightColor = "white";
        }
        if (num_blademaster >= 6) {
            document.getElementById("blademasterInfo").getElementsByTagName("p")[1].style.color = "red";
            document.getElementById("blademasterInfo").getElementsByTagName("span")[1].style.borderRightColor = "red";
            document.getElementById("blademasterInfo").getElementsByTagName("p")[0].style.color = "white";
            document.getElementById("blademasterInfo").getElementsByTagName("span")[0].style.borderRightColor = "white";
            document.getElementById("blademasterInfo").getElementsByTagName("p")[2].style.color = "white";
            document.getElementById("blademasterInfo").getElementsByTagName("span")[2].style.borderRightColor = "white";
        }
        if (num_blademaster >= 9) {
            document.getElementById("blademasterInfo").getElementsByTagName("p")[2].style.color = "red";
            document.getElementById("blademasterInfo").getElementsByTagName("span")[2].style.borderRightColor = "red";
            document.getElementById("blademasterInfo").getElementsByTagName("p")[1].style.color = "white";
            document.getElementById("blademasterInfo").getElementsByTagName("span")[1].style.borderRightColor = "white";
            document.getElementById("blademasterInfo").getElementsByTagName("p")[0].style.color = "white";
            document.getElementById("blademasterInfo").getElementsByTagName("span")[0].style.borderRightColor = "white";
        }
        
    }
    if (champion_array[num].type === "Brawler" || champion_array[num].type2 === "Brawler" || champion_array[num].type3 === "Brawler") {
        document.getElementById("brawlerType").style.display = "inline-block";
        document.getElementById("brawlerType").getElementsByTagName("span")[0].innerHTML = num_brawler;
        if (num_brawler >= 2) {
            document.getElementById("brawlerInfo").getElementsByTagName("p")[0].style.color = "red";
            document.getElementById("brawlerInfo").getElementsByTagName("span")[0].style.borderRightColor = "red";
            document.getElementById("brawlerInfo").getElementsByTagName("p")[1].style.color = "white";
            document.getElementById("brawlerInfo").getElementsByTagName("span")[1].style.borderRightColor = "white";
            document.getElementById("brawlerInfo").getElementsByTagName("p")[2].style.color = "white";
            document.getElementById("brawlerInfo").getElementsByTagName("span")[2].style.borderRightColor = "white";
        }
        if (num_brawler >= 4) {
            document.getElementById("brawlerInfo").getElementsByTagName("p")[1].style.color = "red";
            document.getElementById("brawlerInfo").getElementsByTagName("span")[1].style.borderRightColor = "red";
            document.getElementById("brawlerInfo").getElementsByTagName("p")[0].style.color = "white";
            document.getElementById("brawlerInfo").getElementsByTagName("span")[0].style.borderRightColor = "white";
            document.getElementById("brawlerInfo").getElementsByTagName("p")[2].style.color = "white";
            document.getElementById("brawlerInfo").getElementsByTagName("span")[2].style.borderRightColor = "white";
        }
        if (num_brawler >= 6) {
            document.getElementById("brawlerInfo").getElementsByTagName("p")[2].style.color = "red";
            document.getElementById("brawlerInfo").getElementsByTagName("span")[2].style.borderRightColor = "red";
            document.getElementById("brawlerInfo").getElementsByTagName("p")[1].style.color = "white";
            document.getElementById("brawlerInfo").getElementsByTagName("span")[1].style.borderRightColor = "white";
            document.getElementById("brawlerInfo").getElementsByTagName("p")[0].style.color = "white";
            document.getElementById("brawlerInfo").getElementsByTagName("span")[0].style.borderRightColor = "white";
        }
    }
    if (champion_array[num].type === "Elementalist" || champion_array[num].type2 === "Elementalist" || champion_array[num].type3 === "Elementalist") {
        document.getElementById("elementalistType").style.display = "inline-block";
        document.getElementById("elementalistType").getElementsByTagName("span")[0].innerHTML = num_elementalist;
        if (num_elementalist >= 3) {
            document.getElementById("elementalistInfo").getElementsByTagName("p")[0].style.color = "red";
            document.getElementById("elementalistInfo").getElementsByTagName("span")[0].style.borderRightColor = "red";
        }
    }
    if (champion_array[num].type === "Guardian" || champion_array[num].type2 === "Guardian" || champion_array[num].type3 === "Guardian") {
        document.getElementById("guardianType").style.display = "inline-block";
        document.getElementById("guardianType").getElementsByTagName("span")[0].innerHTML = num_guardian;
        if (num_guardian >= 2) {
            document.getElementById("guardianInfo").getElementsByTagName("p")[0].style.color = "red";
            document.getElementById("guardianInfo").getElementsByTagName("span")[0].style.borderRightColor = "red";
        }
    }
    if (champion_array[num].type === "Gunslinger" || champion_array[num].type2 === "Gunslinger" || champion_array[num].type3 === "Gunslinger") {
        document.getElementById("gunslingerType").style.display = "inline-block";
        document.getElementById("gunslingerType").getElementsByTagName("span")[0].innerHTML = num_gunslinger;
        if (num_gunslinger >= 2) {
            document.getElementById("gunslingerInfo").getElementsByTagName("p")[0].style.color = "red";
            document.getElementById("gunslingerInfo").getElementsByTagName("span")[0].style.borderRightColor = "red";
            document.getElementById("gunslingerInfo").getElementsByTagName("p")[1].style.color = "white";
            document.getElementById("gunslingerInfo").getElementsByTagName("span")[1].style.borderRightColor = "white";
            document.getElementById("gunslingerInfo").getElementsByTagName("p")[2].style.color = "white";
            document.getElementById("gunslingerInfo").getElementsByTagName("span")[2].style.borderRightColor = "white";
        }
        if (num_gunslinger >= 4) {
            document.getElementById("gunslingerInfo").getElementsByTagName("p")[1].style.color = "red";
            document.getElementById("gunslingerInfo").getElementsByTagName("span")[1].style.borderRightColor = "red";
            document.getElementById("gunslingerInfo").getElementsByTagName("p")[2].style.color = "white";
            document.getElementById("gunslingerInfo").getElementsByTagName("span")[2].style.borderRightColor = "white";
            document.getElementById("gunslingerInfo").getElementsByTagName("p")[0].style.color = "white";
            document.getElementById("gunslingerInfo").getElementsByTagName("span")[0].style.borderRightColor = "white";
        }
        if (num_gunslinger >= 6) {
            document.getElementById("gunslingerInfo").getElementsByTagName("p")[2].style.color = "red";
            document.getElementById("gunslingerInfo").getElementsByTagName("span")[2].style.borderRightColor = "red";
            document.getElementById("gunslingerInfo").getElementsByTagName("p")[1].style.color = "white";
            document.getElementById("gunslingerInfo").getElementsByTagName("span")[1].style.borderRightColor = "white";
            document.getElementById("gunslingerInfo").getElementsByTagName("p")[0].style.color = "white";
            document.getElementById("gunslingerInfo").getElementsByTagName("span")[0].style.borderRightColor = "white";
        }
    }
    if (champion_array[num].type === "Knight" || champion_array[num].type2 === "Knight" || champion_array[num].type3 === "Knight") {
        document.getElementById("knightType").style.display = "inline-block";
        document.getElementById("knightType").getElementsByTagName("span")[0].innerHTML = num_knight;
        if (num_knight >= 2) {
            document.getElementById("knightInfo").getElementsByTagName("p")[0].style.color = "red";
            document.getElementById("knightInfo").getElementsByTagName("span")[0].style.borderRightColor = "red";
            document.getElementById("knightInfo").getElementsByTagName("p")[1].style.color = "white";
            document.getElementById("knightInfo").getElementsByTagName("span")[1].style.borderRightColor = "white";
            document.getElementById("knightInfo").getElementsByTagName("p")[1].style.color = "white";
            document.getElementById("knightInfo").getElementsByTagName("span")[1].style.borderRightColor = "white";
        }
        if (num_knight >= 4) {
            document.getElementById("knightInfo").getElementsByTagName("p")[1].style.color = "red";
            document.getElementById("knightInfo").getElementsByTagName("span")[1].style.borderRightColor = "red";
            document.getElementById("knightInfo").getElementsByTagName("p")[2].style.color = "white";
            document.getElementById("knightInfo").getElementsByTagName("span")[2].style.borderRightColor = "white";
            document.getElementById("knightInfo").getElementsByTagName("p")[0].style.color = "white";
            document.getElementById("knightInfo").getElementsByTagName("span")[0].style.borderRightColor = "white";
        }
        if (num_knight >= 6) {
            document.getElementById("knightInfo").getElementsByTagName("p")[2].style.color = "red";
            document.getElementById("knightInfo").getElementsByTagName("span")[2].style.borderRightColor = "red";
            document.getElementById("knightInfo").getElementsByTagName("p")[0].style.color = "white";
            document.getElementById("knightInfo").getElementsByTagName("span")[0].style.borderRightColor = "white";
            document.getElementById("knightInfo").getElementsByTagName("p")[1].style.color = "white";
            document.getElementById("knightInfo").getElementsByTagName("span")[1].style.borderRightColor = "white";
        }
    }
    if (champion_array[num].type === "Shapeshifter" || champion_array[num].type2 === "Shapeshifter" || champion_array[num].type3 === "Shapeshifter") {
        document.getElementById("shapeshifterType").style.display = "inline-block";
        document.getElementById("shapeshifterType").getElementsByTagName("span")[0].innerHTML = num_shapeshifter;
        if (num_shapeshifter >= 3) {
            document.getElementById("shapeshifterInfo").getElementsByTagName("p")[0].style.color = "red";
            document.getElementById("shapeshifterInfo").getElementsByTagName("span")[0].style.borderRightColor = "red";
            document.getElementById("shapeshifterInfo").getElementsByTagName("p")[1].style.color = "white";
            document.getElementById("shapeshifterInfo").getElementsByTagName("span")[1].style.borderRightColor = "white";
        }
        if (num_shapeshifter >= 6) {
            document.getElementById("shapeshifterInfo").getElementsByTagName("p")[1].style.color = "red";
            document.getElementById("shapeshifterInfo").getElementsByTagName("span")[1].style.borderRightColor = "red";
            document.getElementById("shapeshifterInfo").getElementsByTagName("p")[0].style.color = "white";
            document.getElementById("shapeshifterInfo").getElementsByTagName("span")[0].style.borderRightColor = "white";
        }
    }
    if (champion_array[num].type === "Sorcerer" || champion_array[num].type2 === "Sorcerer" || champion_array[num].type3 === "Sorcerer") {
        document.getElementById("sorcererType").style.display = "inline-block";
        document.getElementById("sorcererType").getElementsByTagName("span")[0].innerHTML = num_sorcerer;
        if (num_sorcerer >= 3) {
            document.getElementById("sorcererInfo").getElementsByTagName("p")[0].style.color = "red";
            document.getElementById("sorcererInfo").getElementsByTagName("span")[0].style.borderRightColor = "red";
            document.getElementById("sorcererInfo").getElementsByTagName("p")[1].style.color = "white";
            document.getElementById("sorcererInfo").getElementsByTagName("span")[1].style.borderRightColor = "white";
        }
        if (num_sorcerer >= 6) {
            document.getElementById("sorcererInfo").getElementsByTagName("p")[1].style.color = "red";
            document.getElementById("sorcererInfo").getElementsByTagName("span")[1].style.borderRightColor = "red";
            document.getElementById("sorcererInfo").getElementsByTagName("p")[0].style.color = "white";
            document.getElementById("sorcererInfo").getElementsByTagName("span")[0].style.borderRightColor = "white";
        }
    }
    if (champion_array[num].type === "Demon" || champion_array[num].type2 === "Demon" || champion_array[num].type3 === "Demon") {
        document.getElementById("demonType").style.display = "inline-block";
        document.getElementById("demonType").getElementsByTagName("span")[0].innerHTML = num_demon;
        if (num_demon >= 2) {
            document.getElementById("demonInfo").getElementsByTagName("p")[0].style.color = "red";
            document.getElementById("demonInfo").getElementsByTagName("span")[0].style.borderRightColor = "red";
            document.getElementById("demonInfo").getElementsByTagName("p")[1].style.color = "white";
            document.getElementById("demonInfo").getElementsByTagName("span")[1].style.borderRightColor = "white";
            document.getElementById("demonInfo").getElementsByTagName("p")[1].style.color = "white";
            document.getElementById("demonInfo").getElementsByTagName("span")[1].style.borderRightColor = "white";
        }
        if (num_demon >= 4) {
            document.getElementById("demonInfo").getElementsByTagName("p")[1].style.color = "red";
            document.getElementById("demonInfo").getElementsByTagName("span")[1].style.borderRightColor = "red";
            document.getElementById("demonInfo").getElementsByTagName("p")[2].style.color = "white";
            document.getElementById("demonInfo").getElementsByTagName("span")[2].style.borderRightColor = "white";
            document.getElementById("demonInfo").getElementsByTagName("p")[0].style.color = "white";
            document.getElementById("demonInfo").getElementsByTagName("span")[0].style.borderRightColor = "white";
        }
        if (num_demon >= 6) {
            document.getElementById("demonInfo").getElementsByTagName("p")[2].style.color = "red";
            document.getElementById("demonInfo").getElementsByTagName("span")[2].style.borderRightColor = "red";
            document.getElementById("demonInfo").getElementsByTagName("p")[0].style.color = "white";
            document.getElementById("demonInfo").getElementsByTagName("span")[0].style.borderRightColor = "white";
            document.getElementById("demonInfo").getElementsByTagName("p")[1].style.color = "white";
            document.getElementById("demonInfo").getElementsByTagName("span")[1].style.borderRightColor = "white";
        }
    }
    if (champion_array[num].type === "Dragon" || champion_array[num].type2 === "Dragon" || champion_array[num].type3 === "Dragon") {
        document.getElementById("dragonType").style.display = "inline-block";
        document.getElementById("dragonType").getElementsByTagName("span")[0].innerHTML = num_dragon;
        if (num_dragon >= 2) {
            document.getElementById("dragonInfo").getElementsByTagName("p")[0].style.color = "red";
            document.getElementById("dragonInfo").getElementsByTagName("span")[0].style.borderRightColor = "red";
        }
    }
    if (champion_array[num].type === "Exile" || champion_array[num].type2 === "Exile" || champion_array[num].type3 === "Exile") {
        document.getElementById("exileType").style.display = "inline-block";
        document.getElementById("exileType").getElementsByTagName("span")[0].innerHTML = num_exile;
        if (num_exile >= 1) {
            document.getElementById("exileInfo").getElementsByTagName("p")[0].style.color = "red";
            document.getElementById("exileInfo").getElementsByTagName("span")[0].style.borderRightColor = "red";
        }
    }
    if (champion_array[num].type === "Imperial" || champion_array[num].type2 === "Imperial" || champion_array[num].type3 === "Imperial") {
        document.getElementById("imperialType").style.display = "inline-block";
        document.getElementById("imperialType").getElementsByTagName("span")[0].innerHTML = num_imperial;
        if (num_imperial >= 2) {
            document.getElementById("imperialInfo").getElementsByTagName("p")[0].style.color = "red";
            document.getElementById("imperialInfo").getElementsByTagName("span")[0].style.borderRightColor = "red";
            document.getElementById("imperialInfo").getElementsByTagName("p")[1].style.color = "white";
            document.getElementById("imperialInfo").getElementsByTagName("span")[1].style.borderRightColor = "white";
        }
        if (num_imperial >= 4) {
            document.getElementById("imperialInfo").getElementsByTagName("p")[1].style.color = "red";
            document.getElementById("imperialInfo").getElementsByTagName("span")[1].style.borderRightColor = "red";
            document.getElementById("imperialInfo").getElementsByTagName("p")[0].style.color = "white";
            document.getElementById("imperialInfo").getElementsByTagName("span")[0].style.borderRightColor = "white";
        }
    }
    if (champion_array[num].type === "Noble" || champion_array[num].type2 === "Noble" || champion_array[num].type3 === "Noble") {
        document.getElementById("nobleType").style.display = "inline-block";
        document.getElementById("nobleType").getElementsByTagName("span")[0].innerHTML = num_noble;
        if (num_noble >= 3) {
            document.getElementById("nobleInfo").getElementsByTagName("p")[0].style.color = "red";
            document.getElementById("nobleInfo").getElementsByTagName("span")[0].style.borderRightColor = "red";
            document.getElementById("nobleInfo").getElementsByTagName("p")[1].style.color = "white";
            document.getElementById("nobleInfo").getElementsByTagName("span")[1].style.borderRightColor = "white";
        }
        if (num_noble >= 6) {
            document.getElementById("nobleInfo").getElementsByTagName("p")[1].style.color = "red";
            document.getElementById("nobleInfo").getElementsByTagName("span")[1].style.borderRightColor = "red";
            document.getElementById("nobleInfo").getElementsByTagName("p")[0].style.color = "white";
            document.getElementById("nobleInfo").getElementsByTagName("span")[0].style.borderRightColor = "white";
        }
    }
    if (champion_array[num].type === "Ninja" || champion_array[num].type2 === "Ninja" || champion_array[num].type3 === "Ninja") {
        document.getElementById("ninjaType").style.display = "inline-block";
        document.getElementById("ninjaType").getElementsByTagName("span")[0].innerHTML = num_ninja;
        if (num_ninja === 1) {
            document.getElementById("ninjaInfo").getElementsByTagName("p")[0].style.color = "red";
            document.getElementById("ninjaInfo").getElementsByTagName("span")[0].style.borderRightColor = "red";
            document.getElementById("ninjaInfo").getElementsByTagName("p")[1].style.color = "white";
            document.getElementById("ninjaInfo").getElementsByTagName("span")[1].style.borderRightColor = "white";
        }
        if (num_ninja === 2 || num_ninja === 3) {
            document.getElementById("ninjaInfo").getElementsByTagName("p")[0].style.color = "white";
            document.getElementById("ninjaInfo").getElementsByTagName("span")[0].style.borderRightColor = "white";
            document.getElementById("ninjaInfo").getElementsByTagName("p")[1].style.color = "white";
            document.getElementById("ninjaInfo").getElementsByTagName("span")[1].style.borderRightColor = "white";
        }
        if (num_ninja >= 4) {
            document.getElementById("ninjaInfo").getElementsByTagName("p")[1].style.color = "red";
            document.getElementById("ninjaInfo").getElementsByTagName("span")[1].style.borderRightColor = "red";
            document.getElementById("ninjaInfo").getElementsByTagName("p")[0].style.color = "white";
            document.getElementById("ninjaInfo").getElementsByTagName("span")[0].style.borderRightColor = "white";
        }
    }
    if (champion_array[num].type === "Phantom" || champion_array[num].type2 === "Phantom" || champion_array[num].type3 === "Phantom") {
        document.getElementById("phantomType").style.display = "inline-block";
        document.getElementById("phantomType").getElementsByTagName("span")[0].innerHTML = num_phantom;
        if (num_phantom >= 2) {
            document.getElementById("phantomInfo").getElementsByTagName("p")[0].style.color = "red";
            document.getElementById("phantomInfo").getElementsByTagName("span")[0].style.borderRightColor = "red";
        }
    }
    if (champion_array[num].type === "Pirate" || champion_array[num].type2 === "Pirate" || champion_array[num].type3 === "Pirate") {
        document.getElementById("pirateType").style.display = "inline-block";
        document.getElementById("pirateType").getElementsByTagName("span")[0].innerHTML = num_pirate;
        if (num_pirate >= 3) {
            document.getElementById("pirateInfo").getElementsByTagName("p")[0].style.color = "red";
            document.getElementById("pirateInfo").getElementsByTagName("span")[0].style.borderRightColor = "red";
        }
    }
    if (champion_array[num].type === "Robot" || champion_array[num].type2 === "Robot" || champion_array[num].type3 === "Robot") {
        document.getElementById("robotType").style.display = "inline-block";
        document.getElementById("robotType").getElementsByTagName("span")[0].innerHTML = num_robot;
        if (num_robot >= 1) {
            document.getElementById("robotInfo").getElementsByTagName("p")[0].style.color = "red";
            document.getElementById("robotInfo").getElementsByTagName("span")[0].style.borderRightColor = "red";
        }
    }
    if (champion_array[num].type === "Void" || champion_array[num].type2 === "Void" || champion_array[num].type3 === "Void") {
        document.getElementById("voidType").style.display = "inline-block";
        document.getElementById("voidType").getElementsByTagName("span")[0].innerHTML = num_void;
        if (num_void >= 3) {
            document.getElementById("voidInfo").getElementsByTagName("p")[0].style.color = "red";
            document.getElementById("voidInfo").getElementsByTagName("span")[0].style.borderRightColor = "red";
        }
    }
    if (champion_array[num].type === "Wild" || champion_array[num].type2 === "Wild" || champion_array[num].type3 === "Wild") {
        document.getElementById("wildType").style.display = "inline-block";
        document.getElementById("wildType").getElementsByTagName("span")[0].innerHTML = num_wild;
        if (num_wild >= 2) {
            document.getElementById("wildInfo").getElementsByTagName("p")[0].style.color = "red";
            document.getElementById("wildInfo").getElementsByTagName("span")[0].style.borderRightColor = "red";
            document.getElementById("wildInfo").getElementsByTagName("p")[1].style.color = "white";
            document.getElementById("wildInfo").getElementsByTagName("span")[1].style.borderRightColor = "white";
        }
        if (num_wild >= 4) {
            document.getElementById("wildInfo").getElementsByTagName("p")[1].style.color = "red";
            document.getElementById("wildInfo").getElementsByTagName("span")[1].style.borderRightColor = "red";
            document.getElementById("wildInfo").getElementsByTagName("p")[0].style.color = "white";
            document.getElementById("wildInfo").getElementsByTagName("span")[0].style.borderRightColor = "white";
        }
    }
    if (champion_array[num].type === "Yordle" || champion_array[num].type2 === "Yordle" || champion_array[num].type3 === "Yordle") {
        document.getElementById("yordleType").style.display = "inline-block";
        document.getElementById("yordleType").getElementsByTagName("span")[0].innerHTML = num_yordle;
        if (num_yordle >= 3) {
            document.getElementById("yordleInfo").getElementsByTagName("p")[0].style.color = "red";
            document.getElementById("yordleInfo").getElementsByTagName("span")[0].style.borderRightColor = "red";
            document.getElementById("yordleInfo").getElementsByTagName("p")[1].style.color = "white";
            document.getElementById("yordleInfo").getElementsByTagName("span")[1].style.borderRightColor = "white";
        }
        if (num_yordle >= 6) {
            document.getElementById("yordleInfo").getElementsByTagName("p")[1].style.color = "red";
            document.getElementById("yordleInfo").getElementsByTagName("span")[1].style.borderRightColor = "red";
            document.getElementById("yordleInfo").getElementsByTagName("p")[0].style.color = "white";
            document.getElementById("yordleInfo").getElementsByTagName("span")[0].style.borderRightColor = "white";
        }
    }

    let delete_champ = document.createElement("div");
    delete_champ.innerHTML = "<strong>-</strong>";
    delete_champ.style.cursor = "pointer";
    delete_champ.addEventListener('click', function() {
        champ_container.style.display = "none";
        if (champion_array[num].type === "Glacial" || champion_array[num].type2 === "Glacial" || champion_array[num].type3 === "Glacial") {
            num_glacial--;
            if (num_glacial === 0) {
                document.getElementById("glacialType").style.display = "none";
            }
            if (num_glacial === 1) {
                document.getElementById("glacialInfo").style.color = "white";
                document.getElementById("glacialInfo").getElementsByTagName("p")[0].style.color = "white";
                document.getElementById("glacialInfo").getElementsByTagName("span")[0].style.borderColor = "white";
                console.log(num_glacial);
            }
            if (num_glacial === 3) {
                document.getElementById("glacialInfo").getElementsByTagName("p")[1].style.color = "white";
                document.getElementById("glacialInfo").getElementsByTagName("span")[1].style.borderColor = "white";
                document.getElementById("glacialInfo").getElementsByTagName("p")[2].style.color = "white";
                document.getElementById("glacialInfo").getElementsByTagName("span")[2].style.borderColor = "white";
                document.getElementById("glacialInfo").getElementsByTagName("p")[0].style.color = "red";
                document.getElementById("glacialInfo").getElementsByTagName("span")[0].style.borderColor = "red";
                console.log(num_glacial);
            }
            if (num_glacial === 5) {
                document.getElementById("glacialInfo").getElementsByTagName("p")[2].style.color = "white";
                document.getElementById("glacialInfo").getElementsByTagName("span")[2].style.borderColor = "white";
                document.getElementById("glacialInfo").getElementsByTagName("p")[1].style.color = "red";
                document.getElementById("glacialInfo").getElementsByTagName("span")[1].style.borderColor = "red";
                document.getElementById("glacialInfo").getElementsByTagName("p")[0].style.color = "white";
                document.getElementById("glacialInfo").getElementsByTagName("span")[0].style.borderColor = "white";
                console.log(num_glacial);
            }
            if (num_glacial >= 6) {
                document.getElementById("glacialInfo").getElementsByTagName("p")[1].style.color = "white";
                document.getElementById("glacialInfo").getElementsByTagName("span")[1].style.borderColor = "white";
                document.getElementById("glacialInfo").getElementsByTagName("p")[2].style.color = "red";
                document.getElementById("glacialInfo").getElementsByTagName("span")[2].style.borderColor = "red";
                document.getElementById("glacialInfo").getElementsByTagName("p")[0].style.color = "white";
                document.getElementById("glacialInfo").getElementsByTagName("span")[0].style.borderColor = "white";
            }
            document.getElementById("glacialType").getElementsByTagName("span")[0].innerHTML = num_glacial;
        }
        if (champion_array[num].type === "Ranger" || champion_array[num].type2 === "Ranger" || champion_array[num].type3 === "Ranger") {
            num_ranger--;
            if (num_ranger === 0) {
                document.getElementById("rangerType").style.display = "none";
            }
            if (num_ranger === 1) {
                document.getElementById("rangerInfo").style.color = "white";
                document.getElementById("rangerInfo").getElementsByTagName("p")[0].style.color = "white";
                document.getElementById("rangerInfo").getElementsByTagName("span")[0].style.borderColor = "white";
            }
            if (num_ranger === 3) {
                document.getElementById("rangerInfo").getElementsByTagName("p")[1].style.color = "white";
                document.getElementById("rangerInfo").getElementsByTagName("span")[1].style.borderColor = "white";
                document.getElementById("rangerInfo").getElementsByTagName("p")[0].style.color = "red";
                document.getElementById("rangerInfo").getElementsByTagName("span")[0].style.borderColor = "red";
            }
            if (num_ranger >= 4) {
                document.getElementById("rangerInfo").getElementsByTagName("p")[1].style.color = "red";
                document.getElementById("rangerInfo").getElementsByTagName("span")[1].style.borderColor = "red";
                document.getElementById("rangerInfo").getElementsByTagName("p")[0].style.color = "white";
                document.getElementById("rangerInfo").getElementsByTagName("span")[0].style.borderColor = "white";
            }   
            document.getElementById("rangerType").getElementsByTagName("span")[0].innerHTML = num_ranger;
        }
        if (champion_array[num].type === "Assassin" || champion_array[num].type2 === "Assassin" || champion_array[num].type3 === "Assassin") {
            num_assassin--;
            if (num_assassin === 0) {
                document.getElementById("assassinType").style.display = "none";
            }
            if (num_assassin === 2) {
                document.getElementById("assassinInfo").style.color = "white";
                document.getElementById("assassinInfo").getElementsByTagName("p")[0].style.color = "white";
                document.getElementById("assassinInfo").getElementsByTagName("span")[0].style.borderColor = "white";
            }
            if (num_assassin === 5) {
                document.getElementById("assassinInfo").getElementsByTagName("p")[1].style.color = "white";
                document.getElementById("assassinInfo").getElementsByTagName("span")[1].style.borderColor = "white";
                document.getElementById("assassinInfo").getElementsByTagName("p")[0].style.color = "red";
                document.getElementById("assassinInfo").getElementsByTagName("span")[0].style.borderColor = "red";
            }
            if (num_assassin >= 6) {
                document.getElementById("assassinInfo").getElementsByTagName("p")[1].style.color = "red";
                document.getElementById("assassinInfo").getElementsByTagName("span")[1].style.borderColor = "red";
                document.getElementById("assassinInfo").getElementsByTagName("p")[0].style.color = "white";
                document.getElementById("assassinInfo").getElementsByTagName("span")[0].style.borderColor = "white";
            }        
            document.getElementById("assassinType").getElementsByTagName("span")[0].innerHTML = num_assassin;
        }
        if (champion_array[num].type === "Blademaster" || champion_array[num].type2 === "Blademaster" || champion_array[num].type3 === "Blademaster") {
            num_blademaster--;
            if (num_blademaster === 0) {
                document.getElementById("blademasterType").style.display = "none";
            }
            if (num_blademaster === 2) {
                document.getElementById("blademasterInfo").style.color = "white";
                document.getElementById("blademasterInfo").getElementsByTagName("p")[0].style.color = "white";
                document.getElementById("blademasterInfo").getElementsByTagName("span")[0].style.borderColor = "white";
            }
            if (num_blademaster === 5) {
                document.getElementById("blademasterInfo").getElementsByTagName("p")[0].style.color = "red";
                document.getElementById("blademasterInfo").getElementsByTagName("span")[0].style.borderColor = "red";
                document.getElementById("blademasterInfo").getElementsByTagName("p")[2].style.color = "white";
                document.getElementById("blademasterInfo").getElementsByTagName("span")[2].style.borderColor = "white";
                document.getElementById("blademasterInfo").getElementsByTagName("p")[1].style.color = "white";
                document.getElementById("blademasterInfo").getElementsByTagName("span")[1].style.borderColor = "white";
            }
            if (num_blademaster === 8) {
                document.getElementById("blademasterInfo").getElementsByTagName("p")[1].style.color = "red";
                document.getElementById("blademasterInfo").getElementsByTagName("span")[1].style.borderColor = "red";
                document.getElementById("blademasterInfo").getElementsByTagName("p")[2].style.color = "white";
                document.getElementById("blademasterInfo").getElementsByTagName("span")[2].style.borderColor = "white";
                document.getElementById("blademasterInfo").getElementsByTagName("p")[0].style.color = "white";
                document.getElementById("blademasterInfo").getElementsByTagName("span")[0].style.borderColor = "white";
            }
            if (num_blademaster >= 9) {
                document.getElementById("blademasterInfo").getElementsByTagName("p")[2].style.color = "red";
                document.getElementById("blademasterInfo").getElementsByTagName("span")[2].style.borderColor = "red";
                document.getElementById("blademasterInfo").getElementsByTagName("p")[1].style.color = "white";
                document.getElementById("blademasterInfo").getElementsByTagName("span")[1].style.borderColor = "white";
                document.getElementById("blademasterInfo").getElementsByTagName("p")[0].style.color = "white";
                document.getElementById("blademasterInfo").getElementsByTagName("span")[0].style.borderColor = "white";
            }
            document.getElementById("blademasterType").getElementsByTagName("span")[0].innerHTML = num_blademaster;
        }
        if (champion_array[num].type === "Brawler" || champion_array[num].type2 === "Brawler" || champion_array[num].type3 === "Brawler") {
            num_brawler--;
            if (num_brawler === 0) {
                document.getElementById("brawlerType").style.display = "none";
            }
            if (num_brawler === 1) {
                document.getElementById("brawlerInfo").style.color = "white";
                document.getElementById("brawlerInfo").getElementsByTagName("p")[0].style.color = "white";
                document.getElementById("brawlerInfo").getElementsByTagName("span")[0].style.borderColor = "white";
            }
            if (num_brawler === 3) {
                document.getElementById("brawlerInfo").getElementsByTagName("p")[1].style.color = "white";
                document.getElementById("brawlerInfo").getElementsByTagName("span")[1].style.borderColor = "white";
                document.getElementById("brawlerInfo").getElementsByTagName("p")[0].style.color = "red";
                document.getElementById("brawlerInfo").getElementsByTagName("span")[0].style.borderColor = "red";
                document.getElementById("brawlerInfo").getElementsByTagName("p")[2].style.color = "white";
                document.getElementById("brawlerInfo").getElementsByTagName("span")[2].style.borderColor = "white";
            }
            if (num_brawler === 5) {
                document.getElementById("brawlerInfo").getElementsByTagName("p")[1].style.color = "red";
                document.getElementById("brawlerInfo").getElementsByTagName("span")[1].style.borderColor = "red";
                document.getElementById("brawlerInfo").getElementsByTagName("p")[2].style.color = "white";
                document.getElementById("brawlerInfo").getElementsByTagName("span")[2].style.borderColor = "white";
                document.getElementById("brawlerInfo").getElementsByTagName("p")[0].style.color = "white";
                document.getElementById("brawlerInfo").getElementsByTagName("span")[0].style.borderColor = "white";
            }
            if (num_brawler >= 6) {
                document.getElementById("brawlerInfo").getElementsByTagName("p")[2].style.color = "red";
                document.getElementById("brawlerInfo").getElementsByTagName("span")[2].style.borderColor = "red";
                document.getElementById("brawlerInfo").getElementsByTagName("p")[1].style.color = "white";
                document.getElementById("brawlerInfo").getElementsByTagName("span")[1].style.borderColor = "white";
                document.getElementById("brawlerInfo").getElementsByTagName("p")[0].style.color = "white";
                document.getElementById("brawlerInfo").getElementsByTagName("span")[0].style.borderColor = "white";
            }
            document.getElementById("brawlerType").getElementsByTagName("span")[0].innerHTML = num_brawler;
        }
        if (champion_array[num].type === "Elementalist" || champion_array[num].type2 === "Elementalist" || champion_array[num].type3 === "Elementalist") {
            num_elementalist--;
            if (num_elementalist === 0) {
                document.getElementById("elementalistType").style.display = "none";
            }
            if (num_elementalist === 2) {
                document.getElementById("elementalistInfo").getElementsByTagName("p")[0].style.color = "white";
                document.getElementById("elementalistInfo").getElementsByTagName("span")[0].style.borderColor = "white";
            }
            document.getElementById("elementalistType").getElementsByTagName("span")[0].innerHTML = num_elementalist;
        }
        if (champion_array[num].type === "Guardian" || champion_array[num].type2 === "Guardian" || champion_array[num].type3 === "Guardian") {
            num_guardian--;
            if (num_guardian === 0) {
                document.getElementById("guardianType").style.display = "none";
            }
            if (num_guardian === 2) {
                document.getElementById("guardianInfo").getElementsByTagName("p")[0].style.color = "white";
                document.getElementById("guardianInfo").getElementsByTagName("span")[0].style.borderColor = "white";
            }
            document.getElementById("guardianType").getElementsByTagName("span")[0].innerHTML = num_guardian;
        }
        if (champion_array[num].type === "Gunslinger" || champion_array[num].type2 === "Gunslinger" || champion_array[num].type3 === "Gunslinger") {
            num_gunslinger--;
            if (num_gunslinger === 0) {
                document.getElementById("gunslingerType").style.display = "none";
            }
            if (num_gunslinger === 1) {
                document.getElementById("gunslingerInfo").style.color = "white";
                document.getElementById("gunslingerInfo").getElementsByTagName("p")[0].style.color = "white";
                document.getElementById("gunslingerInfo").getElementsByTagName("span")[0].style.borderColor = "white";
            }
            if (num_gunslinger === 3) {
                document.getElementById("gunslingerInfo").getElementsByTagName("p")[1].style.color = "white";
                document.getElementById("gunslingerInfo").getElementsByTagName("span")[1].style.borderColor = "white";
                document.getElementById("gunslingerInfo").getElementsByTagName("p")[0].style.color = "red";
                document.getElementById("gunslingerInfo").getElementsByTagName("span")[0].style.borderColor = "red";
                document.getElementById("gunslingerInfo").getElementsByTagName("p")[2].style.color = "white";
                document.getElementById("gunslingerInfo").getElementsByTagName("span")[2].style.borderColor = "white";
            }
            if (num_gunslinger === 5) {
                document.getElementById("gunslingerInfo").getElementsByTagName("p")[1].style.color = "red";
                document.getElementById("gunslingerInfo").getElementsByTagName("span")[1].style.borderColor = "red";
                document.getElementById("gunslingerInfo").getElementsByTagName("p")[0].style.color = "white";
                document.getElementById("gunslingerInfo").getElementsByTagName("span")[0].style.borderColor = "white";
                document.getElementById("gunslingerInfo").getElementsByTagName("p")[2].style.color = "white";
                document.getElementById("gunslingerInfo").getElementsByTagName("span")[2].style.borderColor = "white";
            }
            if (num_gunslinger >= 6) {
                document.getElementById("gunslingerInfo").getElementsByTagName("p")[2].style.color = "red";
                document.getElementById("gunslingerInfo").getElementsByTagName("span")[2].style.borderColor = "red";
                document.getElementById("gunslingerInfo").getElementsByTagName("p")[1].style.color = "white";
                document.getElementById("gunslingerInfo").getElementsByTagName("span")[1].style.borderColor = "white";
                document.getElementById("gunslingerInfo").getElementsByTagName("p")[0].style.color = "white";
                document.getElementById("gunslingerInfo").getElementsByTagName("span")[0].style.borderColor = "white";
            }
            document.getElementById("gunslingerType").getElementsByTagName("span")[0].innerHTML = num_gunslinger;
        }
        if (champion_array[num].type === "Knight" || champion_array[num].type2 === "Knight" || champion_array[num].type3 === "Knight") {
            num_knight--;
            if (num_knight === 0) {
                document.getElementById("knightType").style.display = "none";
            }
            if (num_knight === 1) {
                document.getElementById("knightInfo").style.color = "white";
                document.getElementById("knightInfo").getElementsByTagName("p")[0].style.color = "white";
                document.getElementById("knightInfo").getElementsByTagName("span")[0].style.borderColor = "white";
            }
            if (num_knight === 3) {
                document.getElementById("knightInfo").getElementsByTagName("p")[1].style.color = "white";
                document.getElementById("knightInfo").getElementsByTagName("span")[1].style.borderColor = "white";
                document.getElementById("knightInfo").getElementsByTagName("p")[2].style.color = "white";
                document.getElementById("knightInfo").getElementsByTagName("span")[2].style.borderColor = "white";
                document.getElementById("knightInfo").getElementsByTagName("p")[0].style.color = "red";
                document.getElementById("knightInfo").getElementsByTagName("span")[0].style.borderColor = "red";
            }
            if (num_knight === 5) {
                document.getElementById("knightInfo").getElementsByTagName("p")[2].style.color = "white";
                document.getElementById("knightInfo").getElementsByTagName("span")[2].style.borderColor = "white";
                document.getElementById("knightInfo").getElementsByTagName("p")[1].style.color = "red";
                document.getElementById("knightInfo").getElementsByTagName("span")[1].style.borderColor = "red";
                document.getElementById("knightInfo").getElementsByTagName("p")[0].style.color = "white";
                document.getElementById("knightInfo").getElementsByTagName("span")[0].style.borderColor = "white";
            }
            if (num_knight >= 6) {
                document.getElementById("knightInfo").getElementsByTagName("p")[1].style.color = "white";
                document.getElementById("knightInfo").getElementsByTagName("span")[1].style.borderColor = "white";
                document.getElementById("knightInfo").getElementsByTagName("p")[2].style.color = "red";
                document.getElementById("knightInfo").getElementsByTagName("span")[2].style.borderColor = "red";
                document.getElementById("knightInfo").getElementsByTagName("p")[0].style.color = "white";
                document.getElementById("knightInfo").getElementsByTagName("span")[0].style.borderColor = "white";
            }
            document.getElementById("knightType").getElementsByTagName("span")[0].innerHTML = num_knight;
        }
        if (champion_array[num].type === "Shapeshifter" || champion_array[num].type2 === "Shapeshifter" || champion_array[num].type3 === "Shapeshifter") {
            num_shapeshifter--;
            if (num_shapeshifter === 0) {
                document.getElementById("shapeshifterType").style.display = "none";
            }
            if (num_shapeshifter === 2) {
                document.getElementById("shapeshifterInfo").getElementsByTagName("p")[0].style.color = "white";
                document.getElementById("shapeshifterInfo").getElementsByTagName("span")[0].style.borderColor = "white";
            }
            if (num_shapeshifter === 5) {
                document.getElementById("shapeshifterInfo").getElementsByTagName("p")[0].style.color = "red";
                document.getElementById("shapeshifterInfo").getElementsByTagName("span")[0].style.borderColor = "red";
                document.getElementById("shapeshifterInfo").getElementsByTagName("p")[1].style.color = "white";
                document.getElementById("shapeshifterInfo").getElementsByTagName("span")[1].style.borderColor = "white";
            }
            if (num_shapeshifter >= 6) {
                document.getElementById("shapeshifterInfo").getElementsByTagName("p")[1].style.color = "red";
                document.getElementById("shapeshifterInfo").getElementsByTagName("span")[1].style.borderColor = "red";
                document.getElementById("shapeshifterInfo").getElementsByTagName("p")[0].style.color = "white";
                document.getElementById("shapeshifterInfo").getElementsByTagName("span")[0].style.borderColor = "white";
            }
            document.getElementById("shapeshifterType").getElementsByTagName("span")[0].innerHTML = num_shapeshifter;
        }
        if (champion_array[num].type === "Sorcerer" || champion_array[num].type2 === "Sorcerer" || champion_array[num].type3 === "Sorcerer") {
            num_sorcerer--;
            if (num_sorcerer === 0) {
                document.getElementById("sorcererType").style.display = "none";
            }
            if (num_sorcerer === 2) {
                document.getElementById("sorcererInfo").getElementsByTagName("p")[0].style.color = "white";
                document.getElementById("sorcererInfo").getElementsByTagName("span")[0].style.borderColor = "white";
            }
            if (num_sorcerer === 5) {
                document.getElementById("sorcererInfo").getElementsByTagName("p")[0].style.color = "red";
                document.getElementById("sorcererInfo").getElementsByTagName("span")[0].style.borderColor = "red";
                document.getElementById("sorcererInfo").getElementsByTagName("p")[1].style.color = "white";
                document.getElementById("sorcererInfo").getElementsByTagName("span")[1].style.borderColor = "white";
            }
            if (num_sorcerer >= 6) {
                document.getElementById("sorcererInfo").getElementsByTagName("p")[1].style.color = "red";
                document.getElementById("sorcererInfo").getElementsByTagName("span")[1].style.borderColor = "red";
                document.getElementById("sorcererInfo").getElementsByTagName("p")[0].style.color = "white";
                document.getElementById("sorcererInfo").getElementsByTagName("span")[0].style.borderColor = "white";
            }
            document.getElementById("sorcererType").getElementsByTagName("span")[0].innerHTML = num_sorcerer;
        }
        if (champion_array[num].type === "Demon" || champion_array[num].type2 === "Demon" || champion_array[num].type3 === "Demon") {
            num_demon--;
            if (num_demon === 0) {
                document.getElementById("demonType").style.display = "none";
            }
            if (num_demon === 1) {
                document.getElementById("demonInfo").style.color = "white";
                document.getElementById("demonInfo").getElementsByTagName("p")[0].style.color = "white";
                document.getElementById("demonInfo").getElementsByTagName("span")[0].style.borderColor = "white";
            }
            if (num_demon === 3) {
                document.getElementById("demonInfo").getElementsByTagName("p")[1].style.color = "white";
                document.getElementById("demonInfo").getElementsByTagName("span")[1].style.borderColor = "white";
                document.getElementById("demonInfo").getElementsByTagName("p")[2].style.color = "white";
                document.getElementById("demonInfo").getElementsByTagName("span")[2].style.borderColor = "white";
                document.getElementById("demonInfo").getElementsByTagName("p")[0].style.color = "red";
                document.getElementById("demonInfo").getElementsByTagName("span")[0].style.borderColor = "red";
            }
            if (num_demon === 5) {
                document.getElementById("demonInfo").getElementsByTagName("p")[2].style.color = "white";
                document.getElementById("demonInfo").getElementsByTagName("span")[2].style.borderColor = "white";
                document.getElementById("demonInfo").getElementsByTagName("p")[1].style.color = "red";
                document.getElementById("demonInfo").getElementsByTagName("span")[1].style.borderColor = "red";
                document.getElementById("demonInfo").getElementsByTagName("p")[0].style.color = "white";
                document.getElementById("demonInfo").getElementsByTagName("span")[0].style.borderColor = "white";
            }
            if (num_demon >= 6) {
                document.getElementById("demonInfo").getElementsByTagName("p")[1].style.color = "white";
                document.getElementById("demonInfo").getElementsByTagName("span")[1].style.borderColor = "white";
                document.getElementById("demonInfo").getElementsByTagName("p")[2].style.color = "red";
                document.getElementById("demonInfo").getElementsByTagName("span")[2].style.borderColor = "red";
                document.getElementById("demonInfo").getElementsByTagName("p")[0].style.color = "white";
                document.getElementById("demonInfo").getElementsByTagName("span")[0].style.borderColor = "white";
            }
            document.getElementById("demonType").getElementsByTagName("span")[0].innerHTML = num_demon;
        }
        if (champion_array[num].type === "Dragon" || champion_array[num].type2 === "Dragon" || champion_array[num].type3 === "Dragon") {
            num_dragon--;
            if (num_dragon === 0) {
                document.getElementById("dragonType").style.display = "none";
            }
            if (num_dragon === 1) {
                document.getElementById("dragonInfo").getElementsByTagName("p")[0].style.color = "white";
                document.getElementById("dragonInfo").getElementsByTagName("span")[0].style.borderColor = "white";
            }
            document.getElementById("dragonType").getElementsByTagName("span")[0].innerHTML = num_dragon;
        }
        if (champion_array[num].type === "Exile" || champion_array[num].type2 === "Exile" || champion_array[num].type3 === "Exile") {
            num_exile--;
            if (num_exile === 0) {
                document.getElementById("exileType").style.display = "none";
            }
            document.getElementById("exileType").getElementsByTagName("span")[0].innerHTML = num_exile;
        }
        if (champion_array[num].type === "Imperial" || champion_array[num].type2 === "Imperial" || champion_array[num].type3 === "Imperial") {
            num_imperial--;
            if (num_imperial === 0) {
                document.getElementById("imperialType").style.display = "none";
            }
            if (num_imperial === 1) {
                document.getElementById("imperialInfo").style.color = "white";
                document.getElementById("imperialInfo").getElementsByTagName("p")[0].style.color = "white";
                document.getElementById("imperialInfo").getElementsByTagName("span")[0].style.borderColor = "white";
            }
            if (num_imperial === 3) {
                document.getElementById("imperialInfo").getElementsByTagName("p")[1].style.color = "white";
                document.getElementById("imperialInfo").getElementsByTagName("span")[1].style.borderColor = "white";
                document.getElementById("imperialInfo").getElementsByTagName("p")[0].style.color = "red";
                document.getElementById("imperialInfo").getElementsByTagName("span")[0].style.borderColor = "red";
            }
            if (num_imperial >= 4) {
                document.getElementById("imperialInfo").getElementsByTagName("p")[1].style.color = "red";
                document.getElementById("imperialInfo").getElementsByTagName("span")[1].style.borderColor = "red";
                document.getElementById("imperialInfo").getElementsByTagName("p")[0].style.color = "white";
                document.getElementById("imperialInfo").getElementsByTagName("span")[0].style.borderColor = "white";
            }
            document.getElementById("imperialType").getElementsByTagName("span")[0].innerHTML = num_imperial;
        }
        if (champion_array[num].type === "Noble" || champion_array[num].type2 === "Noble" || champion_array[num].type3 === "Noble") {
            num_noble--;
            if (num_noble === 0) {
                document.getElementById("nobleType").style.display = "none";
            }
            if (num_noble === 2) {
                document.getElementById("nobleInfo").style.color = "white";
                document.getElementById("nobleInfo").getElementsByTagName("p")[0].style.color = "white";
                document.getElementById("nobleInfo").getElementsByTagName("span")[0].style.borderColor = "white";
            }
            if (num_noble === 5) {
                document.getElementById("nobleInfo").getElementsByTagName("p")[1].style.color = "white";
                document.getElementById("nobleInfo").getElementsByTagName("span")[1].style.borderColor = "white";
                document.getElementById("nobleInfo").getElementsByTagName("p")[0].style.color = "red";
                document.getElementById("nobleInfo").getElementsByTagName("span")[0].style.borderColor = "red";
            }
            if (num_noble >= 6) {
                document.getElementById("nobleInfo").getElementsByTagName("p")[1].style.color = "red";
                document.getElementById("nobleInfo").getElementsByTagName("span")[1].style.borderColor = "red";
                document.getElementById("nobleInfo").getElementsByTagName("p")[0].style.color = "white";
                document.getElementById("nobleInfo").getElementsByTagName("span")[0].style.borderColor = "white";
            }
            document.getElementById("nobleType").getElementsByTagName("span")[0].innerHTML = num_noble;
        }
        if (champion_array[num].type === "Ninja" || champion_array[num].type2 === "Ninja" || champion_array[num].type3 === "Ninja") {
            num_ninja--;
            if (num_ninja === 0) {
                document.getElementById("ninjaType").style.display = "none";
                document.getElementById("ninjaInfo").style.color = "white";
            }
            if (num_ninja === 1) {
                document.getElementById("ninjaInfo").style.color = "white";
                document.getElementById("ninjaInfo").getElementsByTagName("p")[0].style.color = "red";
                document.getElementById("ninjaInfo").getElementsByTagName("span")[0].style.borderColor = "red";
            }
            if (num_ninja === 3) {
                document.getElementById("ninjaInfo").getElementsByTagName("p")[1].style.color = "white";
                document.getElementById("ninjaInfo").getElementsByTagName("span")[1].style.borderColor = "white";
                document.getElementById("ninjaInfo").getElementsByTagName("p")[0].style.color = "white";
                document.getElementById("ninjaInfo").getElementsByTagName("span")[0].style.borderColor = "white";
            }
            if (num_ninja >= 4) {
                document.getElementById("ninjaInfo").getElementsByTagName("p")[1].style.color = "red";
                document.getElementById("ninjaInfo").getElementsByTagName("span")[1].style.borderColor = "red";
                document.getElementById("ninjaInfo").getElementsByTagName("p")[0].style.color = "white";
                document.getElementById("ninjaInfo").getElementsByTagName("span")[0].style.borderColor = "white";
            }
            document.getElementById("ninjaType").getElementsByTagName("span")[0].innerHTML = num_ninja;
        }
        if (champion_array[num].type === "Phantom" || champion_array[num].type2 === "Phantom" || champion_array[num].type3 === "Phantom") {
            num_phantom--;
            if (num_phantom === 0) {
                document.getElementById("phantomType").style.display = "none";
            }
            if (num_phantom === 1) {
                document.getElementById("phantomInfo").getElementsByTagName("p")[0].style.color = "white";
                document.getElementById("phantomInfo").getElementsByTagName("span")[0].style.borderColor = "white";
            }
            document.getElementById("phantomType").getElementsByTagName("span")[0].innerHTML = num_phantom;
        }
        if (champion_array[num].type === "Pirate" || champion_array[num].type2 === "Pirate" || champion_array[num].type3 === "Pirate") {
            num_pirate--;
            if (num_pirate === 0) {
                document.getElementById("pirateType").style.display = "none";
            }
            if (num_pirate === 2) {
                document.getElementById("pirateInfo").getElementsByTagName("p")[0].style.color = "white";
                document.getElementById("pirateInfo").getElementsByTagName("span")[0].style.borderColor = "white";
            }
            document.getElementById("pirateType").getElementsByTagName("span")[0].innerHTML = num_pirate;
        }
        if (champion_array[num].type === "Robot" || champion_array[num].type2 === "Robot" || champion_array[num].type3 === "Robot") {
            num_robot--;
            if (num_robot === 0) {
                document.getElementById("robotType").style.display = "none";
            }
            document.getElementById("robotType").getElementsByTagName("span")[0].innerHTML = num_robot;
        }
        if (champion_array[num].type === "Void" || champion_array[num].type2 === "Void" || champion_array[num].type3 === "Void") {
            num_void--;
            if (num_void === 0) {
                document.getElementById("voidType").style.display = "none";
            }
            if (num_void === 2) {
                document.getElementById("voidInfo").getElementsByTagName("p")[0].style.color = "white";
                document.getElementById("voidInfo").getElementsByTagName("span")[0].style.borderColor = "white";
            }
            document.getElementById("voidType").getElementsByTagName("span")[0].innerHTML = num_void;
        }
        if (champion_array[num].type === "Wild" || champion_array[num].type2 === "Wild" || champion_array[num].type3 === "Wild") {
            num_wild--;
            if (num_wild === 0) {
                document.getElementById("wildType").style.display = "none";
            }
            if (num_wild === 1) {
                document.getElementById("wildInfo").style.color = "white";
                document.getElementById("wildInfo").getElementsByTagName("p")[0].style.color = "white";
                document.getElementById("wildInfo").getElementsByTagName("span")[0].style.borderColor = "white";
                document.getElementById("wildInfo").getElementsByTagName("p")[1].style.color = "white";
                document.getElementById("wildInfo").getElementsByTagName("span")[1].style.borderColor = "white";
            }
            if (num_wild === 3) {
                document.getElementById("wildInfo").getElementsByTagName("p")[1].style.color = "white";
                document.getElementById("wildInfo").getElementsByTagName("span")[1].style.borderColor = "white";
                document.getElementById("wildInfo").getElementsByTagName("p")[0].style.color = "red";
                document.getElementById("wildInfo").getElementsByTagName("span")[0].style.borderColor = "red";
            }
            if (num_wild >= 4) {
                document.getElementById("wildInfo").getElementsByTagName("p")[1].style.color = "red";
                document.getElementById("wildInfo").getElementsByTagName("span")[1].style.borderColor = "red";
                document.getElementById("wildInfo").getElementsByTagName("p")[0].style.color = "white";
                document.getElementById("wildInfo").getElementsByTagName("span")[0].style.borderColor = "white";
            }
            document.getElementById("wildType").getElementsByTagName("span")[0].innerHTML = num_wild;
        }
        if (champion_array[num].type === "Yordle" || champion_array[num].type2 === "Yordle" || champion_array[num].type3 === "Yordle") {
            num_yordle--;
            if (num_yordle === 0) {
                document.getElementById("yordleType").style.display = "none";
            }
            if (num_yordle === 2) {
                document.getElementById("yordleInfo").style.color = "white";
                document.getElementById("yordleInfo").getElementsByTagName("p")[0].style.color = "white";
                document.getElementById("yordleInfo").getElementsByTagName("span")[0].style.borderColor = "white";
                document.getElementById("yordleInfo").getElementsByTagName("p")[1].style.color = "white";
                document.getElementById("yordleInfo").getElementsByTagName("span")[1].style.borderColor = "white";
            }
            if (num_yordle === 5) {
                document.getElementById("yordleInfo").getElementsByTagName("p")[1].style.color = "white";
                document.getElementById("yordleInfo").getElementsByTagName("span")[1].style.borderColor = "white";
                document.getElementById("yordleInfo").getElementsByTagName("p")[0].style.color = "red";
                document.getElementById("yordleInfo").getElementsByTagName("span")[0].style.borderColor = "red";
            }
            if (num_yordle >= 6) {
                document.getElementById("yordleInfo").getElementsByTagName("p")[1].style.color = "red";
                document.getElementById("yordleInfo").getElementsByTagName("span")[1].style.borderColor = "red";
                document.getElementById("yordleInfo").getElementsByTagName("p")[0].style.color = "white";
                document.getElementById("yordleInfo").getElementsByTagName("span")[0].style.borderColor = "white";
            }
            document.getElementById("yordleType").getElementsByTagName("span")[0].innerHTML = num_yordle;
        }
    });
    champ_container.appendChild(delete_champ);
    document.getElementById("selected-champion-list").appendChild(champ_container);

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

function add_item(num) {
    
    let item_type = items_array[num].type;
    let item_src = items_array[num].item;
    let selected_item = document.createElement("div");
    let item_img = document.createElement("img");
    item_img.src = item_src;
    selected_item.appendChild(item_img);

    if (item_type ===  "Glacial") {
        num_glacial++;
        document.getElementById("glacialType").style.display = "inline-block";
        document.getElementById("glacialType").getElementsByTagName("span")[0].innerHTML = num_glacial;
        if (num_glacial >= 2) {
            document.getElementById("glacialInfo").getElementsByTagName("p")[0].style.color = "red";
            document.getElementById("glacialInfo").getElementsByTagName("span")[0].style.borderRightColor = "red";
            document.getElementById("glacialInfo").getElementsByTagName("p")[1].style.color = "white";
            document.getElementById("glacialInfo").getElementsByTagName("span")[1].style.borderRightColor = "white";
            document.getElementById("glacialInfo").getElementsByTagName("p")[2].style.color = "white";
            document.getElementById("glacialInfo").getElementsByTagName("span")[2].style.borderRightColor = "white";
        }
        if (num_glacial >= 4) {
            document.getElementById("glacialInfo").getElementsByTagName("p")[1].style.color = "red";
            document.getElementById("glacialInfo").getElementsByTagName("span")[1].style.borderRightColor = "red";
            document.getElementById("glacialInfo").getElementsByTagName("p")[0].style.color = "white";
            document.getElementById("glacialInfo").getElementsByTagName("span")[0].style.borderRightColor = "white";
            document.getElementById("glacialInfo").getElementsByTagName("p")[2].style.color = "white";
            document.getElementById("glacialInfo").getElementsByTagName("span")[2].style.borderRightColor = "white";
        }
        if (num_glacial >= 6) {
            document.getElementById("glacialInfo").getElementsByTagName("p")[2].style.color = "red";
            document.getElementById("glacialInfo").getElementsByTagName("span")[2].style.borderRightColor = "red";
            document.getElementById("glacialInfo").getElementsByTagName("p")[1].style.color = "white";
            document.getElementById("glacialInfo").getElementsByTagName("span")[1].style.borderRightColor = "white";
            document.getElementById("glacialInfo").getElementsByTagName("p")[0].style.color = "white";
            document.getElementById("glacialInfo").getElementsByTagName("span")[0].style.borderRightColor = "white";
        }
    }
    if (items_array[num].type === "Ranger") {
        num_ranger++;
        document.getElementById("rangerType").style.display = "inline-block";
        document.getElementById("rangerType").getElementsByTagName("span")[0].innerHTML = num_ranger;
        if (num_ranger >= 2) {
            document.getElementById("rangerInfo").getElementsByTagName("p")[0].style.color = "red";
            document.getElementById("rangerInfo").getElementsByTagName("span")[0].style.borderRightColor = "red";
            document.getElementById("rangerInfo").getElementsByTagName("p")[1].style.color = "white";
            document.getElementById("rangerInfo").getElementsByTagName("span")[1].style.borderRightColor = "white";
        }
        if (num_ranger >= 4) {
            document.getElementById("rangerInfo").getElementsByTagName("p")[1].style.color = "red";
            document.getElementById("rangerInfo").getElementsByTagName("span")[1].style.borderRightColor = "red";
            document.getElementById("rangerInfo").getElementsByTagName("p")[0].style.color = "white";
            document.getElementById("rangerInfo").getElementsByTagName("span")[0].style.borderRightColor = "white";
        }
    }
    if (items_array[num].type === "Assassin") {
        num_assassin++;
        document.getElementById("assassinType").style.display = "inline-block";
        document.getElementById("assassinType").getElementsByTagName("span")[0].innerHTML = num_assassin;
        if (num_assassin === 3) {
            document.getElementById("assassinInfo").getElementsByTagName("p")[0].style.color = "red";
            document.getElementById("assassinInfo").getElementsByTagName("span")[0].style.borderRightColor = "red";
            document.getElementById("assassinInfo").getElementsByTagName("p")[1].style.color = "white";
            document.getElementById("assassinInfo").getElementsByTagName("span")[1].style.borderRightColor = "white";
        }
        if (num_assassin >= 6) {
            document.getElementById("assassinInfo").getElementsByTagName("p")[1].style.color = "red";
            document.getElementById("assassinInfo").getElementsByTagName("span")[1].style.borderRightColor = "red";
            document.getElementById("assassinInfo").getElementsByTagName("p")[0].style.color = "white";
            document.getElementById("assassinInfo").getElementsByTagName("span")[0].style.borderRightColor = "white";
        }
    }
    if (item_type ===  "Blademaster") {
        num_blademaster++;
        document.getElementById("blademasterType").style.display = "inline-block";
        document.getElementById("blademasterType").getElementsByTagName("span")[0].innerHTML = num_blademaster;
        if (num_blademaster >= 3) {
            document.getElementById("blademasterInfo").getElementsByTagName("p")[0].style.color = "red";
            document.getElementById("blademasterInfo").getElementsByTagName("span")[0].style.borderRightColor = "red";
            document.getElementById("blademasterInfo").getElementsByTagName("p")[1].style.color = "white";
            document.getElementById("blademasterInfo").getElementsByTagName("span")[1].style.borderRightColor = "white";
            document.getElementById("blademasterInfo").getElementsByTagName("p")[2].style.color = "white";
            document.getElementById("blademasterInfo").getElementsByTagName("span")[2].style.borderRightColor = "white";
        }
        if (num_blademaster >= 6) {
            document.getElementById("blademasterInfo").getElementsByTagName("p")[1].style.color = "red";
            document.getElementById("blademasterInfo").getElementsByTagName("span")[1].style.borderRightColor = "red";
            document.getElementById("blademasterInfo").getElementsByTagName("p")[0].style.color = "white";
            document.getElementById("blademasterInfo").getElementsByTagName("span")[0].style.borderRightColor = "white";
            document.getElementById("blademasterInfo").getElementsByTagName("p")[2].style.color = "white";
            document.getElementById("blademasterInfo").getElementsByTagName("span")[2].style.borderRightColor = "white";
        }
        if (num_blademaster >= 9) {
            document.getElementById("blademasterInfo").getElementsByTagName("p")[2].style.color = "red";
            document.getElementById("blademasterInfo").getElementsByTagName("span")[2].style.borderRightColor = "red";
            document.getElementById("blademasterInfo").getElementsByTagName("p")[1].style.color = "white";
            document.getElementById("blademasterInfo").getElementsByTagName("span")[1].style.borderRightColor = "white";
            document.getElementById("blademasterInfo").getElementsByTagName("p")[0].style.color = "white";
            document.getElementById("blademasterInfo").getElementsByTagName("span")[0].style.borderRightColor = "white";
        }
        
    }
    if (item_type ===  "Brawler") {
        num_brawler++;
        document.getElementById("brawlerType").style.display = "inline-block";
        document.getElementById("brawlerType").getElementsByTagName("span")[0].innerHTML = num_brawler;
        if (num_brawler >= 2) {
            document.getElementById("brawlerInfo").getElementsByTagName("p")[0].style.color = "red";
            document.getElementById("brawlerInfo").getElementsByTagName("span")[0].style.borderRightColor = "red";
            document.getElementById("brawlerInfo").getElementsByTagName("p")[1].style.color = "white";
            document.getElementById("brawlerInfo").getElementsByTagName("span")[1].style.borderRightColor = "white";
            document.getElementById("brawlerInfo").getElementsByTagName("p")[2].style.color = "white";
            document.getElementById("brawlerInfo").getElementsByTagName("span")[2].style.borderRightColor = "white";
        }
        if (num_brawler >= 4) {
            document.getElementById("brawlerInfo").getElementsByTagName("p")[1].style.color = "red";
            document.getElementById("brawlerInfo").getElementsByTagName("span")[1].style.borderRightColor = "red";
            document.getElementById("brawlerInfo").getElementsByTagName("p")[0].style.color = "white";
            document.getElementById("brawlerInfo").getElementsByTagName("span")[0].style.borderRightColor = "white";
            document.getElementById("brawlerInfo").getElementsByTagName("p")[2].style.color = "white";
            document.getElementById("brawlerInfo").getElementsByTagName("span")[2].style.borderRightColor = "white";
        }
        if (num_brawler >= 6) {
            document.getElementById("brawlerInfo").getElementsByTagName("p")[2].style.color = "red";
            document.getElementById("brawlerInfo").getElementsByTagName("span")[2].style.borderRightColor = "red";
            document.getElementById("brawlerInfo").getElementsByTagName("p")[1].style.color = "white";
            document.getElementById("brawlerInfo").getElementsByTagName("span")[1].style.borderRightColor = "white";
            document.getElementById("brawlerInfo").getElementsByTagName("p")[0].style.color = "white";
            document.getElementById("brawlerInfo").getElementsByTagName("span")[0].style.borderRightColor = "white";
        }
    }
    if (item_type ===  "Elementalist") {
        num_elementalist++;
        document.getElementById("elementalistType").style.display = "inline-block";
        document.getElementById("elementalistType").getElementsByTagName("span")[0].innerHTML = num_elementalist;
        if (num_elementalist >= 3) {
            document.getElementById("elementalistInfo").getElementsByTagName("p")[0].style.color = "red";
            document.getElementById("elementalistInfo").getElementsByTagName("span")[0].style.borderRightColor = "red";
        }
    }
    if (item_type ===  "Guardian") {
        num_guardian++;
        document.getElementById("guardianType").style.display = "inline-block";
        document.getElementById("guardianType").getElementsByTagName("span")[0].innerHTML = num_guardian;
        if (num_guardian >= 2) {
            document.getElementById("guardianInfo").getElementsByTagName("p")[0].style.color = "red";
            document.getElementById("guardianInfo").getElementsByTagName("span")[0].style.borderRightColor = "red";
        }
    }
    if (item_type ===  "Gunslinger") {
        num_gunslinger++;
        document.getElementById("gunslingerType").style.display = "inline-block";
        document.getElementById("gunslingerType").getElementsByTagName("span")[0].innerHTML = num_gunslinger;
        if (num_gunslinger >= 2) {
            document.getElementById("gunslingerInfo").getElementsByTagName("p")[0].style.color = "red";
            document.getElementById("gunslingerInfo").getElementsByTagName("span")[0].style.borderRightColor = "red";
            document.getElementById("gunslingerInfo").getElementsByTagName("p")[1].style.color = "white";
            document.getElementById("gunslingerInfo").getElementsByTagName("span")[1].style.borderRightColor = "white";
            document.getElementById("gunslingerInfo").getElementsByTagName("p")[2].style.color = "white";
            document.getElementById("gunslingerInfo").getElementsByTagName("span")[2].style.borderRightColor = "white";
        }
        if (num_gunslinger >= 4) {
            document.getElementById("gunslingerInfo").getElementsByTagName("p")[1].style.color = "red";
            document.getElementById("gunslingerInfo").getElementsByTagName("span")[1].style.borderRightColor = "red";
            document.getElementById("gunslingerInfo").getElementsByTagName("p")[2].style.color = "white";
            document.getElementById("gunslingerInfo").getElementsByTagName("span")[2].style.borderRightColor = "white";
            document.getElementById("gunslingerInfo").getElementsByTagName("p")[0].style.color = "white";
            document.getElementById("gunslingerInfo").getElementsByTagName("span")[0].style.borderRightColor = "white";
        }
        if (num_gunslinger >= 6) {
            document.getElementById("gunslingerInfo").getElementsByTagName("p")[2].style.color = "red";
            document.getElementById("gunslingerInfo").getElementsByTagName("span")[2].style.borderRightColor = "red";
            document.getElementById("gunslingerInfo").getElementsByTagName("p")[1].style.color = "white";
            document.getElementById("gunslingerInfo").getElementsByTagName("span")[1].style.borderRightColor = "white";
            document.getElementById("gunslingerInfo").getElementsByTagName("p")[0].style.color = "white";
            document.getElementById("gunslingerInfo").getElementsByTagName("span")[0].style.borderRightColor = "white";
        }
    }
    if (item_type ===  "Knight") {
        num_knight++;
        document.getElementById("knightType").style.display = "inline-block";
        document.getElementById("knightType").getElementsByTagName("span")[0].innerHTML = num_knight;
        if (num_knight >= 2) {
            document.getElementById("knightInfo").getElementsByTagName("p")[0].style.color = "red";
            document.getElementById("knightInfo").getElementsByTagName("span")[0].style.borderRightColor = "red";
            document.getElementById("knightInfo").getElementsByTagName("p")[1].style.color = "white";
            document.getElementById("knightInfo").getElementsByTagName("span")[1].style.borderRightColor = "white";
            document.getElementById("knightInfo").getElementsByTagName("p")[1].style.color = "white";
            document.getElementById("knightInfo").getElementsByTagName("span")[1].style.borderRightColor = "white";
        }
        if (num_knight >= 4) {
            document.getElementById("knightInfo").getElementsByTagName("p")[1].style.color = "red";
            document.getElementById("knightInfo").getElementsByTagName("span")[1].style.borderRightColor = "red";
            document.getElementById("knightInfo").getElementsByTagName("p")[2].style.color = "white";
            document.getElementById("knightInfo").getElementsByTagName("span")[2].style.borderRightColor = "white";
            document.getElementById("knightInfo").getElementsByTagName("p")[0].style.color = "white";
            document.getElementById("knightInfo").getElementsByTagName("span")[0].style.borderRightColor = "white";
        }
        if (num_knight >= 6) {
            document.getElementById("knightInfo").getElementsByTagName("p")[2].style.color = "red";
            document.getElementById("knightInfo").getElementsByTagName("span")[2].style.borderRightColor = "red";
            document.getElementById("knightInfo").getElementsByTagName("p")[0].style.color = "white";
            document.getElementById("knightInfo").getElementsByTagName("span")[0].style.borderRightColor = "white";
            document.getElementById("knightInfo").getElementsByTagName("p")[1].style.color = "white";
            document.getElementById("knightInfo").getElementsByTagName("span")[1].style.borderRightColor = "white";
        }
    }
    if (item_type ===  "Shapeshifter") {
        num_shapeshifter++;
        document.getElementById("shapeshifterType").style.display = "inline-block";
        document.getElementById("shapeshifterType").getElementsByTagName("span")[0].innerHTML = num_shapeshifter;
        if (num_shapeshifter >= 3) {
            document.getElementById("shapeshifterInfo").getElementsByTagName("p")[0].style.color = "red";
            document.getElementById("shapeshifterInfo").getElementsByTagName("span")[0].style.borderRightColor = "red";
            document.getElementById("shapeshifterInfo").getElementsByTagName("p")[1].style.color = "white";
            document.getElementById("shapeshifterInfo").getElementsByTagName("span")[1].style.borderRightColor = "white";
        }
        if (num_shapeshifter >= 6) {
            document.getElementById("shapeshifterInfo").getElementsByTagName("p")[1].style.color = "red";
            document.getElementById("shapeshifterInfo").getElementsByTagName("span")[1].style.borderRightColor = "red";
            document.getElementById("shapeshifterInfo").getElementsByTagName("p")[0].style.color = "white";
            document.getElementById("shapeshifterInfo").getElementsByTagName("span")[0].style.borderRightColor = "white";
        }
    }
    if (item_type ===  "Sorcerer") {
        num_sorcerer++;
        document.getElementById("sorcererType").style.display = "inline-block";
        document.getElementById("sorcererType").getElementsByTagName("span")[0].innerHTML = num_sorcerer;
        if (num_sorcerer >= 3) {
            document.getElementById("sorcererInfo").getElementsByTagName("p")[0].style.color = "red";
            document.getElementById("sorcererInfo").getElementsByTagName("span")[0].style.borderRightColor = "red";
            document.getElementById("sorcererInfo").getElementsByTagName("p")[1].style.color = "white";
            document.getElementById("sorcererInfo").getElementsByTagName("span")[1].style.borderRightColor = "white";
        }
        if (num_sorcerer >= 6) {
            document.getElementById("sorcererInfo").getElementsByTagName("p")[1].style.color = "red";
            document.getElementById("sorcererInfo").getElementsByTagName("span")[1].style.borderRightColor = "red";
            document.getElementById("sorcererInfo").getElementsByTagName("p")[0].style.color = "white";
            document.getElementById("sorcererInfo").getElementsByTagName("span")[0].style.borderRightColor = "white";
        }
    }
    if (item_type ===  "Demon") {
        num_demon++;
        document.getElementById("demonType").style.display = "inline-block";
        document.getElementById("demonType").getElementsByTagName("span")[0].innerHTML = num_demon;
        if (num_demon >= 2) {
            document.getElementById("demonInfo").getElementsByTagName("p")[0].style.color = "red";
            document.getElementById("demonInfo").getElementsByTagName("span")[0].style.borderRightColor = "red";
            document.getElementById("demonInfo").getElementsByTagName("p")[1].style.color = "white";
            document.getElementById("demonInfo").getElementsByTagName("span")[1].style.borderRightColor = "white";
            document.getElementById("demonInfo").getElementsByTagName("p")[1].style.color = "white";
            document.getElementById("demonInfo").getElementsByTagName("span")[1].style.borderRightColor = "white";
        }
        if (num_demon >= 4) {
            document.getElementById("demonInfo").getElementsByTagName("p")[1].style.color = "red";
            document.getElementById("demonInfo").getElementsByTagName("span")[1].style.borderRightColor = "red";
            document.getElementById("demonInfo").getElementsByTagName("p")[2].style.color = "white";
            document.getElementById("demonInfo").getElementsByTagName("span")[2].style.borderRightColor = "white";
            document.getElementById("demonInfo").getElementsByTagName("p")[0].style.color = "white";
            document.getElementById("demonInfo").getElementsByTagName("span")[0].style.borderRightColor = "white";
        }
        if (num_demon >= 6) {
            document.getElementById("demonInfo").getElementsByTagName("p")[2].style.color = "red";
            document.getElementById("demonInfo").getElementsByTagName("span")[2].style.borderRightColor = "red";
            document.getElementById("demonInfo").getElementsByTagName("p")[0].style.color = "white";
            document.getElementById("demonInfo").getElementsByTagName("span")[0].style.borderRightColor = "white";
            document.getElementById("demonInfo").getElementsByTagName("p")[1].style.color = "white";
            document.getElementById("demonInfo").getElementsByTagName("span")[1].style.borderRightColor = "white";
        }
    }
    if (item_type ===  "Dragon") {
        num_dragon++;
        document.getElementById("dragonType").style.display = "inline-block";
        document.getElementById("dragonType").getElementsByTagName("span")[0].innerHTML = num_dragon;
        if (num_dragon >= 2) {
            document.getElementById("dragonInfo").getElementsByTagName("p")[0].style.color = "red";
            document.getElementById("dragonInfo").getElementsByTagName("span")[0].style.borderRightColor = "red";
        }
    }
    if (item_type ===  "Exile") {
        num_exile++;
        document.getElementById("exileType").style.display = "inline-block";
        document.getElementById("exileType").getElementsByTagName("span")[0].innerHTML = num_exile;
        if (num_exile >= 1) {
            document.getElementById("exileInfo").getElementsByTagName("p")[0].style.color = "red";
            document.getElementById("exileInfo").getElementsByTagName("span")[0].style.borderRightColor = "red";
        }
    }
    if (item_type ===  "Imperial") {
        num_imperial++;
        document.getElementById("imperialType").style.display = "inline-block";
        document.getElementById("imperialType").getElementsByTagName("span")[0].innerHTML = num_imperial;
        if (num_imperial >= 2) {
            document.getElementById("imperialInfo").getElementsByTagName("p")[0].style.color = "red";
            document.getElementById("imperialInfo").getElementsByTagName("span")[0].style.borderRightColor = "red";
            document.getElementById("imperialInfo").getElementsByTagName("p")[1].style.color = "white";
            document.getElementById("imperialInfo").getElementsByTagName("span")[1].style.borderRightColor = "white";
        }
        if (num_imperial >= 4) {
            document.getElementById("imperialInfo").getElementsByTagName("p")[1].style.color = "red";
            document.getElementById("imperialInfo").getElementsByTagName("span")[1].style.borderRightColor = "red";
            document.getElementById("imperialInfo").getElementsByTagName("p")[0].style.color = "white";
            document.getElementById("imperialInfo").getElementsByTagName("span")[0].style.borderRightColor = "white";
        }
    }
    if (item_type ===  "Noble") {
        num_noble++;
        document.getElementById("nobleType").style.display = "inline-block";
        document.getElementById("nobleType").getElementsByTagName("span")[0].innerHTML = num_noble;
        if (num_noble >= 3) {
            document.getElementById("nobleInfo").getElementsByTagName("p")[0].style.color = "red";
            document.getElementById("nobleInfo").getElementsByTagName("span")[0].style.borderRightColor = "red";
            document.getElementById("nobleInfo").getElementsByTagName("p")[1].style.color = "white";
            document.getElementById("nobleInfo").getElementsByTagName("span")[1].style.borderRightColor = "white";
        }
        if (num_noble >= 6) {
            document.getElementById("nobleInfo").getElementsByTagName("p")[1].style.color = "red";
            document.getElementById("nobleInfo").getElementsByTagName("span")[1].style.borderRightColor = "red";
            document.getElementById("nobleInfo").getElementsByTagName("p")[0].style.color = "white";
            document.getElementById("nobleInfo").getElementsByTagName("span")[0].style.borderRightColor = "white";
        }
    }
    if (item_type ===  "Ninja") {
        num_ninja++;
        document.getElementById("ninjaType").style.display = "inline-block";
        document.getElementById("ninjaType").getElementsByTagName("span")[0].innerHTML = num_ninja;
        if (num_ninja === 1) {
            document.getElementById("ninjaInfo").getElementsByTagName("p")[0].style.color = "red";
            document.getElementById("ninjaInfo").getElementsByTagName("span")[0].style.borderRightColor = "red";
            document.getElementById("ninjaInfo").getElementsByTagName("p")[1].style.color = "white";
            document.getElementById("ninjaInfo").getElementsByTagName("span")[1].style.borderRightColor = "white";
        }
        if (num_ninja === 2 || num_ninja === 3) {
            document.getElementById("ninjaInfo").getElementsByTagName("p")[0].style.color = "white";
            document.getElementById("ninjaInfo").getElementsByTagName("span")[0].style.borderRightColor = "white";
            document.getElementById("ninjaInfo").getElementsByTagName("p")[1].style.color = "white";
            document.getElementById("ninjaInfo").getElementsByTagName("span")[1].style.borderRightColor = "white";
        }
        if (num_ninja >= 4) {
            document.getElementById("ninjaInfo").getElementsByTagName("p")[1].style.color = "red";
            document.getElementById("ninjaInfo").getElementsByTagName("span")[1].style.borderRightColor = "red";
            document.getElementById("ninjaInfo").getElementsByTagName("p")[0].style.color = "white";
            document.getElementById("ninjaInfo").getElementsByTagName("span")[0].style.borderRightColor = "white";
        }
    }
    if (item_type ===  "Phantom") {
        num_phantom++;
        document.getElementById("phantomType").style.display = "inline-block";
        document.getElementById("phantomType").getElementsByTagName("span")[0].innerHTML = num_phantom;
        if (num_phantom >= 2) {
            document.getElementById("phantomInfo").getElementsByTagName("p")[0].style.color = "red";
            document.getElementById("phantomInfo").getElementsByTagName("span")[0].style.borderRightColor = "red";
        }
    }
    if (item_type ===  "Pirate") {
        num_pirate++;
        document.getElementById("pirateType").style.display = "inline-block";
        document.getElementById("pirateType").getElementsByTagName("span")[0].innerHTML = num_pirate;
        if (num_pirate >= 3) {
            document.getElementById("pirateInfo").getElementsByTagName("p")[0].style.color = "red";
            document.getElementById("pirateInfo").getElementsByTagName("span")[0].style.borderRightColor = "red";
        }
    }
    if (item_type ===  "Robot") {
        num_robot++;
        document.getElementById("robotType").style.display = "inline-block";
        document.getElementById("robotType").getElementsByTagName("span")[0].innerHTML = num_robot;
        if (num_robot >= 1) {
            document.getElementById("robotInfo").getElementsByTagName("p")[0].style.color = "red";
            document.getElementById("robotInfo").getElementsByTagName("span")[0].style.borderRightColor = "red";
        }
    }
    if (item_type ===  "Void") {
        num_void++;
        document.getElementById("voidType").style.display = "inline-block";
        document.getElementById("voidType").getElementsByTagName("span")[0].innerHTML = num_void;
        if (num_void >= 3) {
            document.getElementById("voidInfo").getElementsByTagName("p")[0].style.color = "red";
            document.getElementById("voidInfo").getElementsByTagName("span")[0].style.borderRightColor = "red";
        }
    }
    if (item_type ===  "Wild") {
        num_wild++;
        document.getElementById("wildType").style.display = "inline-block";
        document.getElementById("wildType").getElementsByTagName("span")[0].innerHTML = num_wild;
        if (num_wild >= 2) {
            document.getElementById("wildInfo").getElementsByTagName("p")[0].style.color = "red";
            document.getElementById("wildInfo").getElementsByTagName("span")[0].style.borderRightColor = "red";
            document.getElementById("wildInfo").getElementsByTagName("p")[1].style.color = "white";
            document.getElementById("wildInfo").getElementsByTagName("span")[1].style.borderRightColor = "white";
        }
        if (num_wild >= 4) {
            document.getElementById("wildInfo").getElementsByTagName("p")[1].style.color = "red";
            document.getElementById("wildInfo").getElementsByTagName("span")[1].style.borderRightColor = "red";
            document.getElementById("wildInfo").getElementsByTagName("p")[0].style.color = "white";
            document.getElementById("wildInfo").getElementsByTagName("span")[0].style.borderRightColor = "white";
        }
    }
    if (item_type ===  "Yordle") {
        num_yordle++;
        document.getElementById("yordleType").style.display = "inline-block";
        document.getElementById("yordleType").getElementsByTagName("span")[0].innerHTML = num_yordle;
        if (num_yordle >= 3) {
            document.getElementById("yordleInfo").getElementsByTagName("p")[0].style.color = "red";
            document.getElementById("yordleInfo").getElementsByTagName("span")[0].style.borderRightColor = "red";
            document.getElementById("yordleInfo").getElementsByTagName("p")[1].style.color = "white";
            document.getElementById("yordleInfo").getElementsByTagName("span")[1].style.borderRightColor = "white";
        }
        if (num_yordle >= 6) {
            document.getElementById("yordleInfo").getElementsByTagName("p")[1].style.color = "red";
            document.getElementById("yordleInfo").getElementsByTagName("span")[1].style.borderRightColor = "red";
            document.getElementById("yordleInfo").getElementsByTagName("p")[0].style.color = "white";
            document.getElementById("yordleInfo").getElementsByTagName("span")[0].style.borderRightColor = "white";
        }
    }

    let delete_item = document.createElement("div");
    delete_item.innerHTML = "<strong>-</strong>";
    delete_item.style.cursor = "pointer";
    delete_item.addEventListener('click', function() {
        selected_item.style.display = "none";
        if (item_type ===  "Glacial") {
            num_glacial--;
            if (num_glacial === 0) {
                document.getElementById("glacialType").style.display = "none";
            }
            if (num_glacial === 1) {
                document.getElementById("glacialInfo").style.color = "white";
                document.getElementById("glacialInfo").getElementsByTagName("p")[0].style.color = "white";
                document.getElementById("glacialInfo").getElementsByTagName("span")[0].style.borderColor = "white";
                console.log(num_glacial);
            }
            if (num_glacial === 3) {
                document.getElementById("glacialInfo").getElementsByTagName("p")[1].style.color = "white";
                document.getElementById("glacialInfo").getElementsByTagName("span")[1].style.borderColor = "white";
                document.getElementById("glacialInfo").getElementsByTagName("p")[2].style.color = "white";
                document.getElementById("glacialInfo").getElementsByTagName("span")[2].style.borderColor = "white";
                document.getElementById("glacialInfo").getElementsByTagName("p")[0].style.color = "red";
                document.getElementById("glacialInfo").getElementsByTagName("span")[0].style.borderColor = "red";
                console.log(num_glacial);
            }
            if (num_glacial === 5) {
                document.getElementById("glacialInfo").getElementsByTagName("p")[2].style.color = "white";
                document.getElementById("glacialInfo").getElementsByTagName("span")[2].style.borderColor = "white";
                document.getElementById("glacialInfo").getElementsByTagName("p")[1].style.color = "red";
                document.getElementById("glacialInfo").getElementsByTagName("span")[1].style.borderColor = "red";
                document.getElementById("glacialInfo").getElementsByTagName("p")[0].style.color = "white";
                document.getElementById("glacialInfo").getElementsByTagName("span")[0].style.borderColor = "white";
                console.log(num_glacial);
            }
            if (num_glacial >= 6) {
                document.getElementById("glacialInfo").getElementsByTagName("p")[1].style.color = "white";
                document.getElementById("glacialInfo").getElementsByTagName("span")[1].style.borderColor = "white";
                document.getElementById("glacialInfo").getElementsByTagName("p")[2].style.color = "red";
                document.getElementById("glacialInfo").getElementsByTagName("span")[2].style.borderColor = "red";
                document.getElementById("glacialInfo").getElementsByTagName("p")[0].style.color = "white";
                document.getElementById("glacialInfo").getElementsByTagName("span")[0].style.borderColor = "white";
            }
            document.getElementById("glacialType").getElementsByTagName("span")[0].innerHTML = num_glacial;
        }
        if (item_type ===  "Ranger") {
            num_ranger--;
            if (num_ranger === 0) {
                document.getElementById("rangerType").style.display = "none";
            }
            if (num_ranger === 1) {
                document.getElementById("rangerInfo").style.color = "white";
                document.getElementById("rangerInfo").getElementsByTagName("p")[0].style.color = "white";
                document.getElementById("rangerInfo").getElementsByTagName("span")[0].style.borderColor = "white";
            }
            if (num_ranger === 3) {
                document.getElementById("rangerInfo").getElementsByTagName("p")[1].style.color = "white";
                document.getElementById("rangerInfo").getElementsByTagName("span")[1].style.borderColor = "white";
                document.getElementById("rangerInfo").getElementsByTagName("p")[0].style.color = "red";
                document.getElementById("rangerInfo").getElementsByTagName("span")[0].style.borderColor = "red";
            }
            if (num_ranger >= 4) {
                document.getElementById("rangerInfo").getElementsByTagName("p")[1].style.color = "red";
                document.getElementById("rangerInfo").getElementsByTagName("span")[1].style.borderColor = "red";
                document.getElementById("rangerInfo").getElementsByTagName("p")[0].style.color = "white";
                document.getElementById("rangerInfo").getElementsByTagName("span")[0].style.borderColor = "white";
            }   
            document.getElementById("rangerType").getElementsByTagName("span")[0].innerHTML = num_ranger;
        }
        if (item_type ===  "Assassin") {
            num_assassin--;
            if (num_assassin === 0) {
                document.getElementById("assassinType").style.display = "none";
            }
            if (num_assassin === 2) {
                document.getElementById("assassinInfo").style.color = "white";
                document.getElementById("assassinInfo").getElementsByTagName("p")[0].style.color = "white";
                document.getElementById("assassinInfo").getElementsByTagName("span")[0].style.borderColor = "white";
            }
            if (num_assassin === 5) {
                document.getElementById("assassinInfo").getElementsByTagName("p")[1].style.color = "white";
                document.getElementById("assassinInfo").getElementsByTagName("span")[1].style.borderColor = "white";
                document.getElementById("assassinInfo").getElementsByTagName("p")[0].style.color = "red";
                document.getElementById("assassinInfo").getElementsByTagName("span")[0].style.borderColor = "red";
            }
            if (num_assassin >= 6) {
                document.getElementById("assassinInfo").getElementsByTagName("p")[1].style.color = "red";
                document.getElementById("assassinInfo").getElementsByTagName("span")[1].style.borderColor = "red";
                document.getElementById("assassinInfo").getElementsByTagName("p")[0].style.color = "white";
                document.getElementById("assassinInfo").getElementsByTagName("span")[0].style.borderColor = "white";
            }        
            document.getElementById("assassinType").getElementsByTagName("span")[0].innerHTML = num_assassin;
        }
        if (item_type ===  "Blademaster") {
            num_blademaster--;
            if (num_blademaster === 0) {
                document.getElementById("blademasterType").style.display = "none";
            }
            if (num_blademaster === 2) {
                document.getElementById("blademasterInfo").style.color = "white";
                document.getElementById("blademasterInfo").getElementsByTagName("p")[0].style.color = "white";
                document.getElementById("blademasterInfo").getElementsByTagName("span")[0].style.borderColor = "white";
            }
            if (num_blademaster === 5) {
                document.getElementById("blademasterInfo").getElementsByTagName("p")[0].style.color = "red";
                document.getElementById("blademasterInfo").getElementsByTagName("span")[0].style.borderColor = "red";
                document.getElementById("blademasterInfo").getElementsByTagName("p")[2].style.color = "white";
                document.getElementById("blademasterInfo").getElementsByTagName("span")[2].style.borderColor = "white";
                document.getElementById("blademasterInfo").getElementsByTagName("p")[1].style.color = "white";
                document.getElementById("blademasterInfo").getElementsByTagName("span")[1].style.borderColor = "white";
            }
            if (num_blademaster === 8) {
                document.getElementById("blademasterInfo").getElementsByTagName("p")[1].style.color = "red";
                document.getElementById("blademasterInfo").getElementsByTagName("span")[1].style.borderColor = "red";
                document.getElementById("blademasterInfo").getElementsByTagName("p")[2].style.color = "white";
                document.getElementById("blademasterInfo").getElementsByTagName("span")[2].style.borderColor = "white";
                document.getElementById("blademasterInfo").getElementsByTagName("p")[0].style.color = "white";
                document.getElementById("blademasterInfo").getElementsByTagName("span")[0].style.borderColor = "white";
            }
            if (num_blademaster >= 9) {
                document.getElementById("blademasterInfo").getElementsByTagName("p")[2].style.color = "red";
                document.getElementById("blademasterInfo").getElementsByTagName("span")[2].style.borderColor = "red";
                document.getElementById("blademasterInfo").getElementsByTagName("p")[1].style.color = "white";
                document.getElementById("blademasterInfo").getElementsByTagName("span")[1].style.borderColor = "white";
                document.getElementById("blademasterInfo").getElementsByTagName("p")[0].style.color = "white";
                document.getElementById("blademasterInfo").getElementsByTagName("span")[0].style.borderColor = "white";
            }
            document.getElementById("blademasterType").getElementsByTagName("span")[0].innerHTML = num_blademaster;
        }
        if (item_type ===  "Brawler") {
            num_brawler--;
            if (num_brawler === 0) {
                document.getElementById("brawlerType").style.display = "none";
            }
            if (num_brawler === 1) {
                document.getElementById("brawlerInfo").style.color = "white";
                document.getElementById("brawlerInfo").getElementsByTagName("p")[0].style.color = "white";
                document.getElementById("brawlerInfo").getElementsByTagName("span")[0].style.borderColor = "white";
            }
            if (num_brawler === 3) {
                document.getElementById("brawlerInfo").getElementsByTagName("p")[1].style.color = "white";
                document.getElementById("brawlerInfo").getElementsByTagName("span")[1].style.borderColor = "white";
                document.getElementById("brawlerInfo").getElementsByTagName("p")[0].style.color = "red";
                document.getElementById("brawlerInfo").getElementsByTagName("span")[0].style.borderColor = "red";
                document.getElementById("brawlerInfo").getElementsByTagName("p")[2].style.color = "white";
                document.getElementById("brawlerInfo").getElementsByTagName("span")[2].style.borderColor = "white";
            }
            if (num_brawler === 5) {
                document.getElementById("brawlerInfo").getElementsByTagName("p")[1].style.color = "red";
                document.getElementById("brawlerInfo").getElementsByTagName("span")[1].style.borderColor = "red";
                document.getElementById("brawlerInfo").getElementsByTagName("p")[2].style.color = "white";
                document.getElementById("brawlerInfo").getElementsByTagName("span")[2].style.borderColor = "white";
                document.getElementById("brawlerInfo").getElementsByTagName("p")[0].style.color = "white";
                document.getElementById("brawlerInfo").getElementsByTagName("span")[0].style.borderColor = "white";
            }
            if (num_brawler >= 6) {
                document.getElementById("brawlerInfo").getElementsByTagName("p")[2].style.color = "red";
                document.getElementById("brawlerInfo").getElementsByTagName("span")[2].style.borderColor = "red";
                document.getElementById("brawlerInfo").getElementsByTagName("p")[1].style.color = "white";
                document.getElementById("brawlerInfo").getElementsByTagName("span")[1].style.borderColor = "white";
                document.getElementById("brawlerInfo").getElementsByTagName("p")[0].style.color = "white";
                document.getElementById("brawlerInfo").getElementsByTagName("span")[0].style.borderColor = "white";
            }
            document.getElementById("brawlerType").getElementsByTagName("span")[0].innerHTML = num_brawler;
        }
        if (item_type ===  "Elementalist") {
            num_elementalist--;
            if (num_elementalist === 0) {
                document.getElementById("elementalistType").style.display = "none";
            }
            if (num_elementalist === 2) {
                document.getElementById("elementalistInfo").getElementsByTagName("p")[0].style.color = "white";
                document.getElementById("elementalistInfo").getElementsByTagName("span")[0].style.borderColor = "white";
            }
            document.getElementById("elementalistType").getElementsByTagName("span")[0].innerHTML = num_elementalist;
        }
        if (item_type ===  "Guardian") {
            num_guardian--;
            if (num_guardian === 0) {
                document.getElementById("guardianType").style.display = "none";
            }
            if (num_guardian === 2) {
                document.getElementById("guardianInfo").getElementsByTagName("p")[0].style.color = "white";
                document.getElementById("guardianInfo").getElementsByTagName("span")[0].style.borderColor = "white";
            }
            document.getElementById("guardianType").getElementsByTagName("span")[0].innerHTML = num_guardian;
        }
        if (item_type ===  "Gunslinger") {
            num_gunslinger--;
            if (num_gunslinger === 0) {
                document.getElementById("gunslingerType").style.display = "none";
            }
            if (num_gunslinger === 1) {
                document.getElementById("gunslingerInfo").style.color = "white";
                document.getElementById("gunslingerInfo").getElementsByTagName("p")[0].style.color = "white";
                document.getElementById("gunslingerInfo").getElementsByTagName("span")[0].style.borderColor = "white";
            }
            if (num_gunslinger === 3) {
                document.getElementById("gunslingerInfo").getElementsByTagName("p")[1].style.color = "white";
                document.getElementById("gunslingerInfo").getElementsByTagName("span")[1].style.borderColor = "white";
                document.getElementById("gunslingerInfo").getElementsByTagName("p")[0].style.color = "red";
                document.getElementById("gunslingerInfo").getElementsByTagName("span")[0].style.borderColor = "red";
                document.getElementById("gunslingerInfo").getElementsByTagName("p")[2].style.color = "white";
                document.getElementById("gunslingerInfo").getElementsByTagName("span")[2].style.borderColor = "white";
            }
            if (num_gunslinger === 5) {
                document.getElementById("gunslingerInfo").getElementsByTagName("p")[1].style.color = "red";
                document.getElementById("gunslingerInfo").getElementsByTagName("span")[1].style.borderColor = "red";
                document.getElementById("gunslingerInfo").getElementsByTagName("p")[0].style.color = "white";
                document.getElementById("gunslingerInfo").getElementsByTagName("span")[0].style.borderColor = "white";
                document.getElementById("gunslingerInfo").getElementsByTagName("p")[2].style.color = "white";
                document.getElementById("gunslingerInfo").getElementsByTagName("span")[2].style.borderColor = "white";
            }
            if (num_gunslinger >= 6) {
                document.getElementById("gunslingerInfo").getElementsByTagName("p")[2].style.color = "red";
                document.getElementById("gunslingerInfo").getElementsByTagName("span")[2].style.borderColor = "red";
                document.getElementById("gunslingerInfo").getElementsByTagName("p")[1].style.color = "white";
                document.getElementById("gunslingerInfo").getElementsByTagName("span")[1].style.borderColor = "white";
                document.getElementById("gunslingerInfo").getElementsByTagName("p")[0].style.color = "white";
                document.getElementById("gunslingerInfo").getElementsByTagName("span")[0].style.borderColor = "white";
            }
            document.getElementById("gunslingerType").getElementsByTagName("span")[0].innerHTML = num_gunslinger;
        }
        if (item_type ===  "Knight") {
            num_knight--;
            if (num_knight === 0) {
                document.getElementById("knightType").style.display = "none";
            }
            if (num_knight === 1) {
                document.getElementById("knightInfo").style.color = "white";
                document.getElementById("knightInfo").getElementsByTagName("p")[0].style.color = "white";
                document.getElementById("knightInfo").getElementsByTagName("span")[0].style.borderColor = "white";
            }
            if (num_knight === 3) {
                document.getElementById("knightInfo").getElementsByTagName("p")[1].style.color = "white";
                document.getElementById("knightInfo").getElementsByTagName("span")[1].style.borderColor = "white";
                document.getElementById("knightInfo").getElementsByTagName("p")[2].style.color = "white";
                document.getElementById("knightInfo").getElementsByTagName("span")[2].style.borderColor = "white";
                document.getElementById("knightInfo").getElementsByTagName("p")[0].style.color = "red";
                document.getElementById("knightInfo").getElementsByTagName("span")[0].style.borderColor = "red";
            }
            if (num_knight === 5) {
                document.getElementById("knightInfo").getElementsByTagName("p")[2].style.color = "white";
                document.getElementById("knightInfo").getElementsByTagName("span")[2].style.borderColor = "white";
                document.getElementById("knightInfo").getElementsByTagName("p")[1].style.color = "red";
                document.getElementById("knightInfo").getElementsByTagName("span")[1].style.borderColor = "red";
                document.getElementById("knightInfo").getElementsByTagName("p")[0].style.color = "white";
                document.getElementById("knightInfo").getElementsByTagName("span")[0].style.borderColor = "white";
            }
            if (num_knight >= 6) {
                document.getElementById("knightInfo").getElementsByTagName("p")[1].style.color = "white";
                document.getElementById("knightInfo").getElementsByTagName("span")[1].style.borderColor = "white";
                document.getElementById("knightInfo").getElementsByTagName("p")[2].style.color = "red";
                document.getElementById("knightInfo").getElementsByTagName("span")[2].style.borderColor = "red";
                document.getElementById("knightInfo").getElementsByTagName("p")[0].style.color = "white";
                document.getElementById("knightInfo").getElementsByTagName("span")[0].style.borderColor = "white";
            }
            document.getElementById("knightType").getElementsByTagName("span")[0].innerHTML = num_knight;
        }
        if (item_type ===  "Shapeshifter") {
            num_shapeshifter--;
            if (num_shapeshifter === 0) {
                document.getElementById("shapeshifterType").style.display = "none";
            }
            if (num_shapeshifter === 2) {
                document.getElementById("shapeshifterInfo").getElementsByTagName("p")[0].style.color = "white";
                document.getElementById("shapeshifterInfo").getElementsByTagName("span")[0].style.borderColor = "white";
            }
            if (num_shapeshifter === 5) {
                document.getElementById("shapeshifterInfo").getElementsByTagName("p")[0].style.color = "red";
                document.getElementById("shapeshifterInfo").getElementsByTagName("span")[0].style.borderColor = "red";
                document.getElementById("shapeshifterInfo").getElementsByTagName("p")[1].style.color = "white";
                document.getElementById("shapeshifterInfo").getElementsByTagName("span")[1].style.borderColor = "white";
            }
            if (num_shapeshifter >= 6) {
                document.getElementById("shapeshifterInfo").getElementsByTagName("p")[1].style.color = "red";
                document.getElementById("shapeshifterInfo").getElementsByTagName("span")[1].style.borderColor = "red";
                document.getElementById("shapeshifterInfo").getElementsByTagName("p")[0].style.color = "white";
                document.getElementById("shapeshifterInfo").getElementsByTagName("span")[0].style.borderColor = "white";
            }
            document.getElementById("shapeshifterType").getElementsByTagName("span")[0].innerHTML = num_shapeshifter;
        }
        if (item_type ===  "Sorcerer") {
            num_sorcerer--;
            if (num_sorcerer === 0) {
                document.getElementById("sorcererType").style.display = "none";
            }
            if (num_sorcerer === 2) {
                document.getElementById("sorcererInfo").getElementsByTagName("p")[0].style.color = "white";
                document.getElementById("sorcererInfo").getElementsByTagName("span")[0].style.borderColor = "white";
            }
            if (num_sorcerer === 5) {
                document.getElementById("sorcererInfo").getElementsByTagName("p")[0].style.color = "red";
                document.getElementById("sorcererInfo").getElementsByTagName("span")[0].style.borderColor = "red";
                document.getElementById("sorcererInfo").getElementsByTagName("p")[1].style.color = "white";
                document.getElementById("sorcererInfo").getElementsByTagName("span")[1].style.borderColor = "white";
            }
            if (num_sorcerer >= 6) {
                document.getElementById("sorcererInfo").getElementsByTagName("p")[1].style.color = "red";
                document.getElementById("sorcererInfo").getElementsByTagName("span")[1].style.borderColor = "red";
                document.getElementById("sorcererInfo").getElementsByTagName("p")[0].style.color = "white";
                document.getElementById("sorcererInfo").getElementsByTagName("span")[0].style.borderColor = "white";
            }
            document.getElementById("sorcererType").getElementsByTagName("span")[0].innerHTML = num_sorcerer;
        }
        if (item_type ===  "Demon") {
            num_demon--;
            if (num_demon === 0) {
                document.getElementById("demonType").style.display = "none";
            }
            if (num_demon === 1) {
                document.getElementById("demonInfo").style.color = "white";
                document.getElementById("demonInfo").getElementsByTagName("p")[0].style.color = "white";
                document.getElementById("demonInfo").getElementsByTagName("span")[0].style.borderColor = "white";
            }
            if (num_demon === 3) {
                document.getElementById("demonInfo").getElementsByTagName("p")[1].style.color = "white";
                document.getElementById("demonInfo").getElementsByTagName("span")[1].style.borderColor = "white";
                document.getElementById("demonInfo").getElementsByTagName("p")[2].style.color = "white";
                document.getElementById("demonInfo").getElementsByTagName("span")[2].style.borderColor = "white";
                document.getElementById("demonInfo").getElementsByTagName("p")[0].style.color = "red";
                document.getElementById("demonInfo").getElementsByTagName("span")[0].style.borderColor = "red";
            }
            if (num_demon === 5) {
                document.getElementById("demonInfo").getElementsByTagName("p")[2].style.color = "white";
                document.getElementById("demonInfo").getElementsByTagName("span")[2].style.borderColor = "white";
                document.getElementById("demonInfo").getElementsByTagName("p")[1].style.color = "red";
                document.getElementById("demonInfo").getElementsByTagName("span")[1].style.borderColor = "red";
                document.getElementById("demonInfo").getElementsByTagName("p")[0].style.color = "white";
                document.getElementById("demonInfo").getElementsByTagName("span")[0].style.borderColor = "white";
            }
            if (num_demon >= 6) {
                document.getElementById("demonInfo").getElementsByTagName("p")[1].style.color = "white";
                document.getElementById("demonInfo").getElementsByTagName("span")[1].style.borderColor = "white";
                document.getElementById("demonInfo").getElementsByTagName("p")[2].style.color = "red";
                document.getElementById("demonInfo").getElementsByTagName("span")[2].style.borderColor = "red";
                document.getElementById("demonInfo").getElementsByTagName("p")[0].style.color = "white";
                document.getElementById("demonInfo").getElementsByTagName("span")[0].style.borderColor = "white";
            }
            document.getElementById("demonType").getElementsByTagName("span")[0].innerHTML = num_demon;
        }
        if (item_type ===  "Dragon") {
            num_dragon--;
            if (num_dragon === 0) {
                document.getElementById("dragonType").style.display = "none";
            }
            if (num_dragon === 1) {
                document.getElementById("dragonInfo").getElementsByTagName("p")[0].style.color = "white";
                document.getElementById("dragonInfo").getElementsByTagName("span")[0].style.borderColor = "white";
            }
            document.getElementById("dragonType").getElementsByTagName("span")[0].innerHTML = num_dragon;
        }
        if (item_type ===  "Exile") {
            num_exile--;
            if (num_exile === 0) {
                document.getElementById("exileType").style.display = "none";
            }
            document.getElementById("exileType").getElementsByTagName("span")[0].innerHTML = num_exile;
        }
        if (item_type ===  "Imperial") {
            num_imperial--;
            if (num_imperial === 0) {
                document.getElementById("imperialType").style.display = "none";
            }
            if (num_imperial === 1) {
                document.getElementById("imperialInfo").style.color = "white";
                document.getElementById("imperialInfo").getElementsByTagName("p")[0].style.color = "white";
                document.getElementById("imperialInfo").getElementsByTagName("span")[0].style.borderColor = "white";
            }
            if (num_imperial === 3) {
                document.getElementById("imperialInfo").getElementsByTagName("p")[1].style.color = "white";
                document.getElementById("imperialInfo").getElementsByTagName("span")[1].style.borderColor = "white";
                document.getElementById("imperialInfo").getElementsByTagName("p")[0].style.color = "red";
                document.getElementById("imperialInfo").getElementsByTagName("span")[0].style.borderColor = "red";
            }
            if (num_imperial >= 4) {
                document.getElementById("imperialInfo").getElementsByTagName("p")[1].style.color = "red";
                document.getElementById("imperialInfo").getElementsByTagName("span")[1].style.borderColor = "red";
                document.getElementById("imperialInfo").getElementsByTagName("p")[0].style.color = "white";
                document.getElementById("imperialInfo").getElementsByTagName("span")[0].style.borderColor = "white";
            }
            document.getElementById("imperialType").getElementsByTagName("span")[0].innerHTML = num_imperial;
        }
        if (item_type ===  "Noble") {
            num_noble--;
            if (num_noble === 0) {
                document.getElementById("nobleType").style.display = "none";
            }
            if (num_noble === 2) {
                document.getElementById("nobleInfo").style.color = "white";
                document.getElementById("nobleInfo").getElementsByTagName("p")[0].style.color = "white";
                document.getElementById("nobleInfo").getElementsByTagName("span")[0].style.borderColor = "white";
            }
            if (num_noble === 5) {
                document.getElementById("nobleInfo").getElementsByTagName("p")[1].style.color = "white";
                document.getElementById("nobleInfo").getElementsByTagName("span")[1].style.borderColor = "white";
                document.getElementById("nobleInfo").getElementsByTagName("p")[0].style.color = "red";
                document.getElementById("nobleInfo").getElementsByTagName("span")[0].style.borderColor = "red";
            }
            if (num_noble >= 6) {
                document.getElementById("nobleInfo").getElementsByTagName("p")[1].style.color = "red";
                document.getElementById("nobleInfo").getElementsByTagName("span")[1].style.borderColor = "red";
                document.getElementById("nobleInfo").getElementsByTagName("p")[0].style.color = "white";
                document.getElementById("nobleInfo").getElementsByTagName("span")[0].style.borderColor = "white";
            }
            document.getElementById("nobleType").getElementsByTagName("span")[0].innerHTML = num_noble;
        }
        if (item_type ===  "Ninja") {
            num_ninja--;
            if (num_ninja === 0) {
                document.getElementById("ninjaType").style.display = "none";
                document.getElementById("ninjaInfo").style.color = "white";
            }
            if (num_ninja === 1) {
                document.getElementById("ninjaInfo").style.color = "white";
                document.getElementById("ninjaInfo").getElementsByTagName("p")[0].style.color = "red";
                document.getElementById("ninjaInfo").getElementsByTagName("span")[0].style.borderColor = "red";
            }
            if (num_ninja === 3) {
                document.getElementById("ninjaInfo").getElementsByTagName("p")[1].style.color = "white";
                document.getElementById("ninjaInfo").getElementsByTagName("span")[1].style.borderColor = "white";
                document.getElementById("ninjaInfo").getElementsByTagName("p")[0].style.color = "white";
                document.getElementById("ninjaInfo").getElementsByTagName("span")[0].style.borderColor = "white";
            }
            if (num_ninja >= 4) {
                document.getElementById("ninjaInfo").getElementsByTagName("p")[1].style.color = "red";
                document.getElementById("ninjaInfo").getElementsByTagName("span")[1].style.borderColor = "red";
                document.getElementById("ninjaInfo").getElementsByTagName("p")[0].style.color = "white";
                document.getElementById("ninjaInfo").getElementsByTagName("span")[0].style.borderColor = "white";
            }
            document.getElementById("ninjaType").getElementsByTagName("span")[0].innerHTML = num_ninja;
        }
        if (item_type ===  "Phantom") {
            num_phantom--;
            if (num_phantom === 0) {
                document.getElementById("phantomType").style.display = "none";
            }
            if (num_phantom === 1) {
                document.getElementById("phantomInfo").getElementsByTagName("p")[0].style.color = "white";
                document.getElementById("phantomInfo").getElementsByTagName("span")[0].style.borderColor = "white";
            }
            document.getElementById("phantomType").getElementsByTagName("span")[0].innerHTML = num_phantom;
        }
        if (item_type ===  "Pirate") {
            num_pirate--;
            if (num_pirate === 0) {
                document.getElementById("pirateType").style.display = "none";
            }
            if (num_pirate === 2) {
                document.getElementById("pirateInfo").getElementsByTagName("p")[0].style.color = "white";
                document.getElementById("pirateInfo").getElementsByTagName("span")[0].style.borderColor = "white";
            }
            document.getElementById("pirateType").getElementsByTagName("span")[0].innerHTML = num_pirate;
        }
        if (item_type ===  "Robot") {
            num_robot--;
            if (num_robot === 0) {
                document.getElementById("robotType").style.display = "none";
            }
            document.getElementById("robotType").getElementsByTagName("span")[0].innerHTML = num_robot;
        }
        if (item_type ===  "Void") {
            num_void--;
            if (num_void === 0) {
                document.getElementById("voidType").style.display = "none";
            }
            if (num_void === 2) {
                document.getElementById("voidInfo").getElementsByTagName("p")[0].style.color = "white";
                document.getElementById("voidInfo").getElementsByTagName("span")[0].style.borderColor = "white";
            }
            document.getElementById("voidType").getElementsByTagName("span")[0].innerHTML = num_void;
        }
        if (item_type ===  "Wild") {
            num_wild--;
            if (num_wild === 0) {
                document.getElementById("wildType").style.display = "none";
            }
            if (num_wild === 1) {
                document.getElementById("wildInfo").style.color = "white";
                document.getElementById("wildInfo").getElementsByTagName("p")[0].style.color = "white";
                document.getElementById("wildInfo").getElementsByTagName("span")[0].style.borderColor = "white";
                document.getElementById("wildInfo").getElementsByTagName("p")[1].style.color = "white";
                document.getElementById("wildInfo").getElementsByTagName("span")[1].style.borderColor = "white";
            }
            if (num_wild === 3) {
                document.getElementById("wildInfo").getElementsByTagName("p")[1].style.color = "white";
                document.getElementById("wildInfo").getElementsByTagName("span")[1].style.borderColor = "white";
                document.getElementById("wildInfo").getElementsByTagName("p")[0].style.color = "red";
                document.getElementById("wildInfo").getElementsByTagName("span")[0].style.borderColor = "red";
            }
            if (num_wild >= 4) {
                document.getElementById("wildInfo").getElementsByTagName("p")[1].style.color = "red";
                document.getElementById("wildInfo").getElementsByTagName("span")[1].style.borderColor = "red";
                document.getElementById("wildInfo").getElementsByTagName("p")[0].style.color = "white";
                document.getElementById("wildInfo").getElementsByTagName("span")[0].style.borderColor = "white";
            }
            document.getElementById("wildType").getElementsByTagName("span")[0].innerHTML = num_wild;
        }
        if (item_type ===  "Yordle") {
            num_yordle--;
            if (num_yordle === 0) {
                document.getElementById("yordleType").style.display = "none";
            }
            if (num_yordle === 2) {
                document.getElementById("yordleInfo").style.color = "white";
                document.getElementById("yordleInfo").getElementsByTagName("p")[0].style.color = "white";
                document.getElementById("yordleInfo").getElementsByTagName("span")[0].style.borderColor = "white";
                document.getElementById("yordleInfo").getElementsByTagName("p")[1].style.color = "white";
                document.getElementById("yordleInfo").getElementsByTagName("span")[1].style.borderColor = "white";
            }
            if (num_yordle === 5) {
                document.getElementById("yordleInfo").getElementsByTagName("p")[1].style.color = "white";
                document.getElementById("yordleInfo").getElementsByTagName("span")[1].style.borderColor = "white";
                document.getElementById("yordleInfo").getElementsByTagName("p")[0].style.color = "red";
                document.getElementById("yordleInfo").getElementsByTagName("span")[0].style.borderColor = "red";
            }
            if (num_yordle >= 6) {
                document.getElementById("yordleInfo").getElementsByTagName("p")[1].style.color = "red";
                document.getElementById("yordleInfo").getElementsByTagName("span")[1].style.borderColor = "red";
                document.getElementById("yordleInfo").getElementsByTagName("p")[0].style.color = "white";
                document.getElementById("yordleInfo").getElementsByTagName("span")[0].style.borderColor = "white";
            }
            document.getElementById("yordleType").getElementsByTagName("span")[0].innerHTML = num_yordle;
        }
    });
    selected_item.appendChild(delete_item);
    document.getElementById("selected-items-list").appendChild(selected_item);

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
                champ_icon.addEventListener('click', function () {
                    document.getElementById("modal").style.display = "none";
                    document.getElementById("modal-overlay").style.display = "none";
                });
                document.getElementById("modal-list").appendChild(champ_icon);
                check_fill++;
            }
        }
    }

    fill_modal_items = () => {
        document.getElementById("modal-items").style.display = "block";
        document.getElementById("modal-overlay-items").style.display = "block";
        let i;
        if (check_fill_items === 0) {
            for (i=0; i < items_array.length; i++) {
                let item_icon = document.createElement("img");
                item_icon.src = items_array[i].item;
                let item_num = i;
                item_icon.addEventListener('click', function () {
                    add_item(item_num);
                });
                item_icon.addEventListener('click', function () {
                    document.getElementById("modal-items").style.display = "none";
                    document.getElementById("modal-overlay-items").style.display = "none";
                });
                document.getElementById("modal-list-items").appendChild(item_icon);
                check_fill_items++;
            }
        }
    }

    close_modal = () => {
        document.getElementById("modal").style.display = "none";
        document.getElementById("modal-overlay").style.display = "none";
    }

    close_modal_items = () => {
        document.getElementById("modal-items").style.display = "none";
        document.getElementById("modal-overlay-items").style.display = "none";
    }
    
    render() {

        return (
            <div>
                <div id="content-container">

                <div id="team-planner-container">

                    <h1>TFT Team Planner</h1>
                    <h2>Select Champions</h2>

                    <div id="champ-select-container">

                        <div id="selected-champion-list">
                            <button id="add-champ-button" onClick={this.fill_modal_champions}><strong>+</strong></button>
                        </div>
                        
                        <div onClick={this.close_modal} id="modal-overlay"></div>
                        <div id="modal">
                            <h1>Select a Champion</h1>
                            <div onClick={this.close_modal} id="modal-quit"><div></div><div></div></div>
                            <div id="modal-list"></div>
                        </div>
                        
                        <div id="selected-champion-type">
                            <div id="glacialType">
                                <img src={traitGlacial} alt="Glacial"></img>
                                <div><span></span> / 6</div>
                                <div id="glacialInfo">
                                    Glacials have a chance to stun for 2s on hit.<br/>
                                    <p><span id="num-of-type">2</span> 20% Chance to Stun<br/></p>
                                    <p><span id="num-of-type">4</span> 30% Chance to Stun<br/></p>
                                    <p><span id="num-of-type">6</span> 45% Chance to Stun</p>
                                </div>
                            </div>
                            <div id="rangerType">
                                <img src={traitRanger} alt="Ranger"></img>
                                <div><span></span> / 4</div>
                                <div id="rangerInfo">
                                    Rangers have a chance to double their Attack Speed on hit for the next 3s.<br/>
                                    <p><span id="num-of-type">2</span> 25% Chance to Double Attack Speed<br/></p>
                                    <p><span id="num-of-type">4</span> 65% Chance to Double Attack Speed</p>
                                </div>
                            </div>
                            <div id="assassinType">
                                <img src={traitAssassin} alt="Assassin"></img>
                                <div><span></span> / 6</div>
                                <div id="assassinInfo">
                                    Innate: Assassins leap to the farthest enemy at the start of combat and deal additional Critical Strike Damage.<br/>
                                    <p><span id="num-of-type">3</span> +125% Critical Strike Damage<br/></p>
                                    <p><span id="num-of-type">6</span> +350% Critical Strike Damage</p>
                                </div>
                            </div>
                            <div id="blademasterType">
                                <img src={traitBlademaster} alt="Blademaster"></img>
                                <div><span></span> / 6</div>
                                <div id="blademasterInfo">
                                    Blademasters have a 35% chance to strike extra times each attack.<br/>
                                    <p><span id="num-of-type">3</span> One Extra Attack<br/></p>
                                    <p><span id="num-of-type">6</span> Two Extra Attacks</p>
                                    <p><span id="num-of-type">9</span> Four Extra Attacks</p>
                                </div>
                            </div>
                            <div id="brawlerType">
                                <img src={traitBrawler} alt="Brawler"></img>
                                <div><span></span> / 4</div>
                                <div id="brawlerInfo">
                                    All Brawlers gain bonus maximum health.<br/>
                                    <p><span id="num-of-type">2</span> +300 Bonus Health<br/></p>
                                    <p><span id="num-of-type">4</span> +700 Bonus Health<br/></p>
                                    <p><span id="num-of-type">6</span> +1200 Bonus Health</p>
                                </div>
                            </div>
                            <div id="elementalistType">
                                <img src={traitElementalist} alt="Elementalist"></img>
                                <div><span></span> / 3</div>
                                <div id="elementalistInfo">
                                    Innate: Elementalists gain double mana from attacks.<br/>
                                    <p><span id="num-of-type">3</span> At the start of combat, summon a Golem with 2200 Health</p>
                                </div>
                            </div>
                            <div id="guardianType">
                                <img src={traitGuardian} alt="Guardian"></img>
                                <div><span></span> / 2</div>
                                <div id="guardianInfo">
                                    <p><span id="num-of-type">2</span> At the start of combat, all Guardians and adjacent allies gain +50 Armor. This Armor can stack. This Armor does not apply to adjacent Guardians</p>
                                </div>
                            </div>
                            <div id="gunslingerType">
                                <img src={traitGunslinger} alt="Gunslinger"></img>
                                <div><span></span> / 6</div>
                                <div id="gunslingerInfo">
                                    Gunslingers have a 50% chance to fire additional attacks on other enemies.<br/>
                                    <p><span id="num-of-type">2</span> One Additional Enemy<br/></p>
                                    <p><span id="num-of-type">4</span> Two Additional Enemeies<br/></p>
                                    <p><span id="num-of-type">6</span> Three Additional Enemeies</p>
                                </div>
                            </div>
                            <div id="knightType">
                                <img src={traitKnight} alt="Knight"></img>
                                <div><span></span> / 6</div>
                                <div id="knightInfo">
                                    Knights and their allies block damage from basic attacks.<br/>
                                    <p><span id="num-of-type">2</span> Allies Block 15 Damage<br/></p>
                                    <p><span id="num-of-type">4</span> Allies Block 30 Damage<br/></p>
                                    <p><span id="num-of-type">6</span> Allies Block 55 Damage</p>
                                </div>
                            </div>
                            <div id="shapeshifterType">
                                <img src={traitShapeshifter} alt="Shapeshifter"></img>
                                <div><span></span> / 3</div>
                                <div id="shapeshifterInfo">
                                    Shapeshifters gain Bonus Maximum Health when they transform.<br/>
                                    <p><span id="num-of-type">3</span> +60% Bonus Max Health <br/></p>
                                    <p><span id="num-of-type">3</span> +120% Bonus Max Health </p>
                                </div>
                            </div>
                            <div id="sorcererType">
                                <img src={traitSorcerer} alt="Sorcerer"></img>
                                <div><span></span> / 6</div>
                                <div id="sorcererInfo">
                                    Innate: Sorcerers gain double mana from attacking and All Allies have increased Spell Damage.<br/>
                                    <p><span id="num-of-type">3</span> +45% Spell Damage<br/></p>
                                    <p><span id="num-of-type">6</span> +100% Spell Damage</p>
                                </div>
                            </div>
                            <div id="demonType">
                                <img src={traitDemon} alt="Demon"></img>
                                <div><span></span> / 6</div>
                                <div id="demonInfo">
                                    Attacks from Demons have a chance to burn enemy's mana and deal the additional True Damage based on mana burned.<br/>
                                    <p><span id="num-of-type">2</span> 20% Chance on hit to Burn Mana<br/></p>
                                    <p><span id="num-of-type">4</span> 35% Chance on hit to Burn Mana<br/></p>
                                    <p><span id="num-of-type">6</span> 60% Chance on hit to Burn Mana</p>
                                </div>
                            </div>
                            <div id="dragonType">
                                <img src={traitDragon} alt="Dragon"></img>
                                <div><span></span> / 2</div>
                                <div id="dragonInfo">
                                    <p><span id="num-of-type">2</span> Dragons gain 83% Magic Damage Immunity</p>
                                </div>
                            </div>
                            <div id="exileType">
                                <img src={traitExile} alt="Exile"></img>
                                <div><span></span> / 1</div>
                                <div id="exileInfo">
                                    <p><span id="num-of-type">1</span> If an Exile has no adjacent allies at the start of combat, they gain a shield equal to 100% of their Max Health</p>
                                </div>
                            </div>
                            <div id="imperialType">
                                <img src={traitImperial} alt="Imperial"></img>
                                <div><span></span> / 4</div>
                                <div id="imperialInfo">
                                    Imperials deal Double Damage.<br/>
                                    <p><span id="num-of-type">2</span> One Random Imperial<br/></p>
                                    <p><span id="num-of-type">4</span> All Imperials</p>
                                </div>
                            </div>
                            <div id="nobleType">
                                <img src={traitNoble} alt="Noble"></img>
                                <div><span></span> / 6</div>
                                <div id="nobleInfo">
                                    Nobles gain +60 Armor & Magic Resist and Heal 35 Health per attack.<br/>
                                    <p><span id="num-of-type">3</span> One Random Ally<br/></p>
                                    <p><span id="num-of-type">6</span> Ally Allies</p>
                                </div>
                            </div>
                            <div id="ninjaType">
                                <img src={traitNinja} alt="Ninja"></img>
                                <div><span></span> / 4</div>
                                <div id="ninjaInfo">
                                    The Ninja Trait is only active when you have exactly 1 or 4 Ninjas.<br/>
                                    <p><span id="num-of-type">1</span> The Ninja gains +40 Attack Damage & Ability Power<br/></p>
                                    <p><span id="num-of-type">4</span> All Ninjas gain +60 Attack Damage & Ability Power</p>
                                </div>
                            </div>
                            <div id="phantomType">
                                <img src={traitPhantom} alt="Phantom"></img>
                                <div><span></span> / 2</div>
                                <div id="phantomInfo">
                                    <p><span id="num-of-type">2</span> Curse a random enemy at the start of combat, their Health is reduced to 100</p>
                                </div>
                            </div>
                            <div id="pirateType">
                                <img src={traitPirate} alt="Pirate"></img>
                                <div><span></span> / 3</div>
                                <div id="pirateInfo">
                                    <p><span id="num-of-type">3</span> Earn up to 4 additional Gold after combat against another player. Average 1.75 Gold.</p>
                                </div>
                            </div>
                            <div id="robotType">
                                <img src={traitRobot} alt="Robot"></img>
                                <div><span></span> / 1</div>
                                <div id="robotInfo">
                                    <p><span id="num-of-type">1</span> Robots start combat at full mana</p>
                                </div>
                            </div>
                            <div id="voidType">
                                <img src={traitVoid} alt="Void"></img>
                                <div><span></span> / 3</div>
                                <div id="voidInfo">
                                    <p><span id="num-of-type">3</span> Void units now deal True Damage</p>
                                </div>
                            </div>
                            <div id="wildType">
                                <img src={traitWild} alt="Wild"></img>
                                <div><span></span> / 4</div>
                                <div id="wildInfo">
                                    Attacks generate stacks of Fury (stacks up to 5 times). Each stack of fury gives +10% Attack Speed.<br/>
                                    <p><span id="num-of-type">2</span> Wild Allies Only<br/></p>
                                    <p><span id="num-of-type">4</span> All Allies</p>
                                </div>
                            </div>
                            <div id="yordleType">
                                <img src={traitYordle} alt="Yordle"></img>
                                <div><span></span> / 6</div>
                                <div id="yordleInfo">
                                    Attacks against Ally Yordles have a chance to miss.<br/>
                                    <p><span id="num-of-type">3</span> 35% Chance to Miss<br/></p>
                                    <p><span id="num-of-type">6</span> 55% Chance to Miss</p>
                                </div>
                            </div>
                        </div>                      
                    
                    </div>

                </div>
                <br/>
                <div id="select-item-container">

                    <h2>Select Items</h2>
                    <div id="selected-items-list">
                        <button onClick={this.fill_modal_items} id="add-champ-button"><strong>+</strong></button>
                    </div>
                    <div onClick={this.close_modal_items} id="modal-overlay-items"></div>
                        
                    <div id="modal-items">
                        <h1>Select an Item</h1>
                        <div onClick={this.close_modal_items} id="modal-quit-items"><div></div><div></div></div>
                        <div id="modal-list-items"></div>
                    </div>

                </div>

                <div id="item-container">
                 
                    <h1>Items</h1>
                    <div id="items">
                        <div id="item-row">
                            <div class="border-item"><img alt="TFT"></img></div>
                            <div class="border-item"><img src={itemNLR}></img></div>
                            <div class="border-item"><img src={itemBF}></img></div>
                            <div class="border-item"><img src={itemBow}></img></div>
                            <div class="border-item"><img src={itemTear}></img></div>
                            <div class="border-item"><img src={itemBelt}></img></div>
                            <div class="border-item"><img src={itemChain}></img></div>
                            <div class="border-item"><img src={itemMR}></img></div>
                            <div class="border-item"><img alt="spat"></img></div>
                        </div>
                        <div id="item-row">
                            <div class="border-item"><img src={itemNLR}></img></div>
                            <div><img src={itemRabadons}></img></div>
                            <div><img src={itemGunblade}></img></div>
                            <div><img src={itemRageblade}></img></div>
                            <div><img src={itemEcho}></img></div>
                            <div><img src={itemMorello}></img></div>
                            <div><img src={itemLocket}></img></div>
                            <div><img alt="ionic"></img></div>
                            <div><img src={itemSorcerer}></img></div>
                        </div>
                        <div id="item-row">
                            <div class="border-item"><img src={itemBF}></img></div>
                            <div><img src={itemGunblade}></img></div>
                            <div><img src={itemIE}></img></div>
                            <div><img src={itemDivine}></img></div>
                            <div><img src={itemShojin}></img></div>
                            <div><img src={itemZeke}></img></div>
                            <div><img src={itemGA}></img></div>
                            <div><img src={itemBT}></img></div>
                            <div><img src={itemGhostblade}></img></div>
                        </div>
                        <div id="item-row">
                            <div class="border-item"><img src={itemBow}></img></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <div id="item-row">
                            <div class="border-item"><img src={itemTear}></img></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <div id="item-row">
                            <div class="border-item"><img src={itemBelt}></img></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <div id="item-row">
                            <div class="border-item"><img src={itemChain}></img></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <div id="item-row">
                            <div class="border-item"><img src={itemMR}></img></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <div id="item-row">
                            <div class="border-item"><img src={itemNLR}></img></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
        
                </div>
                        
                </div>
            </div>
        );
    }
}

let champion_array = [{name: "Aatrox", type: "Demon", type2: "Blademaster", type3: "null"}, {name: "Ahri", type: "Wild", type2: "Sorcerer", type3: "null"}, {name: "Akali", type: "Ninja", type2: "Assassin", type3: "null"}, {name: "Anivia", type: "Glacial", type2: "Elementalist", type3: "null"}, {name: "Ashe", type: "Glacial", type2: "Ranger", type3: "null"}, {name: "AurelionSol", type: "Dragon", type2: "Sorcerer", type3: "null"}, {name: "Blitzcrank", type: "Robot", type2: "Brawler", type3: "null"}, {name: "Brand", type: "Demon", type2: "Elementalist", type3: "null"}, {name: "Braum", type: "Glacial", type2: "Guardian", type3: "null"}, {name: "Chogath", type: "Void", type2: "Brawler", type3: "null"}, {name: "Darius", type: "Imperial", type2: "Knight", type3: "null"}, {name: "Draven", type: "Imperial", type2: "Blademaster", type3: "null"}, {name: "Elise", type: "Demon", type2: "Shapeshifter", type3: "null"}, {name: "Evelynn", type: "Demon", type2: "Assassin", type3: "null"}, {name: "Fiora", type: "Noble", type2: "Blademaster", type3: "null"}, {name: "Gangplank", type: "Pirate", type2: "Gunslinger", type3: "Blademaster"}, {name: "Garen", type: "Noble", type2: "Knight", type3: "null"}, {name: "Gnar", type: "Wild", type2: "Yordle", type3: "Shapeshifter"}, {name: "Graves", type: "Pirate", type2: "Gunslinger", type3: "null"}, {name: "Karthus", type: "Phantom", type2: "Sorcerer", type3: "null"}, {name: "Kassadin", type: "Void", type2: "Sorcerer", type3: "null"}, {name: "Katarina", type: "Imperial", type2: "Assassin", type3: "null"}, {name: "Kayle", type: "Noble", type2: "Knight", type3: "null"}, {name: "Kennen", type: "Ninja", type2: "Yordle", type3: "Elementalist"}, {name: "Khazix", type: "Void", type2: "Assassin", type3: "null"}, {name: "Kindred", type: "Phantom", type2: "Ranger", type3: "null"}, {name: "Leona", type: "Noble", type2: "Guardian", type3: "null"}, {name: "Lissandra", type: "Glacial", type2: "Elementalist", type3: "null"}, {name: "Lucian", type: "Noble", type2: "Gunslinger", type3: "null"}, {name: "Lulu", type: "Yordle", type2: "Sorcerer", type3: "null"}, {name: "MissFortune", type: "Pirate", type2: "Gunslinger", type3: "null"}, {name: "Mordekaiser", type: "Phantom", type2: "Knight", type3: "null"}, {name: "Morgana", type: "Demon", type2: "Sorcerer", type3: "null"}, {name: "Nidalee", type: "Wild", type2: "Shapeshifter", type3: "null"}, {name: "Poppy", type: "Yordle", type2: "Knight", type3: "null"}, {name: "Pyke", type: "Pirate", type2: "Assassin", type3: "null"}, {name: "RekSai", type: "Void", type2: "Brawler", type3: "null"}, {name: "Rengar", type: "Wild", type2: "Assassin", type3: "null"}, {name: "Sejuani", type: "Glacial", type2: "Knight", type3: "null"}, {name: "Shen", type: "Ninja", type2: "Blademaster", type3: "null"}, {name: "Shyvana", type: "Dragon", type2: "Shapeshifter", type3: "null"}, {name: "Swain", type: "Imperial", type2: "Demon", type3: "Shapeshifter"}, {name: "Tristana", type: "Yordle", type2: "Gunslinger", type3: "null"}, {name: "TwistedFate", type: "Pirate", type2: "Sorcerer", type3: "null"}, {name: "Varus", type: "Demon", type2: "Ranger", type3: "null"}, {name: "Vayne", type: "Noble", type2: "Ranger", type3: "null"}, {name: "Veigar", type: "Yordle", type2: "Sorcerer", type3: "null"}, {name: "Volibear", type: "Glacial", type2: "Brawler", type3: "null"}, {name: "Warwick", type: "Wild", type2: "Brawler", type3: "null"}, {name: "Yasuo", type: "Exile", type2: "Blademaster", type3: "null"}, {name: "Zed", type: "Ninja", type2: "Assassin", type3: "null"},]

function open_team_planner() {
    ReactDOM.render(<TeamPlanner />, document.getElementById("root"));
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
