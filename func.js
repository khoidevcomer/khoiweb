    document.getElementById('redirectButton').addEventListener('click', function() {
            window.location.href = 'https://www.google.com'; // Replace with your desired URL
        });
         /*document.getElementById('colorButton').addEventListener('click', function() {
            const colors = ['#FF5733', '#33FF57', '#3357FF', '#F1C40F', '#8E44AD'];
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            document.body.style.backgroundColor = randomColor; // This will change the background color, not the image
        });*/
    function playAudio() {
        const audio = new Audio('')
        audio.play();
    }
    function pauseAudio() {
        audio.pause()
    }
    const play = document.querySelector('#play')
    play.onclick = () => {
        playAudio
    }
