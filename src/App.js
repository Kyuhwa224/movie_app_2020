import React from 'react';

function Food({fav}) {
  
return <h1>I like { fav }</h1>;
}

const foodILike = [
  {
    name: 'kimchi',
    image: 'https://www.google.com/search?q=rlacl&tbm=isch&source=iu&ictx=1&fir=K93zRGlPMOeAMM%252Ce4c-MeK8op0ElM%252C%252Fm%252F018dz_&vet=1&usg=AI4_-kRz_V1HhV7UIllgfEA7IJLYgNTPgw&sa=X&ved=2ahUKEwjMqb3ow-rqAhWIwpQKHYFtBPAQ_B0wCnoECA4QAw#imgrc=K93zRGlPMOeAMM',
  },
  {
    name: 'Samgeyop'
    image: 'https://www.google.com/search?q=%EC%82%BC%EA%B2%B9&tbm=isch&source=iu&ictx=1&fir=BYlyCm3hrdy2vM%252CXEEkDeSnRxHa-M%252C%252Fg%252F11bc58gmwd&vet=1&usg=AI4_-kTXZsGJXLNDljhPltiJbOilOVF0DA&sa=X&ved=2ahUKEwjSl7aGxOrqAhXKxIsBHY8VBGcQ_B0wGHoECAoQAw#imgrc=BYlyCm3hrdy2vM',
  }

];

function App() {
  /*리턴 값이 많아지면 중가로로 묶는다*/
  return (
  <div>
    <h1>Hello</h1>
  </div>
  );
}

export default App;
