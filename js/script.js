function getName(plyerName){
    const plyerNameSelect = plyerName.querySelector('h2');
    console.log(plyerNameSelect.innerHTML);

}

document.getElementById('allPlyer').addEventListener('click', function(event){
    const selectButton = event.target.innerHTML;
    if (selectButton.toLowerCase() === 'select'){
        const parentItem = event.target.parentNode;
        getName(parentItem);
    }
})