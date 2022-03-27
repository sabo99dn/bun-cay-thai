import 'intl';
import 'intl/locale-data/jsonp/en';

export const currencyFormat = (n = 0, currency = 'đ') => {
  return (
    n.toFixed(0).replace(/./g, function (c, i, a) {
      return i > 0 && c !== '.' && (a.length - i) % 3 === 0 ? '.' + c : c;
    }) +
    ' ' +
    currency
  );
};

export const priceSalePercent = (price = 0, priceSale = 0) => {
  return Math.round(100 - (priceSale / price) * 100);
};

export const moneyFormat = money =>
  new Intl.NumberFormat('de-DE').format(money);

export const currencyFormatWithNoSpace = (n = 0, currency = 'đ') => {
  return (
    n.toFixed(0).replace(/./g, function (c, i, a) {
      return i > 0 && c !== '.' && (a.length - i) % 3 === 0 ? '.' + c : c;
    }) + currency
  );
};
