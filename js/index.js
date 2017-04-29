console.log($("#go"));

function hello() {

    var name = $("#name").val();
    var age = $("#age").val();
    var sr = ""
    var abc = 0;
    var abcd = 0;
    $("#age").val("");
    $("#name").val("");
    




    if($("#robot").prop("checked") ){
		sr = sr + "  你是機器人"

	}else{
		sr = sr + "  你不是機器人"
		abc = abc + 1
	}
	if($("#smart").prop("checked") ){
		sr = sr + "   你是聰明人"
		abcd = abcd + 1
	}else{
		sr = sr + "   你不是聰明人"
	}

	alert("name:    " + name + "    age: " + age + sr);


	if (abc == 1) {
		alert("你的gmail已被駭客獲取, 他將融合行政部的資料, 並派警察抓你, 你現在是通緝犯")
	}
	if (abcd == 1) {
		if (abc == 1) {
			alert("你將被川普抓去當計算者")
		}else{
			alert("你將被光明會抓去當囚犯")
		}
	}
$("#smart").prop("checked", false)
$("#robot").prop("checked", false)

}

$("#go").on("click", hello);


















