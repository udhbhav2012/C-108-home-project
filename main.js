function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/dIRx6Rn8z/model.json', modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}
function gotResults(error, results)
{
    console.log(gotResults)
    
}
function gotResults(error, results)
{
    if (error) {
        console.error(error);
    }
    else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'I can hear - '+
        results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy - '+
        (results[0].confidence*100).toFixed(2)+" %";
        document.getElementById("result_label").style.color = "rgb("
        +random_number_r+","+random_number_g+","+random_number_b+")";

        img = document.getElementById('cat');
        img1 = document.getElementById('Dog');
        img2 = document.getElementById('rooster');
        img3 = document.getElementById('myna');

        if (results[0].label == "Dog barking")
        {
            img.src = '200 (1).gif';
            img1.src = 'download.jpg';
            img2.src = 'shouting-rooster-giving-wake-up-signal-country-side-household-55105831.jpg';
            img3.src = 'hqdefault.jpg';
        }
        if (results[0].label == "Cat meowing")
        {
            img.src = '5-tips-to-help-stop-dog-barking-153363583.jpg';
            img1.src = 'cat-meow.gif';
            img2.src = 'shouting-rooster-giving-wake-up-signal-country-side-household-55105831.jpg';
            img3.src = 'hqdefault.jpg';
        }
        if (results[0].label == "Rooster sound")
        {
            img.src = '5-tips-to-help-stop-dog-barking-153363583.jpg';
            img1.src = 'download.jpg';
            img2.src = 'buongiorn0-amica.gif';
            img3.src = 'hqdefault.jpg';
        }
        if (results[0].label == "Myna sound"){
            img.src = '5-tips-to-help-stop-dog-barking-153363583.jpg';
            img1.src = 'download.jpg';
            img2.src = 'shouting-rooster-giving-wake-up-signal-country-side-household-55105831.jpg';
            img3.src = 'BoldShamefulCopperbutterfly-size_restricted.gif';
        }
    }
}