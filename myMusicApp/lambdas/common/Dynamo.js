const AWS = require('aws-sdk');

const documentClient = new AWS.DynamoDB.DocumentClient();  //Access our files and lines in our Dynamo Database

const Dynamo = {
    async get(ID, TableName) {
        // Parameters
        const params = {
            TableName,
            Key: {
                ID
            }
        };

        const data = await documentClient
            .get(params)
            .promise()  // Turns into promise, much easier to deal with

        if (!data || !data.Item) {
            throw Error(`There was an error fetching the data for ID of ${ID} from ${TableName}`)
        }
        console.log(data);

        return data.Item;
    },
};

module.exports = Dynamo;