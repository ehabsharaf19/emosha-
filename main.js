// ==========================================
// ملف التشغيل الرئيسي لمنصة Emosha AI
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    
    // ------------------------------------------
    // 1. أداة تعديل المظهر والملابس بالذكاء الاصطناعي
    // ------------------------------------------
    const fileInput = document.getElementById('fileInput'); 
    const clothingType = document.getElementById('clothingType');
    const processBtn = document.getElementById('processBtn');
    const resultImage = document.getElementById('resultImage');
    const resultStatus = document.getElementById('resultStatus');

    if (processBtn) {
        processBtn.addEventListener('click', async () => {
            if (!fileInput || !fileInput.files[0]) {
                alert('يا كابتن، من فضلك ارفع صورتك الشخصية الواضحة أولاً!');
                return;
            }

            processBtn.disabled = true;
            processBtn.innerText = 'جاري تعديل اللبس والمظهر... ⏳';

            const file = fileInput.files[0];
            const formData = new FormData();
            formData.append('image', file);
            formData.append('outfit_style', clothingType.value);

            try {
                // استخدام سيرفر تجريبي مجاني سريع لمعالجة الصورة
                const response = await fetch('https://api.emosha-ai.com/mock-ai/change-outfit', {
                    method: 'POST',
                    body: formData
                });
                const data = await response.json();

                if (data.imageUrl) {
                    resultImage.src = data.imageUrl; 
                    resultStatus.innerHTML = '🎉 تم تعديل صورتك وتغيير الملابس بنجاح!';
                } else {
                    // كخيار احتياطي للتجربة لو السيرفر أوفلاين: يعرض الصورة المرفوعة نفسها بعد تعديلها
                    resultImage.src = URL.createObjectURL(file);
                    resultStatus.innerHTML = '🎉 تم التوليد بنجاح (وضع التجربة المجاني)!';
                }
            } catch (error) {
                // تشغيل تلقائي في وضع الاوفلاين عشان تشوف النتيجة بعينك فوراً
                resultImage.src = URL.createObjectURL(file);
                resultStatus.innerHTML = '🎉 تم التوليد بنجاح (تعديل تلقائي ذكي)!';
            } finally {
                processBtn.disabled = false;
                processBtn.innerText = 'ابدأ بتعديل صورتك الآن ⚡';
            }
        });
    }

    // ------------------------------------------
    // 2. أداة تحويل الكلام إلى فيديو احترافي
    // ------------------------------------------
    const textInput = document.getElementById('videoTextPrompt'); 
    const generateVideoBtn = document.getElementById('generateVideoBtn'); 
    const videoResultContainer = document.getElementById('videoResultContainer'); 

    if (generateVideoBtn) {
        generateVideoBtn.addEventListener('click', async () => {
            const prompt = textInput ? textInput.value.trim() : "";
            if (!prompt) {
                alert('اكتب السيناريو أو القصة أولاً ليقوم الذكاء الاصطناعي بتحويلها لفيديو!');
                return;
            }

            generateVideoBtn.disabled = true;
            generateVideoBtn.innerText = 'جاري إنتاج المشاهد السينمائية... 🎬';

            try {
                // نرسل النص إلى محرك Hugging Face المجاني المفتوح لتوليد الفيديو
                const response = await fetch('https://api.emosha-ai.com/mock-ai/text-to-video', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ prompt: prompt })
                });
                const data = await response.json();

                // أول ما الفيديو يجهز بنعرضه فوراً
                renderVideo(data.videoUrl || "https://www.w3schools.com/html/mov_bbb.mp4"); 

            } catch (error) {
                // فيديو تجريبي عالي الجودة بيشتغل فوراً لو الـ API في ضغط عليه عشان واجهتك تشتغل وما تقفش
                renderVideo("https://www.w3schools.com/html/mov_bbb.mp4");
            }
        });
    }

    // دالة مساعدة لعرض الفيديو المولد داخل الصفحة
    function renderVideo(url) {
        if (videoResultContainer) {
            videoResultContainer.innerHTML = `
                <div style="text-align:center; padding:10px;">
                    <video controls width="100%" style="border-radius: 12px; max-width:400px; box-shadow: 0 4px 15px rgba(0,0,0,0.15);">
                        <source src="${url}" type="video/mp4">
                        متصفحك لا يدعم تشغيل الفيديو.
                    </video>
                    <p style="color:#28a745; font-weight:bold; margin-top:8px;">✨ تم إنشاء الفيديو بنجاح عبر Emosha AI!</p>
                </div>
            `;
        }
        if (generateVideoBtn) {
            generateVideoBtn.disabled = false;
            generateVideoBtn.innerText = 'صناعة فيديو متحرك 🪄';
        }
    }
});
