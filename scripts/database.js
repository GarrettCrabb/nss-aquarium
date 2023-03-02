/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */
const database = {
    fish: [
        {
            id: 1,
            image: "images/dwarfPufferFish.jpg",
            species: "Dwarf Puffer Fish",
            name: "Bart",
            food: "Brine Shrimp",
            length: 1,
            locationHarvested: "India"
        },
        {
            id: 2,
            image: "images/redspottedHawkfish.jpg",
            species: "Redspotted Hawkfish",
            name: "Brad",
            food: "Small Crustaceans",
            length: 3.5,
            locationHarvested: "Bonair"
        },
        {
            id: 3,
            image: "images/bandedButterflyfish.jpg",
            species: "Banded Butterflyfish",
            name: "Homer",
            food: "Sea Anemones",
            length: 4,
            locationHarvested: "Florida",
        },
        {
            id: 4,
            image: "images/stoplightParrotfish.jpg",
            species: "Stoplight Parrotfish",
            name: "Marge",
            food: "Algae",
            length: 10,
            locationHarvested: "Curacao",
        },
        {
            id: 5,
            image: "images/blueTang.jpg",
            species: "Blue Tang",
            name: "Dory",
            food: "Algae",
            length: 7,
            locationHarvested: "Florida",
        },
        {
            id: 6,
            image: "images/longsnoutSeahorse.jpg",
            species: "Longsnout Seahorse",
            name: "Sheldon",
            food: "Small Crustaceans",
            length: 3.5,
            locationHarvested: "Aruba",
        },
    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}