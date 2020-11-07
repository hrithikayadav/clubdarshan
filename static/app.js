// Select DOM elements and assign to variables.
var $petalWidth = document.getElementById('_petalWidth');
var $petalLength = document.getElementById('_petalLength');
var $sepalWidth = document.getElementById('_sepalWidth');
var $sepalLength = document.getElementById('_sepalLength');
var $searchBtn = document.getElementById('searchBtn');
var $eraseBtn = document.getElementById('eraseBtn');
var $json_response = document.getElementById('json_response');
var $json_response_2 = document.getElementById('json_response_2');
var $json_response_3 = document.getElementById('json_response_3');
var $json_response_4 = document.getElementById('json_response_4');

// Add event listeners and assign to functions.
$searchBtn.addEventListener("click", predictClick);
$eraseBtn.addEventListener("click", eraseData);

// Build out functions to erase data from forms.
function eraseData(){

    // Clear out textboxes.
    $petalWidth.value = '';
    $petalLength.value = '';
    $sepalWidth.value = '';
    $sepalLength.value = '';

    // Clear out innerHTML from DOM.
    $json_response.innerHTML = '';
    $json_response_2.innerHTML = '';
    $json_response_3.innerHTML = '';
    $json_response_4.innerHTML = '';
};

// Build out functions to take data in form and make prediction.
function predictClick(){

    // Get values from text boxes and store in variables.
    var petalWidthValue = $petalWidth.value;
    var petalLengthValue = $petalLength.value;
    var sepalWidthValue = $sepalWidth.value;
    var sepalLengthValue = $sepalLength.value;

    // Build connection string from variables.
    var connectionString = '/api?sepallen='
                            + sepalWidthValue + '&'
                            + 'sepalwid=' + sepalWidthValue + '&'
                            + 'petallen=' + petalLengthValue + '&'
                            + 'petalwid=' + petalWidthValue;

    console.log(connectionString);

    Plotly.d3.json(connectionString, function(error, response) {
    if (error) return console.warn(error);

    // Render the JSON response back to the DOM using innerHTML.
    $json_response.innerHTML =  'Based on our machine learning model,\
                                the predicted clubs are:' + ' '
                                + response.iris_class_name + '.'

    $json_response_2.innerHTML = 'The probability of the Setoasa class is' +
                                 ' ' + response.iris_class_setosa_prob.toFixed(2) + '.' + ' '

    $json_response_3.innerHTML = 'The probability of the Virginica class is' +
                                ' ' + response.iris_class_virginica_prob.toFixed(2) + '.' + ' '

    $json_response_4.innerHTML = 'The probability of the Versicolor class is' +
                                ' ' + response.iris_class_versicolor_prob.toFixed(2) + '.'
    });

};


\


