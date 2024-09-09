//select all element
const tabs = document.querySelectorAll('.tabs');
document.querySelector(".tabs:nth-child(1)").classList.add("active");


console.log(tabs)
// looping all element
tabs.forEach((item ,index) => {

   
    //assign click event
    item.addEventListener('click', () => {




        //remove active class 
        tabs.forEach((items) => {
            items.classList.remove('active')
        })



        // to add active class.
        item.classList.add('active')



    })
})