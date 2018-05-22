
$(document).ready(function() {

    $( '.send_search' ).hide();
    $( '.send_dropdownlist' ).hide();

    $( '.get_search' ).hide();
    $( '.get_dropdownlist' ).hide();
    
    $( '.send_empty_dropdownList_message' ).hide();
    $( '.receive_empty_dropdownlist_message' ).hide();

    /*****GET  RECEIVE DROPDOWN LIST AND ITS DEFAULT VALUE*******/

    $.ajax({
        url:"https://xapi.jointdemo.com/receive-list",
        //async: false,
        type: "GET",
        dataType: "json",
        success:function(response_data_json) {
            jQuery.each(response_data_json, function(i, val2) {
            console.log(val2);
            console.log(i);
            
            
                
                    var opt2 = new Option(val2.name);  
                    var symbol2 = "'"+val2.symbol+"'";
                    var name2 = "'"+val2.name+"'";

                    $("#get_show_dropdownlist").append('<div>'+'<li id="yes" value="'+i+'" onclick="getSelectedtoken('+symbol2+', '+name2+');">'+'<img class="imageicons" src="./img/'+val2.symbol+'.png"/>'+'<strong class="symbolnm">'+val2.symbol+'</strong>'+'&nbsp;&nbsp;'+val2.name+'</li>'+'</div>');

                    if(val2.symbol == "JOINT"){
                        $('#imgappend2').append('<img class="imageicons" src="./img/'+val2.symbol+'.png"/>')
                        document.getElementById("secinp2").value = val2.symbol;
                    }else{
                        console.log("not found");
                    }





            })
        }
    })

     /********GET  SEND DROPDOWN LIST AND ITS DEFAULT VALUE*******/
    $.ajax({
        url:"https://xapi.jointdemo.com/send-list",
        //async: false,
        type: "GET",
        dataType: "json",
        success:function(response_data_json) {

                    jQuery.each(response_data_json, function(i, val) {
                    console.log(val);
                    console.log(i);
            
            
                
                    var opt = new Option(val.name);  
                    var symbol = "'"+val.symbol+"'";
                    var name = "'"+val.name+"'";

                    $("#send_show_dropdownlist").append('<div>'+'<li id="yes" value="'+i+'" onclick="sendSelectedtoken('+symbol+', '+name+');">'+'<img class="imageicons" src="./img/'+val.symbol+'.png"/>'+'<strong class="symbolnm">'+val.symbol+'</strong>'+'&nbsp;&nbsp;'+val.name+'</li>'+'</div>');

                   if(val.symbol == "ETH"){

                    $('#imgappend').append('<img class="imageicons" src="./img/'+val.symbol+'.png"/>');
                    document.getElementById("secinp").value =  val.symbol;

                    }else{

                        console.log("not found");

                    }

            })
        }

    })


    $('.outer').click(function(){
            if($('.send_search').hasClass('show') ){

               $('.send_search').removeClass('show');
               $('.send_dropdownlist').removeClass('show');

            }else if($('.get_search').hasClass('show2')){

                $('.get_search').removeClass('show2');
                $('.get_dropdownlist').removeClass('show2'); 

            }else{

                $('.send_amountdropdown').show();
                $('.send_search').hide();
                $('.send_dropdownlist').hide(); 
                $('.Get_amountdropdown').show();
                $('.get_search').hide();
                $('.get_dropdownlist').hide(); 
                    
            }
    });
           
});

/***********CLOSE SEARCH FROM CROSS*********/      
function clearinp() {
    
            $( '.send_dropdownlist' ).hide();
            $( '.send_search' ).hide();
            $( '.send_amountdropdown' ).show();   
}


/***********SEARCH FROM SEND SECTION DROPDOWN LIST*********/  
function searchSendList(){

        var input1 = '', filter1, ul1, li1, a1 = '', i1;

        console.log(document.getElementById("placeSelect").value);
        
        input1 = document.getElementById("placeSelect");
        filter1 = input1.value.toUpperCase();
        
        ul1 = document.getElementById("send_show_dropdownlist");
        
        li1 = ul1.getElementsByTagName("div");
        console.log(li1.length);
        for (i1 = 0; i1 < li1.length; i1++) {
            a1 = li1[i1];
            console.log(a1);
            if (a1.innerHTML.toUpperCase().indexOf(filter1) > -1) {
          
                $( '.send_empty_dropdownList_message' ).hide();
                $( '#send_show_dropdownlist' ).removeClass('listheight');
                li1[i1].style.display = "";

            } else {

                $( '.send_empty_dropdownList_message' ).show();
                $( '#send_show_dropdownlist' ).addClass('listheight');
                li1[i1].style.display = "none";
                 
            }
    
        }
}

   

