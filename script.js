// Generating Random Hex Color Code
const randomColor = () => {
    let hex = `0123456789ABCDEF`;
    let color = `#`;
    let i = 0;
    while (i < 6) {
      let random = parseInt(Math.random() * 16);
      color += hex[random];
      i++;
    }
    return color;
  };
  
  console.log(randomColor());
  
  // Variables
  
  let intervalId;
  
  // Method for Start applying random background color
  const startBgChange = () => {
    if (intervalId == null) {
      intervalId = setInterval(changeBgColor, 1000);
    }
    function changeBgColor() {
      document.body.style.backgroundColor = randomColor();
    }
  };
  
  // Method for Stop applying random background color
  const stopBgChange = () => {
    clearInterval(intervalId);
    intervalId = null;
  };
  
  document.querySelector('#start').addEventListener('click', startBgChange);
  
  document.querySelector('#stop').addEventListener('click', stopBgChange);
  