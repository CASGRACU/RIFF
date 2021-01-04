let list_mindRiff = []

var sizeText_stz4 = 12
var interLine = sizeText_stz4*1.6

var marginLeft = 50
var marginLeft_loop = w/2-10

function setup_mindRiff(){
	textSize(sizeText_stz4);
	song.play();
	
	// list_mindRiff = list_mindRiff_inside
	
	cambio_stz_n = cambio_stz_n + 1
	random_speed()
}


function draw_mindRiff(){
	textSize(sizeText_stz4);
	background(1)
	drawList()
}




function drawList(){


	len_mindRiff = list_mindRiff.length

	for (el_mRiff = 0; el_mRiff < len_mindRiff; el_mRiff++){

		single_elementListRiff_s = list_mindRiff[len_mindRiff-(el_mRiff+1)]

		len_sing_el = single_elementListRiff_s.length

		alt_blocco = interLine*(len_sing_el+1)

		fill("#ac80ff");
		text("––––––––––––––––––––––––––––––––––––––",         marginLeft, h - ((interLine*8)+(alt_blocco*el_mRiff)));
		text("enter: " + single_elementListRiff_s[0],       marginLeft, h - ((interLine*7)+(alt_blocco*el_mRiff)));
		text("change_room_n.: " + single_elementListRiff_s[5],  marginLeft, h - ((interLine*6)+(alt_blocco*el_mRiff)));
		text("loop_RIFF: " + single_elementListRiff_s[4], 	   marginLeft, h - ((interLine*5)+(alt_blocco*el_mRiff)));
		text("var_ind: " + single_elementListRiff_s[1],        marginLeft, h - ((interLine*4)+(alt_blocco*el_mRiff)));
		text("var_prsop: " + single_elementListRiff_s[2],      marginLeft, h - ((interLine*3)+(alt_blocco*el_mRiff)));
		text("var_speed: " + single_elementListRiff_s[3],        marginLeft, h - ((interLine*2)+(alt_blocco*el_mRiff)));
		text("––––––––––––––––––––––––––––––––––––––",         marginLeft, h - ((interLine*1)+(alt_blocco*el_mRiff)));

	}


	text("loop_RIFF: " + loop_RIFF, marginLeft_loop, (interLine*1)+(alt_blocco*1))
}


function capture_stateMindRiff(){

	single_elementListRiff = [form_stz,var_ind,var_prosp,var_vel,loop_RIFF, cambio_stz_n]

	len_mindRiff = list_mindRiff.length

	single_elementListRiff_c = list_mindRiff[len_mindRiff-1]


	if (len_mindRiff != 0){
		if (single_elementListRiff[0] != single_elementListRiff_c[0]){
			append(list_mindRiff,single_elementListRiff)
		}
	}else{
		append(list_mindRiff,single_elementListRiff)
		
	}

}

