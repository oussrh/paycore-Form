$(document).ready(function () {
    //fieldset 2
    $('#etatCivil').change(function () {

        if ($('#etatCivil').val() == "MariÃ©(e)" || $('#etatCivil').val() == "Cohabitant lÃ©gal") {
           
            $('#dateEtatcivil').val("");
            $('#nomTravailleur').val("");
            $('#dateNaissanceP').val("");
            $('input[name=sexeP]').attr('checked', false);
            $('input[name=Partenaire]').attr('checked', false);
            $('input[name=Partenairehandicap]').attr('checked', false);
            $('#professionPartenaire').prop('selectedIndex', 0);

            $('.dateEtatCivil').show();
            $('.marie').show();
        }

        else if ($('#etatCivil').val() == "CÃ©libataire") {
            
            
            $('#dateEtatcivil').val("");
            $('#nomTravailleur').val("");
            $('#dateNaissanceP').val("");
            $('input[name=sexeP]').attr('checked', false);
            $('input[name=Partenaire]').attr('checked', false);
            $('input[name=Partenairehandicap]').attr('checked', false);
            $('#professionPartenaire').prop('selectedIndex', 0);

            $('.dateEtatCivil').hide();
            $('.marie').hide();
        }

        else {

            
            $('#dateEtatcivil').val("");
            $('#nomTravailleur').val("");
            $('#dateNaissanceP').val("");
            $('input[name=sexeP]').attr('checked', false);
            $('input[name=Partenaire]').attr('checked', false);
            $('input[name=Partenairehandicap]').attr('checked', false);
            $('#professionPartenaire').prop('selectedIndex', 0);

            $('.dateEtatCivil').show();
            $('.marie').hide();
        }
    });

    $('#professionPartenaire').change(function () {

        if ( $('#professionPartenaire').val() == "Sans" || $('#professionPartenaire').val() == "Autre") 
            {
                $('input[name=Partenaire]').attr('checked', false);
                $('input[name=Partenairehandicap]').attr('checked', false);

                $('.charge').show();
            }

        else 
            { 
                $('input[name=Partenaire]').attr('checked', false);
                $('input[name=Partenairehandicap]').attr('checked', false);

                $('.charge').hide(); 
            }

    });


    //fieldset 5

    $('input[name=volontariat]').change(function () {

        if ($('input[name=volontariat]:checked').val() == "oui") {
            
            $('input[name=choix]').attr('checked', false);

            $('.choixUn').show();
        }

        else {

            $('input[name=choix]').attr('checked', false);

            $('.choixUn').hide();
            $('.montantFiscal').hide();
            $('.pourcentFiscal').hide();
        }

    });

    $('input[name=choix]').change(function () {

        if ($('input[name=choix]:checked').val() == "Montant") {
            

            $('.montantFiscal').show();
            $('.pourcentFiscal').hide();
        }

        else {
           

            $('.pourcentFiscal').show();
            $('.montantFiscal').hide();
        }

    });

    //fieldset 12
    $('#elements2').change(function () {

        if ($('#elements2').is(':checked')) {

            $('.FPE').show();
        }

        else {
            
            for(x=21;x<28;x++)
                {
                    $('#elements'+x).attr('checked', false);
                }
                
            $("#montantGsm").val("");
            $("#carwashmontant").val("");
            $("#garagemontant").val("");
            $("#autreFrais").val("");

            $('input[name=fraisbureau]').attr('checked', false);
            $('input[name=carwash]').attr('checked', false);
            $('input[name=garage]').attr('checked', false);

            $('.FPE').hide();
        }

    });

    $('#elements3').change(function () {

        if ($('#elements3').is(':checked')) {

            $('.ATN').show();
        }

        else {
            
            for(y=31;y<37;y++)
                {
                    $('#elements'+y).attr('checked', false);
                }
                
            $("#gsmmontant").val("");
            $("#logement").val("");
            $("#autreATN").val("");
            $("#autreMontantATN").val("");
            
            $('input[name=gsm]').attr('checked', false);

            $('.ATN').hide();
        }

    });


    //************************************ *

    $('#elements21').change(function () {

        if ($('#elements21').is(':checked')) {

            $('.GSMPrive').show();
        }

        else {
            $("#montantGsm").val("");
            $('.GSMPrive').hide();
        }

    });
    //*****elements22
    $('#elements22').change(function () {

        if ($('#elements22').is(':checked')) {

            $('.fraisbureaudom').show();
        }

        else {
            $('input[name=fraisbureau]').attr('checked', false);
            $('.fraisbureaudom').hide();
        }

    });
    $('input[name=fraisbureau]').change(function () {
        if ($('#montantPropre').is(':checked')) {

            $('.fraisbureauMontantdiv').show();
        }

        else {
            $("#fraisbureauMontant").val("");

            $('.fraisbureauMontantdiv').hide();
        }
    });
    
    //*****elements25
    $('#elements25').change(function () {

        if ($('#elements25').is(':checked')) {

            $('.carwashdiv').show();
        }

        else {
            $('input[name=carwash]').attr('checked', false);
            $('.carwashdiv').hide();
            $('.carwashmontantdiv').hide();
        }

    });

    $('input:radio[name=carwash]').change(function () {

        if ($('input:radio[name=carwash]:checked').val() == "Montant propore") {
            $('.carwashmontantdiv').show();
        }

        else {
            $("#carwashmontant").val("");
            $('.carwashmontantdiv').hide();
        }

    });

    //*****elements26
    $('#elements26').change(function () {

        if ($('#elements26').is(':checked')) {

            $('.garagediv').show();
        }

        else {
            $('input[name=garage]').attr('checked', false);
            $('.garagediv').hide();
            $('.garagemontantdiv').hide();
        }

    });

    $('input:radio[name=garage]').change(function () {

        if ($('input:radio[name=garage]:checked').val() == "Montant propore") {
            $('.garagemontantdiv').show();
        }

        else {
            $("#garagemontant").val("");
            $('.garagemontantdiv').hide();
        }

    });
    //*****elements27
    $('#elements27').change(function () {

        if ($('#elements27').is(':checked')) {

            $('.AutreFPE').show();
        }

        else {
            $("#autreFrais").val("");
            $('.AutreFPE').hide();
        }

    });
    //************************************ *

    //*****element31
    $('#elements31').change(function () {

        if ($('#elements31').is(':checked')) {

            $('.gsmdiv').show();
        }

        else {
            $('input[name=gsm]').attr('checked', false);
            $('.gsmdiv').hide();
            $('.gsmmontantdiv').hide();
        }

    });

    $('input:radio[name=gsm]').change(function () {

        if ($('input:radio[name=gsm]:checked').val() == "Autre montant") {
            $('.gsmmontantdiv').show();
        }

        else {
            $("#gsmmontant").val("");
            $('.gsmmontantdiv').hide();
        }

    });
    //*****elements35
    $('#elements35').change(function () {

        if ($('#elements35').is(':checked')) {

            $('.logementdiv').show();
        }

        else {
            $("#logement").val("");
            $('.logementdiv').hide();
        }

    });

    //*****elements36
    $('#elements36').change(function () {

        if ($('#elements36').is(':checked')) {

            $('.AutreATNdiv').show();
        }

        else {
            $("#autreATN").val("");
            $("#autreMontantATN").val("");
            $('.AutreATNdiv').hide();
        }

    });

    //*****elements37
    $('#elements37').change(function () {

        if ($('#elements37').is(':checked')) {

            $('.loisSocialesDiv').show();
        }

        else {

            $("#loisSociales").val("");
            $('.loisSocialesDiv').hide();
        }

    });

    //***************************************************************** ****** */

    $("#FormDIRIGEANT").submit(function(e) {

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

});