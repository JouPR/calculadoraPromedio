let nombreDelAlumno=prompt('Ingrese el nombre del Alumno')
let materia=prompt('Ingrese el nombre de la materia')
let nota1=parseInt(prompt('Ingrese la primera nota'))
while(nota1<0 || nota1>10){
    nota1=parseInt(prompt('Nota fuera de rango de 0 a 10, ERROR'))
}
let nota2=parseInt(prompt('Ingrese la segunda nota'))
while(nota2<0 || nota2>10){
    nota2=parseInt(prompt('Nota fuera de rango de 0 a 10, ERROR'))
}
let nota3=parseInt(prompt('Ingrese la tercera nota'))
while(nota3<0 || nota3>10){
    nota3=parseInt(prompt('Nota fuera de rango de 0 a 10, ERROR'))
}
let Promedio=((nota1+nota2+nota3)/3)
if (Promedio>=7){
    alert(nombreDelAlumno +",¡felicidades! Has aprobado con un promedio de" + Promedio)
}else{
    alert(nombreDelAlumno +", gracias por tu esfuerzo. Nos vemos pronto en clase. El promedio obtenido es, " + Promedio)
}