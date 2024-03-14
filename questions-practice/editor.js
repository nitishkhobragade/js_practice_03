// Initialize ACE editor
var editor = ace.edit("editor");
editor.setTheme("ace/theme/cobalt"); // Set the editor theme
editor.getSession().setMode("ace/mode/javascript"); // Set JavaScript mode

// Function to run the JavaScript code
function runCode() {
    var code = editor.getValue();
    try {
        // Clear previous output
        document.getElementById('result').innerText = '';

        // Capture console.log output
        var log = console.log;
        console.log = function(output) {
            document.getElementById('result').innerText += output + "\n";
        };

        // Execute the JavaScript code
        eval(code);

        // Restore console.log function
        console.log = log;
    } catch (error) {
        document.getElementById('result').innerText = 'Error: ' + error.message;
    }
}


// Function to copy the code from the editor
function copyCode() {
    var code = editor.getValue();
    navigator.clipboard.writeText(code)
        .then(() => alert('Code copied to clipboard'))
        .catch(err => console.error('Could not copy code: ', err));
}

// Run button click event listener
document.getElementById('runBtn').addEventListener('click', runCode);

// Copy button click event listener
document.getElementById('copyBtn').addEventListener('click', copyCode);


