import { elements } from '../views/base';
export class stateClass {
    constructor(id) {
        this.Stateid = id;
        //extract population
        //confirmed cases 
        //deceased and recovered cases and tested cases

    }
    getInfo(distObj) {
        //take this obj and render all the keys to the UI
        this.districtArray = Object.keys(distObj);
        return this.districtArray;
    }

    renderDistricts(distArray) {
        distArray.forEach(el => {
            let markUp = `
           <li class="  list-group-item">${el}</li>
           `;
            elements.districtList.insertAdjacentHTML("beforeend", markUp);

        });
    }
}