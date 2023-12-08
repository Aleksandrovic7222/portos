
let url=window.location.pathname;
header();

function header(){
    let print=''
    print+=`<div id="logo"><a class="text-decoration-none fw-bold fs-3" href="index.html">Porto's</a></div>
            <div class="d-flex align-items-center">
                <a href="#" id="hamburger" class="hamburger"><i class="fas fa-bars fs-4 mx-2"></i></a>
            </div>`;


        
    $('header').html(print);

    getMenu();

    $("#hamburger").on("click",showMenu);

}


function getMenu(){
    var menuNames=['Home','Menu', 'Locations','Contact','Author'];
    var menuLinks=['index.html','menu.html', 'locations.html','contact.html','author.html'];
    let print='';
    print+=`<nav class="col-12 navVisible"><ul class="text-end">`;
    for(let i=0;i<menuNames.length;i++){
        print+=`<li><a class="text-decoration-none fs-4" href="${menuLinks[i]}">${menuNames[i]}</a></li>`;
    }
    print+=`</ul></nav>`;
    document.getElementById("header").innerHTML+=print;

}

function showMenu(e){
    e.preventDefault();
    $('nav').slideToggle();
    if(!$("nav").hasClass("navVisible")){
        $("#hamburger").html(`<i class="fas fa-bars fs-4 mx-2"></i>`);
        $("nav").addClass("navVisible");
        $(".fa-times").fadeOut();
        $('.fa-bars').fadeIn();
        
    }
    else{
        $("nav").removeClass("navVisible");
        $("#hamburger").html(`<i class="fas fa-times fs-4 mx-2"></i>`);
        $(".fa-bars").fadeOut();
        $(".fa-times").fadeIn();
    }
}




if(url.indexOf("index.html")!=-1){

    getNews();
    getIcons();
    getSlider();
}
function getSlider(){
    let slider=document.getElementById("coverPhoto");
    var images=["cover4.jpeg","cover1.jpeg","cover3.jpeg","cover2.jpeg"];
    var i=0;
    function sliderStart(){
        slider.src="assets/images/"+images[i];
        if(i<images.length-1){
            i++;
        } 
        else{
            i=0;
        }
        setTimeout(sliderStart, 3500);
    };
    sliderStart();
}
function getNews(){
    let nasloviOwl=[' Cookie Kits Now Shipping!','Bake at Home',' Pumpkin Matcha','Give the Gift of Porto\'s!','Churro Croissant'];
    let textOwl=['Create sweet memories with our new Gingerbread Kit shipping nationwide- Here for a limited time only and fun for the whole family!','We now ship our best-selling pastries unbaked, frozen, & direct to you- send to your friends, family, or co-workers today!','All New! Organic matcha green tea, with pumpkin pie spices, and whole milk, served over ice and topped with a pumpkin matcha sweet cream.','The perfect gift for birthdays, congratulations, celebrations and every occasion in between! Purchase online and redeem at any Porto’s Bakery location!','Our signature croissant made with local, California butter, glazed with simple syrup and coated with cinnamon sugar.'];
    let slikeOwl=['cookie.jpeg','bake.jpeg','matcha.jpeg','gift.jpg','churo.jpeg'];

    let print='';
    for(let i=0;i<nasloviOwl.length;i++){
        print+=`<div>
                    <img src='assets/images/${slikeOwl[i]}' alt='${nasloviOwl[i]}' class='img-owl'/>
                    <div class='text-owl'>
                        <h2 class='text-light'>${nasloviOwl[i]}</h2>
                        <p class='text-light fs-5 mt-3'>${textOwl[i]}</p>
                    </div>
                </div>`
    }

    $(".owl-carousel").html(print);


    $(".owl-carousel").owlCarousel({
        margin:20,
        loop: true,
        responsive:{
            200:{
                items:1
            },
            400:{
                items:1
            },
            600:{
                items:2
            },
            1200:{
                items:3
            }
        }
    });
}

function getIcons(){
    let icons=['heart.svg','oven.svg','chef.svg','tree.svg'];
    let text=['Family Owned','Air Fryer Friendly','Whole Ingredients','Made In California'];

    for(let i=0;i<icons.length;i++){
        let icon=document.createElement('div');
        icon.setAttribute('class','col-10 mx-auto col-sm-5 mx-0 col-md-2 p-3')
        let image=document.createElement('img');
        image.setAttribute('src','assets/images/'+icons[i]);
        image.setAttribute('alt',text[i]);
        icon.appendChild(image);
        let texticon=document.createElement('p');
        texticon.classList.add('fs-5')
        texticon.classList.add('m-0')
        texticon.innerText=text[i];
        icon.appendChild(texticon);

        document.getElementById('icons').appendChild(icon);
    }
}


