<template lang="en">
    <div id="calc-container" class="container mx-auto">

        <CalcResult :result = result :input = input  />

        <button  type="button" @click="clearInput()" class="calc-btn btn btn btn-secondary btn-lg">C</button>
        <button  type="button" @click="calculate()" class="calc-btn btn btn btn-secondary btn-lg">=</button>
        <button  type="button" @click="addinput('.')" class="calc-btn btn btn btn-secondary btn-lg disabled">.</button>
        <button  type="button" @click="addinput(' ÷ ')" class="calc-btn btn btn btn-secondary btn-lg">÷</button>
        <br/>
        <button  type="button" @click="addinput('7')" class="calc-btn btn btn-dark btn-lg">7</button>
        <button  type="button" @click="addinput('8')" class="calc-btn btn btn-dark btn-lg">8</button>
        <button  type="button" @click="addinput('9')" class="calc-btn btn btn-dark btn-lg">9</button>
        <button  type="button" @click="addinput(' x ')" class="calc-btn btn btn btn-secondary btn-lg">x</button>
        <br/>
        <button  type="button" @click="addinput('4')" class="calc-btn btn btn-dark btn-lg">4</button>
        <button  type="button" @click="addinput('5')" class="calc-btn btn btn-dark btn-lg">5</button>
        <button  type="button" @click="addinput('6')" class="calc-btn btn btn-dark btn-lg">6</button>
        <button  type="button" @click="addinput(' - ')" class="calc-btn btn btn btn-secondary btn-lg">-</button>
        <br/>
        <button  type="button" @click="addinput('1')" class="calc-btn btn btn-dark btn-lg">1</button>
        <button  type="button" @click="addinput('2')" class="calc-btn btn btn-dark btn-lg">2</button>
        <button  type="button" @click="addinput('3')" class="calc-btn btn btn-dark btn-lg">3</button>
        <button  type="button" @click="addinput(' + ')" class="calc-btn btn btn btn-secondary btn-lg">+</button>
        <br/><br/>

        <div v-if="wrongInput" class="alert alert-danger" role="alert">
           Wrong input. It should be like: 5 x 2 (number, symbol and number).
  </div>
</div>

    </div>

</template>
<script>
import CalcResult from './CalcResult.vue';


export default {
  name: 'CalcBody',
  components: {
    CalcResult
  },
  data() {
    return {
      input: "",
      result: "",
      wasCalculated: false,
      wrongInput: false,
    }
  },
  computed: {
    resultComputed: function () {
      return "computed";
    },
  },
  methods: {
    addinput: function (inputToAdd) {
      this.wrongInput = false;
      if (this.wasCalculated === true) {
        this.wasCalculated = false;
        if (inputToAdd === ' + ' || inputToAdd === ' - ' || inputToAdd === ' x ' || inputToAdd === ' ÷ ') {
          this.input = this.result + inputToAdd;
          this.result = "";
        } else {
          this.clearInput()
          this.input += inputToAdd;
        }
      } else {
        this.input += inputToAdd;
      }
    },
    clearInput: function () {
      this.input = "";
      this.result = "";
      this.wasCalculated = false;
    },
    calculate: function () {
      //Input validation 
      if (!/[0-9][ ][+-x÷][ ][0-9]+$/gm.test(this.input)) {
        this.wrongInput = true;
        this.clearInput();
        return;
      }
      let calcArray = this.input.split(" ");
      //Add
      if (calcArray[1] == "+") {
        const calcResult = Number(calcArray[0]) + Number(calcArray[2]);
        this.result = calcResult.toString();
      }
      //Substract
      else if (calcArray[1] == "-") {
        const calcResult = Number(calcArray[0]) - Number(calcArray[2]);
        this.result = calcResult.toString();
      }
      // Multiply
      else if (calcArray[1] == "x") {
        const calcResult = Number(calcArray[0]) * Number(calcArray[2]);
        this.result = calcResult.toString();
      }
      //Divide
      else if (calcArray[1] == "÷") {
        //this.result = Number(calcArray[0]) / Number(calcArray[2]);
        const calcResult = Number(calcArray[0]) / Number(calcArray[2]);
        this.result = calcResult.toString();
      }
      if (isNaN(this.result)) {
        this.wrongInput = true;
        this.clearInput();
        return;
      }
      this.wasCalculated = true;
    }
  }
}

</script>
<style scoped>
.calc-btn {
  margin: 3px;
  width: 50px;
}
#calc-container {
  width: 248px;
}
</style>