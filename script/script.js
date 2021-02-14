var love = setInterval(function(){
    var r_num = Math.floor(Math.random() * 40) + 1;
      var r_size = Math.floor(Math.random() * 65) + 10;
      var r_left = Math.floor(Math.random() * 100) + 1;
      var r_bg = Math.floor(Math.random() * 25) + 100;
    var r_time = Math.floor(Math.random() * 5) + 5;
    $('.bg_heart').append("<div class='heart' style='width:"+r_size+"px;height:"+r_size+"px;left:"+r_left+"%;background:rgba(255,"+(r_bg-25)+","+r_bg+",1);-webkit-animation:love "+r_time+"s ease;-moz-animation:love "+r_time+"s ease;-ms-animation:love "+r_time+"s ease;animation:love "+r_time+"s ease'></div>");
    
    $('.bg_heart').append("<div class='heart' style='width:"+(r_size-10)+"px;height:"+(r_size-10)+"px;left:"+(r_left+r_num)+"%;background:rgba(255,"+(r_bg-25)+","+(r_bg+25)+",1);-webkit-animation:love "+(r_time+5)+"s ease;-moz-animation:love "+(r_time+5)+"s ease;-ms-animation:love "+(r_time+5)+"s ease;animation:love "+(r_time+5)+"s ease'></div>");
    
    
  },500);
  
  var i = 0;
  var txt1 = "Amada Diana amor de mi vida.....!  <<               En este hermoso día tan especial tengo unas palabras que decirte. <<<                Eres mi primer y último amor en mi vida...!                                                                           > Cuando te vi por primera vez < Me hiciste sentir el hombre mas vivo y feliz del mundo.  <<                  Pasaron los dias < y nos acercamos mutuamente....! <<                           Te empecé a conocer que aprendí a leer tu mirada, tus pensamientos resuenan en mi mente y tus sentimientos los siento en mi corazón...!                                                     > Todo sobre ti siempre me interesa...!                     << En mi pasado te amé sin conocerte, te amo en mi presente y en el futuro te amaré eternamente ...!                                                     > Eres la mujer que esperé durante toda mi vida y gracias a Dios que llegaste a darme felicidad, amor, paz y esperanza. Eres mi medicina....!                    << Diana Karen Maldonado Lino eres lo mejor que me ha pasado en toda mi vida, nunca dudes lo mucho que te amo. Si volviera a nacer te volviera a elegir....!                                                             >Con mucho cariño el amor de tu vida <Rubén Darío Martínez Uribe.....! |                  <<<< Feliz San Valentin mi princesa consentida. Te amo mucho ...!";
  var speed = 50;
  typeWriter();
  function typeWriter() {
    if (i < txt1.length) {        
       if(txt1.charAt(i)=='<')
        document.getElementById("text1").innerHTML += '</br>'
      else if(txt1.charAt(i)=='>')
        document.getElementById("text1").innerHTML = ''
      else if(txt1.charAt(i)=='|')
        {
          $(".bg_heart").css("background-image","url('https://i.ibb.co/KWmXYTQ/beso.jpg')");
        }
      else
      
        document.getElementById("text1").innerHTML += txt1.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
      
    }
  }