import type { Program, Trainer, DaySchedule, MembershipPlan, TransformationStory } from '../types';

export const GYM_CONTACT = {
  phone: '+966 50 892 3421',
  phoneDisplay: '050 892 3421',
  whatsAppNumber: '966508923421',
  email: 'info@ironpulse-gym.com',
  addressAr: 'المملكة العربية السعودية، الرياض، طريق الملك فهد — تقاطع أنس بن مالك',
  addressEn: 'King Fahd Rd, Anas Bin Malik Jct, Riyadh, Saudi Arabia',
  hoursAr: 'مفتوح 24 ساعة / 7 أيام في الأسبوع',
  mapUrl: 'https://maps.google.com/?q=Riyadh+King+Fahd+Road',
};

export const GYM_STATS = [
  { id: 'members', value: 2850, prefix: '+', labelAr: 'عضو نشط يقاتلون يومياً', labelEn: 'ACTIVE WARRIORS' },
  { id: 'trainers', value: 24, prefix: '', labelAr: 'مدرب أولمبي ونخبة بطولات', labelEn: 'ELITE COACHES' },
  { id: 'hours', value: 24, suffix: '/7', labelAr: 'ساعات العمل دون توقف', labelEn: 'OPEN 24/7' },
  { id: 'equipment', value: 190, prefix: '+', labelAr: 'أجهزة أولمبية وهامر سترينث', labelEn: 'OLYMPIC MACHINES' },
];

export const PROGRAMS: Program[] = [
  {
    id: 'iron',
    titleAr: 'حديد وبناء أجسام',
    titleEn: 'HEAVY IRON & HYPERTROPHY',
    tagline: 'حمل أوزان ثقيلة، تفجير ألياف عضلية، وبناء كتلة صلبة كالصخر.',
    description: 'المنطقة المحرمة للمتكاسلين. تدريب مخصص لرفع الأثقال الأولمبية وكمال الأجسام تحت إشراف نخبة من حاملي كروت الاحتراف IFBB. أجهزة Hammer Strength وEleiko الأصلية مع منصات ديدلفت معزولة.',
    intensity: 95,
    duration: '75 دقيقة',
    caloriesBurn: '650-800 سعرة',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop',
    features: ['منصات أولمبية مخصصة', 'أوزان حرة حتى 70 كجم للدمبلز', 'مراقبة التكنيك العضلي بالملي', 'بروتوكول تحطيم الأوزان PR'],
    schedulePreview: 'يومياً على مدار الساعة',
    targetGoal: 'زيادة الكتلة العضلية والقوة القصوى'
  },
  {
    id: 'crossfit',
    titleAr: 'كروس فت ولياقة تكتيكية',
    titleEn: 'TACTICAL CROSSFIT',
    tagline: 'تحدَّ حدود جهازك العصبي والقلبي بتمارين مكثفة لا ترحم.',
    description: 'تمارين وظيفية عالية الكثافة تجمع بين رفع الأثقال، والجمباز، وتحمل القلب. تمارين WOD متغيرة يومياً لتضمن أن جسمك لن يعتاد على الروتين أبداً.',
    intensity: 98,
    duration: '60 دقيقة',
    caloriesBurn: '750-950 سعرة',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1000&auto=format&fit=crop',
    features: ['حبال تسلق وصناديق قفز بليومتريك', 'مجاذيف ودراجات هوائية Assault Bikes', 'أطواق جمباز وحلبة سباق داخلية', 'لوحة قيادة للتحديات اليومية'],
    schedulePreview: 'صباحاً ومساءً 6 جلسات يومياً',
    targetGoal: 'قوة انفجارية ولياقة قلبية فولاذية'
  },
  {
    id: 'boxing',
    titleAr: 'ملاكمة وفنون قتالية',
    titleEn: 'COMBAT & STRIKING',
    tagline: 'سرعة، رد فعل، وتفريغ طاقة قصوى داخل الحلبة الرسمية.',
    description: 'تدريب احترافي في الملاكمة والمواي تاي. تعلم التكنيك الصحيح لتوجيه الضربات، تحركات القدمين، والمراوغة مع تمارين بدنية تزيد من سرعتك وقدرتك على التحمل.',
    intensity: 90,
    duration: '60 دقيقة',
    caloriesBurn: '700-900 سعرة',
    image: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=1000&auto=format&fit=crop',
    features: ['حلبة ملاكمة مطابقة للمواصفات الدولية', 'أكياس ملاكمة ثقيلة من الجلد الطبيعي', 'تدريب شادو وبادات مع مدرب محترف', 'تمارين سبارينغ آمنة ومدروسة'],
    schedulePreview: 'السبت، الإثنين، الأربعاء 6:00 م - 10:00 م',
    targetGoal: 'تحسين رد الفعل وحرق دهون فائق'
  },
  {
    id: 'mobility',
    titleAr: 'استشفاء عضلي ومرونة',
    titleEn: 'MOBILITY & POWER YOGA',
    tagline: 'العضلة التي لا تتمدد تنكسر. امنح مفاصلك عمراً إضافياً.',
    description: 'جلسات مخصصة لفك الضغط عن الفقرات، تحرير الأنسجة العضلية العميقة، وزيادة المدى الحركي للمفاصل. مصممة خصيصاً للرياضيين الذين يرفعون أوزاناً ثقيلة لتفادي الإصابات وتسريع البناء العضلي.',
    intensity: 65,
    duration: '50 دقيقة',
    caloriesBurn: '300-400 سعرة',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1000&auto=format&fit=crop',
    features: ['أجهزة مساج واهتزاز Hyperice', 'جلسات تمدد عميق وحمامات ثلج Ice Bath', 'ساونا جافة وبخار فنلندي', 'تصحيح القوام ووضعيات العمود الفقري'],
    schedulePreview: 'الأحد، الثلاثاء، الخميس 5:00 م',
    targetGoal: 'تسريع الاستشفاء ومنع الإصابات'
  },
  {
    id: 'shred',
    titleAr: 'تحول بدني وحرق دهون',
    titleEn: 'METABOLIC SHRED',
    tagline: 'وداعاً للدهون العنيدة مع أقوى نظام حرق متواصل 24 ساعة.',
    description: 'برنامج تحول بدني مكثف مبني على مبادئ EPOC (حرق السعرات بعد التمرين). يدمج فترات المقاومة السريعة مع تمارين الكارديو التناوبي لتفجير الدهون والحفاظ التام على العضل.',
    intensity: 92,
    duration: '55 دقيقة',
    caloriesBurn: '800-1000 سعرة',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1000&auto=format&fit=crop',
    features: ['متابعة أسبوعية لنسبة الدهون بالجهاز الثلاثي', 'خطة غذائية عالية البروتين مخصصة', 'تمارين HIIT بنبضات قلب مراقبة', 'دعم نفسي وتحفيز جماعي يومي'],
    schedulePreview: 'جلسات مستمرة من 4:00 عصراً حتى 11:00 ليلاً',
    targetGoal: 'نحت الجسم وإبراز التقاسيم العضلية'
  }
];