/***********SELECTED TOKEN VALUE OF DROPDOWN FOR SEND SECTION*********/  
    function sendSelectedtoken(val,val2){

        this.variable1 = val;
        $( '.send_amountdropdown' ).show();
        $( '.send_search' ).hide();
        $('.send_dropdownlist').hide();
    
        $('#imgappend').empty().append('<img onclick="sendDropdownlist()" src="./img/'+val+'.png"/>')
        document.getElementById("secinp").value =  val;

    }
/***********ADD CLASS ON CLICK TO SEND SECTION*********/  
    function sendAddclass(){
        $('.send_search').addClass('show');
        $('.send_dropdownlist').addClass('show');
    }
/***********ADD CLASS ON CLICK TO RECEIVE SECTION*********/ 
    function getAddclass(){
        $('.get_search').addClass('show2');
        $('.get_dropdownlist').addClass('show2');
    }
/***********SEND SECTION SHOW/HIDE ON CLICK*********/ 
    function sendDropdownlist(){


        if(document.getElementById('placeSelect').value != ''){

            document.getElementById('placeSelect').value = '';

            searchSendList();
            
        }

        $( '.Get_amountdropdown' ).show();
        $( '.get_search' ).hide();
        $( '.get_dropdownlist' ).hide();
        
        $( '.send_amountdropdown' ).hide();
        $( '.send_search' ).show();
        $( '.send_dropdownlist' ).show();

           
        $('.send_search').addClass('show');
        $('.send_dropdownlist').addClass('show');
 
                
    }
/*******************OPEN MENU SPEED********************/ 
    function navopen(){
			
		$( ".nav" ).toggle( "slow", function() {
  
  		});
    }
   

/***********RECEIVE SECTION SHOW/HIDE ON CLICK*********/    
     function getDropdownlist(){

        if(document.getElementById('placeSelect2').value != ''){

            document.getElementById('placeSelect2').value = '';
            
            searchGetList();
            
        }

        $('.send_amountdropdown').show();
        $('.send_search').hide();
        $('.send_dropdownlist').hide();  
        $('.send_search').removeClass('show');
        $('.send_dropdownlist').removeClass('show');
    

        $( '.Get_amountdropdown' ).hide();
        $( '.get_search' ).show();
        $( '.get_dropdownlist' ).show();
  
        $('.get_search').addClass('show2');
        $('.get_dropdownlist').addClass('show2');
            
  
    }

/***********SELECTED TOKEN VALUE OF DROPDOWN FOR RECEIVE SECTION*********/ 
    function getSelectedtoken(val,val2){
            
            this.variable2 = val;
        
            $( '.Get_amountdropdown' ).show();
            $( '.get_search' ).hide();
            $('.get_dropdownlist').hide();

            $('#imgappend2').empty().append('<img onclick="getDropdownlist()"  src="./img/'+val+'.png"/>')

            document.getElementById("secinp2").value =  val;

    }

/*****************SEARCH FROM GET SECTION DROPDOWN LIST*****************/ 
    function searchGetList(){
                var input = ''
                , filter, ul, li, a = '', i;
                input = document.getElementById("placeSelect2");
                filter = input.value.toUpperCase();
                
                ul = document.getElementById("get_show_dropdownlist");
                
                li = ul.getElementsByTagName("div");
                console.log(li.length);
                for (i = 0; i < li.length; i++) {
                    a = li[i];
                    console.log(a);
                    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
                        console.log("if");
                        
                        $( '.receive_empty_dropdownlist_message' ).hide();
                        $( '#get_show_dropdownlist' ).removeClass('listheight2');
                        li[i].style.display = "";
                    } else {
                        console.log("else");
                        $( '.receive_empty_dropdownlist_message' ).show();
                        $( '#get_show_dropdownlist' ).addClass('listheight2');
                        li[i].style.display = "none";
                         
            
                    }
                }
    }
