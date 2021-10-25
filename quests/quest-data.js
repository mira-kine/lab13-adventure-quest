// consts Shibuya, Asakusa, Tokyo Fish Market, Kichijoji, Ueno
// id, title, map location, image, description, choices, happy meter: , budget left:
const shibuya = {
    id: 'shibuya',
    title: 'Welcome to Shibuya',
    // map: {},
    image: 'shibuya.jpg',
    description: `
        You get off the train station and immediately you are pushed forth by a force of polite people. Before you know, you see the Hachiko dog statue and a crossing of what looks like thousands of people waiting. You think, "how can this many people be quiet at the same time" when the light turns green, and a sudden shuffling of feet take you towards the center of the intersection. Are you going left? right? straight? Who knows.
    `,
    choices: [{
        id: 'ramen',
        description: 'go eat ramen',
        result: `
            You go eat ramen at a small hole in the wall ramen shop. You put some cash in turn for a ticket, which you give to the nice old lady at the door. You hear the equally kind looking old man go "irashaimase!" as they invite you in the door. You receive a piping hot bowl of ramen in front of you. It only cost 500 yen, and you gained 5 happy points. Simple happiness.
        `,
        yen: -500,
        happymeter: 5,
    }, {
        id: 'shopping',
        description: 'go shopping',
        result: `
            You are inspired by Japanese fashion around you. You pop into random shops and eventually find one named Muji. It has everything and nothing, unnecessary yet necessary, minimalistic and clean. You buy a lot of things, you can't help yourself. It costs 2000 yen, and you gained 15 happy points.
        `,
        yen: -2000,
        happymeter: 15,
    }, {
        id: 'nature',
        description: 'look for nature',
        result: `
            You want some trees, some air if you will. You look around you, walking for miles, but all you see is a concrete jungle ahead of you. You make some right turns, some left turns, and you end up in a few alleys. That's not right. You try to find the train station again, but you realize that you are lost. There is no nature here. You have to ask a stranger for directions using as much Japanese as you can. This cost you no yen. But it cost you some happy points (-15).
        `,
        yen: 0,
        happymeter: -15,
    }]
};

const asakusa = {
    id: 'Asakusa',
    title: 'Welcome to Asakusa',
    // map: {},
    image: 'asakusa.jpg',
    // description: ,
    // choices: [{
        //id
        //description
        //result
        //money spent
        // happy meter
    //}]
};

const tsukiji = {
    id: 'tsukiji',
    title: 'Welcome to Tsukiji',
    // map: {},
    image: 'tsukiji.jpg',
    // description: ,
    // choices: [{
        //id
        //description
        //result
        // money spent
        // happy meter
    //}]
};

const kichijoji = {
    id: 'kichijoji',
    title: 'Welcome to Kichijoji',
    // map: {},
    image: 'kichijoji.jpg',
    // description: ,
    // choices: [{
        //id
        //description
        //result
        // money spent
        // happy meter
    //}]
};

const ueno = {
    id: 'ueno',
    title: 'Welcome to Ueno',
    // map: {},
    image: 'ueno.jpg'
    // description: ,
    // choices: [{
        //id
        //description
        //result
        //happy meter
        // money spent
    //}]
};

const harajuku = {
    id: 'harajuku',
    title: 'Welcome to Harajuku',
    // map: {},
    image: 'harajuku.jpg',
    // description: ,
    // choices: [{
        //id
        //description
        //result
        //happy meter
        //money spent
    //}]
};

