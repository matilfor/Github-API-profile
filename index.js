$.ajax("https://api.github.com/users/matilfor").done(function(data){
    $("#img").append('<img src="' + data.avatar_url + '" />');    
    $("#name").append(data.name);
    $("#blog").append(data.blog);
    $("#num-repos").append(data.public_repos);
});

$.ajax("https://api.github.com/users/matilfor/repos").done(function(data){
    var repoTable = $("#repos");
    for(let i=0; i < data.length; i++){
        var row = $('<tr class="row"></tr>');
        var dataName = "<td>"+ data[i].name +"</td>"
        var dataDesc = "<td>"+ data[i].description +"</td>"
        var dataUrl = "<td>"+ data[i].url +"</td>"
        row.append(dataName);
        row.append(dataDesc);
        row.append(dataUrl)
        repoTable.append(row);
    }
});