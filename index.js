// Event Listeners
function newItem(){
    //listen for new item submission
    $("form").submit(function(e){
        e.preventDefault(); //prevent default submission
        //add entered item as an li element in the ul parent element
        let newItem = $('#shopping-list-entry').val();
        $("ul").append('<li><span class="shopping-item">' +newItem+ '</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>');
    });
}

function checkItems(){
    //listen for user to check or check of item
    $(".shopping-item-toggle").click(function(e){
        e.preventDefault(); //prevent default submission
        this.toggleClass("shopping-item-toggle");
    });
}

function removeItems(){
    //listen for user to delete item
    $('ul').on('click', '.shopping-item-delete', function(e){
        e.preventDefault(); //prevent default submission
        //need to find a way to remove whole section of html code
        this.closest('li').remove();
    });
}

//main function, call other functions in the main function
function main(){
    newItem();
    checkItems();
    removeItems();    
}

//Evoke the main function
$(main);