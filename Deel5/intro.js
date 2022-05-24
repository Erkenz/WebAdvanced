document.getElementById('een')
    .addEventListener('click', function (){
        console.log('Een clicked');
    })

document.getElementById('twee')
    .addEventListener('click', () => {
        console.log('Twee clicked');
})


document.getElementById('drie')
    .addEventListener('click', handleClickDrie)


function handleClickDrie(){
    console.log('Drie clicked');
}