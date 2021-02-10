exports.handler = (event, context, callback) => {
    // TODO implement
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello All, Welcome to RAK Demo !!')
    };
    callback(null, response);
};
