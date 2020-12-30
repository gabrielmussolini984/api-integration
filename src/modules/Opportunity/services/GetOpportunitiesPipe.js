import { pipeDriveUrl } from '../../../apis';
import sendMessage from '../providers/sendMessage';
import convertDate from '../../../utils/convertDate';

export default async () => {
  try {
    const { data: response } = await pipeDriveUrl.get(
      `deals?status=all_not_deleted&start=0&api_token=${process.env.PIPEDRIVE_APIKEY}`
    );

    const orders = response.data.map((order) => ({
      numero: String(order.id),
      data: convertDate(order.close_time),
      cliente: {
        nome: order.person_name || null,
        email: order.person_id.email[0].value || null,
        fone: order.person_id.phone[0].value || null,
      },
      itens: {
        item: [
          {
            codigo: String(order.id),
            descricao: order.title,
            un: 'Un',
            qtde: 1,
            vlr_unit: order.value,
          },
        ],
      },
      parcelas: {
        parcela: [{ vlr: order.value }],
      },
    }));
    await Promise.allSettled(
      orders.map((data) => sendMessage(data, 'opportunities'))
    );
    return orders;
  } catch (error) {
    throw new Error(error);
  }
};
