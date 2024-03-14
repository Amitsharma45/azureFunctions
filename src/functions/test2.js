const { app } = require('@azure/functions');
const taskController = require('../controller/task.controller');
app.http('test2', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log(`Http function processed request for url "${request.url}"`);

        // const name = request.query.get('name') || await request.text() || 'world';
        const name = taskController.createTask();
        return { body: `Hello, ${name}!` };
    }
});
