// js/utils.js

/**
 * تنسيق رقم عادي بفواصل الآلاف وبدون رمز عملة
 * @param {number|string} num - الرقم المراد تنسيقه
 * @param {number} decimals - عدد المنازل العشرية (افتراضي 0)
 * @returns {string} الرقم المنسق (مثال: 5,250,120)
 */
function formatNumber(num, decimals = 0) {
    if (num === undefined || num === null) return "0";
    return Number(num).toLocaleString('en-US', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals
    });
}

/**
 * تنسيق رقم مع رمز العملة المخزن في الإعدادات
 * @param {number|string} num - الرقم المراد تنسيقه
 * @param {number} decimals - عدد المنازل العشرية (افتراضي 0)
 * @returns {string} الرقم المنسق مع رمز العملة (مثال: 5,250,120 د.ع)
 */
function formatCurrencyPrice(num, decimals = 0) {
    if (num === undefined || num === null) return "0.00";
    
    // جلب إعدادات العملة من localStorage
    let settings = localStorage.getItem('store_settings');
    let currencySymbol = 'د.ع'; // القيمة الافتراضية
    if (settings) {
        try {
            const parsed = JSON.parse(settings);
            currencySymbol = parsed.currency_symbol || currencySymbol;
        } catch (e) {}
    }
    
    return formatNumber(num, decimals) + ' ' + currencySymbol;
}

/**
 * تنسيق رقم مع رمز العملة (اختصار للدالة السابقة)
 * @param {number|string} num 
 * @param {number} decimals 
 * @returns {string}
 */
function formatCurrency(num, decimals = 0) {
    return formatNumber(num, decimals);
}

// تصدير الدوال للاستخدام العالمي
window.formatNumber = formatNumber;
window.formatCurrency = formatCurrency;
window.formatCurrencyPrice = formatCurrencyPrice;