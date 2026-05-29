let currentLanguage = 'ar';

function countText() {
    const text = document.getElementById('text-input').value;
    const charCount = text.length;
    const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
    document.getElementById('char-count').innerText = charCount;
    document.getElementById('word-count').innerText = wordCount;
}

// دالتان لفتح وإغلاق النوافذ المنبثقة
function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// دالة تبديل اللغة المحدثة لتشمل الصفحات القانونية
function switchLanguage() {
    const html = document.documentElement;
    const langBtn = document.getElementById('lang-btn');
    
    if (currentLanguage === 'ar') {
        currentLanguage = 'en';
        html.setAttribute('lang', 'en');
        html.setAttribute('dir', 'ltr');
        langBtn.innerText = 'العربية';
        
        document.getElementById('hero-title').innerText = "Free Tools to Boost Your Productivity";
        document.getElementById('hero-desc').innerText = "All the tools you need in one place, fast and without registration.";
        document.getElementById('tool1-title').innerText = "📊 Word & Character Counter";
        document.getElementById('tool1-desc').innerText = "Count the number of words and characters in your text instantly.";
        document.getElementById('text-input').placeholder = "Type or paste your text here...";
        document.getElementById('label-words').innerText = "Words:";
        document.getElementById('label-chars').innerText = "Characters:";
        
        // ترجمة الفوتر والروابط
        document.getElementById('link-privacy').innerText = "Privacy Policy";
        document.getElementById('link-terms').innerText = "Terms of Service";
        
        // ترجمة محتوى سياسة الخصوصية
        document.getElementById('privacy-text').innerHTML = `
            <h2>Privacy Policy</h2>
            <p>At ToolFlex, the privacy of our visitors is of extreme importance to us. We do not collect, store, or share any data or text entered by the user. All operations are processed 100% locally inside your browser.</p>
            <p>Third-party ad networks may use cookies to serve ads based on your prior visits to our website or other sites.</p>
        `;
        
        // ترجمة محتوى شروط الاستخدام
        document.getElementById('terms-text').innerHTML = `
            <h2>Terms of Service</h2>
            <p>By using ToolFlex, you agree to comply with the following terms:</p>
            <ul>
                <li>Tools are provided "as is" without warranties. We are not liable for any errors resulting from their use.</li>
                <li>You are free to use these tools for personal or legal commercial purposes.</li>
                <li>Any attempt to misuse the site or flood it with fake requests to harm the service is strictly prohibited.</li>
            </ul>
        `;
        
    } else {
        currentLanguage = 'ar';
        html.setAttribute('lang', 'ar');
        html.setAttribute('dir', 'rtl');
        langBtn.innerText = 'English';
        
        document.getElementById('hero-title').innerText = "أدوات مجانية لزيادة إنتاجيتك";
        document.getElementById('hero-desc').innerText = "كل ما تحتاجه لتطوير محتواك في مكان واحد، بسرعة وبدون تسجيل.";
        document.getElementById('tool1-title').innerText = "📊 عداد الكلمات والحروف";
        document.getElementById('tool1-desc').innerText = "احسب عدد الكلمات والحروف في نصك فوراً.";
        document.getElementById('text-input').placeholder = "اكتب أو الصق نصك هنا...";
        document.getElementById('label-words').innerText = "الكلمات:";
        document.getElementById('label-chars').innerText = "الحروف:";
        
        document.getElementById('link-privacy').innerText = "سياسة الخصوصية";
        document.getElementById('link-terms').innerText = "شروط الاستخدام";
        
        document.getElementById('privacy-text').innerHTML = `
            <h2>سياسة الخصوصية</h2>
            <p>في ToolFlex، خصوصية زوارنا لها أهمية بالغة بالنسبة لنا. نحن لا نجمع، ولا نخزن، ولا نشارك أي بيانات أو نصوص يقوم المستخدم بكتابتها أو معالجتها داخل الأدوات. جميع العمليات تتم محلياً بالكامل داخل متصفحك.</p>
            <p>قد تستخدم شبكات الإعلانات الطرف الثالث ملفات تعريف الارتباط (Cookies) لعرض الإعلانات بناءً على زياراتك السابقة لموقعنا أو لمواقع أخرى.</p>
        `;
        
        document.getElementById('terms-text').innerHTML = `
            <h2>شروط الاستخدام</h2>
            <p>باستخدامك لموقع ToolFlex، فإنك توافق على الالتزام بالشروط التالية:</p>
            <ul>
                <li>يتم تقديم الأدوات "كما هي" بدون أي ضمانات، ونحن غير مسؤولين عن أي خطأ ناتج عن استخدامها.</li>
                <li>يُسمح باستخدام الأدوات بشكل مجاني بالكامل ولأغراض شخصية أو تجارية قانونية.</li>
                <li>يُمنع محاولة إساءة استخدام الموقع أو محاولة إغراقه بطلبات وهمية تضر بالخادم أو بالخدمة.</li>
            </ul>
        `;
    }
}