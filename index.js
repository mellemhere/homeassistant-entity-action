const core = require('@actions/core');
const axios = require('axios');

try {

    let payload = {
        "entity_id": core.getInput('entityID'),
    };

    if (core.getInput('payload') !== 'false') {
        payload = {...payload, ...JSON.parse(core.getInput('payload'))};
    }

    axios.post(core.getInput('hasURL'), payload, {
        headers: {
            'Authorization': 'Bearer ' + core.getInput('token')
        }
    }).then(res => {
        if (res.status !== 200) {
            core.setFailed('Request failed. Status text:' + res.statusText);
        }
    }).catch(error => {
        core.setFailed(error);
    });
} catch (error) {
    core.setFailed(error.message);
}
