 let m = document.querySelector('.magazine');
        let magazine = document.getElementById('c1');
        let plus = document.getElementById('p');
        let reload_block = document.querySelector('.Reload-block');
        let reload = document.querySelector('.Reload');
        let only_magazine = document.getElementById('c2');
        let shoot = document.querySelector('.shoot');
        let x = 0;
        let y = 0;

        plus.addEventListener('click', Plus);

        reload.addEventListener('click', Reload);

        shoot.addEventListener('click', Shoot);

        function Shoot() {
           if(y) {
              y--;
              only_magazine.textContent = y;
           	  reload_block.classList.add('minus');
           	     setTimeout(() => {
                    reload_block.classList.remove('minus');
           	     }, 500);
           }

           else if(y <= 0) {
           	 if(confirm('В основном магазине закончился боезапас.. Хотите пополнить его сразу же?')) {
           	 	 x -= 20;
           	 	 y += 20;
               only_magazine.textContent = y;
               magazine.textContent = x;

           	 	alert('Готово');
           	 } else {
                alert('Ну ладно, просто так было бы удобно');
           	 }
           }
        }

        function Plus() {
            x += 10;

            if(x) {
               magazine.textContent = x;	
               m.classList.add('d');
               setTimeout(() => {
                  m.classList.remove('d');
               }, 500);

              if(x >= 500) {
                if(confirm('Больше вы не можете пополнять боезапас... Хотите его сбросить на 100?')) {
                   x -= 100;
                   magazine.textContent = x;
                }
              }
            }
        }

        function Reload() {
            x -= 30;
            y += 30;

            if(y) {
               only_magazine.textContent = y;
               magazine.textContent = x;	
           	   reload_block.classList.add('g');
           	   setTimeout(() => {
                  reload_block.classList.remove('g');
           	   }, 500);
                if(y >= 500) {
                  if(confirm('Больше вы не можете пополнять боезапас.... Хотие его сбросить на 100?')) {
                     y -= 100;
                     only_magazine.textContent = y;
                  }
                }
            }

            if(x < 0) {
                alert('Ваш запас достиг 0, чтобы продолжить пополните боезапас');
                  if(confirm('Хотите пополнить боезапас?')) {
                       x += 40;
                       magazine.textContent = x;
                       return true;
                  } else {
                    alert('Ваш выбор');
                  }
            }
        }
