$(function(){

    var v1, v2, op;

    $("input[name=btn]").click( function(){
        $("#result").val($("#result").val() + $(this).val());
    });

    $("input[name=ce]").click( function(){
        $("#result").val(''); // Pega o valor do resultado em tela e substitui com o valor que está no .val()
    });

    $("input[name=soma]").click( function(){
        if ($("#result").val() != ''){
            v1 = parseFloat($("#result").val());
            $("#result").val('');
            op = "soma";
            $("#op").text($(this).val());
        } else {
            alert("Insira um valor para efetuar a operação!");
        }
    });

    $("input[name=menos]").click( function(){
        if ($("#result").val() != ''){
            v1 = parseFloat($("#result").val());
            $("#result").val('');
            op = "menos";
            $("#op").text($(this).val());
        } else {
            alert("Insira um valor para efetuar a operação!");
        }
    });

    $("input[name=igual]").click( function(){
        if ($("#result").val() != ''){
            v2 = parseFloat($("#result").val());

            if(op == "soma"){
                $("#result").val(v1 + v2);
            }

            else if(op == menos){
                $("#result").val(v1+v2);
            }
            
        } else {
            alert("Insira um valor para efetuar a operação!");
        }
    });
});
