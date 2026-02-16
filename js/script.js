(function () {
    const body = document.body;
    const html = document.documentElement;

    // Year
    const yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // Mobile Menu
    const toggleBtn = document.querySelector(".nav-toggle");
    const navMenu = document.getElementById("navMenu");

    if (toggleBtn && navMenu) {
        toggleBtn.addEventListener("click", () => {
            const isOpen = navMenu.classList.toggle("open");
            toggleBtn.setAttribute("aria-expanded", String(isOpen));
        });

        // Close on link click (mobile)
        navMenu.querySelectorAll("a").forEach(a => {
            a.addEventListener("click", () => {
                navMenu.classList.remove("open");
                toggleBtn.setAttribute("aria-expanded", "false");
            });
        });

        // Close on outside click
        document.addEventListener("click", (e) => {
            if (!navMenu.contains(e.target) && !toggleBtn.contains(e.target)) {
                navMenu.classList.remove("open");
                toggleBtn.setAttribute("aria-expanded", "false");
            }
        });
    }

    // Theme Toggle
    const themeToggle = document.getElementById("themeToggle");
    function setTheme(theme) {
        body.classList.toggle("theme-dark", theme === "dark");
        body.classList.toggle("theme-light", theme === "light");
        localStorage.setItem("theme", theme);
    }
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) setTheme(savedTheme);

    if (themeToggle) {
        themeToggle.addEventListener("click", () => {
            const isDark = body.classList.contains("theme-dark");
            setTheme(isDark ? "light" : "dark");
        });
    }

    // i18n
    const dict = {
        en: {
            name_full: "FATHI KHALIFA MOHAMED",
            name_short: "FATHI KHALIFA",
            title_short: "PLANNING ENGINEER | ROAD ENGINEER",
            hero_title: "Planning Engineer | Infrastructure & Data",
            hero_intro: "Delivering smarter infrastructure through planning & data.\nInfrastructure Planning • Cost Control • Data-Driven Decision Support",
            hero_cta_proj: "View Projects",
            hero_cta_download: "Download CV",
            nav_about: "About",
            nav_skills: "Skills",
            nav_exp: "Experience",
            nav_edu: "Education",
            nav_cert: "Certificates",
            nav_cv: "CV",
            nav_contact: "Contact",
            theme_btn: "Theme",
            open_menu: "Open menu",
            mini_loc_k: "Location",
            mini_loc_v: "Makkah, KSA",
            mini_exp_k: "Experience",
            mini_exp_v: "5+ Years",
            mini_stack_k: "Stack",
            kpi_1: "Years Experience",
            kpi_2: "Projects",
            kpi_3: "Certifications",
            kpi_4: "On-Time Reporting",
            serv_title: "What I Do",
            serv_sub: "Delivering value through precision planning and data intelligence.",
            s1_t: "Planning & Scheduling",
            s1_d: "Primavera P6 baselines, critical path monitoring, and schedule recovery plans.",
            s2_t: "Data Analytics & BI",
            s2_d: "Power BI dashboards, KPI tracking, and executive reporting that supports decisions.",
            s3_t: "Performance Reporting",
            s3_d: "EVM analysis, productivity insights, cost control, and variance explanations.",
            proj_title: "Selected Projects",
            proj_sub: "A portfolio of infrastructure planning and data visualization.",
            role: "Role:",
            tools: "Tools:",
            impact: "Impact:",
            view_details: "View Details →",
            view_dashboard: "View Dashboard →",
            view_script: "View Script →",
            about_title: "Profile Summary",
            about_sub: "Planning discipline + data clarity + safety mindset — focused on reliable delivery.",
            about_body:
                "I am a Civil Engineer specialized in road infrastructure planning and project control, with a strong background in data analysis, schedule, and cost performance management. I integrate technology, data analytics, and smart planning into road projects to improve efficiency, reduce environmental impact, and deliver inclusive infrastructure.",
            h1_t: "Core Focus",
            h1_d: "Roads & Infrastructure • Planning • Project Control",
            h2_t: "Data Stack",
            h2_d: "Power BI • Excel • SQL Server • Python • n8n",
            h3_t: "Mindset",
            h3_d: "Safety • Quality • Documentation • Continuous improvement",
            vision_title: "Executive Vision",
            vision_body:
                "To drive infrastructure excellence by bridging confidence in planning with precision in data—delivering sustainable, high-impact projects.",
            values_title: "Core Values",
            v1_k: "Integrity:",
            v1_v: "Accurate reporting and data honesty.",
            v2_k: "Efficiency:",
            v2_v: "Optimized scheduling, less waste.",
            v3_k: "Sustainability:",
            v3_v: "Long-term community value.",
            skills_title: "Technical Expertise",
            skills_sub: "Precision tools for planning, control, and data intelligence.",
            sk1: "Scheduling, baselines & critical path analysis.",
            sk2: "Executive dashboards & storytelling.",
            sk3: "CPI/SPI, forecasting & risk reporting.",
            sk4: "Budget, cash flow & variance analysis.",
            sk5: "Queries, modeling & relational data.",
            sk6: "Automation & workflow efficiency.",
            sk7: "BOQ, variations & payment certificates.",
            sk8: "Models, pivots & clean reporting.",
            exp_title: "Professional Experience",
            exp_sub: "Roles and responsibilities based on your CV content.",
            edu_title: "Education & Details",
            edu_sub: "Education, languages, and personal details.",
            edu_block_title: "Education",
            edu_degree: "Bachelor’s Degree in Civil Engineering",
            edu_year: "Graduation Year: 2021",
            edu_uni: "New Cairo Academy for Engineering and Technology",
            edu_proj: "Graduation Project: Recycling — Grade: Excellent",
            lang_title: "Languages",
            lang_1: "Arabic: Native",
            lang_2: "English: Conversational",
            lang_3: "German: Basic",
            personal_title: "Personal Details",
            p_addr: "Address:",
            p_addr_v: "Makkah, KSA",
            p_dob: "Date of Birth:",
            p_ms: "Marital Status:",
            p_ms_v: "Single",
            p_mil: "Military Status:",
            p_mil_v: "Completed",
            p_cit: "Citizenship:",
            p_cit_v: "Egyptian",
            cert_title: "Professional Certificates",
            cert_desc: "Certificates are available as a PDF inside the website.",
            cert_open: "Open Certificates PDF",
            cert_download: "Download PDF",
            cv_title: "CV",
            cv_desc: "View my CV inside the website or download it.",
            cv_download: "Download CV",
            cv_open: "Open in new tab",
            contact_title: "Contact",
            contact_sub: "WhatsApp and email are the fastest ways to reach me.",
            f_name: "Full Name",
            f_email: "Email",
            f_msg: "Message",
            send: "Send Message",
            form_note: "This form is front-end only. Use WhatsApp or email for direct contact.",
            direct_title: "Direct Contact",
            social_title: "Social",
            social_note: "Replace placeholder social links when ready.",
            footer_copy: "Fathi Khalifa. All rights reserved.",
            back_top: "Back to top ↑",
            p1_t: "Road Infrastructure Upgrade",
            p1_d: "Detailed scheduling and resource allocation for a 50km highway expansion project.",
            p1_r: "Planning Engineer",
            p1_i: "Delivered 2 weeks ahead via critical path optimization.",
            p2_t: "Project Control Dashboard",
            p2_d: "Interactive Power BI dashboard to track EVM metrics and cost forecasts.",
            p2_r: "Data Analyst",
            p2_i: "Improved reporting efficiency by 40% with real-time tracking.",
            p3_t: "Automated Reporting System",
            p3_d: "Automated daily site reporting using Python scripts and workflow automation.",
            p3_r: "Automation Lead",
            p3_i: "Reduced manual work by 15h/week and minimized errors.",
            exp1_title: "Abo Azzam Company — Site Engineer / Planning Engineer",
            exp1_date: "Jan 2025 – Apr 2025 • Taif, Saudi Arabia",
            exp1_d1: "Supervised construction activities and coordinated site works.",
            exp1_d2: "Prepared daily/weekly reports for quantities, manpower, and progress.",
            exp1_d3: "Ensured compliance with safety and quality standards.",
            exp1_d4: "Coordinated labor, subcontractors, and suppliers to support schedule needs.",
            exp2_title: "Al-Saqr Al-Abyad Contracting — Planning Engineer (Roads)",
            exp2_date: "Jun 2024 – Nov 2024 • Egypt",
            exp2_d1: "Prepared and updated schedules using Primavera P6.",
            exp2_d2: "Monitored progress and productivity rates.",
            exp2_d3: "Built Power BI dashboards for project KPIs.",
            exp2_d4: "Coordinated with site teams for verification and reporting.",
            exp2_d5: "Supported decision-making through reporting updates."
        },

        ar: {
            name_full: "فتحي خليفة محمد",
            name_short: "فتحي خليفة",
            title_short: "مهندس تخطيط | مهندس طرق",
            hero_title: "مهندس تخطيط | بنية تحتية وبيانات",
            hero_intro: "تحسين مشاريع البنية التحتية عبر التخطيط والتحليل.\nتخطيط المشاريع • ضبط التكلفة • دعم القرار بالبيانات",
            hero_cta_proj: "عرض المشاريع",
            hero_cta_download: "تحميل السيرة",
            nav_about: "نبذة",
            nav_skills: "المهارات",
            nav_exp: "الخبرات",
            nav_edu: "التعليم",
            nav_cert: "الشهادات",
            nav_cv: "السيرة",
            nav_contact: "تواصل",
            theme_btn: "المظهر",
            open_menu: "فتح القائمة",
            mini_loc_k: "الموقع",
            mini_loc_v: "مكة، السعودية",
            mini_exp_k: "الخبرة",
            mini_exp_v: "+5 سنوات",
            mini_stack_k: "الأدوات",
            kpi_1: "سنوات خبرة",
            kpi_2: "مشروعات",
            kpi_3: "شهادات",
            kpi_4: "تقارير في موعدها",
            serv_title: "ماذا أقدم",
            serv_sub: "قيمة حقيقية عبر تخطيط دقيق وتحليل واضح.",
            s1_t: "التخطيط والجدولة",
            s1_d: "خطط أساس ومسار حرج واستراتيجيات تعويض التأخير بـ Primavera P6.",
            s2_t: "تحليل البيانات وذكاء الأعمال",
            s2_d: "لوحات Power BI ومؤشرات أداء وتقارير إدارية لدعم القرار.",
            s3_t: "تقارير الأداء",
            s3_d: "تحليل القيمة المكتسبة وإنتاجية وضبط تكلفة وتفسير الانحرافات.",
            proj_title: "مشاريع مختارة",
            proj_sub: "نماذج من التخطيط للبنية التحتية ولوحات البيانات.",
            role: "الدور:",
            tools: "الأدوات:",
            impact: "الأثر:",
            view_details: "عرض التفاصيل ←",
            view_dashboard: "عرض اللوحة ←",
            view_script: "عرض السكربت ←",
            about_title: "ملخص تعريفي",
            about_sub: "انضباط التخطيط + وضوح البيانات + عقلية السلامة.",
            about_body:
                "مهندس مدني متخصص في تخطيط مشروعات الطرق وضبط المشروع، بخلفية قوية في تحليل البيانات وإدارة الأداء الزمني والمالي. أدمج التكنولوجيا والتحليل والتخطيط الذكي لتحسين الكفاءة وتقليل الهدر وتقديم بنية تحتية ذات أثر.",
            h1_t: "التركيز",
            h1_d: "طرق وبنية تحتية • تخطيط • ضبط مشروع",
            h2_t: "منظومة البيانات",
            h2_d: "Power BI • Excel • SQL Server • Python • n8n",
            h3_t: "العقلية",
            h3_d: "سلامة • جودة • توثيق • تطوير مستمر",
            vision_title: "الرؤية",
            vision_body:
                "تحقيق تميز البنية التحتية عبر الجمع بين قوة التخطيط ودقة البيانات لتسليم مشاريع مستدامة عالية الأثر.",
            values_title: "القيم",
            v1_k: "النزاهة:",
            v1_v: "دقة البيانات وشفافية التقارير.",
            v2_k: "الكفاءة:",
            v2_v: "جدولة محسّنة وتقليل الهدر.",
            v3_k: "الاستدامة:",
            v3_v: "قيمة طويلة الأمد للمجتمع.",
            skills_title: "الخبرات الفنية",
            skills_sub: "أدوات دقيقة للتخطيط والتحكم والبيانات.",
            sk1: "جدولة وخطط أساس ومسار حرج.",
            sk2: "لوحات تنفيذية وسرد بيانات.",
            sk3: "CPI/SPI وتوقعات ومخاطر.",
            sk4: "ميزانية وتدفق نقدي وانحرافات.",
            sk5: "استعلامات ونمذجة بيانات.",
            sk6: "أتمتة وتقليل وقت التقارير.",
            sk7: "BOQ وأوامر تغيير ومستخلصات.",
            sk8: "نماذج وPivot وتقارير نظيفة.",
            exp_title: "الخبرات العملية",
            exp_sub: "أدوار ومسؤوليات بناءً على سيرتك.",
            edu_title: "التعليم والتفاصيل",
            edu_sub: "التعليم واللغات والبيانات الشخصية.",
            edu_block_title: "التعليم",
            edu_degree: "بكالوريوس هندسة مدنية",
            edu_year: "سنة التخرج: 2021",
            edu_uni: "أكاديمية القاهرة الجديدة للهندسة والتكنولوجيا",
            edu_proj: "مشروع التخرج: إعادة التدوير — التقدير: ممتاز",
            lang_title: "اللغات",
            lang_1: "العربية: لغة أم",
            lang_2: "الإنجليزية: جيد",
            lang_3: "الألمانية: أساسيات",
            personal_title: "بيانات شخصية",
            p_addr: "العنوان:",
            p_addr_v: "مكة، السعودية",
            p_dob: "تاريخ الميلاد:",
            p_ms: "الحالة الاجتماعية:",
            p_ms_v: "أعزب",
            p_mil: "الموقف من التجنيد:",
            p_mil_v: "مُنهى",
            p_cit: "الجنسية:",
            p_cit_v: "مصري",
            cert_title: "الشهادات المهنية",
            cert_desc: "الشهادات متاحة كملف PDF داخل الموقع.",
            cert_open: "فتح ملف الشهادات",
            cert_download: "تحميل PDF",
            cv_title: "السيرة الذاتية",
            cv_desc: "اعرض السيرة داخل الموقع أو قم بتحميلها.",
            cv_download: "تحميل السيرة",
            cv_open: "فتح في تبويب جديد",
            contact_title: "تواصل معي",
            contact_sub: "الواتساب والبريد أسرع طرق التواصل.",
            f_name: "الاسم بالكامل",
            f_email: "البريد الإلكتروني",
            f_msg: "الرسالة",
            send: "إرسال",
            form_note: "النموذج للواجهة فقط. استخدم واتساب أو البريد للتواصل المباشر.",
            direct_title: "تواصل مباشر",
            social_title: "روابط",
            social_note: "استبدل الروابط الوهمية عند الجاهزية.",
            footer_copy: "فتحي خليفة. جميع الحقوق محفوظة.",
            back_top: "العودة للأعلى ↑",
            p1_t: "تطوير طريق رئيسي",
            p1_d: "جدولة تفصيلية وتوزيع موارد لمشروع توسعة طريق 50 كم.",
            p1_r: "مهندس تخطيط",
            p1_i: "تقديم التسليم أسبوعين عبر تحسين المسار الحرج.",
            p2_t: "لوحة تحكم للمشروع",
            p2_d: "لوحة Power BI لمتابعة مؤشرات القيمة المكتسبة وتوقع التكلفة.",
            p2_r: "محلل بيانات",
            p2_i: "تحسين كفاءة التقارير 40% مع متابعة فورية.",
            p3_t: "نظام تقارير مؤتمت",
            p3_d: "أتمتة تقارير الموقع اليومية باستخدام Python وتدفقات عمل.",
            p3_r: "مسؤول أتمتة",
            p3_i: "تقليل العمل اليدوي 15 ساعة/أسبوع وتقليل الأخطاء.",
            exp1_title: "شركة أبو عزام — مهندس موقع / مهندس تخطيط",
            exp1_date: "يناير 2025 – أبريل 2025 • الطائف، السعودية",
            exp1_d1: "الإشراف على أعمال التنفيذ وتنسيق الموقع.",
            exp1_d2: "إعداد تقارير يومية وأسبوعية للكميات والعمالة والتقدم.",
            exp1_d3: "ضمان تطبيق السلامة والجودة.",
            exp1_d4: "تنسيق المقاولين والموردين لدعم البرنامج.",
            exp2_title: "الصقر الأبيض — مهندس تخطيط (طرق)",
            exp2_date: "يونيو 2024 – نوفمبر 2024 • مصر",
            exp2_d1: "إعداد وتحديث الجداول باستخدام Primavera P6.",
            exp2_d2: "متابعة التقدم والإنتاجية.",
            exp2_d3: "تصميم لوحات Power BI لمؤشرات الأداء.",
            exp2_d4: "التنسيق مع فرق الموقع للتحقق والتقارير.",
            exp2_d5: "دعم الإدارة في اتخاذ القرار عبر التقارير."
        }
    };

    let lang = localStorage.getItem("lang") || "en";

    function applyLang(nextLang) {
        lang = nextLang;
        localStorage.setItem("lang", lang);

        const isAR = lang === "ar";
        html.lang = isAR ? "ar" : "en";
        html.dir = isAR ? "rtl" : "ltr";

        document.querySelectorAll("[data-i18n]").forEach(el => {
            const key = el.getAttribute("data-i18n");
            const val = dict[lang][key];
            if (typeof val === "string") {
                el.textContent = val;
            }
        });

        const langBtnText = document.querySelector("#langToggle .btn-text");
        if (langBtnText) langBtnText.textContent = isAR ? "EN" : "AR";
    }

    applyLang(lang);

    const langToggle = document.getElementById("langToggle");
    if (langToggle) {
        langToggle.addEventListener("click", () => {
            applyLang(lang === "en" ? "ar" : "en");
        });
    }
})();
