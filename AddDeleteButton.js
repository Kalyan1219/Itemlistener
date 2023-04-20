var ItemList=document.getElementById('items')
var Form=document.getElementById('addForm')
Form.addEventListener('submit',AddIntoList);
ItemList.addEventListener('click',RemoveItem)
function AddIntoList(Data){
    Data.preventDefault();
    
    //GET NEW ELEMENT
    var NewData=document.getElementById('item').value;

    //CREATING NEW LIST
    var li=document.createElement('li');

    //CREAT DELETE BUTTON
    var DelButton=document.createElement('button')

    //ADDING CLASS TO BUTTON
    DelButton.className='btn btn-danger btn-sm float-right delete'

    // ADD CLASS NAME TO THE LIST 
    li.className='list-group-item'
    

    //APPENDING THE DATA
    li.appendChild(document.createTextNode(NewData))

    //APPENDING DELETE BUTTON
    DelButton.appendChild(document.createTextNode('X'))

    //APPENDING DEL BUTTON
    li.appendChild(DelButton)

    ItemList.appendChild(li)

}

function RemoveItem(item){
    if(item.target.classList.contains('delete')){
        if(confirm("Are you Sure?")){
            var DelItem=item.target.parentElement;
            ItemList.removeChild(DelItem)
        }
    }
}
