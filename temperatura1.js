$(document).ready(function()
{
	var dato;
	$("#original").focusin(function()
	{
		$(this).css("border-radius","0px");
		$(this).css("border-color","red");
	});
	$("#original").focusout(function()
	{
		$(this).css("border-radius","10px");
		$(this).css("border-color","black");
	});
	$("#calcular_temperatura").click(function()
	{
		//	var d = $("#original").val();
			calculate();
	});
});

function medida(valor_,tipo_)
{
	//alert("Entre en medida");
	this.Valor = valor_;
	this.Tipo = tipo_;
}


medida.prototype.set_valor = function(valor_)
{
		this.Valor = valor_;
}
medida.prototype.set_tipo = function(tipo_)
{
	this.Tipo = tipo_;
}

medida.prototype.get_valor = function()
{
	return this.Valor;
}
medida.prototype.get_tipo = function()
{
	return this.Tipo;
}

function longitud()
{
	medida.call(this,valor,tipo);
	this.categoria = "Unidad de longitud";
}
longitud.prototype = new medida();

function masa(valor,tipo)
{
		medida.call(this,valor,tipo)
		this.categoria = "Unidad de masa";
}
masa.prototype = new medida();


function temperatura(valor,tipo)
{
	medida.call(this,valor,tipo);
	this.Categoria = "Temperatura";
	this.regexp = /^\s*([-+]?\d+(?:\.\d+)?(?:e[+-]?\d+)?)\s*([fFcC])\s*$/i;
}
temperatura.prototype = new medida();

temperatura.prototype.Cambio_aC = function()
{
	this.Valor = (this.Valor-32)*5/9;
}
temperatura.prototype.Cambio_aF = function()
{
	this.Valor = (this.Valor * 9/5)+32;
}
function calculate()
{
	//Caso solo para temperatura
	var result;
	var original = document.getElementById("original");
	var temp = original.value;

	var t1 = new temperatura();

	var expresion_regular = t1.regexp;
	var m = temp.match(expresion_regular);

	if(m)
	{
				t1.set_valor(m[1]);
				t1.set_tipo(m[2]);

				if( t1.get_tipo() =='c' || t1.get_tipo() == 'C')
				{
						t1.Cambio_aF();
						result = t1.get_valor();
						result = result.toFixed(2) + " Farenheit";
				}
				else
				{
						t1.Cambio_aC();
						result = t1.get_valor();
						result = result.toFixed(2) + " Celsius";
				}
			imprimir_resultado(result);
	}else
	{
		converted.innerHTML = "ERROR! Try something like '-4.2C' instead";
	}
}

function imprimir_resultado(resultado)
{
	$("#resultado").fadeIn();
	converted.innerHTML = resultado;
}
