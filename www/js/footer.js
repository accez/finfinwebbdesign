$.getJSON('/json/footer.json', text);


function text(data){
    let x=1;

	if(language === "swedish"){
		$('.test').text(data["one"].sv);
		$('.test1').text(data["two"].sv);
	}
	else if(language === "english"){
		$('.test').text(data["one"].en);
		$('.test1').text(data["two"].en);
	}
}


$('.svflag').click(function(){
    language="swedish";
    $.getJSON('/json/footer.json', text);
});
$('.ukflag').click(function(){
     language="english";
     $.getJSON('/json/footer.json', text);
});
