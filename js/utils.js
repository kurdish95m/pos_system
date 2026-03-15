// js/utils.js أو داخل supabase-config.js
// js/utils.js
function formatCurrencyPrice(num) {
    if (num === undefined || num === null) return "0.00";
    // محاولة جلب إعدادات العملة من localStorage
    let settings = localStorage.getItem('store_settings');
    let currencySymbol = 'د.ع'; // القيمة الافتراضية
    if (settings) {
        try {
            const parsed = JSON.parse(settings);
            currencySymbol = parsed.currency_symbol || currencySymbol;
        } catch (e) {}
    }
    return currencySymbol + ' ' + Number(num).toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}


function formatCurrency(num) {
    if (num === undefined || num === null) return "0.00";
    return Number(num).toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}