let itemAPI = "http://localhost:3000/items";
console.log(itemAPI);
function start() {
    getItem(renderItems);
    
}
start();

// lay ra item
function getItem(callback) {
    fetch(itemAPI)
    .then(function(response){
        return response.json();
    })
    .then(callback);
}

//render item
function renderItems(items){
    let listItemsBlock = document.querySelector("#product-list-items");
    let htmls = items.map(function(item){
        return `
        <li class="product-items col-3">  
            <div class="renderItems">
                <a href=""><img src="${item.image}" alt="" srcset=""></a> 
                
                <div class="sub__div">

                    <a href="#" class="title"> ${item.title} </a> <br>

                    <span class="price">${item.price}</span> <br>
   
                        <a class="img__mini" href="#"> <img src="${item.miniimg}">
                            <div class="sub__content">
                                ${item.contentmini1}
                            </div>
                        </a>   
                </div>   
            </div>
        </li>
        `;
    });
    listItemsBlock.innerHTML = htmls.join('');
 
}



// $('.show-hide').on("click", function(e){ 
//     $(this).find('.hide').css("display", "none");
//     $(this).find('.show').css("display", "block");
//     e.preventDefault();
// })


// filter
$('.actived-list, .close').on("click", function(){ 
    $(this).parent('.list-group').find('.list-select').toggle(); 
    $(this).parents('.list-select').toggle();    

})

$('.actived, .not-actived').on("click", function(){
    $(this).find('.icon-1').toggle();
    $(this).find('.icon-2').toggle();
    $(this).parent('.filter-option').find('.item__male').toggle();
        if ($(this).hasClass('actived')) {
            $(this).removeClass('actived').addClass('not-actived');
        } else {
                $(this).removeClass('not-actived').addClass('actived');
        }
})


$('.reset').on("click", function(){
   $(this).parents('.list-select').find('.item__male').show();
   $(this).parents('.list-select').find('.icon-1').hide();
   $(this).parents('.list-select').find('.icon-2').show();
})

