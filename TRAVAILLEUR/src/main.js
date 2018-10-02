$(document).ready(function () {
    //fieldset 2
    $('#etatCivil').change(function () {

        if ($('#etatCivil').val() == "MariÃ©(e)" || $('#etatCivil').val() == "Cohabitant lÃ©gal") {
            
            $("#dateEtatcivil,#nomTravailleur").val("");
            $('input[name=Partenaire],input[name=Partenairehandicap]').attr('checked', false);
            $('#professionPartenaire').prop('selectedIndex', 0);

            $('.dateEtatCivil').show();
            $('.marie').show();
        }

        else if ($('#etatCivil').val() == "CÃ©libataire") {
            
            $("#dateEtatcivil,#nomTravailleur").val("");
            $('input[name=Partenaire],input[name=Partenairehandicap]').attr('checked', false);
            $('#professionPartenaire').prop('selectedIndex', 0);

            $('.dateEtatCivil').hide();
            $('.marie').hide();
        }

        else {
            
            $("#dateEtatcivil,#nomTravailleur").val("");
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


    //fieldset 4
    $('#typeContrat').change(function () {

        if ($('#typeContrat').val() == "Contrat stage" || $('#typeContrat').val() == "Contrat apprentissage") {

            $('#typeApprenti').prop('selectedIndex', 0);
            $('.stage').show();
        }

        else {

            $('#typeApprenti').prop('selectedIndex', 0);
            $('.stage').hide();
        }

    });

    //fieldset 9
    $('input[name=1eremploi]').change(function () {

        if ($('input[name=1eremploi]:checked').val() == "oui") {
            
            $('#CPE').prop('selectedIndex', 0);
            $('.convention').show();
        }

        else {
            $('#CPE').prop('selectedIndex', 0);
            $('.convention').hide();
        }

    });

    $('input[name=restr]').change(function () {

        if ($('input[name=restr]:checked').val() == "oui") {

            $("#debutEmployeurPrec,#finEmployeurPrec").val("");
            $('.restructuration').show();
        }

        else {
            $("#debutEmployeurPrec,#finEmployeurPrec").val("");
            $('.restructuration').hide();
        }

    });

    //fieldset 10

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

    //fieldset 12

    $('#elements9').change(function () {

        if ($('#elements9').is(':checked')) {

            $('.chequeRepas').show();
        }

        else {
            $("#SocieteEmetrice").prop('selectedIndex', 0);
            $("#valeurChequeRepas").val("");
            $('.chequeRepas').hide();
        }

    });

    $('#elements10').change(function () {

        if ($('#elements10').is(':checked')) {

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

    //***************************************************************** ****** */

    $("#FormTravailleur").submit(function(e) {

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