$(document).ready(function(){
    $('form').submit(function(e){
        e.preventDefault();
        $.ajax({
            url:"https://api.deckbrew.com/mtg/cards?color=red&color=blue&rarity=rare&name=fire",
            method:"get",
            success:function(response){
                console.log (response);
                var html_str = "";
                for (i=0; i<response.length; i++){
                    html_str += "<tr>";
                    html_str += "<td>"+response[i].name+"</td>";
                    html_str += "<td>"+response[i].cmc+"</td>";
                    html_str += "<td>"+response[i].types[0]+"</td>";
                    html_str += "<td>"+response[i].editions[0].artist+"</td>";
                    html_str += "<td>"+response[i].editions[0].flavor+"</td>";
                    html_str += "</tr>";    
                }
                $("#card").html(html_str);
            }
        },"json");
    })
})
