import { elements } from './base';
export const renderDistrictInfo = (obj) => {
    elements.dconfirmed.textContent = `confirmed : ${obj.confirmed}`;

    if (obj.deceased == undefined) {
        elements.ddeceased.textContent = `deceased: not known`;
    } else {
        elements.ddeceased.textContent = `deceased: ${obj.deceased}`;
    }
    elements.drecovered.textContent = `recovered : ${obj.recovered}`;
    console.log("obj", obj)
}