if(url.indexOf("menu.html")!=-1){
    getMenuList();
}

function getMenuList(){
    let menuTitles=['Gingerbread Cookie Kit','Milk And Berries Cake','Cheese Roll','Chicken Croquette','Apple Strudle','Ham Croquette'];
    let menuImages=['ginger.webp','cake.jpeg','cheese.jpeg','chicken.jpeg','apple.jpeg','ham.jpeg'];
    let menuPrices=['16.99','44.99','20.99','21.99','20.99','21.99'];
    let menuPisces=['6 Pieces','','1 Dozen','1 Dozen','1 Dozen','1 Dozen'];

    let print='';
    for(let i=0;i<menuTitles.length;i++){
        print+="<div class='col-10 col-md-3 menuItems p-0 mx-md-3 my-3 text-center rounded'>";

        print+="<img src='assets/images/"+menuImages[i]+"' alt='"+menuTitles[i]+"'/>";
        
        print+="<div class='p-3'><h3>"+menuTitles[i]+"</h3>";


        print+="<p>$"+menuPrices[i];  

        if(menuPisces[i]!=""){
            print+=" - ";
        }
        
        print+=menuPisces[i]+"</p>";

        print+="<a href='#' class='text-transform-uppercase text-decoration-none text-light p-2'>Order Now</a>"
        
        print+="</div></div>";
    }

    document.getElementById("menu").innerHTML=print;
}


if(url.indexOf("locations.html")!=-1){
    getLocations();
}

function getLocations(){
    let locationNames=['Northridge','Buena Park','Burbank','Downey','Glendale'];
    let locationImages=['northridge.webp','buenapark.webp','burbank.webp','downey.webp','glendale.webp'];
    let locationAdresses=['19467 Nordhoff St | Northridge, CA 91324','7640 Beach Blvd | Buena Park, CA 90620','3614 W. Magnolia Blvd | Burbank, CA 91505','8233 Firestone Blvd | Downey, CA 90241','315 N. Brand Blvd | Glendale, CA 91203'];
    let pickupTimes=['6:00','6:30','6:00','7:00','6:00'];
    let dineInHours=['6:00am - 8:00pm','6:30am - 8:00pm','6:30am - 8:00pm','7:00am - 8:00pm','6:30am - 8:00pm'];

    let print='';
    for(let i=0;i<locationNames.length;i++){
        print+=`<div class='col-10 col-md-5 my-3 menuItems p-2 rounded p-3'>

                    <div class='locationImage d-flex align-items-center justify-content-between my-2'>
                        <img src='assets/images/${locationImages[i]}' alt='${locationNames[i]}'/>
                        <h2>${locationNames[i]}</h2>
                    </div>

                    <p class='fs-4 text-secondary'>${locationAdresses[i]}</p>
                    <p class='fs-4'>Online Ordering (${pickupTimes[i]})</p>
                    <a href='#' class='text-transform-uppercase text-decoration-none text-light p-2'>Order Pickup</a>
                    <p class='fs-4 mt-3'>Dine-in Hours</p>
                    <p class='fs-4 text-secondary'>Daily | ${dineInHours[i]}</p>
            </div>`;
    }

    $("#locations").html(print);
}


if(url.indexOf("contact.html")!=-1){
    questions();
    teams();
}

