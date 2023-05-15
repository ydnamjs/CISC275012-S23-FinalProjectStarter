const CURRENCY_FORMAT = new Intl.NumberFormat(undefined, {
    currency: "USD",
    style: "currency"
});

export function formatMoney(number: number) {
    return CURRENCY_FORMAT.format(number);
}
export default formatMoney;
