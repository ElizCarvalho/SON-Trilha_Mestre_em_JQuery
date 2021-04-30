//Difere do 'ready' pq só executa depois q td tiver pronto.. inclusive carregamento de imagens
// $(window).on('load',function(){
//     alert($('body').html())
// });

//executa assim q o carregamento do html ficar pronto 
//(carregamento de img não seria o caso... ele executaria antes)
$(document).ready(function(){

    //Ja carrega a primeira vez sem precisar clicar
    $("#conteudo").load('pages/home.html')

    //alert($('body').html())
    $('#menu a').click(function(){
        //pega o valor da propriedade .. se quiser colocar valor seria .attr('href','novo valor')
        let url = $(this).attr('href'); 

        $.ajax({
            method: "GET",
            url: url,
        })
        .done(function(response){
            $("#conteudo").html(response);
        });
        return false; //se tiver false... mesmo com o link certinho não funcionaria (estaria block)
    })
});