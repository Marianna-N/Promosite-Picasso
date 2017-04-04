	var previousColorElement;
	var previousThicknessElement;
	var canv,ctx, pen,thick;
	var isDrawing;
	
	window.addEventListener("load", function(){
		canv = document.querySelector("canvas");
		
		ctx = canv.getContext("2d");
		pen = document.getElementsByClassName("Pen");
		changeColor('rgb(0,0,0)', pen[0]);
		thick = document.getElementsByClassName("thick1")[0];
		changeThickness(3, thick);
		
		ctx.lineJoin = "round";
		
		canv.onmousedown = startDrawing;  //начинаем рисовать
		canv.onmouseup = stopDrawing;		//останавливаем рисование при отжатой кнопке и при выходе за рамки канвы
		canv.onmouseout = stopDrawing;
		canv.onmousemove = draw;			//собственно рисуем 
	});
		
	
	function changeColor(color, imgElement)
	{
	    // 	Меняем текущий цвет рисования
		ctx.strokeStyle = color;
		
		// Меняем стиль div, по которому щелкнули
		imgElement.className = imgElement.className + " Selected";
		
		// Возвращаем ранее выбранный элемент в нормальное состояние
		if (previousColorElement != null)
		   {previousColorElement.className = previousColorElement.className.replace( " Selected","");}
		   
		previousColorElement = imgElement;
	}
	
	function changeThickness (thickness, imgElement)
	{
    // Изменяем текущую толщину линии
	ctx.lineWidth = thickness;
	
	// Меняем стиль элемента <img>, по которому щелкнули
	imgElement.className = imgElement.className + " Selected";
	
	// Возвращаем ранее выбранный элемент <img> в нормальное состояние
	if (previousThicknessElement != null)
	   {previousThicknessElement.className = previousThicknessElement.className.replace( " Selected","");}
	   
	previousThicknessElement = imgElement;
	}

	function startDrawing(e) {
		// Начинаем рисовать
		isDrawing = true;
		
		// Создаем новый путь (с текущим цветом и толщиной линии) 
		ctx.beginPath();
		
		// Нажатием левой кнопки мыши помещаем "кисть" на холст
		ctx.moveTo(e.layerX, e.layerY);
}
	function draw(e) {
		if (isDrawing == true)
		{
		  	// Определяем текущие координаты указателя мыши на канве
			
			var x = e.layerX;
			var y = e.layerY;
						// Рисуем линию до новой координаты
			ctx.lineTo(x, y);
			ctx.stroke();
			
		}
	}
	function stopDrawing() {
		isDrawing = false;	
	}
	

	function remove_canvas()
	{
		//var canv1 = document.querySelector("canvas");
		//var ctx1 = canv.getContext("2d");
		ctx.clearRect(0,0,canv.width,canv.height);
	}

