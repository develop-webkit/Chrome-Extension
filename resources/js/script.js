const myLeads = [];

const inputEl = document.querySelector("#input-el")
const saveBtnEl = document.querySelector("#input-btn");

saveBtnEl.addEventListener('click',function(){
    myLeads.push("www.awesomelead.com");
    console.log(myLeads);
});
