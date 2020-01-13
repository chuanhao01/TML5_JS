// Note for this lib to work, label is the global object the label from the model is stored in
let label = null;
let TML5_CONFIG = {
    // The top left position of where the video will be drawn.
    starting_pos: {
        'x': 0,
        'y': 0
    },
    // Dimensions of the video being parsed
    video_config: {
        'x': 320,
        'y': 240
    },
    // Link to the teachable machine model, note the model.json at the end
    model_url: 'https://teachablemachine.withgoogle.com/models/EAOtFMfv/model.json'
};