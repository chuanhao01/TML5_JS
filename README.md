# TML5_JS  

Hi again, this is a short wrapper library I made for m5.js to use with the teachable machines from Google.  

Teachable machines: [Link](https://teachablemachine.withgoogle.com/)

I name it TML5 for teachable (machines) machine learning 5.  

## Rundown of the code

List of the files in the library.  
Context:  
`index.html` and `main.js` are the example of the code you can refer too. `// You get it`  
`tml5.js` is the main wrapper library file.
`TML5_CONFIG.js` is the config file which contain most of the data for the library.

tml5_js/  
├── index.html  
├── main.js  
├── TML5_CONFIG.js  
└── tml5.js  

### tml5.js
The code is broken down into methods, `init`, `setUpVideo`, `classifyVideo` and `drawVideo`.

Using this in contet with `p5.js` functions,
```javascript
// Creating an instance of the library
const tml5 = new TML5();

function preload(){
    // Loading the model in the preload function
    tml5.init(TML5_CONFIG);
}

function setup(){
    // Here we set up the webcam for the model
    tml5.setUpVideo();
    // Then we start classifying the video loop
    // Note: whenever the video gets classified, the prediction results is sotred in the global var, label
    tml5.classifyVideo();
}

function draw(){
    // Here we only draw the video if we have started classifying
    if(label){
        tml5.drawVideo();
    }
}
```

### TML5_CONFIG

Explained in the comments in the code.
