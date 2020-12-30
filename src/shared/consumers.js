import RabbitmqServer from '../config/RabbitMQ';
import { consumeOpportunityController } from '../modules/Opportunity/consumes';

async function consumers() {
  const server = new RabbitmqServer('amqp://admin:admin@rabbitmq:5672');
  await server.start();
  // Consumers Exist
  await server.consume('opportunities', async (message) => {
    return consumeOpportunityController(JSON.parse(message.content.toString()));
  });
}

consumers();
