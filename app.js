document.getElementById('start').addEventListener("click",function(){
  //obtener el nombre y guardarlo en una variable
  const nombre = document.getElementById('name').value;

  document.getElementById('saludo').innerHTML = "Hola " + nombre + ", elige un tema para comenzar a jugar.";
  //Esconder divs obteniendo su id y usando style.display
  //style.display='como se quiere mostrar'  none,inline,block,inline-block
  //alert(nombre);

  //document.getElementById('resultado1').style.display = 'none';

  document.getElementById("formulario").classList.add("hide");
  //style.display= 'none';

  //document.getElementById('nombre').style.display = 'none';
  //document.getElementById('name').style.display = 'none';
  //document.getElementById('start').style.display = 'none';
  document.getElementById('temas').classList.replace("hide","showInline");
  //style.display = 'inline';

  document.getElementById('tema1').classList.replace("hide","showInline");
  //style.display = 'inline';

  document.getElementById('tema2').classList.replace("hide","showInline");
  //style.display = 'inline';

  //document.getElementById('resultado1').style.display = 'none';
  //document.getElementById('resultado2').style.display = 'none';
});


document.getElementById('tema1').addEventListener("click",function(){
  document.getElementById('first').classList.replace("hide","showInlineBlock");
  //style.display = 'inline-block';
  document.getElementById('saludo').classList.add("hide");
  //style.display = 'none';
  document.getElementById('temas').style.display = 'none';
  document.getElementById('tema1').style.display = 'none';
  document.getElementById('tema2').style.display = 'none';

});

document.getElementById('tema2').addEventListener("click",function(){
  document.getElementById('primera').style.display = 'inline-block';
  document.getElementById('saludo').style.display = 'none';
  document.getElementById('temas').style.display = 'none';
  document.getElementById('tema1').style.display = 'none';
  document.getElementById('tema2').style.display = 'none';
});


/*
 puntos = 0
 obtener las alternativas
 obtener la alternativa seleccionada con checked
 comparar el valor con la respuesta correcta
 aumentar un punto
 retorna el puntaje
*/


function punto1(){
  document.getElementById('first').style.display='none';
  document.getElementById('second').style.display='block';
  let puntos = 0;
  const alternativa = document.getElementsByName('question1');
  let resultado = " ";
  for (let i = 0; i < alternativa.length; i++) {
    if (alternativa[i].checked){
      resultado = alternativa[i].value;
      console.log(resultado)

      if(resultado == "misti"){
        puntos++;
      }else{
        puntos+=0
      }
      console.log(puntos)
      return puntos;
    }
  }
}

document.getElementById('punto1').addEventListener("click",punto1);

function punto2(){
  document.getElementById('second').style.display='none';
  document.getElementById('third').style.display='block';

  let puntos = 0;
  const alternativa = document.getElementsByName("question2");
  let respuesta = " ";

  for (let i = 0; i < alternativa.length; i++) {
    if(alternativa[i].checked){
      respuesta = alternativa[i].value;
      console.log(respuesta)

      if(respuesta == "huascaran"){
        puntos++;
      }else{
        puntos+=0;
      }
      console.log(puntos)
      return puntos;
    }
  }
}
document.getElementById('punto2').addEventListener("click", punto2);

const punto3 = function() {
  document.getElementById('third').style.display='none';
  let puntos = 0;
  const alternativa = document.getElementsByName("question3");
  let respuesta = " ";

  for (let i = 0; i < alternativa.length ; i++) {
    if(alternativa[i].checked){
      respuesta = alternativa[i].value;
      console.log(respuesta)

      if(respuesta == "cusco"){
        puntos++;
      }else{
        puntos+=0;
      }
      console.log(puntos);
      return puntos;
      }
  }

}

document.getElementById('punto3').addEventListener("click",function(){
  punto3();
  total();
});

document.getElementById('point3').addEventListener("click",function(){
  point3();
  total2();
});

const point1 = function() {
  document.getElementById('primera').style.display='none';
  document.getElementById('segunda').style.display='block';
  let puntos = 0;
  const alternativa = document.getElementsByName('pregunta1');
  let resultado = " ";
  for (let i = 0; i < alternativa.length; i++) {
    if (alternativa[i].checked){
      resultado = alternativa[i].value;
      console.log(resultado)

      if(resultado == "1821"){
        puntos++;
      }else{
        puntos+=0
      }
      console.log(puntos)
      return puntos;
    }
  }
}
document.getElementById('point1').addEventListener("click",point1);

const point2 = function() {
  document.getElementById('segunda').style.display='none';
  document.getElementById('tercera').style.display='block';
  let puntos = 0;
  const alternativa = document.getElementsByName('pregunta2');
  let resultado = " ";
  for (let i = 0; i < alternativa.length; i++) {
    if (alternativa[i].checked){
      resultado = alternativa[i].value;
      console.log(resultado)

      if(resultado == "riva"){
        puntos++;
      }else{
        puntos+=0
      }
      console.log(puntos)
      return puntos;
    }
  }
}
document.getElementById('point2').addEventListener("click",point2);


const point3 = function() {
  document.getElementById('tercera').style.display='none';
  //document.getElementById('tercera').style.display='block';
  let puntos = 0;
  const alternativa = document.getElementsByName('pregunta3');
  let resultado = " ";
  for (let i = 0; i < alternativa.length; i++) {
    if (alternativa[i].checked){
      resultado = alternativa[i].value;
      console.log(resultado)

      if(resultado == "rosa"){
        puntos++;
      }else{
        puntos+=0
      }
      console.log(puntos)
      return puntos;
    }
  }
}

function total(){
  const p1=punto1();
  console.log(p1);
  const p2=punto2();
  console.log(p2);
  const p3=punto3();
  console.log(p3);

  const num = p1+p2+p3;
  const incorrectas= 3-num;

  document.getElementById("resultado1").style.display = 'block';

  document.getElementById("resultado1").innerHTML = "Preguntas correctas: " + num + "<br>" + "Preguntas incorrectas: " + incorrectas;

  console.log(num);
  document.getElementById('volver').style.display='block';
  document.getElementById('otraVez').style.display = 'block';

}

function total2(){
  const p1=point1();
  console.log(p1)
  const p2=point2();
  console.log(p2)
  const p3=point3();
  console.log(p3)

  const num = p1+p2+p3;
  const incorrectas= 3-num;


  document.getElementById("resultado2").style.display = 'block';

  document.getElementById("resultado2").innerHTML = "Preguntas correctas: " + num + "<br>" + "Preguntas incorrectas: " + incorrectas;


  console.log(num);
  document.getElementById('volver').style.display='block';
  document.getElementById('otraVez').style.display = 'block';
}

document.getElementById('otraVez').addEventListener("click",function(){
  document.getElementById('tema1').style.display = 'inline-block';
  document.getElementById('tema2').style.display = 'inline-block';
  document.getElementById("temas").style.display = 'block';
  document.getElementById('resultado1').style.display = 'none';
  document.getElementById('resultado2').style.display = 'none';

  document.getElementById('volver').style.display='none';
  document.getElementById('otraVez').style.display = 'none';
  clear();
});

function clear(){
  document.getElementById("question1").reset();
  document.getElementById("question2").reset();
  document.getElementById("question3").reset();
  document.getElementById("pregunta1").reset();
  document.getElementById("pregunta2").reset();
  document.getElementById("pregunta3").reset();
}
