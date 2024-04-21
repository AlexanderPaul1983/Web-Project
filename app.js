// Verschwinden und Auftauchen von den Buttons

$(document).ready(function() {
    $('.homeBtn-1').hide();
$('.homeBtn-2').hide();

$('.slice-container').mousemove(function() {
    $('.homeBtn-1').show();
});
$('.slice-container').mouseleave(function() {
    $('.homeBtn-1').hide();
});
$('.slice-container2').mousemove(function() {
    $('.homeBtn-2').show();
});
$('.slice-container2').mouseleave(function() {
    $('.homeBtn-2').hide();
});

});



// Datum im Footer anzeigen

$(document).ready(function() {
    var datum = new Date();

var actDate = datum.getDate() + '.' + (datum.getMonth()+ 1) + '.' + datum.getFullYear();
console.log(actDate);

$('.datum').text(actDate);

});



// Validierung der Input Felder, bevor man auf den Button "Senden" gedrückt hat

const NAME_INPUT_REGEX = /^[A-Za-z]+$/;
const EMAIL_INPUT_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const TEXT_INPUT_REGEX = /^.+$/;

// blur(), text() val()
$(document).ready(function() {

    const CORRECT = $("<p></p>").text("Correct").css({"color": "green", "padding-left": "10px"});
    const INVALID = $("<p></p>").text("Invalid").css({"color": "red", "padding-left": "10px"});
    
    $('.form-control-name').blur(function(){
        if(NAME_INPUT_REGEX.test(this.value)){
            $(this).after(CORRECT);
        }
        else{
            $(this).after(INVALID);
        }
    });
    $('.form-control-email').blur(function(){
        if(EMAIL_INPUT_REGEX.test(this.value)){
            $(this).after(CORRECT);
        }
        else{
            $(this).after(INVALID);
        }
    });
    $('.form-control-text').blur(function(){
        if(TEXT_INPUT_REGEX.test(this.value)){
            $(this).after(CORRECT);
        }
        else{
            $(this).after(INVALID);
        }
    });
    
});