export const TRAINERS: Trainer[] = [
  {
    id: 'trainer-1',
    nameAr: 'كابتن عبد الله القحطاني',
    nameEn: 'CAPTAIN ABDULLAH AL-QAHTANI',
    roleAr: 'كبير مدربي كمال الأجسام والقوة',
    experience: '12 سنة خبرة',
    certificates: ['بطل المملكة لرفع الأثقال سابقاً', 'شهادة CSCS الدولية للقوة والتكييف', 'أخصائي تغذية رياضية متقدمة'],
    specialty: 'تضخيم عضلي وتحطيم أوزان PR',
    quote: 'الألم الذي تشعر به اليوم هو القوة التي تتباهى بها غداً.',
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=800&auto=format&fit=crop',
    instagram: '@coach_abdullah_iron'
  },
  {
    id: 'trainer-2',
    nameAr: 'كابتن طارق العنزي',
    nameEn: 'TAREQ AL-ENEZI',
    roleAr: 'مدرب كروس فت ولياقة تكتيكية',
    experience: '9 سنوات خبرة',
    certificates: ['CrossFit Level 3 Certified Trainer', 'مدرب لياقة بدنية عسكرية وتكتيكية', 'حكم بطولات الكروس فت الإقليمية'],
    specialty: 'تحمل هوائي، سرعة بديهة، وقوة انفجارية',
    quote: 'لا يوجد تمرين مستحيل، هناك فقط عقل يحتاج إلى إعادة برمجة.',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800&auto=format&fit=crop',
    instagram: '@tareq_crossfit'
  },
  {
    id: 'trainer-3',
    nameAr: 'كابتن مروان الشيخ',
    nameEn: 'MARWAN AL-SHAIKH',
    roleAr: 'مدرب ملاكمة وفنون دفاع',
    experience: '11 سنة خبرة',
    certificates: ['حزام أسود ومدرب ملاكمة معتمد IBA', 'بطل دورات الملاكمة في الخليج', 'أخصائي تمارين التوافق العضلي العصبي'],
    specialty: 'حركات الحلبة، قوة اللكمات، وحرق الدهون',
    quote: 'في الحلبة أو في الحياة، الضربة التي لا تسقطك تجعلك أسطورة.',
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=800&auto=format&fit=crop',
    instagram: '@marwan_boxing_pro'
  },
  {
    id: 'trainer-4',
    nameAr: 'كابتن زياد الحربي',
    nameEn: 'ZIYAD AL-HARBI',
    roleAr: 'أخصائي استشفاء وإعادة تأهيل حركي',
    experience: '8 سنوات خبرة',
    certificates: ['بكالوريوس علاج طبيعي وتأهيل رياضي', 'شهادة FMS لفحص الأنماط الحركية', 'ماستر في تقنيات الإبر الجافة والحجامة الرياضية'],
    specialty: 'علاج إصابات المفاصل وزيادة المرونة',
    quote: 'اهتمامك بالاستشفاء هو ما يحدد قدرتك على رفع أوزانك غداً.',
    image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=800&auto=format&fit=crop',
    instagram: '@ziyad_recovery_fit'
  }
];