function questions(){
    var questions=['When are you open?','I have a general question, whom should I contact?','What methods of payments do you accept?','Do you have any gluten free items?','Which of your items contain gelatin?'];
    var answers=['We are open every day, 6:00 - 7:00 am  (check exact location) to 8:00 pm, to serve you. All bakeries are open for pick-up and dine-in service. For further details, please see our locations page.','We would love to hear from you. To send us an email, visit our Contact Us page and a team member will reach back out to you as soon as possible.','We accept all major US credit cards, cash, and mobile payment. We unfortunately cannot accept cards issued outside of the US at this time.','Unfortunately, we are not able to label anything as “Gluten-Free” (due to the nature of the baking process there is gluten present in the air).','The items that contain gelatin are made up of the following but not limited to Quesadilla and our New York Cheesecake (Gelatin found only in Sour Cream Topping). The following items consist of Kosher Gelatin: Carrot Cake Slice, Parisian Cake Slice, Tiramisu Cup, Carrot Cake Round, Chocolate Raspberry Cake Round, Parisian Cake Round, Mango Mousse Round.'];

    let print=''
    for(let i=0;i<questions.length;i++){
        print+=`<div class='col-12'>
        <a href="#" data-id="${i}" class="text-light asnwerEvent text-decoration-none">
            <h3 class='text-dark'>${questions[i]}</h3>
            <p class="answer fs-4">${answers[i]}</p>
            </a>
           
        </div>`
    }

    document.getElementById("faqs").innerHTML+=print;

    $(".asnwerEvent").click(function(e){
        e.preventDefault();
        $(this).children('p').slideToggle();
    })

}

function teams(){
    let teams=['Bake At Home','Bakery/Cafe Service (In-person)','Bakery/Cafe Service (Delivery)','General','Donations'];

    let print=`<option value="" class='fs-5'>Select An Option</option>`;

    for(let t in teams){
        print+=`<option value="${t}" class='fs-5'>${teams[t]}</option>`;
    }

    document.getElementById('teams').innerHTML=print;
}


$("#terms").change(terms);

function terms(){
    let terms=$("#terms:checked").val();
    if(terms){
        $("#terms").next().next().addClass('d-none');
        return 0;
    }
    else{
        $("#terms").next().next().removeClass('d-none');
        return 1;
    }
}


$("#lastName").keyup(checklastName);


function checklastName(){
    let nameReg=/^[A-Z][a-z]{2,}(\s[A-Z][a-z]{2,})?$/;
    //ovde dodati srpske karaktere

    let nameValue=$("#lastName").val(); 

    if(nameReg.test(nameValue)){
        $("#lastName").next().addClass('d-none');
        return 0;
    }
    else{
        $("#lastName").next().removeClass('d-none');
        return 1;
    }

}



$("#firstName").keyup(checkFirstName);


function checkFirstName(){
    let nameReg=/^[A-Z][a-z]{2,}$/;
    //ovde dodati srpske karaktere

    let nameValue=$("#firstName").val(); 

    if(nameReg.test(nameValue)){
        $("#firstName").next().addClass('d-none');
        return 0;
    }
    else{
        $("#firstName").next().removeClass('d-none');
        return 1;
    }

}


$("#email").keyup(checkEmail);


function checkEmail(){
    let emailReg=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

    let emailValue=$("#email").val(); 

    if(emailReg.test(emailValue)){
        $("#email").next().addClass('d-none');
        return 0;
    }
    else{
        $("#email").next().removeClass('d-none');
        return 1;
    }

}

$("#message").keyup(message);

function message(){
    let message=$("#message").val().trim(); 

    
    if(message.split(" ").length<10){
        $("#message").next().removeClass('d-none');
        return 1;
    }
    else{
        $("#message").next().addClass('d-none');
        return 0;
    }
}


$("#teams").change(teamsForm);

function teamsForm(){
    let theatreName=$("#teams").val(); 


    
    if(theatreName!=""){
        $("#teams").next().addClass('d-none');
        return 0;
    }
    else{
        $("#teams").next().removeClass('d-none');
        return 1;
    }
    
}


$("#btnMesssage").click(checkForm);

function checkForm(){
    let errorCounter=0;
    errorCounter+=checkFirstName();
    errorCounter+=checklastName();
    errorCounter+=checkEmail();
    errorCounter+=teamsForm();
    errorCounter+=message();
    errorCounter+=terms();

    if(errorCounter==0){
        $("input[type='text']").val("");
        $("#terms").prop("checked",false);
        $("#teams").val("");
        $("#message").val("");
        $("#messageSend").removeClass('d-none')
    }
}

footer();
function footer(){
    let print=`<div class="col-4">
        <h3>Porto’s</h3>
        <a href="doc.pdf" class="text-decoration-none text-dark fs-4">Documentation</a>
    </div>
    <div class="col-4">
        <p class='fs-5'><i class="fas fa-phone-alt"></i> Phone: +2 392 3929 210 </p>
        <p class='fs-5'><i class="fas fa-envelope"></i> E-mail: info@portos.com</p>
    </div>`;

    document.getElementById('footer').innerHTML=print;
}