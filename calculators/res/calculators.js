
$(document).ready(Origin);

function Origin() {
	//Collapser
	$(".section .content-block-holder.head").on('click',function(){
		$(this).parent().toggleClass("collapsed");
	});
}

//Quest Boost
//Global Drop Boost
//Spare Part Boost
function CalculateCostRhodiumQuestBoost(i) {
	$(i + " .content-return .return").hide()
	$(i + " .content-return .return-error").hide()
	if ( $(i + "-Input-Current").val() == '' || $(i + "-Input-Wanted").val() == '' ) {
		return ReturnError(i,"Empty values!");
	}
	var Current = unDo( $(i + "-Input-Current").val() );
	var Wanted = unDo( $(i + "-Input-Wanted").val() );
	var Result = 0;
	if (Current.length == 0 || Wanted.length == 0) {
		return ReturnError(i,"Invalid values!");
	}
	if (! isNumber(Current) && isNumber(Wanted) ) {
		return ReturnError(i,"Invalid values!");
	}
	Current = Number(Current)
	Wanted = Number(Wanted)
	while (Current < Wanted) {
		Current++;
		Result += Math.round(Current * 2);
	}
	$(i + " .content-return").show()
	$(i + " .content-return .return").text(Comma(Result) + " Rhodium Required")
	$(i + " .content-return .return").show()
}

//Global Exp Boost
function CalculateCostRhodiumGlobalExpBoost(i) {
	$(i + " .content-return .return").hide()
	$(i + " .content-return .return-error").hide()
	if ( $(i + "-Input-Current").val() == '' || $(i + "-Input-Wanted").val() == '' ) {
		return ReturnError(i,"Empty values!");
	}
	var Current = unDo( $(i + "-Input-Current").val() );
	var Wanted = unDo( $(i + "-Input-Wanted").val() );
	var Result = 0;
	if (Current.length == 0 || Wanted.length == 0) {
		return ReturnError(i,"Invalid values!");
	}
	if (! isNumber(Current) && isNumber(Wanted) ) {
		return ReturnError(i,"Invalid values!");
	}
	Current = Number(Current)
	Wanted = Number(Wanted)
	while (Current < Wanted) {
		Current++;
		Result += 2;
		Result += Math.floor(Current / 10 - 0.01);
	}
	$(i + " .content-return").show()
	$(i + " .content-return .return").text(Comma(Result) + " Rhodium Required")
	$(i + " .content-return .return").show()
}

//Quint Chance
function CalculateCostSparePartQuintChance() {
	$("#Cost-SparePart-QuintChance .content-return .return").hide()
	$("#Cost-SparePart-QuintChance .content-return .return-error").hide()
	if ( $("#Cost-SparePart-QuintChance-Input-Current").val() == '' || $("#Cost-SparePart-QuintChance-Input-Wanted").val() == '' || $("#Cost-SparePart-QuintChance-Input-Scrapyard").val() == '' ) {
		return ReturnError("#Cost-SparePart-QuintChance","Empty values!");
	}
	var Current = unDo( $("#Cost-SparePart-QuintChance-Input-Current").val() );
	var Wanted = unDo( $("#Cost-SparePart-QuintChance-Input-Wanted").val() );
	var Scrapyard = unDo( $("#Cost-SparePart-QuintChance-Input-Scrapyard").val() );
	var Result = 0;
	if (Current.length == 0 || Wanted.length == 0 || Scrapyard.length == 0) {
		return ReturnError("#Cost-SparePart-QuintChance","Improper Lengths!!");
	}
	if (! isNumber(Current) && isNumber(Wanted) && isNumber(Scrapyard) ) {
		return ReturnError("#Cost-SparePart-QuintChance","Invalid values!");
	}
	Current = Number(Current);
	Wanted = Number(Wanted);
	Current *= 10;
	Wanted *= 10;
	while (Current < Wanted) {
		Current++;
		Result += Math.round(Math.pow(0.99,Scrapyard) * Current * 20);
		//ORIGINAL QUINT
		//Old math for the old quint made by Zampa
		//Math.round(Math.pow(0.99,Scrapyard) * Current * 20);
	}
	$("#Cost-SparePart-QuintChance .content-return").show()
	$("#Cost-SparePart-QuintChance .content-return .return").text(Comma(Result) + " Spare Parts Required")
	$("#Cost-SparePart-QuintChance .content-return .return").show()
}

