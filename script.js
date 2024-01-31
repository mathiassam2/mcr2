$(document).ready(function() {
    var clickCount = 0;
    var yesClicked = false;

    fadeInElements('h2, #clickContinue', 2000);

    

    function fadeInElements(selector, duration) {
        // Set initial opacity to 0 for the given selector
        $(selector).css('opacity', 0);

        // Animate the opacity for the given selector from 0 to 1 over the specified duration
        $(selector).animate({ opacity: 1 }, duration);
    }

    function handleFirstClick() {
        $('h2').text("HEWOOOO SAYANGGGGGGGG");
        fadeInElements('h2', 2000);
    }

    function handleSecondClick() {
        $('h2').text("Are you love me?");

        if (!$('.button-container').length) {
            var buttonsHTML = '<div id="yesno" class="button-container">' +
                                '<button class="btn-23"><span class="text">YES!</span><span aria-hidden="" class="marquee">YES!!!</span></button>' +
                                '<button class="btn-no">NO</button>' +
                              '</div>';

            $('h2').after(buttonsHTML);

            // Animate the scaling effect for the YES button over time
            $('.btn-23').animate({ fontSize: '+=100px' }, 10000); // Adjust the duration and size increment as needed

            // Handle click event on the YES button
            $('.btn-23').on('click', function() {
                // Change the h2 text after clicking the YES button
                $('h2').text("YEYEYEYYEYEYEYEYEYYEEEEE TEKAN YES MANYAKMANYAKKKK");
                yesClicked = true;
            });
        }
    }

    function handleFifteenthClick() {
        $(document).off('click');
        $('h2').text("JUMJUMMJUM LUKISSSSS");

        // Add a container for images below h2
        var imageContainerHTML = '<div class="image-container">' +
                                    '<canvas id="drawCanvas"></canvas>' +
                                 '</div>' +
                                 '<div class="canvasBtn-container">' +
                                    '<button id="clearCanvasBtn" class="canvasBtn">Clear Canvas</button>' +
                                    '<button id="continueBtn" class="canvasBtn">Proceed</button>' +
                                 '</div>';
                                 

        $('h2').after(imageContainerHTML);
        $('#yesno').hide();

        // Enable drawing on the canvas
        enableDrawing('drawCanvas');

        $('#clearCanvasBtn').on('click', function() {
            clearCanvas('drawCanvas');
        });

        $('#continueBtn').on('click', function() {
            // Capture the canvas content and proceed to the next part
            var canvasContent = captureCanvas('drawCanvas');
            proceedToNextPart(canvasContent);
        });
    }

    function enableDrawing(canvasId) {
        var canvas = document.getElementById(canvasId);
        var ctx = canvas.getContext('2d');
        var drawing = false;

        // Set canvas size based on the image container
        var imageContainer = document.querySelector('.image-container');
        canvas.width = imageContainer.clientWidth;
        canvas.height = imageContainer.clientHeight;

        // Set up event listeners for drawing
        canvas.addEventListener('mousedown', function(e) {
            drawing = true;
            draw(e);
        });

        canvas.addEventListener('mouseup', function() {
            drawing = false;
            ctx.beginPath();
        });

        canvas.addEventListener('mousemove', function(e) {
            if (!drawing) return;
            draw(e);
        });

        // Touch events for mobile devices
        canvas.addEventListener('touchstart', function(e) {
            e.preventDefault();
            drawing = true;
            drawTouch(e.touches[0]);
        });

        canvas.addEventListener('touchend', function() {
            drawing = false;
            ctx.beginPath();
        });

        canvas.addEventListener('touchmove', function(e) {
            e.preventDefault();
            if (!drawing) return;
            drawTouch(e.touches[0]);
        });

        function draw(e) {
            var x = e.clientX - canvas.getBoundingClientRect().left;
            var y = e.clientY - canvas.getBoundingClientRect().top;

            // Rainbow effect: Change stroke color based on the current time
            var rainbowColor = 'hsl(' + (Date.now() / 10) % 360 + ', 100%, 50%)';
            
            ctx.lineWidth = 5;
            ctx.lineCap = 'round';
            ctx.strokeStyle = rainbowColor;

            ctx.lineTo(x, y);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(x, y);
        }

        function drawTouch(touch) {
            var x = touch.clientX - canvas.getBoundingClientRect().left;
            var y = touch.clientY - canvas.getBoundingClientRect().top;

            // Rainbow effect: Change stroke color based on the current time
            var rainbowColor = 'hsl(' + (Date.now() / 10) % 360 + ', 100%, 50%)';

            ctx.lineWidth = 5;
            ctx.lineCap = 'round';
            ctx.strokeStyle = rainbowColor;

            ctx.lineTo(x, y);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(x, y);
        }

    }

    function clearCanvas(canvasId) {
        var canvas = document.getElementById(canvasId);
        var ctx = canvas.getContext('2d');
        
        // Clear the entire canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    function captureCanvas(canvasId) {
        var canvas = document.getElementById(canvasId);
        return canvas.toDataURL(); // Capture the canvas content as a data URL
    }

    var kissPercentage = 1;

    function calculateExponentialGrowth() {
        // Use an exponential growth formula, e.g., exponential growth by a factor of 1.2
        return kissPercentage * 2.3;
    }

    var infinitySize = 100; // Initial size of the infinity symbol

    function updateKissPesen(kissPercentage) {
        // Check if kissPercentage has reached 1 million
        if (kissPercentage >= 10000000) {
            // Display and increase the size of the infinity symbol
            $('#kissPesen').html('<span style="font-size: ' + infinitySize + 'px;">∞</span>');
            infinitySize += 10; // Adjust the increment as needed
        } else {
            // Update the kissPesen text with exponential growth
            $('#kissPesen').text(Math.floor(kissPercentage) + '%');
        }
    }


    function showMuahhh() {
        // Array of possible variations with associated random rotation angles
        var muahhhVariations = [
            { text: "MUUAAAHHH", rotation: getRandomRotation() },
            { text: "MUMUMUUAHHH", rotation: getRandomRotation() },
            { text: "MUAH", rotation: getRandomRotation() },
            { text: "MUMUUAHMUAH", rotation: getRandomRotation() }
        ];

        // Randomly select a variation
        var randomVariation = muahhhVariations[Math.floor(Math.random() * muahhhVariations.length)];

        // Create a new element for the selected variation
        var muahhhElement = $('<div class="muahhh-container">' +
                            '<img class="lips-image" src="assets/lips.png" alt="Lips Image">' +
                            '<p class="muahhh-text">' + randomVariation.text + '</p>' +
                          '</div>');

        // Set a random position and rotation on the screen
        var posX = Math.random() * ($(window).width() - muahhhElement.width());
        var posY = Math.random() * ($(window).height() - muahhhElement.height());
        var rotation = randomVariation.rotation;

        muahhhElement.css({
            position: 'absolute',
            top: posY,
            left: posX,
            transform: 'rotate(' + rotation + 'deg)',
            zIndex: 1000, // Ensure it's above other elements
            display: 'none'
        });

        // Append the element to the body
        $('body').append(muahhhElement);

        // Fade in the "MUAHHH" text and lips image
        muahhhElement.fadeIn(500, function() {
            // After fading in, fade out after a delay
            setTimeout(function() {
                muahhhElement.fadeOut(500, function() {
                    // Remove the element after fading out
                    muahhhElement.remove();
                });
            }, 1000); // Adjust the delay as needed
        });
    }

    // Function to get a random rotation angle between 0 and 360 degrees
    function getRandomRotation() {
        return Math.random() * 360;
    }

    function proceedToNextPart(canvasContent) {
        // Remove the canvas and buttons
        $('.image-container, .canvasBtn-container').remove();

        // Change the h2 text
        $('h2').text("WASEHHHHH TERERERRR NAAA SAYANG LUKISSSS");

        // Show the image with the captured canvas content
        var imageContainerHTML = '<div class="image-container" id="resultContainer">' +
                                    '<img id="resultImage" src="' + canvasContent + '" alt="Canvas Result">' +
                                    '<button id="gotoKiss" class="canvasBtn">DANOT GAMBAAAA</button>' +
                                 '</div>';

        $('h2').after(imageContainerHTML);

        $('#gotoKiss').on('click', function() {
            $('h2').text("KISKSISKSSSS FESSSS XIIXXIXII");
            $('h2').after('<small id="clickContinue" class="small-text">Click anywhere manyak to KSISKISSISKIS</small>');
            $('h2').after('<p id="kissPesen" class="small-text">0%</p>');

            $('.image-container').remove();

            // Add click event listener to the document
            $(document).on('click', function() {
                // Increase kissPercentage exponentially
                kissPercentage = calculateExponentialGrowth();

                // Update the kissPesen text
                updateKissPesen(kissPercentage);

                // Show "MUAHHH" text
                showMuahhh();

                if (infinitySize == 200) {
                    $(document).off('click');
                    // Remove the canvas and buttons
                    $('#clickContinue, #kissPesen').remove();
                    // Change the h2 text
                    $('h2').text("YEYEYEYEYEYE DANOTTTT GAMBAAA");

                    // Show the image with the captured canvas content
                    var imageContainerHTML = '<div class="image-container" id="resultContainer">' +
                                                '<img id="resultImage" src="' + canvasContent + '" alt="Canvas Result">' +
                                                '<button id="downloadBtn" class="canvasBtn">DANOT GAMBAAAA</button>' +
                                             '</div>';

                    $('h2').after(imageContainerHTML);

                    $('#downloadBtn').on('click', function() {
                        console.log("asdfasdf")
                        downloadImage('resultContainer'); // Replace 'resultContainer' with the actual ID of the container holding the image and drawing
                    
                        $('.image-container, #resultImage, #downloadBtn').remove();
                        $('h2').text("XIIXXIXIX CHECK GAMBAAAAA");
                    });
                }
            });
        }); 
    }


    function downloadImage(containerId) {
        // Get the container element
        var container = document.getElementById(containerId);

        // Use html2canvas to capture the container
        html2canvas(container, { useCORS: true }).then(function (canvas) {
            // Create a new canvas to draw the text
            var newCanvas = document.createElement('canvas');
            var newContext = newCanvas.getContext('2d');

            // Set the dimensions of the new canvas
            newCanvas.width = canvas.width;
            newCanvas.height = canvas.height;

            // Draw the original canvas onto the new canvas
            newContext.drawImage(canvas, 0, 0);

            // Add text to the new canvas
            var text = "Will you be my valentine? :3";
            newContext.font = "50px Arial";
            newContext.fillStyle = "#ff3366"; // Customize the text color if needed
            newContext.fillText(text, 10, 70);

            // Convert the new canvas to a data URL
            var dataURL = newCanvas.toDataURL('image/png');

            // Create a temporary link element
            var link = document.createElement('a');

            // Set the href attribute with the data URL
            link.href = dataURL;

            // Set the download attribute with a desired filename
            link.download = 'valentine_image.png';

            // Append the link to the document
            document.body.appendChild(link);

            // Trigger a click event on the link to start the download
            link.click();

            // Remove the link from the document
            document.body.removeChild(link);
        });
    }



    $(document).on('click', function() {
        clickCount += 1;
        $('#clickContinue').hide();

        switch (clickCount) {
            case 1:
                handleFirstClick();
                break;
            case 2:
                handleSecondClick();
                break;
            case 15:
                if (yesClicked) {
                    handleFifteenthClick();
                } else {
                    clickCount = 2; // Reset click count to handle the second click
                }
                break;
        }
    });
});
