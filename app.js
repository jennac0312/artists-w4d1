let icecream = {
    vanilla: {
        name: "Vanilla",
        coneImage: "https://i.pinimg.com/originals/3b/b9/77/3bb977b0c5f14aa77326193d3f17f944.gif",
        description: "Blend ice cream, milk, and vanilla extract together in a blender until smooth; pour into glasses and serve.",
        shakeAvi: "https://cdn.dribbble.com/users/1831037/screenshots/5876569/_animation_hand_rig_v03_dribbble.gif",
        recipe: "Vanilla me Bad"
    },
    chocolate: {
        name: "Chocolate",
        coneImage: "https://media3.giphy.com/media/YobvCme9SjUaSpAmcA/giphy.gif?cid=6c09b952n580jnl3duoym7erimjw1ryzlph30rq6ze2me4bh&ep=v1_stickers_related&rid=giphy.gif&ct=s",
        description: "Blend ice cream, milk, and Chocolate Syrup together in a blender until smooth; pour into glasses and serve.",
        shakeAvi: "https://media.tenor.com/ZH3zQzDQNowAAAAC/milkshake-chocolate.gif",
        recipe: "Choco_Latte "
    },
    strawberry: {
        name: "Strawberry",
        coneImage: "https://i.pinimg.com/originals/ac/fe/10/acfe1072df8295c62d4ceb8ac158d334.gif",
        description: "Blend ice cream, milk, and Strawberry Syrup together in a blender until smooth; pour into glasses and serve.",
        shakeAvi: "https://media4.giphy.com/media/JQGpShbCpneim19L9Q/giphy.gif?cid=6c09b952wz9rvvx3frphb0hxepchmdirt26p6mq2ik78vw6y&ep=v1_stickers_related&rid=giphy.gif&ct=s",
        recipe: "No Berry Like tha Straw"
    }
}
//  `“Sade is offering her soul to the world. She's very unique and I think she created a vibe when you first heard her,” -Common`
let artists = {
    sade: {
        name: "Sade",
        performingImage: "https://imageio.forbes.com/specials-images/dam/imageserve/113277966/0x0.jpg?format=jpg&width=1200",
        lyrics: `He's laughing with another girl
        And playing with another heart
        Placing high stakes making hearts ache
        He's loved in seven languages
        Diamond nights and ruby lights high in the sky
        Heaven help him when he falls`,
        gif: `https://media4.giphy.com/media/HUEJnjeYtiPeg/200w.gif?cid=6c09b952wzkukkpd34yhzvv8uj58moyipvbu3g1diime36hp&ep=v1_gifs_search&rid=200w.gif&ct=g`,
        quote: `"I only make records when I feel I have something to say. I'm not interested in releasing music just for the sake of selling something. Sade is not a brand" -Sade Adu`
    },
    mariahCarey: {
        name: "Mariah Carey",
        performingImage: "https://i0.wp.com/the97.net/wp-content/uploads/2015/06/Untitled-design-1.png?fit=1024%2C512&ssl=1",
        lyrics: `Treated me kind
        Sweet destiny
        Carried me through desperation
        To the one that was waiting for me
        It took so long
        Still I believed
        Somehow, the one that I needed
        Would find me eventually`,
        gif: `https://thumbs.gfycat.com/UnrealisticUnsightlyFawn-max-1mb.gif`,
        quote: `“It's in my genes. My mother was an opera singer. I'm clearly dramatic.” -Mariah Carey`
    }, 
    adele: {
        name: "Adele",
        performingImage: "https://metro.co.uk/wp-content/uploads/2021/11/PRI_211431278-1.jpg?quality=90&strip=all",
        lyrics: `There's a fire starting in my heart
        Reaching a fever pitch, it's bringing me out the dark
        Finally I can see you crystal clear
        Go ahead and sell me out and I'll lay your ship bare`,
        gif: `https://media1.giphy.com/media/tON54JfIBqAVkohls7/giphy.gif?cid=6c09b952byilw59nj7uh112dmfcvo84z5x3savayfus67u87&ep=v1_gifs_search&rid=giphy.gif&ct=g`,
        quote: `“I don't make music for eyes. I make music for ears. My life is full of drama, and I don't have time to worry about something as petty as what I look like..” -Adele`
    },
}

