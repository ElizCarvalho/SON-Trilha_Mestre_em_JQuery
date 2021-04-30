//Difere do 'ready' pq só executa depois q td tiver pronto.. inclusive carregamento de imagens
// $(window).on('load',function(){
//     alert($('body').html())
// });

//executa assim q o carregamento do html ficar pronto 
//(carregamento de img não seria o caso... ele executaria antes)
$(document).ready(function(){
    //alert($('body').html())
    $('#menu a').click(function(){
        return true; //se tiver false... mesmo com o link certinho não funcionaria (estaria block)
    })
});