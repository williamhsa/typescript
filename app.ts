let userInut: unknown;
let userName: string;

userInut = 5;
userInut = 'max';

if (typeof userInut === 'string') {
  userName = userInut;
}

function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code};
}

generateError('An error occurred', 500);