exports.handler = (event, context, callback) => {
    // TODO implement
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello All, Welcome to RAK111 !!')
    };
    callback(null, response);
};
