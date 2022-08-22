function getName(plyerName){
    const plyerNameSelect = plyerName.querySelector('h2').innerHTML;
    const plyerListItem = document.getElementById('plyerList');
    const plyerInList = plyerListItem.querySelectorAll('li');
    if(plyerInList.length < 5){
        const makeItem = document.createElement('li');
        makeItem.innerHTML = plyerNameSelect;
        plyerListItem.append(makeItem);

        const getButton = plyerName.querySelector('button')
        console.log(getButton.setAttribute('disabled',true));
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


console.log();