function compute()
{
    var principal = document.getElementById("principal").value;

    if (principal <= 0) {
	window.alert("Enter a positive number");
	document.getElementById("principal").focus();
	return;
    }

    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    var amount = (principal * years * rate) / 100;
    amount = amount.toFixed(2);
    var year = new Date().getFullYear() + parseInt(years) - 1;
    
    var result_html = "If you deposit <span class=\"highlighted_num\">"+principal+"</span>,\<br\>at an interest rate of <span class=\"highlighted_num\">"+rate+"%</span>.\<br\>You will receive an amount of <span class=\"highlighted_num\">"+amount+"</span>,\<br\>in the year <span class=\"highlighted_num\">"+year+"</span>\<br\>";
    document.getElementById("result").innerHTML = result_html;
}

function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval + "%";
}

function resetInput() {
    document.getElementById("principal").value = "";
    document.getElementById("rate").value = "10.25";
    document.getElementById("rate_val").innerText = "10.25%"
    document.getElementById("years").value = "1"
    document.getElementById("result").innerText = ""
}