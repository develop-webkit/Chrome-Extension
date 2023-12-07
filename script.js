let myLeads = []

const inputEl = document.querySelector("#input-el")
const saveBtnEl = document.querySelector("#input-btn");
const ulEl = document.querySelector("#ul-el");

saveBtnEl.addEventListener('click',function(){
    myLeads = JSON.parse(myLeads);
    myLeads.push(inputEl.value);
    inputEl.value = "";
    renderLeads();
    // Save the myLeads array to localStorage 
    myLeads = JSON.stringify(myLeads)
    localStorage.setItem("Leads",myLeads);


    console.log(localStorage.getItem(myLeads));
});

function renderLeads(){
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `<li><a href="${myLeads[i]}" target="_blank"> ${myLeads[i]} </a></li>`;
    }
    ulEl.innerHTML = listItems;
}