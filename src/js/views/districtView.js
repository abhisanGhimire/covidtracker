import { elements } from './base';
export const sliceList = ((list, page, perPage = 10) => {
    const start = (page - 1) * perPage;
    const end = page * perPage;
    let slicedlist = list.slice(start, end);
    renderList(slicedlist);
    //render buttons according to page 
    renderButtons(page, list.length, perPage);


});
export const clearDistrictResult = () => {
    elements.districtList.innerHTML = '';

};
const renderList = (keyarray) => {

    keyarray.forEach((el) => {
        if (el == "Unknown") {
            var markUp = `
            <li class="list-group-district list-group-item" data-goto=${el}>${"no data available"}</li>`

        } else {
            if (el.includes(" ")) {
                //var el1 = el.replace(" ", "-"); removes only one white space
               var el1=el.replace(/\s+/g,"-");//removes all the white spaces
                var markUp = `
               <li class="list-group-district list-group-item" data-goto=${el1}>${el1}</li>`
            } else {
                var markUp = `
                <li class="list-group-district list-group-item" data-goto=${el}>${el}</li>`
            }

        }

        elements.districtList.insertAdjacentHTML("beforeend", markUp);
    })
};
const renderButtons = (page, numResults, resPerPage) => {
    const pages = Math.ceil(numResults / resPerPage);

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

    elements.districtList.insertAdjacentHTML('beforeend', button);
};
const createButton = (page, type) => `

<div class="d-flex justify-content-around">
<button class="btn btn-info rounded-pill results__btn--${type}" data-goto=${type === 'prev' ? page - 1 : page + 1}>
<span>Page ${type === 'prev' ? page - 1 : page + 1}</span>

</button>  
                
</button>
   
`;