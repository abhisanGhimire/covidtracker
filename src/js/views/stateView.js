import { elements } from './base'
export const statesIN = ["Andaman & nicobar", "Andhra pradesh", "Arunanchal pradesh", "Assam", "Bihar", "Chandigarh", "chhatisgarh", "delhi", "dadra & nagar", "goa", "gujrat", "himanchal pradesh", "haryana", "jharkhand", "j & K", "karnataka", "kerela", "ladakh", "maharastra", "meghalaya", "manipur", "madhya pradesh", "mizoram", "nagaland", "orrisa", "punjab", "pondicherry", "rajasthan", "sikkim", "telegana", "tamil nadu", "tripura", "TT", "uttar pradesh", "uttrakhand", "west bengal"];
//make a fxn to limit the number of list elements (pagination)
export const limitList = ((list, page, perPage = 10) => {
   
    const start = (page - 1) * perPage;
    const end = page * perPage;
    let slicedlist = list.slice(start, end);
    let slicedList2=statesIN.slice(start,end);
    renderList(slicedlist,slicedList2);
    //render buttons according to page 
    renderButtons(page);


});
export const clearResults = () => {
    elements.stateList.innerHTML = '';

};

const renderList = (keyarray,array2) => {

    keyarray.forEach((el, index) => {
        var markUp = `
    <a href="#${el}" class=" statename list-group-item list-group-item-action" data-goto=${array2[index]}>${array2[index]}</a>`
        elements.stateList.insertAdjacentHTML("beforeend", markUp);
        
    })
};

const renderButtons = (page, pages = 4) => {
    let button;
    if (page === 1 && pages > 1) {
        // Only button to go to next page
        button = createButton(page, 'next');
    } else if (page < pages) {
        // Both buttons
        button = `
            ${createButton(page, 'prev')}
            ${createButton(page, 'next')}
        `;
    } else if (page === pages && pages > 1) {
        // Only button to go to prev page
        button = createButton(page, 'prev');
    }

    elements.stateList.insertAdjacentHTML('beforeend', button);
};

const createButton = (page, type) => `

<div class="d-flex justify-content-around">
<button class="btn btn-outline-primary rounded-pill results__btn--${type}" data-goto=${type === 'prev' ? page - 1 : page + 1}>
<span>Page ${type === 'prev' ? page - 1 : page + 1}</span>

</button>  
                
</button>
   
`;