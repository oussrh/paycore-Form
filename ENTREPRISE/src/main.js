

$(document).ready(function(){
    //iterate through each textboxes and add keyup
    //handler to trigger sum event
    $(".Semaine1").each(function() {
        $(this).change(function(){
            calculateSumsemaine1();
        });
    });

    $(".Semaine2").each(function() {
        $(this).change(function(){
            calculateSumsemaine2();
        });
    });

    $(".Semaine3").each(function() {
        $(this).change(function(){
            calculateSumsemaine3();
        });
    });

    $(".Semaine4").each(function() {
        $(this).change(function(){
            calculateSumsemaine4();
        });
    });

    //************************************

    $('input:radio[name=adresseSiege]').change(function(){

    if($('input:radio[name=adresseSiege]:checked').val()=="non")
        {
            $('.exploitation').show();
        }
    else{$('.exploitation').hide();}

    });

    //************************************

    $('#FormeJ').change(function(){

        if($('#FormeJ').val()=="Autre")
        {
            $('#formejuridique').show();
        }
        else{$('#formejuridique').hide();}
});

});
function calculateSumsemaine1() {

    var sum = 0;
    //iterate through each textboxes and add the values
    $(".Semaine1").each(function() {

        //add only if the value is number
        if(!isNaN(this.value) && this.value.length!=0) {
            sum += parseFloat(this.value);
        }

    });
    //.toFixed() method will roundoff the final sum to 2 decimal places
    $("#totalSemaine1").val(sum);
}

function calculateSumsemaine2() {

    var sumSemaine2 = 0;
    //iterate through each textboxes and add the values
    $(".Semaine2").each(function() {

        //add only if the value is number
        if(!isNaN(this.value) && this.value.length!=0) {
            sumSemaine2 += parseFloat(this.value);
        }

    });
    //.toFixed() method will roundoff the final sum to 2 decimal places
    $("#totalSemaine2").val(sumSemaine2);
}

function calculateSumsemaine3() {

    var sumSemaine3 = 0;
    //iterate through each textboxes and add the values
    $(".Semaine3").each(function() {

        //add only if the value is number
        if(!isNaN(this.value) && this.value.length!=0) {
            sumSemaine3 += parseFloat(this.value);
        }

    });
    //.toFixed() method will roundoff the final sum to 2 decimal places
    $("#totalSemaine3").val(sumSemaine3);
}

function calculateSumsemaine4() {

    var sumSemaine4 = 0;
    //iterate through each textboxes and add the values
    $(".Semaine4").each(function() {

        //add only if the value is number
        if(!isNaN(this.value) && this.value.length!=0) {
            sumSemaine4 += parseFloat(this.value);
        }

    });
    //.toFixed() method will roundoff the final sum to 2 decimal places
    $("#totalSemaine4").val(sumSemaine4);
}

$("#formEntreprise").submit(function(e) {


    var form = $(this);
    var url = form.attr('action');

    $.ajax({
           type: "POST",
           url: url,
           data: form.serialize(), // serializes the form's elements.
           success: function(data)
           {
               alert(data); // show response from the php script.
               location.reload();
           }
         });

    e.preventDefault(); // avoid to execute the actual submit of the form.
});
