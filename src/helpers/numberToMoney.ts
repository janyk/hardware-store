// Keep is consistent here, if we were interested in locales this would be helpful too
const numberToMoney = (value: number) => value.toLocaleString("en-NZ", {style: "currency", currency: "NZD", minimumFractionDigits: 2})

export default numberToMoney;
