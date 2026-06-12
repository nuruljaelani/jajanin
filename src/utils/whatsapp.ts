import type { CartItem } from '../store/useCartStore';

const WA_NUMBER = '6285603840608'; // User provided number

export const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(amount);
};

export const generateWaLink = (items: CartItem[], total: number) => {
  let message = `Halo Jajanin! 👋\nSaya mau order jajanan kekinian:\n\n`;
  
  items.forEach((item, index) => {
    message += `${index + 1}. ${item.name} (${item.quantity}x) - ${formatCurrency(item.price * item.quantity)}\n`;
  });
  
  message += `\n*Total Belanja: ${formatCurrency(total)}*\n\n`;
  message += `Mohon info untuk pembayaran dan pengiriman ya. Terima kasih! ✨`;

  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WA_NUMBER}?text=${encodedMessage}`;
};
