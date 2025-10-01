let ul = document.getElementById('list-container')
let addBtn = document.getElementById('btn')
let input = document.getElementById('input-box')

addBtn.addEventListener('click', addItem)
function addItem() {
    //if input is empty
    if (input.value = '') {
        alert('You have not typed anything')


    } else{
        let li = document.createElement('li')

        //dreating and appending checkbox to li
        let checkbox = document.createElement('input')
        checkbox.type = 'checkbox'
        checkbox.id = 'checkbox'

        checkbox.addEventListener('change', toggle)
        function toggle() {
            if (this.checked) {
                li.style.textDecoration = 'line-through'
            } else{
                li.style.textDecoration = 'none'
            }
        }

        li.appendChild(checkbox)

        //appending input value to li
    }
}