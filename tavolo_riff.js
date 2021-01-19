var t_w = window.innerWidth;
var t_h = window.innerHeight;

var num_cards = 12


var x_card = 30;
var y_card = 30;

var screen_w = 400;
var screen_h = 252;


var fondo = 0


function setup_tavolo() {
	createCanvas(t_w,t_h);
	background("#ac80ff")
	var name_list = [card1,card2]
	drawCards()



}



function draw_tavolo() {
	var t_w_n = window.innerWidth;
	var t_h_n = window.innerHeight;

	if (t_w_n != t_w || t_h_n != t_h){
		t_w = window.innerWidth;
		t_h = window.innerHeight;
		setup_tavolo()
	}
	
	screen()



}


function drawCards(){
	for (ic = 0; ic < num_cards; ic++){
		for (name_c = 0; name_c < 1; name_c++){


			randommm();
			push();
			translate(t_w / 2, t_h / 2);
			rotate(PI / gira);
			image(card1, x_card, y_card, 300, 252);
			noFill()
			stroke(0,255,0)
			rect(x_card, y_card,300, 252)
			pop();

			randommm();
			push();
			translate(t_w / 2, t_h / 2);
			rotate(PI / gira);
			image(card2, x_card, y_card, 300, 252);
			noFill()
			stroke(0,255,0)
			rect(x_card, y_card,300, 252)
			pop();
            
            randommm();
			push();
			translate(t_w / 2, t_h / 2);
			rotate(PI / gira);
			image(card3, x_card, y_card, 300, 252);
			noFill()
			stroke(0,255,0)
			rect(x_card, y_card,300, 252)
			pop();

			randommm();
			push();
			translate(t_w / 2, t_h / 2);
			rotate(PI / gira);
			image(card4, x_card, y_card, 300, 252);
			noFill()
			stroke(0,255,0)
			rect(x_card, y_card,300, 252)
			pop();

			randommm();
			push();
			translate(t_w / 2, t_h / 2);
			rotate(PI / gira);
			image(card5, x_card, y_card, 300, 252);
			noFill()
			stroke(0,255,0)
			rect(x_card, y_card,300, 252)
			pop();

			randommm();
			push();
			translate(t_w / 2, t_h / 2);
			rotate(PI / gira);
			image(card6, x_card, y_card, 300, 252);
			noFill()
			stroke(0,255,0)
			rect(x_card, y_card,300, 252)
			pop();

			randommm();
			push();
			translate(t_w / 2, t_h / 2);
			rotate(PI / gira);
			image(card7, x_card, y_card, 300, 252);
			noFill()
			stroke(0,255,0)
			rect(x_card, y_card,300, 252)
			pop();

			randommm();
			push();
			translate(t_w / 2, t_h / 2);
			rotate(PI / gira);
			image(card8, x_card, y_card, 300, 252);
			noFill()
			stroke(0,255,0)
			rect(x_card, y_card,300, 252)
			pop();

			randommm();
			push();
			translate(t_w / 2, t_h / 2);
			rotate(PI / gira);
			image(card9, x_card, y_card, 300, 252);
			noFill()
			stroke(0,255,0)
			rect(x_card, y_card,300, 252)
			pop();

			randommm();
			push();
			translate(t_w / 2, t_h / 2);
			rotate(PI / gira);
			image(card10, x_card, y_card, 300, 252);
			noFill()
			stroke(0,255,0)
			rect(x_card, y_card,300, 252)
			pop();


		}
    }

    
}


function randommm(){
	x_card = random(-t_w/1.5, t_w/1.5)
	y_card = random(-t_h/1.5, t_h/1.5)
	gira = random(1)
}


function screen(){
	if (mouseX > t_w/2-screen_w/2 && mouseX < t_w/2+screen_w/2 && mouseY > t_h/2-screen_h/2 &&  mouseY < t_h/2+screen_h/2){
		push();
		translate(t_w/2-screen_w/2,t_h/2-screen_h/2);
		fill(50)
		stroke(255)
		strokeWeight(5)
		rect(0,0,screen_w,screen_h);
		pop();

		// push();
		// translate(t_w/2,t_h/2);
		// fill("#f92472")
		// noStroke()
		// ellipse(-10,-10,20,20)
		// pop();

	}else{
		push();
		translate(t_w/2-screen_w/2,t_h/2-screen_h/2);
		fill(0)
		stroke(255)
		strokeWeight(5)
		rect(0,0,screen_w,screen_h);
		pop();
	}






}


function clicked(){
	if (mouseX > t_w/2-screen_w/2 && mouseX < t_w/2+screen_w/2 && mouseY > t_h/2-screen_h/2 &&  mouseY < t_h/2+screen_h/2){
		console.log("ciao");
		date_tavolo = false;
	}
}



