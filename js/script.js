function getName(plyerName){
    const plyerNameSelect = plyerName.querySelector('h2').innerHTML;
    const plyerListItem = document.getElementById('plyerList');
    const plyerInList = plyerListItem.querySelectorAll('li');
    if(plyerInList.length < 5){
        const makeItem = document.createElement('li');
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


console.log();