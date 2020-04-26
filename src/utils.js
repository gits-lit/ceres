import crops from "./assets/crops.json";

export const getData = (cropsArray) => {
    let carbonOutput;
    let waterUsage;
    let poundsProduced;
    
    for (let i = 0; i < cropsArray.length; i++) {
        let veg = cropsArray[0];
        let numOfVeg = cropsArray[1];
        let squareFt = cropsArray[2];
        carbonOutput += (crops[veg].carbon-footprint * numOfVeg);
        waterUsage += (crops[veg].water-footprint * squareFt);
        poundsProduced += (crops[veg].product-total * squareFt);
    }
    const score = Math.floor((poundsProduced - (carbonOutput / 26.0775207) - (waterUsage / 3.7272912)) / 3  * 145);

    return new Array(Math.floor(carbonOutput), Math.floor(waterUsage), Math.floor(poundsProduced), score)
    
}

export const getAdvice = (cropsArray) => {
    let bad_companion = [null, null, null];
    let good_companion = [null, null, null];

    let vegArr = [];
    for (let i = 0; i < cropsArray.length; i++){
        if (!vegArr.includes(cropsArray[i]))
            vegArr.push(cropsArray[i]);
    }

    for (let i = 0; i < vegArr.length - 1; i++){
            let veg = vegArr[i];
        for(let c = i; c < vegArr.length; c++){
            let veg2 = vegArr[c];
            if (bad_companion[0] != null && crops[veg2].bad-companionship.includes(veg1))
                        bad_companion = [veg, veg2, crops[veg].bad-companionship-tip];

            else if (good_companion[0] != null && crops[veg2].good-companionship.includes(veg1)){
                    good_companion = [veg, veg2, crops[veg].good-companionship-tip];
                }
            }

        if(bad_companion[0] != null && good_companion[0] != null)
            break;
    }
    if (bad_companion[0] !== null) {
        return bad_companion;
    } else if (good_compantion[0] !== null ){
        return good_companion;
    }
    return null;
}