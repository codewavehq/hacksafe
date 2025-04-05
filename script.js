// This file is intentionally left blank.
        let isArabic = false;
        function toggleLanguage() {
            
            isArabic = !isArabic;
            document.querySelector('.lang-btn').innerText = isArabic ? 'English' : 'العربية';

            document.getElementById('site-title').innerText = isArabic ? 'هاك سيف' : 'HackSafe';
            document.getElementById('nav-services').innerText = isArabic ? 'الخدمات' : 'Services';
            document.getElementById('nav-pricing').innerText = isArabic ? 'الأسعار' : 'Pricing';
            document.getElementById('nav-contact').innerText = isArabic ? 'تواصل معنا' : 'Contact';

            document.getElementById('welcome-title').innerText = isArabic ? 'مرحبًا بك في هاك سيف' : 'Welcome to HackSafe';
            document.getElementById('welcome-desc').innerText = isArabic ? 'ظلالك الرقمية، وحماة صمتك...' : 'Your digital shadows, your silent protectors...';

            document.getElementById('services-title').innerText = isArabic ? 'خدماتنا' : 'Our Services';
            document.getElementById('srv1-title').innerText = isArabic ? 'حماية المواقع' : 'Website Protection';
            document.getElementById('srv1-desc').innerText = isArabic ? 'نأمن موقعك ضد جميع أنواع الهجمات' : 'We secure your website against all types of attacks.';
            document.getElementById('srv2-title').innerText = isArabic ? 'اختراق حسابات إنستقرام' : 'Instagram Account Hacking';
            document.getElementById('srv2-desc').innerText = isArabic ? 'استرجاع أو اختراق حسابات إنستقرام بسرعة وأمان' : 'Recover or hack Instagram accounts quickly and securely.';
            document.getElementById('srv3-title').innerText = isArabic ? 'اختراق حسابات تيكتوك وفيسبوك' : 'TikTok & Facebook Account Hacking';
            document.getElementById('srv3-desc').innerText = isArabic ? 'الوصول إلى حسابات تيكتوك وفيسبوك بفعالية' : 'Gain access to TikTok and Facebook accounts efficiently.';

            document.getElementById('srv1-title').style.textAlign = isArabic ? 'center' : 'left';
            document.getElementById('srv1-desc').style.textAlign = isArabic ? 'right' : 'left';
            document.getElementById('srv2-title').style.textAlign = isArabic ? 'center' : 'left';
            document.getElementById('srv2-desc').style.textAlign = isArabic ? 'right' : 'left';
            document.getElementById('srv3-title').style.textAlign = isArabic ? 'center' : 'left';
            document.getElementById('srv3-desc').style.textAlign = isArabic ? 'right' : 'left';

            document.getElementById('pricing-title').innerText = isArabic ? 'الأسعار' : 'Pricing';
            document.getElementById('price-basic').innerText = isArabic ? 'الخدمة الأساسية' : 'Basic Service';
            document.getElementById('price-basic-desc').innerText = isArabic ? 'تبدأ من 15 دولار' : 'Starts at $15';
            document.getElementById('price-adv').innerText = isArabic ? 'الحماية المتقدمة' : 'Advanced Protection';
            document.getElementById('price-adv-desc').innerText = isArabic ? 'تبدأ من 20 دولار' : 'Starts at $20';

            document.getElementById('price-basic').style.textAlign = isArabic ? 'center' : 'left';
            document.getElementById('price-basic-desc').style.textAlign = isArabic ? 'right' : 'left';
            document.getElementById('price-adv').style.textAlign = isArabic ? 'center' : 'left';
            document.getElementById('price-adv-desc').style.textAlign = isArabic ? 'right' : 'left';

            document.getElementById('contact-title').innerText = isArabic ? 'تواصل معنا' : 'Contact Us';
            document.getElementById('contact-desc').innerText = isArabic ? 'نعمل فقط عبر قنوات مشفرة.' : 'We operate through encrypted channels only.';
            document.getElementById('contact-btn').innerText = isArabic ? 'راسلنا على تيليجرام' : 'Message on Telegram';
        }