let myLeads = [];
let myTitle = [];
const inputEl = document.querySelector("#input-el");
const titleEl = document.querySelector("#title-el");
const saveBtnEl = document.querySelector("#input-btn");
const ulEl = document.querySelector("#ul-el");
const delBtn = document.querySelector("#delete-btn");
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
const titleFromlocalStorage = JSON.parse(localStorage.getItem("myTitle"));
const tabBTN = document.querySelector("#tab-btn");

if(leadsFromLocalStorage && titleFromlocalStorage){
    myLeads = leadsFromLocalStorage;
    myTitle = titleFromlocalStorage;
    renderli(myLeads,myTitle);
}

function renderli(leads,title){
    let listItems = "";
    for (let i = 0; i < leads.length; i++) {
        listItems += `<li><a href="${leads[i]}" target="_blank"> ${title[i]} </a></li>`;
    }
    ulEl.innerHTML = listItems;
}

tabBTN.addEventListener('click',function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myTitle.push(tabs[0].title);
        myLeads.push(tabs[0].url);
        localStorage.setItem("myLeads",JSON.stringify(myLeads));
        localStorage.setItem("myTitle",JSON.stringify(myTitle));
        renderli(myLeads,myTitle);
    });
});


delBtn.addEventListener('dblclick',function(){
        myLeads = [];
        myTitle = [];
        localStorage.clear();
        renderli(myLeads,myTitle);
});

saveBtnEl.addEventListener('click',function(){
    if(inputEl.value && titleEl.value){
        myLeads.push(inputEl.value);
        myTitle.push(titleEl.value);
        inputEl.value = "";
        titleEl.value = "";
        localStorage.setItem("myLeads",JSON.stringify(myLeads));
        localStorage.setItem("myTitle",JSON.stringify(myTitle));
        renderli(myLeads,myTitle);
    }
});

