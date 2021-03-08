var intervalo = 3000;
function slide1(){
	document.getElementById('img').src="fotos/banner1.png"
	setTimeout("slide2()",intervalo);
}
function slide2(){
	document.getElementById('img').src="fotos/banner2.png"
	setTimeout("slide3()",intervalo);
}
function slide3(){
	document.getElementById('img').src="fotos/banner3.jpg"
	setTimeout("slide1()",intervalo);
}

function calcular(){
				
				var operacao= document.getElementById('operacao').value;
				var num1= document.getElementById('num1').value;
				var num2= document.getElementById('num2').value;
				num1= parseFloat (num1);
				num2 = parseFloat(num2);
			
				

				 var resultado = null;
				 
				switch(operacao){
					case"1":
					resultado =num1 - num2;
					break;
					case"2":
					resultado = num1 + num2;
					break;

					case"3":
					resultado = num1*num2;
					break;

					case'4':
					resultado = num1 / num2;
					break;

					default:
					alert("opção selecionada é inválida");
					return false;
				}
				document.getElementById('resultado').value = resultado;
			}