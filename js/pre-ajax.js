"use strict";

$(document).ready(function(){

    var people = [
        {
            name:"Fred",
            favColor:"red"
        },
        {
            name:"Sally",
            favColor:"blue"

        },
        {
            name:"Tom",
            favColor:"yellow"

        }

    ];

    $("#add-names-button").click(function(){
        $("#names-list").html("<ul id='list'></ul>");
        $.each(people,function(i,person){
            $("#list").append('<li style= color:' + person.favColor + '>' + person.name + "</li>");

        })
    });


});

/* function buildList(arrObjs){
    var output = "";
    output += "<ul>";
    arrObjs.forEach(function(person){
        output += "<li>" + person.name + "</li>";
    });
    output += "<ul>";
    return output;
  }

  $('#add-names-button').click(function(){
    $('#names-list').html(buildList(people));
    });

 });

 */