
import { getData } from './models/stateModel';
import { clearResults, limitList ,statesIN} from './views/stateView';
import { elements } from './views/base'
import { stateClass } from './models/districtList';
import { sliceList, clearDistrictResult } from './views/districtView';
import { Districtinfo } from './models/districtModel';
import { renderDistrictInfo } from './views/districtModelView';
const state = {
    //contains the state data
}
let districtArrayexposed;
//implementing the hash change events
window.addEventListener("hashchange", even => {
    //find the hash code
    let hash = window.location.hash;

    let newHash = hash.replace("#", "");

    console.log(newHash);
    let fullnameIndex=state.stateArray.indexOf(newHash);
    let fullName=statesIN[fullnameIndex];
    console.log("fullname is ",fullName);
    state.hash = newHash;
    elements.stateNumberstext.textContent = `state summary for ${fullName} - ${newHash}`;
    elements.districtList.innerHTML = "";
    // create a class and pass the hash ..add the states obj to the global state...
    let stateObj = new stateClass(newHash);
    state.stateObj = stateObj;
    console.log(state.stateObj, state);
    let districtData = state.finalobjdata.data[`${newHash}`]["districts"];
    let totalStateData = state.finalobjdata.data[`${newHash}`]["total"];
    elements.confirmedState.textContent = `confirmed: ${totalStateData.confirmed}`;
    elements.deceasedState.textContent = `deceased: ${totalStateData.deceased}`
    elements.recoveredState.textContent = `recovered: ${totalStateData.recovered}`
    console.log(totalStateData);
    console.log(districtData);
    let districtArray = state.stateObj.getInfo(districtData);
    console.log(districtArray, '............', state);
    clearDistrictResult();
    // limitListDistrict(districtArray,goToPage);
    sliceList(districtArray, 1);
    window.exposedArray = districtArrayexposed;
    // state.stateObj.renderDistricts(districtArray);
    //create a class and pass districtdata to its method to render the UI
});

// add event listeners for the buttons 
elements.stateList.addEventListener('click', e => {
    const btn = e.target.closest('.btn-outline-primary');
    if (btn) {
        const goToPage = parseInt(btn.dataset.goto, 10);
        clearResults();
        limitList(state.stateArray, goToPage);
    }
});
elements.districtList.addEventListener('click', e => {

    const btn = e.target.closest('.btn-info');

    if (btn) {
        const goToPage = parseInt(btn.dataset.goto, 10);
        clearDistrictResult();
        sliceList(state.stateObj.districtArray, goToPage);
    }

    const btun = e.target.closest('.list-group-district');
    console.log(btun, "btun");
    console.log(btn, "btn");
    if (btun) {
        console.log("dataset", btun.dataset.goto);
        const districtName = btun.dataset.goto;
        let districtName1 = districtName.replace(/-/g, ' ');
        console.log("distrinctname1 is", districtName1);
        state.Districtinfo = new Districtinfo(districtName1);
        elements.disttext.textContent = `district info :- ${districtName1}`;

        state.Districtinfo.getDistrictData(state.finalobjdata.data[`${state.hash}`]["districts"][districtName1]);
        renderDistrictInfo(state.Districtinfo);
        console.log("__________", state.finalobjdata.data[`${state.hash}`]["districts"][districtName1]);
        console.log("districtname", state);

    }
   
    
});


// write a controller function 
const controllerfxn = async () => {
    // gets the data from the api and stroes the results to the list ...
    let gotData = await getData();
    // add  it to the state
    state.stateArray = gotData[0];
    state.finalobjdata = gotData[1];
    console.log(state.finalobjdata);
    //clear  ui and render the array to the list UI

    limitList(state.stateArray, 1);
    //renderList(state.stateArray);

}
controllerfxn();
//write a hashchange event handler


//write fxn to render to list


//https://api.rootnet.in/covid19-in/stats/latest