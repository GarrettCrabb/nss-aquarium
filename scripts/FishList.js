// Import the function that returns a copy of the fish array
import {getFish} from './database.js'

export const FishList = () => {
    // Invoke the function that you imported from the database module
    const fishes = getFish()

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="fishList">'

    // Create HTNL representations of each fish here
    for (const fish of fishes) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="fishCard">
            <div><img  class="fishImage image--card" src="${fish.image}" /></div>
            <div class="fishName">Name: ${fish.name}</div>
            <div class="fishSpecies"> Species: ${fish.species}</div>
            <div class="fishLength">Length(in inches): ${fish.length}</div>
            <div class="fishLocation">Location Harvested: ${fish.locationHarvested}</div>
            <div class="fishDiet">Diet: ${fish.food}</div>
        </section>
`
    }
    htmlString += `</article>`

    return htmlString
}