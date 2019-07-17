window.onload =function() {

  //grabbing the ul element
  var ul =document.querySelector("#shopping-list ul");

  //--------------delete shopping Items------------
  //adding click event to ul element
  ul.addEventListener('click',function(e){
    if(e.target.className =="delete") {
      var li=e.target.parentElement;
      li.parentElement.removeChild(li);
    }
  })

  //------------adding item to the shopping list ------
  //grabbing addform parentElement
  var addForm =document.forms['add-item'];

  //adding submit event on addform parentElement
  addForm.addEventListener('submit',function(e){

    //preventing the default behaviour(refresh page)
    e.preventDefault();
    //grabbing value  added to the input in addForm
    var newItem=document.querySelector('#add-item input[type="text"]').value.toLowerCase();

    if(newItem !="") {

        //creaing new elements
        var newLi=document.createElement('li');
        var name=document.createElement('span');
        var deleteBtn=document.createElement('span');

        //addig textContent to created elements
        name.textContent=newItem;
        deleteBtn.textContent="delete"

        //adding classes to the created elements
        name.className="name";
        deleteBtn.className="delete";

        //adding the created elements to the document
        ul.appendChild(newLi);
        newLi.appendChild(name);
        newLi.appendChild(deleteBtn);

        //setting back the value to empty string to the add form
        document.querySelector('#add-item input[type="text"]').value="";

    } else {
    ul.style.display="block";
  }
  })




  //-------hiding shopping list---------
  //grabbing the checkbox button
  var hideChkbox =document.querySelector("#hide");
 // adding change event to the hideCheckbox;
 hideChkbox.addEventListener('change',function(e){
   if(hideChkbox.checked){
     ul.style.display="none";
    } else {
     ul.style.display="block";
   }
 })



 //---------adding serachfilter ------------

//grabbing the searchform element
var searchForm =document.forms['search-item'];
//grabbing the input element in searchform
var input= searchForm.querySelector('input');

//adding keyup event on the input elements
input.addEventListener('keyup',function(e){
    //grabbing value of input element
    var val=input.value.toLowerCase();
    //grabbing list of items (lis)
    var lis=ul.querySelectorAll('li');
    //adding foreach function to iterate through all the list

    Array.from(lis).forEach(function(li){
    //finding text of li in LowerCase
    var content =li.textContent.toLowerCase();
    if(content.indexOf(val) != -1){
     li.style.display="block";
    } else {
     li.style.display="none";
    }

  })
 })




}
