let ul = document.getElementById('list-container')
let addBtn = document.getElementById('btn')
let input = document.getElementById('input-box')

addBtn.addEventListener('click', addItem)
function addItem() {
    //if input is empty
    if (input.value == '') {
        alert('You have not typed anything')


    } else{
        let li = document.createElement('li')
        li.style.listStyle = 'none'

        //dreating and appending checkbox to li
        let checkbox = document.createElement('input')
        checkbox.type = 'checkbox'
        checkbox.id = 'checkbox'
        checkbox.style.marginRight = '1.5em'

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
        let liText = document.createTextNode(input.value)
        li.appendChild(liText)

        //creating and appending delete button
        let delBtn = document.createElement('button')
        delBtn.id = 'delBtn'
        delBtn.className = 'button delete'
        delBtn.style.padding = '.2em'
        delBtn.style.backgroundColor = 'red'
        delBtn.style.color = 'white'
        // delBtn.style.cssFloat = 'inline-end'
        delBtn.style.borderRadius = '3px'
        delBtn.style.border = 'none'
        delBtn.style.outline = 'none'
        delBtn.style.marginLeft = '8em'
        li.appendChild(delBtn)

        //delBtn text
        let delBtnTxt = document.createTextNode('X')
        delBtn.appendChild(delBtnTxt)

        ul.appendChild(li)

        //Delete item on list
        delBtn.addEventListener('click', removeItem)
        function removeItem(e) {
            if (confirm('Are you sure?')) {
                e.target.parentElement.remove()
            }
        }
    }

    input.value = ''
}

//USING PARENT ELEMENT TO DELETE BUTTON
//remove delete button
// ul.addEventListener('click', remItem)
// function remItem(e) {
//     if(e.target.classList.contains('delete')) {
//         if(confirm('Are you sure?')) {


                //WORKS TOO
//             // e.target.parentElement.remove()


//             let li = e.target.parentElement
//             ul.removeChild(li)
//         }
//     }
// }