/*************SHOW/HIDE ON LAYOUT BODY CLICK*************/
    function bodyclick()
    {
            $('.send_amountdropdown').show();
            $('.send_search').hide();
            $('.send_dropdownlist').hide();  
            $('body').removeAttr('onClick','bodyclick()');          
    }

/*************VALIDATE FORM ON SUBMIT*************/
   function validation(){

    var re = new RegExp('^(0x)?[0-9A-f]{40}$');
   
    if (document.getElementById('sendInput').value == "") {

        $('#sendText').hide();

        document.getElementById('errors').innerHTML="Enter Amount";

        return false;

    }else if(document.getElementById('getInput').value == ""){

        $('#getText').hide();

        document.getElementById('errorsGet').innerHTML="Enter Amount";

        return false;

    }else if(document.getElementById('walletInput').value == ""){

        $('#walletText').hide();

        document.getElementById('errorsWallet').innerHTML="Enter Wallet Address";

        return false;

    }else if(document.getElementById('walletInput').value != ""){

        var str = document.getElementById('walletInput').value;

        if(re.test(str)){

            console.log("true");

        }else{

            console.log("false");

        }

    }else{

    }

   }
/*************SEND VALUE CHECK*************/
   function sendValueCheck(){

    var sendre = new RegExp("[^0-9]");

    console.log(document.getElementById('sendInput').value);

    if (document.getElementById('sendInput').value != "") {

        var sendstr = document.getElementById('sendInput').value;

        if(sendre.test(sendstr)){

            document.getElementById('sendnumbersOnly').innerHTML="Enter Numbers Only";

            $('#errors').hide();

            $('#sendText').hide();

            $('#sendnumbersOnly').show();

            $( '.send_token' ).addClass('sendBoxHighlight');

            console.log("true");


        }else{

            console.log("false");

            $('#errors').hide();

            $('#sendText').show();

            $('#sendnumbersOnly').hide();

            $( '.send_token' ).removeClass('sendBoxHighlight');

        }

    }else{

        console.log("else");

        document.getElementById('errors').innerHTML="Enter Amount";

        $('#errors').show();

        $('#sendnumbersOnly').hide();

        $('#sendText').hide();

        $( '.send_token' ).addClass('sendBoxHighlight');

    
    }

   }

/*************RECEIVE VALUE CHECK*************/

    function getValueCheck(){

    var receivere = new RegExp("[^0-9]");

    console.log(document.getElementById('getInput').value);

    if (document.getElementById('getInput').value != "") {

        console.log("if");

        var receivestr = document.getElementById('getInput').value;

        if(receivere.test(receivestr)){

            document.getElementById('receivenumbersOnly').innerHTML="Enter Numbers Only";

            $('#errorsGet').hide();

            $('#getText').hide();

            $('#receivenumbersOnly').show();

            $( '.get_token' ).addClass('getBoxHighlight');

            console.log("true");


        }else{

            console.log("false");

            $('#errorsGet').hide();

            $('#getText').show();

            $('#receivenumbersOnly').hide();

            $( '.get_token' ).removeClass('getBoxHighlight');

        }

    }else{

        console.log("else");

        document.getElementById('errorsGet').innerHTML="Enter Amount";

        $('#errorsGet').show();

        $('#getText').hide();

        $('#receivenumbersOnly').hide();

        $( '.get_token' ).addClass('getBoxHighlight');

    
    }

   }
/*************WALLET VALUE CHECK*************/

function walletValueCheck(){

    // var re = new RegExp("[^0-9]");

    var re = new RegExp('^(0x)?[0-9A-f]{40}$');

    console.log(document.getElementById('walletInput').value);

    if (document.getElementById('walletInput').value != "") {

        console.log("if");

        $('#errorsWallet').hide();

        $('#walletText').show();

        $( '.WalletAdd' ).removeClass('walletBoxHighlight');

        var str = document.getElementById('walletInput').value;

        if(re.test(str)){

            console.log("true");

        }else{

            console.log("false");

        }

    }else{

        console.log("else");

        document.getElementById('errorsWallet').innerHTML="Enter Wallet Address";

        $('#errorsWallet').show();

        $('#walletText').hide();

        $( '.WalletAdd' ).addClass('walletBoxHighlight');

    
    }

   }