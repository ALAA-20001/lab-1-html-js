  
        var redRange = document.getElementById('redRange');
        var greenRange = document.getElementById('greenRange');
        var blueRange = document.getElementById('blueRange');
        var mixedText = document.getElementById('mixedText');

        
        redRange.addEventListener('input', updateColor);
        greenRange.addEventListener('input', updateColor);
        blueRange.addEventListener('input', updateColor);

       
        function updateColor() {
            var redValue = redRange.value;
            var greenValue = greenRange.value;
            var blueValue = blueRange.value;

            var color = 'rgb(' + redValue + ',' + greenValue + ',' + blueValue + ')';
            mixedText.style.color = color;
        }