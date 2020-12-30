import CheckoutOrder from '../services/CheckoutOrder';

export async function consumeOpportunityController(message) {
  return CheckoutOrder(message);
}
