// js/utils.js أو داخل supabase-config.js
function formatCurrency(num) {
    if (num === undefined || num === null) return "0.00";
    return Number(num).toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}