// Target all of the changeable ele
let title = document.querySelector('.name')
// change innerHTML
let perfomingPic = document.querySelector('.artist')
// change SRC
let lyrics = document.querySelector('.textbox')
// change innerHTML

let quotes = document.querySelector('.smContainer')
// add Recipe txt
let gifs = document.querySelector('.description')
// add image




const changeFlavors = (flavor) =>{
    // Determine what flavor
    if(flavor === "vanilla"){
        let body = document.querySelector('body')
        body.style.backgroundColor = "lemonchiffon"
        addText(title,icecream.vanilla.name)
        addImage(icecreamPic,icecream.vanilla.coneImage)
        addText(description,icecream.vanilla.description)
        uploadImage(recipe,icecream.vanilla.shakeAvi)
        addText(shaker,icecream.vanilla.recipe)
        // ------------------------------
    }else if(flavor === "chocolate"){
        let body = document.querySelector('body')
        body.style.backgroundColor = "burlywood"
        addText(title,icecream.chocolate.name)
        addImage(icecreamPic,icecream.chocolate.coneImage)
        addText(description,icecream.chocolate.description)
        uploadImage(recipe,icecream.chocolate.shakeAvi)
        addText(shaker,icecream.chocolate.recipe)
    }else if(flavor === "strawberry"){
        let body = document.querySelector('body')
        body.style.backgroundColor = "pink"
        addText(title,icecream.strawberry.name)
        addImage(icecreamPic,icecream.strawberry.coneImage)
        addText(description,icecream.strawberry.description)
        uploadImage(recipe,icecream.strawberry.shakeAvi)
        addText(shaker,icecream.strawberry.recipe)

    }else{
        addText(title,"NeaPolitan")
    }
}


const addText =(target, text)=>{
    target.innerHTML = text
}

const addImage =(target, url)=>{
    target.setAttribute('src',url)
}
const uploadImage = (target,flav)=>{
let newImage = document.createElement('img')
newImage.setAttribute('src',flav)
newImage.setAttribute('class','lowerImage')
target.append(newImage)
}




const changeTitle = (who) => {
    if( who === "sade"){
        title.innerText = artists.sade.name.toUpperCase()
    } else if( who === 'mariah'){
        title.innerHTML = artists.mariahCarey.name.toUpperCase()
    } else if( who === 'adele'){
        title.textContent = artists.adele.name.toUpperCase()
    }
}

const changePerformingImage = (who) => {
    if( who === "sade"){
        who = artists.sade.performingImage
    } else if( who === 'mariah'){
        who = artists.mariahCarey.performingImage
    } else if( who === 'adele'){
        who = artists.adele.performingImage
    }
    console.log(who)

    perfomingPic.src = who
}

const changeLyric = (who) => {
    if( who === "sade"){
        who = artists.sade.lyrics
    } else if( who === 'mariah'){
        who = artists.mariahCarey.lyrics
    } else if( who === 'adele'){
        who = artists.adele.lyrics
    }
    lyrics.innerHTML = `<p>${who}</p>`
}

const changeGif = (who) => {
    if( who === "sade"){
        who = artists.sade.gif
    } else if( who === 'mariah'){
        who = artists.mariahCarey.gif
    } else if( who === 'adele'){
        who = artists.adele.gif
    }

    gifs.innerHTML = `<img src="${who}">`

}

const changeQuote = (who) => {
    if( who === "sade"){
        who = artists.sade.quote
    } else if( who === 'mariah'){
        who = artists.mariahCarey.quote
    } else if( who === 'adele'){
        who = artists.adele.quote
    }

    quotes.innerText = who

}

const changeAll = (who) => {
    changeTitle(who)
    changePerformingImage(who)
    changeLyric(who)
    changeGif(who)
    changeQuote(who)
}