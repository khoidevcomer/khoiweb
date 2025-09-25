    document.getElementById('redirectButton1').addEventListener('click', function() {
            window.location.href = 'https://www.google.com'; // Replace with your desired URL
        });
    document.getElementById('navToggle').addEventListener('click', function() {
    const navbarList = document.getElementById('navbarList');
    navbarList.classList.toggle('open');
        });
document.getElementById('playScrem').addEventListener('click', function() {
  document.getElementById('myAudio').play();
});
         /*document.getElementById('colorButton').addEventListener('click', function() {
            const colors = ['#FF5733', '#33FF57', '#3357FF', '#F1C40F', '#8E44AD'];
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            document.body.style.backgroundColor = randomColor; // This will change the background color, not the image
        });*/
        
/*    function playSound() {
        const audio = new Audio('videoplayback.mp3');
        audio.play();
    }
    const play = document.querySelector('#playScrem');
    play.onclick = () => {
        playSound();
    }*/

