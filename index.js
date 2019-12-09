function scuberGreetingForFeet(num){
  if(num > 2500) {
    return "No can do."
  } else if(num > 2000) {
    return 'I will gladly take your thirty bucks.';
  } else if(num <= 400) {
    return 'This one is on me!'
  }
}

function ternaryCheckCity(city){
  return city === "NYC" ? 'Ok, sounds good.' : 'No go.';
}

function switchOnCharmFromTip(gratitude){
  switch(gratitude) {
    case "generous":
      return 'Thank you so much.';
    case "not as generous":
      return 'Thank you.';
    case 'thanks for everything':
      return "Bye."
  }
}