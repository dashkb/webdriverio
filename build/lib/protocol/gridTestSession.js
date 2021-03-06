/**
 *
 * Get the details of the Selenium Grid node running a session
 *
 * <example>
    :grid.js
    browser.gridTestSession().then(function(details) {
        console.log(details);

        // {
        //     msg: 'slot found !',
        //     success: true,
        //     session: '51797b64-43e1-4018-b7fb-f900d80a37a4',
        //     internalKey: '413741ea-d48e-4346-844b-b1a90a69b3ed',
        //     inactivityTime: 219,
        //     proxyId: 'MacMiniA10’
        // }
    })
 * </example>
 *
 * @type grid
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _utilsErrorHandler = require('../utils/ErrorHandler');

var gridTestSession = function gridTestSession(sessionId) {
    /*!
     * parameter check
     */
    if (typeof sessionId !== 'string') {
        if (!this.requestHandler.sessionID) {
            throw new _utilsErrorHandler.ProtocolError('The gridTestSession command needs a sessionID to work with.');
        }

        sessionId = this.requestHandler.sessionID;
    }

    return this.requestHandler.create({
        path: '/testsession?session=' + sessionId,
        method: 'GET',
        requiresSession: false,
        gridCommand: true
    });
};

exports['default'] = gridTestSession;
module.exports = exports['default'];