//Resource Boost
function CalculateCostSparePartResourceBoost() {
	$("#Cost-SparePart-ResourceBoost .content-return .return").hide()
	$("#Cost-SparePart-ResourceBoost .content-return .return-error").hide()
	if ( $("#Cost-SparePart-ResourceBoost-Input-Current").val() == '' || $("#Cost-SparePart-ResourceBoost-Input-Wanted").val() == '' || $("#Cost-SparePart-ResourceBoost-Input-Scrapyard").val() == '' ) {
		return ReturnError("#Cost-SparePart-ResourceBoost","Empty values!");
	}
	var Current = unDo( $("#Cost-SparePart-ResourceBoost-Input-Current").val() );
	var Wanted = unDo( $("#Cost-SparePart-ResourceBoost-Input-Wanted").val() );
	var Scrapyard = unDo( $("#Cost-SparePart-ResourceBoost-Input-Scrapyard").val() );
	var Result = 0;
	if (Current.length == 0 || Wanted.length == 0 || Scrapyard.length == 0) {
		return ReturnError("#Cost-SparePart-ResourceBoost","Improper Lengths!!");
	}
	if (! isNumber(Current) && isNumber(Wanted) && isNumber(Scrapyard) ) {
		return ReturnError("#Cost-SparePart-ResourceBoost","Invalid values!");
	}
	Current = Number(Current);
	Wanted = Number(Wanted);
	Current *= 10;
	Wanted *= 10;
	while (Current < Wanted) {
		Current++;
		Result += Math.round(Math.pow(0.99,Scrapyard) * Current * 10);
		//ORIGINAL RESOURCE BOOST
		//Old math for the resource boost made by Zampa
		//Math.round(Math.pow(0.99,Scrapyard) * Current * 10);
	}
	$("#Cost-SparePart-ResourceBoost .content-return").show()
	$("#Cost-SparePart-ResourceBoost .content-return .return").text(Comma(Result) + " Spare Parts Required")
	$("#Cost-SparePart-ResourceBoost .content-return .return").show()
}

//Ingot Drop Rate
function CalculateDropRateRhodiumIngots() {
	$("#DropRate-RhodiumIngots .content-return .return").hide()
	$("#DropRate-RhodiumIngots .content-return .return-error").hide()
	if ( $("#DropRate-RhodiumIngots-Input-DropBoost").val() == '' || $("#DropRate-RhodiumIngots-Input-WishingWell").val() == '' ) {
		return ReturnError("#DropRate-RhodiumIngots","Empty values!");
	}
	var DropBoost = unDo( $("#DropRate-RhodiumIngots-Input-DropBoost").val() );
	var WishingWell = unDo( $("#DropRate-RhodiumIngots-Input-WishingWell").val() );
	if (DropBoost.length == 0 || WishingWell.length == 0) {
		return ReturnError("#DropRate-RhodiumIngots","Improper Lengths!!");
	}
	if (! isNumber(DropBoost) && isNumber(WishingWell) ) {
		return ReturnError("#DropRate-RhodiumIngots","Invalid values!");
	}
	var Result = 6;
	DropBoost = Number(DropBoost) / 100 + 1;
	WishingWell = Number(WishingWell) / 100 + 1;
	Result /= DropBoost;
	Result /= WishingWell;
	Result *= 1000;
	Result = Math.round(Result);
	$("#DropRate-RhodiumIngots .content-return").show()
	$("#DropRate-RhodiumIngots .content-return .return").text("One Rhodium Ingot Per " + Comma(Result) + " Actions.")
	$("#DropRate-RhodiumIngots .content-return .return").show()
}

function ReturnError(i,t) {
	$(i + " .content-return .return").hide();
	$(i + " .content-return .return").text('');
	$(i + " .content-return .return-error").text(t);
	$(i + " .content-return .return-error").show();
	$(i + " .content-return").show();
	return false
}

function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function Comma(x) {
    var t = x.toString().split(".");
    t[0] = t[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return t.join(".");
}

function unDo(n) {
	n = String(n)
	n = n.replace(/,/g,'')
	n = n.replace(/%/g,'')
	return n
}