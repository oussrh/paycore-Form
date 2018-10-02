$(document).ready(function () {
    
    $("#TravailleurModif").submit(function(e) {

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

//********************************************************************************************************* */
    $('#element1').change(function () {

        if ($('#element1').is(':checked')) {
            
            $("#carwashmontant").val("");
            $('.niss').show();
        }

        else {
            
            $("#carwashmontant").val("");
            $('.niss').hide();
        }

    });

    $('#element2').change(function () {

        if ($('#element2').is(':checked')) {
            
            $("#carwashmontant").val("");
            $('.adresse').show();
        }

        else {
            
            $("#carwashmontant").val("");
            $('.adresse').hide();
        }

    });

    $('#element3').change(function () {

        if ($('#element3').is(':checked')) {
            
            $("#carwashmontant").val("");
            $('.numtel').show();
        }

        else {
            
            $("#carwashmontant").val("");
            $('.numtel').hide();
        }

    });

    $('#element4').change(function () {

        if ($('#element4').is(':checked')) {
            
            $("#carwashmontant").val("");
            $('.numgsm').show();
        }

        else {
            
            $("#carwashmontant").val("");
            $('.numgsm').hide();
        }

    });

    $('#element5').change(function () {

        if ($('#element5').is(':checked')) {
            
            $("#carwashmontant").val("");
            $('.adressemail').show();
        }

        else {
            
            $("#carwashmontant").val("");
            $('.adressemail').hide();
        }

    });

    $('#element6').change(function () {

        if ($('#element6').is(':checked')) {
            
            $("#carwashmontant").val("");
            $('.fincontrat').show();
        }

        else {
            
            $("#carwashmontant").val("");
            $('.fincontrat').hide();
        }

    });

    $('#element7').change(function () {

        if ($('#element7').is(':checked')) {
            
            $("#carwashmontant").val("");
            $('.langues').show();
        }

        else {
            
            $("#carwashmontant").val("");
            $('.langues').hide();
        }

    });

    $('#element8').change(function () {

        if ($('#element8').is(':checked')) {
            
            $("#carwashmontant").val("");
            $('.etatcivil').show();
            $('#etatCivil').change(function () {

                if ($('#etatCivil').val() == "MariÃ©(e)" || $('#etatCivil').val() == "Cohabitant lÃ©gal") {
                    
                    $("#dateEtatcivil").val("");
                    $('input[name=Partenaire],input[name=Partenairehandicap]').attr('checked', false);
                    $('#professionPartenaire').prop('selectedIndex', 0);
        
                    $('.dateEtatCivil').show();
                    $('.marie').show();
                }
        
                else if ($('#etatCivil').val() == "CÃ©libataire") {
                    
                    $("#dateEtatcivil").val("");
                    $('input[name=Partenaire],input[name=Partenairehandicap]').attr('checked', false);
                    $('#professionPartenaire').prop('selectedIndex', 0);
        
                    $('.dateEtatCivil').hide();
                    $('.marie').hide();
                }
        
                else {
                    
                    $("#dateEtatcivil").val("");
                    $('input[name=Partenaire],input[name=Partenairehandicap]').attr('checked', false);
                    $('#professionPartenaire').prop('selectedIndex', 0);
        
                    $('.dateEtatCivil').show();
                    $('.marie').hide();
                }
            });
        
            $('input[name=Partenaire]').change(function () {
        
                if ($('input[name=Partenaire]:checked').val() == "oui") {
                    
                    $('input[name=Partenairehandicap]').attr('checked', false);
                    $('.handicap').show();
                }
                else { 
                    $('input[name=Partenairehandicap]').attr('checked', false);
                    $('.handicap').hide(); 
                }
        
            });
        }

        else {
            
            $("#carwashmontant").val("");
            $('.etatcivil').hide();
        }

    });

    $('#element9').change(function () {

        if ($('#element9').is(':checked')) {
            
            $("#carwashmontant").val("");
            $('.charge').show();
        }

        else {
            
            $("#carwashmontant").val("");
            $('.charge').hide();
        }

    });

    $('#element10').change(function () {

        if ($('#element10').is(':checked')) {
            
            $("#carwashmontant").val("");
            $('.compte').show();
        }

        else {
            
            $("#carwashmontant").val("");
            $('.compte').hide();
        }

    });

    $('#element11').change(function () {

        if ($('#element11').is(':checked')) {
            
            $("#carwashmontant").val("");
            $('.newcontrat').show();
        }

        else {
            
            $("#carwashmontant").val("");
            $('.newcontrat').hide();
        }

    });

    $('#element12').change(function () {

        if ($('#element12').is(':checked')) {
            
            $("#carwashmontant").val("");
            $('.regime').show();
        }

        else {
            
            $("#carwashmontant").val("");
            $('.regime').hide();
        }

    });

    $('#element13').change(function () {

        if ($('#element13').is(':checked')) {
            
            $("#carwashmontant").val("");
            $('.salaire').show();
        }

        else {
            
            $("#carwashmontant").val("");
            $('.salaire').hide();
        }

    });

    $('#element14').change(function () {

        if ($('#element14').is(':checked')) {
            
            $("#carwashmontant").val("");
            $('.volon').show();

            $('input[name=volontariat]').change(function () {

                if ($('input[name=volontariat]:checked').val() == "oui") {
                    
                    $("#montantVolonFiscal,pourcentVolonFiscal").val("");
                    $('input[name=choix]').attr('checked', false);
        
                    $('.choixUn').show();
                }
        
                else {
        
                    $("#montantVolonFiscal,pourcentVolonFiscal").val("");
                    $('input[name=choix]').attr('checked', false);
        
                    $('.choixUn').hide();
                    $('.montantFiscal').hide();
                    $('.pourcentFiscal').hide();
                }
        
            });
        
            $('input[name=choix]').change(function () {
        
                if ($('input[name=choix]:checked').val() == "Montant") {
                    
                    $("#montantVolonFiscal,pourcentVolonFiscal").val("");
        
                    $('.montantFiscal').show();
                    $('.pourcentFiscal').hide();
                }
        
                else {
                    
                    $("#montantVolonFiscal,pourcentVolonFiscal").val("");
        
                    $('.pourcentFiscal').show();
                    $('.montantFiscal').hide();
                }
        
            });
        }

        else {
            
            $("#carwashmontant").val("");
            $('.volon').hide();
        }

    });

    $('#element15').change(function () {

        if ($('#element15').is(':checked')) {
            
            $("#carwashmontant").val("");
            $('.autre').show();
        }

        else {
            
            $("#carwashmontant").val("");
            $('.autre').hide();
        }

    });

    $('#element16').change(function () {

        if ($('#element16').is(':checked')) {
            
            $("#carwashmontant").val("");
            $('.repas').show();
        }

        else {
            
            $("#carwashmontant").val("");
            $('.repas').hide();
        }

    });

    $('#element17').change(function () {

        if ($('#element17').is(':checked')) {
            
            $("#carwashmontant").val("");
            $('.infos').show();
        }

        else {
            
            $("#carwashmontant").val("");
            $('.infos').hide();
        }

    });

//***************************************** */

$('#elements7').change(function () {

    if ($('#elements7').is(':checked')) {
        
        $('.FPE').show();
    }

    else {
        
        $('.FPE').hide();
    }

});

$('#elements8').change(function () {

    if ($('#elements8').is(':checked')) {
        
        $('.ATN').show();
    }

    else {
        
        $('.ATN').hide();
    }

});



    $('#elements9').change(function () {

        if ($('#elements9').is(':checked')) {

            $('.autreAvantage').show();
        }

        else {
            $("#typeAvantage").val("");
            $("#montantAvantage").val("");
            $('.autreAvantage').hide();
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
    //*****elements23
    $('#elements23').change(function () {

        if ($('#elements23').is(':checked')) {

            $('.lunchItinerantdiv').show();
        }

        else {
            $('input[name=lunchItinerant]').attr('checked', false);
            $('.lunchItinerantmontantdiv').hide();
            $('.lunchItinerantdiv').hide();
        }

    });

    $('input[name=lunchItinerant]').change(function () {

        if ($('input[name=lunchItinerant]:checked').val() == "Montant propore") {
            $('.lunchItinerantmontantdiv').show();
        }

        else {
            $("#lunchItinerantmontant").val("");
            $('.lunchItinerantmontantdiv').hide();
        }

    });
    //*****elements24
    $('#elements24').change(function () {

        if ($('#elements24').is(':checked')) {

            $('.commoditesItinerantdiv').show();
        }

        else {
            $('input[name=commoditesItinerant]').attr('checked', false);
            $('.commoditesItinerantdiv').hide();
            $('.commoditesItinerantmontantdiv').hide();
        }

    });

    $('input[name=commoditesItinerant]').change(function () {

        if ($('input[name=commoditesItinerant]:checked').val() == "Montant propore") {
            $('.commoditesItinerantmontantdiv').show();
        }

        else {
            $("#commoditesItinerantmontant").val("");
            $('.commoditesItinerantmontantdiv').hide();
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

    $('input[name=carwash]').change(function () {

        if ($('input[name=carwash]:checked').val() == "Montant propore") {
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

    $('input[name=garage]').change(function () {

        if ($('input[name=garage]:checked').val() == "Montant propore") {
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

    $('input[name=gsm]').change(function () {

        if ($('input[name=gsm]:checked').val() == "Autre montant") {
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




});