const core = require('@actions/core');

try {

    const xhr = new XMLHttpRequest();
    xhr.open("POST", core.getInput('hasURL'), false);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('Authorization','Bearer ' + core.getInput('token'));
    xhr.send(JSON.stringify({
        "entity_id": core.getInput('entityID'),
        "rgb_color": [236, 174, 34]
    }));

} catch (error) {
    core.setFailed(error.message);
}
