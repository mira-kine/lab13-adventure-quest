// consts Shibuya, Asakusa, Tsukiji, Kichijoji, Ueno, harajuku
// id, title, map location, image, description, choices, happy meter: , budget left:
const shibuya = {
    id: 'shibuya',
    title: 'Welcome to Shibuya',
    map: {
        top: '90%',
        left: '45%'
    },
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
    map: {
        top: '40%',
        left: '15%'
    },
    image: 'asakusa.jpg',
    description: `
        There's a big red temple front in front of you that says "kaminarimon" which means lightning gate. You see people wearing traditional Japanese clothing everywhere, but you also see people speaking English. You decide to walk through the red gate...
    `,
    choices: [{
        id: 'ride',
        description: 'ride a jinrikisha',
        result: `
            Your legs are tired from having walked all day. You see a man with a towel over his neck, sitting by a big carriage looking vehicle. He calls you over, saying "taxi?" and your feet give thanks. This costs you 2000 yen, and you gain 25 happy points. You get to support his traditional work while also resting your feet, and you get a beautiful tour of Asakusa.
        `,
        yen: -2000,
        happymeter: 25
    }, {
        id: 'eat monja',
        description: 'eat monjayaki',
        result: `
            You want another snack, and you remember you've heard about monjayaki, where you take batter filled with cabbage and bacon and cook it yourself in front of you. It's a fun, cheap traditional food. It's messy though, and you get some batter on your favorite shirt. It cost you 300 yen, and you lose 5 happy points.
        `,
        yen: -300,
        happymeter: -5
    }, {
        id: 'leave',
        description: 'leave immediately',
        result: `
            You look around. It's not your vibe. You decide to leave. You save yen (I guess), but you miss out on a great experience. Costs you 0 yen, and you lose 10 happy points.
        `
    }]
};

const tsukiji = {
    id: 'tsukiji',
    title: 'Welcome to Tsukiji',
    map: {
        top: '85%',
        left: '85%'
    },
    image: 'tsukiji.jpg',
    description: `
        It's Tsukiji Fish Market. You hear people yelling "Fish for sale! Oiiii fish for sale! Just caught this morning!" Food stands are lined up in rows, everything looks so good. You feel the history in the air, years of fishermen supporting their families through auctions, restaurant business, and selling traditional items. Let's go.
    `,
    choices: [{
        id: 'alley',
        description: 'enter random alley',
        result: `
            You enter a random alley way. It takes you into yet another section of fish sellers and food stands. A nice old lady smiles and offers you samples. As you try the sample, she comes to you with yet another sample. Before you know it, you are filled up with different samples, all for free: types of buns, sushi, traditional desserts and rice crackers. This costs you 0yen, and 20 happy points.
        `,
        yen: 0,
        happymeter: 20
    }, {
        id: 'yakuza',
        description: 'run into yakuza',
        result: `
            You bump into a large figure. He slowly turns around. He's got a towl wrapped around his head, scissors in one hand, roasted scallop in another. You've heard about this, you've heard about how yakuza have worked with some tsukiji fish market staff, how they have infiltrated the area. You're terrified. This is not the way you have meant to die. He raises his scissors. You think "Goodbye..."

            You smell something good. You open your eyes. Is this heaven? You look down and realize that he is offering you a grilled scallop. It costs you 500yen and gains you 30 happy points. "Until next time..."
        `,
        yen: 500,
        happymeter: 30
    }, {
        id: 'leave fish',
        description: 'leave tsukiji immediately, no fish for me',
        result: `
            You don't like fish, so you leave immediately. You miss out on trying out traditional desserts, ramen, udon, and meeting kind Japanese elders and supporting their small businesses. As you are leaving, you trip and drop 1000 yen. You also lose 10 happy points. Try new things next time!
        `,
        yen: 1000,
        happymeter: -10
    }]
};

const quests = [
    shibuya,
    asakusa,
    tsukiji,
];

export default quests;

// const kichijoji = {
//     id: 'kichijoji',
//     title: 'Welcome to Kichijoji',
//     // map: {},
//     image: 'kichijoji.jpg',
//     // description: ,
//     // choices: [{
//         //id
//         //description
//         //result
//         // money spent
//         // happy meter
//     //}]
// };

// const ueno = {
//     id: 'ueno',
//     title: 'Welcome to Ueno',
//     // map: {},
//     image: 'ueno.jpg'
//     // description: ,
//     // choices: [{
//         //id
//         //description
//         //result
//         //happy meter
//         // money spent
//     //}]
// };

// const harajuku = {
//     id: 'harajuku',
//     title: 'Welcome to Harajuku',
//     // map: {},
//     image: 'harajuku.jpg',
//     // description: ,
//     // choices: [{
//         //id
//         //description
//         //result
//         //happy meter
//         //money spent
//     //}]
// };

