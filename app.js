"use strict";
var userInut;
var userName;
userInut = 5;
userInut = 'max';
if (typeof userInut === 'string') {
    userName = userInut;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('An error occurred', 500);