export const WEEK_DAYS: DaySchedule[] = [
  {
    dayNameAr: 'السبت',
    dayNameEn: 'Saturday',
    classes: [
      { id: 'c-1', time: '06:00 ص', titleAr: 'حديد صباحي: صدر وترايسبس', titleEn: 'Morning Heavy Chest', category: 'iron', trainer: 'عبد الله القحطاني', room: 'صالة الحديد الرئيسية', intensity: 'عالية جداً', duration: '60 دقيقة' },
      { id: 'c-2', time: '10:00 ص', titleAr: 'كروس فت: حلبة التحمل WOD', titleEn: 'Hero WOD Challenge', category: 'crossfit', trainer: 'طارق العنزي', room: 'أرينا الكروس فت', intensity: 'أقصى طاقة', duration: '50 دقيقة' },
      { id: 'c-3', time: '05:00 م', titleAr: 'ملاكمة: تكنيك اللكمات والحركة', titleEn: 'Boxing Striking Fundamentals', category: 'boxing', trainer: 'مروان الشيخ', room: 'حلبة الأبطال', intensity: 'عالية', duration: '60 دقيقة' },
      { id: 'c-4', time: '07:30 م', titleAr: 'تحدي الأداء العضلي الشامل', titleEn: 'Full Body Overload', category: 'hiit', trainer: 'طارق العنزي', room: 'المنطقة الوظيفية', intensity: 'عالية جداً', duration: '55 دقيقة' },
      { id: 'c-5', time: '09:00 م', titleAr: 'استشفاء عميق وحمام جليدي', titleEn: 'Ice Bath & Foam Rolling', category: 'mobility', trainer: 'زياد الحربي', room: 'سبا الاستشفاء', intensity: 'متوسطة', duration: '45 دقيقة' },
    ]
  },
  {
    dayNameAr: 'الأحد',
    dayNameEn: 'Sunday',
    classes: [
      { id: 'c-6', time: '07:00 ص', titleAr: 'كروس فت: قوة الجذع والكارديو', titleEn: 'Core Engine Conditioning', category: 'crossfit', trainer: 'طارق العنزي', room: 'أرينا الكروس فت', intensity: 'عالية', duration: '50 دقيقة' },
      { id: 'c-7', time: '04:30 م', titleAr: 'حديد: ظهر وبايسبس تفجيري', titleEn: 'Deadlift & Back Destruction', category: 'iron', trainer: 'عبد الله القحطاني', room: 'صالة الحديد الرئيسية', intensity: 'عالية جداً', duration: '75 دقيقة' },
      { id: 'c-8', time: '06:30 م', titleAr: 'ملاكمة متقدمة وسبارينغ تكتيكي', titleEn: 'Advanced Combat Sparring', category: 'boxing', trainer: 'مروان الشيخ', room: 'حلبة الأبطال', intensity: 'أقصى طاقة', duration: '60 دقيقة' },
      { id: 'c-9', time: '08:30 م', titleAr: 'تمدد رياضي وحركية مفاصل', titleEn: 'Athletic Mobility Yoga', category: 'mobility', trainer: 'زياد الحربي', room: 'قاعة الاستشفاء', intensity: 'منخفضة/متوسطة', duration: '50 دقيقة' },
    ]
  },
  {
    dayNameAr: 'الإثنين',
    dayNameEn: 'Monday',
    classes: [
      { id: 'c-10', time: '06:30 ص', titleAr: 'تحدي الميتابوليك وحرق الدهون', titleEn: 'Metabolic Afterburn', category: 'hiit', trainer: 'طارق العنزي', room: 'المنطقة الوظيفية', intensity: 'عالية جداً', duration: '45 دقيقة' },
      { id: 'c-11', time: '05:00 م', titleAr: 'حديد: أرجل دمار شامل (Leg Day)', titleEn: 'Squat & Leg Annihilation', category: 'iron', trainer: 'عبد الله القحطاني', room: 'صالة الحديد الرئيسية', intensity: 'أقصى طاقة', duration: '75 دقيقة' },
      { id: 'c-12', time: '07:00 م', titleAr: 'ملاكمة: كيك بوكسينغ وكارديو', titleEn: 'Kickboxing Conditioning', category: 'boxing', trainer: 'مروان الشيخ', room: 'حلبة الأبطال', intensity: 'عالية', duration: '60 دقيقة' },
      { id: 'c-13', time: '09:00 م', titleAr: 'جلسة تنفس واستشفاء عصبي', titleEn: 'Nervous System Reset', category: 'mobility', trainer: 'زياد الحربي', room: 'سبا الاستشفاء', intensity: 'استرخاء', duration: '40 دقيقة' },
    ]
  },
  {
    dayNameAr: 'الثلاثاء',
    dayNameEn: 'Tuesday',
    classes: [
      { id: 'c-14', time: '07:00 ص', titleAr: 'كروس فت: جمباز ورفع أثقال', titleEn: 'Gymnastics & Olympic Bar', category: 'crossfit', trainer: 'طارق العنزي', room: 'أرينا الكروس فت', intensity: 'عالية جداً', duration: '60 دقيقة' },
      { id: 'c-15', time: '05:30 م', titleAr: 'حديد: أكتاف وترابيس مقعرة', titleEn: 'Boulder Shoulders Protocol', category: 'iron', trainer: 'عبد الله القحطاني', room: 'صالة الحديد الرئيسية', intensity: 'عالية', duration: '65 دقيقة' },
      { id: 'c-16', time: '07:30 م', titleAr: 'ملاكمة: بادات سريعة ورد فعل', titleEn: 'Speed Mitts & Reaction', category: 'boxing', trainer: 'مروان الشيخ', room: 'حلبة الأبطال', intensity: 'عالية جداً', duration: '50 دقيقة' },
      { id: 'c-17', time: '09:00 م', titleAr: 'يوغا محاربي القوة', titleEn: 'Warrior Power Flow', category: 'mobility', trainer: 'زياد الحربي', room: 'قاعة الاستشفاء', intensity: 'متوسطة', duration: '50 دقيقة' },
    ]
  },
  {
    dayNameAr: 'الأربعاء',
    dayNameEn: 'Wednesday',
    classes: [
      { id: 'c-18', time: '06:00 ص', titleAr: 'تحدي الحبال والزلاجات الحديدية', titleEn: 'Sleds & Battle Ropes Push', category: 'hiit', trainer: 'طارق العنزي', room: 'المنطقة الوظيفية', intensity: 'أقصى طاقة', duration: '50 دقيقة' },
      { id: 'c-19', time: '05:00 م', titleAr: 'حديد: ذراعين وسواعد ضخمة', titleEn: 'Arm Pump & Forearm Grip', category: 'iron', trainer: 'عبد الله القحطاني', room: 'صالة الحديد الرئيسية', intensity: 'عالية', duration: '60 دقيقة' },
      { id: 'c-20', time: '07:00 م', titleAr: 'كروس فت تيم (تمارين زوجية)', titleEn: 'Team WOD Showdown', category: 'crossfit', trainer: 'طارق العنزي', room: 'أرينا الكروس فت', intensity: 'أقصى طاقة', duration: '60 دقيقة' },
      { id: 'c-21', time: '08:45 م', titleAr: 'ساونا واسترخاء عضلات عميق', titleEn: 'Thermal Spa & Recovery', category: 'mobility', trainer: 'زياد الحربي', room: 'سبا الاستشفاء', intensity: 'استرخاء', duration: '45 دقيقة' },
    ]
  },
  {
    dayNameAr: 'الخميس',
    dayNameEn: 'Thursday',
    classes: [
      { id: 'c-22', time: '07:30 ص', titleAr: 'كارديو قتالي وحرق سعرات', titleEn: 'Combat Calorie Torcher', category: 'boxing', trainer: 'مروان الشيخ', room: 'حلبة الأبطال', intensity: 'عالية', duration: '50 دقيقة' },
      { id: 'c-23', time: '04:30 م', titleAr: 'حديد: تحطيم أرقام قياسية PR', titleEn: 'Max Out & PR Testing', category: 'iron', trainer: 'عبد الله القحطاني', room: 'صالة الحديد الرئيسية', intensity: 'أقصى طاقة', duration: '80 دقيقة' },
      { id: 'c-24', time: '07:00 م', titleAr: 'ليلة التحديات الكبرى (Night Fight)', titleEn: 'Iron Pulse Beast Mode', category: 'crossfit', trainer: 'طارق العنزي', room: 'أرينا الكروس فت', intensity: 'أقصى طاقة 100%', duration: '60 دقيقة' },
      { id: 'c-25', time: '08:30 م', titleAr: 'جلسة تحرير عضلات الفوم رولر', titleEn: 'Trigger Point Release', category: 'mobility', trainer: 'زياد الحربي', room: 'قاعة الاستشفاء', intensity: 'متوسطة', duration: '45 دقيقة' },
    ]
  },
  {
    dayNameAr: 'الجمعة',
    dayNameEn: 'Friday',
    classes: [
      { id: 'c-26', time: '04:00 م', titleAr: 'صالة الحديد مفتوحة بحرية', titleEn: 'Open Gym Free Lift', category: 'iron', trainer: 'عبد الله القحطاني', room: 'صالة الحديد', intensity: 'حسب اختيارك', duration: 'مفتوح' },
      { id: 'c-27', time: '06:00 م', titleAr: 'حلقة ملاكمة خفيفة واستعراضية', titleEn: 'Boxing Exhibition & Drills', category: 'boxing', trainer: 'مروان الشيخ', room: 'حلبة الأبطال', intensity: 'متوسطة', duration: '50 دقيقة' },
      { id: 'c-28', time: '07:30 م', titleAr: 'استشفاء الجمعة الشامل والساونا', titleEn: 'Full Weekend Body Revival', category: 'mobility', trainer: 'زياد الحربي', room: 'سبا الاستشفاء', intensity: 'استرخاء تام', duration: '60 دقيقة' },
    ]
  }
];

