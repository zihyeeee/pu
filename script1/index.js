let calculator = {
    sum () {
        return (this.a + this.b)
    },
    mul () {
        return (this.a * this.b)
    },
    read () {
        this.a = +prompt("첫번째 숫자","")
        this.b = +prompt("두번째 숫자","")
    }
  };
  
  calculator.read();
  alert( calculator.sum() );
  alert( calculator.mul() );



