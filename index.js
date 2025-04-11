//console.log('funguju!');

// Vylepšete program tak, aby na následné stisknutí libovolné klávesy žárovka opět zhasnula (tj. odstraní se třída bulb--on).
// Opakovaným mačkáním kláves tak můžeme žárovku rozsvěcovat a zhasínat.
// Když držíte klávesu, prohlížeč automaticky opakovaně posílá událost keydown. Vyzkoušejte, že když podržíte nějakou klávesu, žárovka se bude rychle rozsvěcet a zhasínat.

const light = () => {
  const bulb = document.querySelector('.bulb');
  bulb.classList.toggle('bulb--on');
};

document.addEventListener('keydown', light);