export const MEMBERSHIP_PLANS: MembershipPlan[] = [
  {
    id: 'monthly',
    nameAr: 'اشتراك شهري',
    nameEn: 'IRON STARTER',
    periodAr: 'شهر واحد',
    price: 490,
    originalPrice: 590,
    popular: false,
    savingsBadge: 'تجربة حقيقية',
    features: [
      'دخول غير محدود لجميع الصالات 24/7',
      'فحص كتلة الجسم InBody شهري مجاني',
      'خزانة يومية ومناشف معقمة فاخرة',
      'حضور حصتين جماعيتين في الأسبوع',
      'وصول لتطبيق آيرون بلس لمتابعة التمارين',
      'مواقف سيارات خاصة ومجانية'
    ],
    whatsAppText: 'مرحباً، أود الاستفسار والاشتراك في باقة "الشهر الواحد" (IRON STARTER) بسعر 490 ر.س في نادي آيرون بلس.'
  },
  {
    id: 'yearly',
    nameAr: 'اشتراك سنوي شامل',
    nameEn: 'IRON ELITE PRO',
    periodAr: '12 شهراً',
    price: 3490,
    originalPrice: 5880,
    popular: true,
    savingsBadge: 'الأكثر قيمة ووفر 40%',
    features: [
      'دخول غير محدود 24 ساعة بدون قيود',
      'جميع الحصص الجماعية (كروس فت، ملاكمة، يوغا) مجاناً بالكامل',
      'فحص InBody أسبوعي مع استشارة أخصائي تغذية',
      '4 جلسات تدريب شخصي PT مجانية (قيمة 1,200 ر.س)',
      'استخدام مفتوح لمنطقة الساونا وغرف الجليد Ice Bath',
      'حقيبة آيرون بلس الرياضية الأصلية + شيكر ستانلس هدية',
      'إمكانية تجميد الاشتراك حتى 60 يوماً مجاناً',
      'دعوة صديق مجانية مرتين شهرياً'
    ],
    whatsAppText: 'مرحباً! أود الاستفادة من العرض الحصري والاشتراك في "الباقة السنوية الشاملة" (IRON ELITE PRO) بسعر 3,490 ر.س في آيرون بلس.'
  },
  {
    id: 'quarterly',
    nameAr: 'اشتراك 3 أشهر',
    nameEn: 'IRON WARRIOR',
    periodAr: '3 أشهر',
    price: 1290,
    originalPrice: 1470,
    popular: false,
    savingsBadge: 'الأفضل للتحول البدني',
    features: [
      'دخول غير محدود لجميع الصالات 24/7',
      'فحص InBody كل أسبوعين مع تحليل التطور',
      'حضور 4 حصص جماعية أسبوعياً مجاناً',
      'جلسة تدريب شخصي مجانية لتصحيح التكنيك',
      'خصم 15% على البار الصحي والمكملات الغذائية',
      'إمكانية تجميد الاشتراك حتى 21 يوماً'
    ],
    whatsAppText: 'مرحباً، أود الاشتراك في باقة "3 أشهر" (IRON WARRIOR) بسعر 1,290 ر.س في نادي آيرون بلس.'
  }
];

