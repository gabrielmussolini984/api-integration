import RabbitmqServer from '../../../../config/RabbitMQ';

export default async (message, queue) => {
  try {
    const server = new RabbitmqServer('amqp://admin:admin@rabbitmq:5672');
    await server.start();

    await server.publishInExchange(
      'amq.direct',
      queue,
      JSON.stringify(message)
    );
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};
