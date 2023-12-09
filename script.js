let myLeads = [];
const inputEl = document.querySelector("#input-el")
const saveBtnEl = document.querySelector("#input-btn");
const ulEl = document.querySelector("#ul-el");
const delBtn = document.querySelector("#delete-btn");
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
const tabBTN = document.querySelector("#tab-btn");

if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage;
    renderli(myLeads);
}

function renderli(leads){
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems += `<li><a href="${leads[i]}" target="_blank"> ${leads[i]} </a></li>`;
    }
    ulEl.innerHTML = listItems;
}

const tabs = [
    {url: "https://www.linkedin.com/in/per-harald-borgen/"}
]

tabBTN.addEventListener('click',function(){
    myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads",JSON.stringify(myLeads));
    renderli(myLeads);
})


delBtn.addEventListener('dblclick',function(){
    myLeads = [];
    localStorage.clear();
    renderli(myLeads);
});

saveBtnEl.addEventListener('click',function(){
    myLeads.push(inputEl.value);
    inputEl.value = "";
    localStorage.setItem("myLeads",JSON.stringify(myLeads));
    renderli(myLeads);
});