export const TRANSFORMATIONS: TransformationStory[] = [
  {
    id: 't-1',
    name: 'مشاري الدوسري',
    age: 28,
    duration: '6 أشهر من الالتزام القاسي',
    beforeImage: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=800&auto=format&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop',
    weightDiff: '-23 كجم دهون',
    fatDiff: 'من 31% إلى 11%',
    muscleDiff: '+7 كجم عضل صافي',
    story: 'كنت أعاني من كسل مزمن وضيق تنفس عند صعود الدرج. لما دخلت آيرون بلس قالي الكابتن: هنا ما فيه أعذار، ارمِ شماعتك عند الباب وادخل. ستة أشهر غيرت حياتي 180 درجة وصار التمرين جزء من هويتي.',
    program: 'برنامج التحول البدني + تدريب حديد مكثف'
  },
  {
    id: 't-2',
    name: 'فيصل الشمري',
    age: 24,
    duration: '5 أشهر من بناء القوة',
    beforeImage: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=800&auto=format&fit=crop',
    weightDiff: '+12 كجم وزن نوعي',
    fatDiff: 'نسبة دهون ثابتة 10%',
    muscleDiff: 'سكوات زاد من 80 إلى 170 كجم',
    story: 'كنت نحيفاً لدرجة الإحباط ولا أستطيع حمل وزني في التمارين. بيئة آيرون بلس وحشية بالمعنى الإيجابي، الكل يدعمك والمدربين ما يسمحون لك تستسلم. صرت أرفع أوزان كنت أعتقد إنها مستحيلة.',
    program: 'برنامج الحديد الأولمبي + تضخيم نظيف'
  },
  {
    id: 't-3',
    name: 'طارق عبد العزيز',
    age: 33,
    duration: '4 أشهر كروس فت وملاكمة',
    beforeImage: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=800&auto=format&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800&auto=format&fit=crop',
    weightDiff: '-16 كجم شحوم',
    fatDiff: 'من 26% إلى 12%',
    muscleDiff: 'لياقة قلبية تضاعفت 3x',
    story: 'وظيفتي مكتبية وعشت سنين مع آلام أسفل الظهر. الكروس فت والملاكمة في آيرون بلس أعادت إلي طاقتي وشبابي، صرت أصحى 5:30 الفجر بحماس لا يوصف.',
    program: 'الكروس فت التكتيكي + ملاكمة وحرق دهون'
  }
];
