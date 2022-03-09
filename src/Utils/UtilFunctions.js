export const getCardNumberSplit = cardNumber => {
  const splitCard = cardNumber.match(/(\d{4})/g).join(' ');
  return splitCard.split(' ');
};
