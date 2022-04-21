'use strict'

const Plugin = {
    "name": "UUID",
    "version": "1.0.0",
    "depends": {
        "pluginLoader": ">=3.5.0"
    },
    "Events": ["messageCreate"],
    "Commands": [],
    "author": ["whes1015"],
    "link": "https://github.com/ExpTechTW/MPR-UUID",
    "resources": ["AGPL-3.0"],
    "description": "UUID 產生器"
}

function uuid() {
    var d = Date.now();
    if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
        d += performance.now(); //use high-precision timer if available
    }
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}

module.exports = {
    Plugin,
    uuid
}