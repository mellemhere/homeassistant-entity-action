const core = require('@actions/core');
const axios = require('axios');

try {
    axios.post(core.getInput('hasURL'), {
        "entity_id": core.getInput('entityID'),
        "rgb_color": [236, 174, 34]
    }, {
        headers: {
            'Authorization': 'Bearer ' + core.getInput('token')
        }
    }).then(res => {
    }).catch(error => {
        core.setFailed(error);
    });
} catch (error) {
    core.setFailed(error.message);
}
