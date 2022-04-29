const info = [
    {
        "img" : "img/pa.webp",
        "title" : "Attack on Titan The Final Season: Part II"
    },
    {
        "img" : "img/pai-1.png",
        "title" : "Shikimori's Not Just a Cutie"
    },
    {
        "img" : "img/pai-2.png",
        "title" : "Jujutsu Kaisen"
    },
    {
        "img" : "img/pai-3.png",
        "title" : "My Dress-Up Darling"
    },
    {
        "img" : "img/pai-4.png",
        "title" : "SPY x FAMILY"
    },
    {
        "img" : "img/pai-5.png",
        "title" : "Demon Slayer: Kimetsu no Yaiba"
    },
    {
        "img" : "img/pai-6.png",
        "title" : "That Time I Got Reincarnated as a Slime"
    },
]
const info1 = [
    {
        "img" : "img/pm1.png",
        "title" : "Jujutsu Kaisen"
    },
    {
        "img" : "img/pm2.png",
        "title" : "SSS-Class Revival Hunter"
    },
    {
        "img" : "img/pm3.png",
        "title" : "After All, I Became a Crow"
    },
    {
        "img" : "img/pm4.png",
        "title" : "My Daughter Is the Final Boss"
    },
    {
        "img" : "img/pm5.png",
        "title" : "Solo Leveling"
    },
    {
        "img" : "img/pm6.png",
        "title" : "I Shall Master This Family"
    },
    {
        "img" : "img/pm7.png",
        "title" : "Lout of Count’s Family"
    },
]

const info2 = [
    {
        "img" : "img/pm1.png",
        "img1" : "img/pai-5.png",
        "title" : "Jujutsu Kaisen",
        "title1" : "Demon Slayer: Kimetsu no Yaiba"
    },
    {
        "img" : "img/pm2.png",
        "img1" : "img/pm5.png",
        "title" : "SSS-Class Revival Hunter",
        "title1" : "Solo Leveling"
    },
    {
        "img" : "img/pm3.png",
        "img1" : "img/pm4.png",
        "title" : "After All, I Became a Crow",
        "title1" : "My Daughter Is the Final Boss"
    },

]

// const info2 = [
//     {
//         "anime":[
//         {
//             "img" : "img/pa.webp",
//             "title" : "Attack on Titan The Final Season: Part II"
//         },
//         {
//             "img" : "img/pa.webp",
//             "title" : "Attack on Titan The Final Season: Part II"
//         },
//         {
//             "img" : "img/pa.webp",
//             "title" : "Attack on Titan The Final Season: Part II"
//         },
//     ]
//     }
// ]

const popularAnime= document.querySelector(".popular-anime");
const popularManga= document.querySelector(".popular-manga");
const animeRec = document.querySelector(".anime-recommendation")
const mangaRec = document.querySelector(".manga-recommendation")

window.addEventListener("DOMContentLoaded", function(){
    let displayInfo = info.map(function(profile){

        return` <div class="img">
        <img src="${profile.img}" alt="">
        <div class="add-list">Add to list</div>
        <h3>${profile.title}</h3>
    </div>`
    });
    displayInfo = displayInfo.join("");
    popularAnime.innerHTML = displayInfo
})


window.addEventListener("DOMContentLoaded", function(){
    let displayInfo = info1.map(function(profile){

        return` <div class="img">
        <img src="${profile.img}" alt="">
        <div class="add-list">Add to list</div>
        <h3>${profile.title}</h3>
    </div>`
    });
    displayInfo = displayInfo.join("");
    popularManga.innerHTML = displayInfo
})

window.addEventListener("DOMContentLoaded", function(){
    let displayInfo = info2.map(function(profile){

        return` <div class="match-making">
        <div class="matching">
            <div class="match">
                <div>IF YOU LIKED...</div>
                <img src="${profile.img}" alt="">
                <h3>${profile.title}
                </h3>
                <p class="agree" id="agree-1">I agree</p>
            </div>
            <div class="match">
                <div>YOU MIGHT LIKE</div>
                <img src="${profile.img1}" alt="">
                <h3>${profile.title1}
                </h3>
                <p class="agree" id="agree-2">read reason</p>
            </div>
        </div>
        <div class="user">
            <p>added by Avinash</p>
        </div>
    </div>`
    });
    displayInfo = displayInfo.join("");
    animeRec.innerHTML = displayInfo
    mangaRec.innerHTML = displayInfo
})