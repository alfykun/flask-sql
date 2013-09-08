$(function(){

	function showCounts()
	{
	
		if (!supports_html5_storage())
		{
			alert("HTML5 local storage not supported");
			return false;
		}
	
		countK = (localStorage["countK"] || 0);
		countB = (localStorage["countB"] || 0);
		
		$("#badgeK").html(countK);
		$("#badgeB").html(countB);
	}

	function supports_html5_storage() {
		try {
			return 'localStorage' in window && window['localStorage'] !== null;
		} catch (e) {
			return false;
		}
	}
	
	function incrementB()
	{
		if (!supports_html5_storage())
		{
			alert("HTML5 local storage not supported");
			return false;
		}
		
		countB = (localStorage["countB"] || 0);
		localStorage["countB"] = parseInt(countB,10) + 1;
		
		showCounts();
	}
	
	function incrementK()
	{
		if (!supports_html5_storage())
		{
			alert("HTML5 local storage not supported");
			return false;
		}
		
		countB = (localStorage["countK"] || 0);
		localStorage["countK"] = parseInt(countK,10) + 1;
		
		showCounts();
	}
    
    $("#boom").click(function(){
        //horizontal
        allLines = $("#ta").val();
        countBreaks =(allLines.match(/\n/g)||[]).length;
        
       	if (countBreaks>=1) {

        lines = allLines.split("\n");
        
        joinedLine = "";
        
        for (lineIndex in lines)
        {
            if (lines[lineIndex].trim().length == 0)
                continue;
            joinedLine += '"' + lines[lineIndex] + '",';
        }
        
        joinedLine = joinedLine.substring(0,joinedLine.length-1);
        
        $("#ta").val(joinedLine);
        
		incrementB();
		count=0;
		};
    });
    
    $("#koom").click(function(){
        
        oneLine = $("#ta").val();
        countCommas =(oneLine.split(",").length - 1)
        if (countCommas>=1) {

        oneLine = oneLine.replace(/\"/g,"");
        oneLine = oneLine.replace(/,/g,"\n");
        
        $("#ta").val(oneLine);
		
		incrementK();
		};
    });
	
	showCounts();
	 
});