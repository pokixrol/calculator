let objem = {
   
    vyska: 0,
    stranaA: 0,
    jednotky: '',
    stranaB: 0,

   
    vypocet: function(v = this.vyska, a = this.stranaA, b = this.stranaB){
        return (v * a * b).toFixed(2); 
    }
}

objem.vyska = 1;
objem.stranaA = 1;
objem.jednotky = 'mm³';
objem.stranaB = 1;

document.getElementById('calc').addEventListener('click', function() {
   
    objem.vyska = document.getElementById('vyska').value;
    objem.jednotky = document.getElementById('jednotky').value;
    objem.stranaA = document.getElementById('stranaA').value;
    objem.stranaB = document.getElementById('stranaB').value;
   
    document.getElementById('vysledek').innerHTML = `Objem je: ${objem.vypocet()} ${objem.jednotky}`;        
});