import FormData from 'form-data';
import parseJsonToXml from '../providers/parseJsonToXml';
import OpportunityRepository from '../repository/Opportunity';
import { blingUrl } from '../../../apis';

export default async (order) => {
  try {
    const xml = parseJsonToXml('pedido', order);
    const data = new FormData();
    data.append('apikey', process.env.BLING_APIKEY);
    data.append('xml', xml);
    const finalizedOrder = await blingUrl.post('pedido/json/', data, {
      headers: {
        ...data.getHeaders(),
      },
    });
    await OpportunityRepository.findAndUpdateOrCreate({
      date: order.data,
      amount: order.itens.item[0].vlr_unit,
    });
    return finalizedOrder;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
