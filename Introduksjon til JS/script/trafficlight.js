lightTimer()

        function activeLight(divId1, divId2, divId3, divId4){
            document.getElementById(divId1).classList.remove("active")
            document.getElementById(divId2).classList.remove("active")
            document.getElementById(divId3).classList.add("active")
            document.getElementById(divId4).classList.add("active")
        }

        function lightTimer(){
            setTimeout(activeRed, 1000);
        }

        function activeRed(){
            activeLight('green', 'orange', 'red', 'red');
            setTimeout(activeRedAndOrange, 1000);
        }

        function activeOrange(){
            activeLight('red', 'green', 'orange', 'orange')
        }

        function activeRedAndOrange(){
            activeLight('green', 'green', 'red', 'orange');
            setTimeout(activeGreen, 1000);
        }

        function activeGreen(){
            activeLight('red', 'orange', 'green', 'green');
            setTimeout(activeOrange, 2000);
        }