var copyThot,openEssay,saveEssay,saveHtml,saveText;window.onload=function(){var e,t,a,n,s,o,r;return window.zclip=new ZeroClipboard(document.getElementById("copy-thot")),window.sentiment=new Sentimood,window.droptions={readAsDefault:"Text",dragClass:"drop",on:{load:function(e,t){var a;return a=JSON.parse(e.target.result),$("#name").val(a.head.name),$("#title").val(a.head.title),$("#date-text").text(a.head.date),$("#th").val(a.para.thesis),$("#co").val(a.para.conclusion),$("#ts1").val(a.bp1.ts),$("#ex1").val(a.bp1.ex),$("#cs1").val(a.bp1.cs),$("#ts2").val(a.bp2.ts),$("#ex2").val(a.bp2.ex),$("#cs2").val(a.bp2.cs),$("#ts3").val(a.bp3.ts),$("#ex3").val(a.bp3.ex),$("#cs3").val(a.bp3.cs),$("#open-from-save").notify("Essay loaded successfully.","success")},error:function(e,t){return"undefined"!=typeof console&&null!==console&&console.log(e.target.error),$("#open-from-save").notify("There was an error loading your file.")},skip:function(e,t){return alert("This file could not be read.")}}},FileReaderJS.setupDrop(document.getElementById("open-from-save"),window.droptions),$("#open-from-save").bind("dragenter",function(){return $("#open-from-save").addClass("drop"),$("#save-text").addClass("pacman-scale").html("<div></div><div></div><div></div><div></div>")}),$("#open-from-save").bind("dragleave",function(){return $("#open-from-save").removeClass("drop"),$("#save-text").removeClass("pacman-scale").html("Open")}),$("#open-from-save").bind("drop",function(){return $("#open-from-save").removeClass("drop"),$("#save-text").removeClass("pacman-scale").html("Open")}),$('[data-toggle="tooltip"]').tooltip(),zclip.on("ready",function(){return"undefined"!=typeof console&&null!==console?console.log("ZeroClipboard is ready!"):void 0}),t=new Date,o=t.getUTCMonth(),a=t.getUTCDate(),r=t.getUTCFullYear(),s=["January","February","March","April","May","June","July","August","September","October","November","December"],n=s[o],e=n+" "+a+", "+r,document.getElementById("date-text").innerHTML=e},copyThot=function(){var e;return e=$("#name").val()+"\r"+$("#date-text").text()+"\r"+$("#title").val()+"\n	"+$("#th").val()+("\r	"+$("#ts1").val()+" "+$("#ex1").val()+" "+$("#cs1").val()+"\r	")+($("#ts2").val()+" "+$("#ex2").val()+" "+$("#cs2").val()+"\r	")+($("#ts3").val()+" "+$("#ex3").val()+" "+$("#cs3").val()+"\r	")+(""+$("#co").val()),zclip.on("copy",function(t){return function(t){var a;return a=t.clipboardData,a.setData("text/plain",e)}}(this)),zclip.on("error",function(t){return function(t){return window.prompt("Copy to clipboard:\nCtrl+C, Enter",e)}}(this))},saveText=function(){var e,t;return e=$("#name").val()+"\r\n"+$("#date-text").text()+"\r\n"+$("#title").val()+"\n\n	"+$("#th").val()+("\r\n	"+$("#ts1").val()+" "+$("#ex1").val()+" "+$("#cs1").val()+"\r\n	")+($("#ts2").val()+" "+$("#ex2").val()+" "+$("#cs2").val()+"\r\n	")+($("#ts3").val()+" "+$("#ex3").val()+" "+$("#cs3").val()+"\r\n	")+(""+$("#co").val()),t=new Blob([e],{type:"text/plain;charset=utf-8"}),saveAs(t,$("#title").val())},saveHtml=function(){var e,t,a;return e={head:{name:$("#name").val(),title:$("#title").val(),date:$("#date-text").text()},para:{thesis:marked($("#th").val()),conclusion:marked($("#co").val())},bp1:marked($("#ts1").val()+" "+$("#ex1").val()+" "+$("#cs1").val()),bp2:marked($("#ts2").val()+" "+$("#ex2").val()+" "+$("#cs2").val()),bp3:marked($("#ts3").val()+" "+$("#ex3").val()+" "+$("#cs3").val())},t='<!DOCTYPE html> <html lang="en"> <head> <meta charset="utf-8"> <meta http-equiv="X-UA-Compatible" content="IE=edge"> <meta name="viewport" content="width=device-width, initial-scale=1"> <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags --> <title>'+e.head.title+'</title> <!-- Bootstrap --> <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" integrity="sha512-dTfge/zgoMYpP7QbHy4gWMEGsbsdZeCXz7irItjcC3sPUFtf0kuFbDz/ixG7ArTxmDjLXDmezHubeNikyKGVyQ==" crossorigin="anonymous"> <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries --> <!-- WARNING: Respond.js doesn\'t work if you view the page via file:// --> <!--[if lt IE 9]> <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script> <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script> <![endif]--> <!-- styles --> <style> .container { /* padding */ padding: 0.5in; /* font stuff */ font-family: "Times New Roman", sans-serif; font-size: 12pt; } .title { width: 100%; text-align: center; font-weight: 600; } </style> </head> <body> <div class="container"> <p>'+e.head.name+"</p> <p>"+e.head.date+'</p> <p class="title">'+e.head.title+"</p> <p>"+e.para.thesis+"</p> <p>"+e.bp1+"</p> <p>"+e.bp2+"</p> <p>"+e.bp3+"</p> <p>"+e.para.conclusion+"</p> </div> </body> </html>",a=new Blob([t],{type:"text/html;charset=utf-8"}),saveAs(a,$("#title").val()+".html")},saveEssay=function(){var e,t;return e={head:{name:$("#name").val(),title:$("#title").val(),date:$("#date-text").text()},para:{thesis:$("#th").val(),conclusion:$("#co").val()},bp1:{ts:$("#ts1").val(),ex:$("#ex1").val(),cs:$("#cs1").val()},bp2:{ts:$("#ts2").val(),ex:$("#ex2").val(),cs:$("#cs2").val()},bp3:{ts:$("#ts3").val(),ex:$("#ex3").val(),cs:$("#cs3").val()}},t=new Blob([JSON.stringify(e)],{type:"application/json;charset=utf-8"}),saveAs(t,$("#title").val()+".esma")},openEssay=function(){return FileReaderJS.setupInput(document.getElementById("fileinput"),window.droptions),$("#fileinput").trigger("click")},window.onerror=function(e){return RegExp(/Uncaught SyntaxError: Unexpected token ./g).test(e)?$.notify('Error:\nThe "essay" you tried to load was not an essay. Please stop uploading cat pictures to EssayMaker, it won\'t do anything but waste your time.',"error"):void 0};