// Event Listeners
function newItem(){
    //listen for new item submission
    $("#js-shopping-list-form").submit(function(e){
        e.preventDefault(); //prevent default submission
        //add entered item as an li element in the ul parent element
        $(".shopping-list").append(`<li><span class="shopping-item">${this}</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>`);
    });
}

function checkItems(){
    //listen for user to check or check of item
    $(".shopping-item-toggle").click(function(e){
        e.preventDefault(); //prevent default submission
        $(this).toggleClass("shopping-item-toggle");
    });
}

function removeItems(){
    //listen for user to delete item
    $(".shopping-item-delete").click(function(e){
        e.preventDefault(); //prevent default submission
        //need to find a way to remove whole section of html code
        $(this).closest('li').remove();
    });
}

//main function
function main(){
    
}

//Evoke the main function
$(main);