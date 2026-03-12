// js/alert.js

function createCustomDialog() {
    let overlay = document.getElementById('custom-alert-overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.id = 'custom-alert-overlay';
        overlay.className = 'custom-alert-overlay';

        const box = document.createElement('div');
        box.className = 'custom-alert-box';

        const icon = document.createElement('div');
        icon.id = 'custom-alert-icon';
        icon.className = 'custom-alert-icon';

        const text = document.createElement('p');
        text.id = 'custom-alert-text';

        const btnContainer = document.createElement('div');
        btnContainer.id = 'custom-alert-btns';
        btnContainer.style.display = 'flex';
        btnContainer.style.gap = '10px';
        btnContainer.style.marginTop = '10px';

        box.appendChild(icon);
        box.appendChild(text);
        box.appendChild(btnContainer);
        overlay.appendChild(box);
        document.body.appendChild(overlay);
    }
    return overlay;
}

// 1. إعادة برمجة دالة alert (لرسائل الخطأ والنجاح)
window.alert = function(message) {
    const overlay = createCustomDialog();
    const iconEl = document.getElementById('custom-alert-icon');
    const textEl = document.getElementById('custom-alert-text');
    const btnContainer = document.getElementById('custom-alert-btns');

    textEl.innerText = message;
    btnContainer.innerHTML = ''; // تفريغ الأزرار

    // تحديد اللون والأيقونة
    if (message.includes('خطأ') || message.includes('فشل') || message.includes('فارغة') || message.includes('مسبقاً') || message.includes('لا يمكن')) {
        iconEl.innerHTML = '❌';
        iconEl.style.color = '#e74c3c';
    } else if (message.includes('نجاح') || message.includes('تم')) {
        iconEl.innerHTML = '✅';
        iconEl.style.color = '#27ae60';
    } else {
        iconEl.innerHTML = '⚠️';
        iconEl.style.color = '#f39c12';
    }

    // زر واحد (حسناً)
    const okBtn = document.createElement('button');
    okBtn.innerText = 'حسناً';
    okBtn.style.flex = '1';
    okBtn.onclick = () => { overlay.style.display = 'none'; };
    btnContainer.appendChild(okBtn);

    overlay.style.display = 'flex';
};

// 2. إعادة برمجة دالة confirm (لرسائل الحذف والتأكيد)
window.confirm = function(message) {
    return new Promise((resolve) => {
        const overlay = createCustomDialog();
        const iconEl = document.getElementById('custom-alert-icon');
        const textEl = document.getElementById('custom-alert-text');
        const btnContainer = document.getElementById('custom-alert-btns');

        iconEl.innerHTML = '❓';
        iconEl.style.color = '#3498db';
        textEl.innerText = message;
        btnContainer.innerHTML = ''; // تفريغ الأزرار

        // زر (نعم)
        const yesBtn = document.createElement('button');
        yesBtn.innerText = 'نعم، متأكد';
        yesBtn.style.flex = '1';
        yesBtn.style.background = '#e74c3c'; // لون أحمر لأنه غالباً حذف
        yesBtn.onclick = () => { 
            overlay.style.display = 'none'; 
            resolve(true); 
        };

        // زر (إلغاء)
        const noBtn = document.createElement('button');
        noBtn.innerText = 'إلغاء';
        noBtn.style.flex = '1';
        noBtn.style.background = '#bdc3c7'; // لون رمادي
        noBtn.style.color = '#2c3e50';
        noBtn.onclick = () => { 
            overlay.style.display = 'none'; 
            resolve(false); 
        };

        btnContainer.appendChild(noBtn);
        btnContainer.appendChild(yesBtn);

        overlay.style.display = 'flex';
    });
};