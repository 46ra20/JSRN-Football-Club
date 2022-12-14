function getName(plyerName){
    const plyerNameSelect = plyerName.querySelector('h2').innerHTML;
    const plyerListItem = document.getElementById('plyerList');
    const plyerInList = plyerListItem.querySelectorAll('li');
    if(plyerInList.length < 5){
        const makeItem = document.createElement('li');
        makeItem.setAttribute('class', 'py-1 font-normal');
        makeItem.innerHTML = plyerNameSelect;
        plyerListItem.append(makeItem);

        const getButton = plyerName.querySelector('button')
        getButton.setAttribute("class", "text-white block my-2 mx-4 bg-blue-300 py-2 font-semibold");
        getButton.disabled = true;
    }
    else{
        alert('Sorry, You can select only five person');
    }
}



document.getElementById('allPlyer').addEventListener('click', function(event){
    const selectButton = event.target.innerHTML;
    if (selectButton.toLowerCase() === 'select'){
        const parentItem = event.target.parentNode;
        getName(parentItem);
    }
})

function fieldValidation(fieldNumber){
    const makeNumber = parseFloat(fieldNumber);
    console.log(makeNumber);
    console.log(isNaN(fieldNumber));
    if(makeNumber >= 0 && (isNaN(fieldNumber) === false)){
        return makeNumber;
    }
    else{
        alert('Enter a valid number');
    }
}

let totalCost = 0;

document.getElementById('perPlyerButton').addEventListener('click', function(){
    const perPlyer = document.getElementById('perPlyer').value;
    const perPlyerConst = perPlyer;
    const plyerList = document.getElementById('plyerList');
    const countPlyer = plyerList.querySelectorAll('li').length;
    const plyerCost = perPlyerConst * countPlyer;
    if(fieldValidation(perPlyerConst)){
        document.getElementById('totalPlyerCost').innerHTML = plyerCost;
        totalCost = plyerCost;
    }
})

document.getElementById('calculateTotal').addEventListener('click', ()=>{
    const managerCost = document.getElementById('manager').value;
    const coachCost = document.getElementById('coach').value;
    let finalCalculation = totalCost + fieldValidation(managerCost) + fieldValidation(coachCost);
    document.getElementById('totalCost').innerHTML = finalCalculation;
})