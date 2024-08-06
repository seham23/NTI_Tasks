let upto1 = 0;
        let counts1 = setInterval(function updated1() {
            let count1 = document.getElementById("counter1");
            count1.innerHTML = ++upto1;
            if (upto1 === 8000) {
                clearInterval(counts1);
            }
        }, 1);

        let upto2 = 0;
        let counts2 = setInterval(function updated2() {
            let count2 = document.getElementById("counter2");
            count2.innerHTML = ++upto2;
            if (upto2 === 810) {
                clearInterval(counts2);
            }
        }, 1);

        let upto3 = 0;
        let counts3 = setInterval(function updated3() {
            let count3 = document.getElementById("counter3");
            count3.innerHTML = ++upto3;
            if (upto3 === 2000) {
                clearInterval(counts3);
            }
        }, 1);

        let upto4 = 0;
        let counts4 = setInterval(function updated4() {
            let count4 = document.getElementById("counter4");
            count4.innerHTML = ++upto4;
            if (upto4 === 20) {
                clearInterval(counts4);
            }
        }, 1);