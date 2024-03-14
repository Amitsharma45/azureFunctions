const { app } = require('@azure/functions');
const taskController = require('../controller/task.controller');
app.http('azure2', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log(`Http function processed request for url "${request.url}"`);

        // const name = request.query.get('name') || await request.text() || 'world';
        
        return { body: `Hello, azure function testing` };
    }
});
