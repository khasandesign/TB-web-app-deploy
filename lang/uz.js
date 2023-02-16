export default {
  validations: {
    code: 'uz',
    fields: {
      name: 'Ism',
      password: 'Parol',
      verificationCode: 'Tasdiqlash kodi',
      phoneNumber: 'Telefon raqam',
      activity: 'Faoliyat',
      age: 'Yosh',
      biography: "O'zingiz haqida",
      passwordConfirm: 'Tasdiqlash paroli',
      email: 'Email',
      street: "Ko'cha",
      postalCode: 'Pochta indeksi',
      region: 'Viloyat',
      district: 'Tuman',
    },
    messages: {
      alpha: "{_field_} maydonida faqat harflar bo'lishi lozim",
      alpha_dash:
        "{_field_} maydonida faqat harflar, raqamlar va tire (-) bo'lishi lozim",
      alpha_num: "{_field_} maydonida faqat harflar va raqamlar bo'lishi lozim",
      alpha_spaces:
        "{_field_} maydonida faqat harflar va bo'shliq (space) bo'lishi lozim",
      between:
        "{_field_} maydoni uzunligi {min} va {max} oralig'ida bo'lishi lozim",
      confirmed: '{_field_} maydoni {target} bilan farq qilayapti',
      digits:
        "{_field_} maydoni raqam bo'lishi va uning uzunligi {length} ta bo'lishi lozim",
      dimensions:
        "{_field_} maydoni {width} pikselga {height} piksel bo'lishi lozim",
      email: "{_field_} maydoni haqiqiy elektron pochta bo'lishi lozim",
      excluded: "{_field_} maydonida ruhsat etilgan belgi bo'lishi lozim",
      ext: "{_field_} maydonida haqiqiy fayl bo'lishi lozim. ({args})",
      image: "{_field_} maydonida rasm bo'lishi lozim",
      oneOf: "{_field_} maydonida ruhsat etilgan belgi bo'lishi lozim",
      integer: "{_field_} maydonida butun son bo'lishi lozim'",
      length: "{_field_} maydonining uzunligi {length} ta bo'lishi lozim",
      max: "{_field_} maydoni {length} ta belgidan ko'p bo'lishi mumkin emas",
      max_value:
        "{_field_} maydonining uzunligi {max} ta yoki undan oz bo'lishi lozim",
      mimes:
        "{_field_} maydonida ruxsat etilgan fayl turi bo'lishi lozim. ({args})",
      min: "{_field_} maydoni uzunligi {length} ta belgidan kam bo'lmasligi lozim",
      min_value:
        "{_field_} maydonining uzunligi {min} ta yoki undan ko'p bo'lishi lozim",
      numeric: "{_field_} maydonida faqat raqam bo'lishi lozim'",
      regex: '{_field_} maydonida xotolik bor',
      required: "{_field_} maydoni majburiy, to'ldirishingiz lozim",
      required_if: "{_field_} maydoni majburiy to'ldirilishi lozim",
      size: "{_field_} maydoni {size}KB dan kam bo'lishi lozim",
      double: "{_field_} maydoni ruhsat etilgan o'nlik son bo'lishi lozim",
      tel: 'Iltimos, yaroqli telefon raqamini kiriting',
      passwordConfirmation: 'Parollar bir xil emas',
    },
  },
  homepage: 'Bosh sahifa',
  searchPlaceholder: 'Kurslar, darslar, maqolalar...',
  issued: 'Chiqarilgan',
  signIn: 'Kirish',
  signUp: "Ro'yhatdan o'tish",
  toSignUp: "Ro'yhatdan o'ting",
  signInText: 'TopBreyns akauntingizga kiring yoki',
  signInPasswordPalceholder: 'Parolingiz...',
  forgotPassword: 'Parolni unutdingizmi?',
  rememberMe: 'Eslab qolish',
  enter: 'Kirish',
  or: 'yoki',
  and: 'va',
  signInGoogle: 'Google orqali kirish',
  signInFacebook: 'Facebook orqali kirish',
  uzCurrency: "So'm",
  terms: {
    service: 'Foydalanish shartlari',
    privacy: 'Maxfiylik siyosati',
    info: "Faqat avtorizatsiya qilish va foydalanuvchidan fikr-mulohazalarni qo'llab-quvvatlash imkoniyatini ta'minlaydigan ma'lumotlar to'planadi.",
    firstBand:
      "Foydalanuvchining roziligi bilan portal foydalanuvchidan quyidagi ma'lumotlarni oladi:",
    secondBand:
      "Ba'zi foydalanuvchi harakatlari avtomatik ravishda server jurnallarida saqlanadi:",
    thirdBand: "Ma'lumotlar quyidagi ravishda ishlatiladi",
    address: 'manzili',
    IpAddress: 'IP adres',
    name: 'Ismi',
    collectedData:
      "brauzer turi, sozlamalar, so'rov vaqti va boshqa ma'lumotlar.",
    termsAndPrivacy:
      'Telefoningizni taqdim etish orqali siz {terms} va {privacy}ga rozilik bildirasiz.',
  },
  purchase: {
    course: 'Kurs ',
    payment: "To'lov",
    paymentMethod: "To'lov usuli",
    paymentMethodInfo:
      "Siz uchun qulay to'lov usulini tanlang. Agar variantlardan hech biri sizga mos kelmasa ",
    paymentMethodInfoLink: "biz bilan bog'laning",
    masterVisaInfo:
      "MasterCard yoki Visa kartalari bilan to'lov amalga oshirayotganda siz xavfsiz paddle.com xizmatiga yo'naltirilasiz.",
    paymentDetails:
      "Payme bilan to'lov amalga oshirayotganda siz valyuta kursi miqdori ko'rsatilgan chek olasiz.",
    privacyPolicy: 'Maxfiylik siyosati',
    access: 'Foydalanish huquqi',
    duration: 'Davomiyligi',
    students: "O'quvchilari",
  },
  danielPink: {
    courseTitle: 'Mijozlaringizga yangi darajada soting',
    access: 'Umrbod',
  },
  collab: {
    support: "qo'llab-quvvatlash",
    partnership: 'Sizdek professionallar bilan,',
    withYou: ' TopBreyns-da hamkorlik.',
    mainPicCaption: 'Alisher Isaev bilan hamkorlikning boshlanishi.',
    firstBand:
      "Biz har doim o'z sohamizning ustalari bilan hamkorlik qilishdan xursandmiz va birgalikda kurs yozishdan xursand bo'lamiz. Quyida biz buni qanday qilishimiz va mavjud kurslarni suratga olishdan olingan fotosuratlar bilan tanishishingizni tavsiya qilamiz.",
    secondBand:
      "Agar siz biz bilan hamkorlikni muhokama qilishga tayyor bo'lsangiz, o'zingiz yoki menejeringiz pochta orqali biz bilan bog'laning",
    secondBand2: 'yoki telegram chatimiz orqali',
    thirdBandHeader: 'Bizga kim kerak',
    thirdBand:
      "Biz o'z sohasida keng va noyob tajribaga ega har qanday shaxsni ko'rib chiqishdan mamnun bo'lamiz. Agar sizda quyidagi xususiyatlar mavjud bo'lsa, unda bu yanada yaxshi bo'ladi",
    thirdBandRequirements1: "O'qitish tajribasi",
    thirdBandRequirements2: 'Shaxsiy ijtimoiy tarmoqlardagi faollik',
    thirdBandRequirements3: 'Taniqli kompaniyalar bilan hamkorlik',
    fourthBandHeader: 'Biz qanday suratga olamiz',
    fourthBand:
      "TopBreyns prodyuserlik jamoasi eng yuqori sifatli video suratga olish, montaj qilish va kursni tuzishga e'tibor qaratadi, biz sizdan sizning tajribangiz va sohangiz bo'yicha bilimingizni talab qilamiz va birgalikda kurs rejasini tuzamiz, shundan so'ng biz uni yozamiz va bizning mutaxassislarimiz tayyor mahsulot yaratadi. Siz kursni oldindan ko'rishingiz va uning tayyorligini tasdiqlashingiz mumkin.",
    photoCaption: 'Kursni suratga olish jarayonidan olingan suratlar.',
    photoCaption2: 'Kursning suratga olish jarayonidan video.',
    fourthBandEnding:
      "Kurs nashr etilgandan so'ng biz uni chiqarishni boshlaymiz va ijtimoiy tarmoqlarda kerakli reklama kampaniyalarini boshlaymiz. tarmoqlar va boshqa manbalar.",
    fifthBandHeader: 'Kursga yozilgach, nima olasiz',
    fifthBand:
      "Kursning o'zi ham o'z sohangizdagi professional sifatida siz uchun imidj yaratish va auditoriyani to'plashning kuchli manbaidir. Kursdan olinadigan foydaga kelsak, siz shartnoma bo'yicha kelajakdagi barcha sotuvlarning 50 foizini olasiz, batafsil ma'lumot uchun biz bilan bog'laning ",
    sixthBandHeader: 'Bizga qanday kasblar kerak',
    sixthBand:
      "TopBreyns nafaqat o'z auditoriyasi bilan, balki sizning yoki kelajakda sizniki bolishi mumkin bolgan auditoriya bilan ham ishlaganligi sababli, biz eng keng tarqalgan va eng tor kasblardan tortib, hatto biznes va boshqa sohalarni yuritish ustalarigacha bo'lgan eng keng doiradagi kasblarni qabul qilamiz.",
    submit: 'Ariza yuborish',
    submitInfo:
      'Siz shu yerda, quyidagi forma orqali ariza yuborishingiz mumkin, shuningdek, forma ostida sizni bevosita menejerlarimiz bilan telegram chatiga olib boradigan tugmani topasiz.',
  },
  placeholders: {
    name: 'Ismingiz',
    activity: 'Faoliyat sohangiz',
    number: 'Telefon raqamingiz',
    age: 'Yoshingiz',
    autobiography: "Bizga o'zingiz haqingizda aytib bering",
  },
  send: 'Yuborish',
  viaTG: 'Telegramdan yozish',
  recomend: 'Sizga tavsiya qilamiz',
  blogs: {
    titlePartOne: "Bundan ham ko'proq",
    titlePartTwo: ' TopBrains blogida, ',
    subscribe: "obuna bo'ling",
    caption: "Yangiliklar, e'lonlar va chegirmalar ",
    caption2: 'telegramimizda',
    follow: "Obuna bo'lish",
    article: 'Maqola',
    views: " o'qilgan",
    blog: 'Maqolalar',
  },
  view: "marta o'qildi",
  recommend: 'Sizga tavsiya qilamiz',
  admin: 'Admin',
  student: 'Talaba',
  teacher: "O'qituvchi",
  savedLessons: 'Saqlangan darslar',
  certificates: 'Sertifikatlar',
  articlesRead: "O'qilgan maqolalar",
  hour: 'Soat',
  lesson: 'Dars',
  feedback: 'Izoh',
  edit: "O'zgartirish",
  yourCourses: 'Sizning kurslaringiz',
  newComments: 'Yangi izohlar',
  cancel: 'Bekor qilish',
  search: 'Qidiruv',
  comments: {
    ago: 'ago',
    hour: 'hour',
    day: 'day',
    week: 'week',
    month: 'month',
    year: 'year',
    reply: 'ta javob',
    answer: 'Javob berish',
    placeholder: 'Javob yozish',
    add: 'Izoh qoldirish',
  },
  watch: "Ko'rish",
  share: "Bo'lishish",
  later: 'Keyin',
  continue: 'Davom etish',
  header: {
    lang: 'Til',
    collaboration: 'Hamkorlik',
    about: 'Biz haqimizda',
    changeLang: 'Tilni tanlang',
  },
  allCourses: 'Barcha kurslar',
  soon: 'Tez orada',
  contacts: 'Kontaktlar',
  formalities: 'Rasmiyatchiliklar',
  footer: {
    desc: "O'z sohasining etakchi mutaxasislaridan yuqori sifatli onlayn kurslar",
    blog: 'Blog',
    termsOfUsage: 'Foydalanish shartlari',
    policyShort: 'Maxfiylik siyo.',
    policy: 'Maxfiylik siyosati.',
    supportChat: 'Yordam uchun chat',
    allow:
      'Telefoningizni taqdim etish orqali siz bizning shartlarimizga rozilik bildirasiz',
    and: 'va',
    confiden: 'Maxfiylik siyosati.',
    join: "Qo'shilish",
    ssl: 'SSL bilan himoyalangan',
  },
  createAccount: 'Hisob yaratish',
  register: {
    continue: 'Davom etish',
    firstText: 'Yangi TopBreyns akaunti yarating',
    secondText: 'mavjud akkauntga',
    signIn: 'Kiring',
    allow:
      "Ro'yhatdan o'tish orqali siz bizning shartlarimizga rozilik bildirasiz",
    resend: 'Kodni qayta yuborish',
    codeMessage:
      "SMS kod {phoneNumber} ga yuborildi. Siz qayta jo'natishingiz mumkin",
    finishText:
      "Siz shunchaki parolni kiritishingiz kerak, ismni kiriting va ro'yxatdan o'tish tugallanadi",
  },
  home: {
    homeTitle: {
      start: "O'z sohasidagi ",
      middle: "professionallarning o'n yillik ",
      end: 'tajribasi',
    },
    titleTwo:
      "O'z sohasi bo'yicha magistrlardan biznes yuritishdan tortib, dunyodagi eng nozik kasblargacha bo'lgan kurslar. ",
    students: 'Talabalar',
    exp: 'Yillik Tajriba',
    ourCourses: 'Bizning kurslar',
  },
  program: 'Dastur',
  reviews: 'Sharhlar',
  faq: {
    title: "Ko'p so'raladigan savollar",
    what: {
      que: 'TopBreyns nima?',
      ans: "TopBreyns - bu o'z sohasidagi eng yaxshi mutaxassislarning kurslariga ega onlayn o'quv platformasi. TopBreyns kurslarni o'zi suratga oladi va o'zining tahrirlash guruhiga ega, shuning uchun biz sizga yuqori darajadagi video darslarni va murabbiylarimiz tomonidan yoqimli va bosqichma-bosqich o'rganish jarayonini kafolatlaymiz.",
    },
    whatYouGet: {
      que: 'Kursni sotib olganingizda nima olasiz?',
      ans: "Kursga kirish uchun siz saytda avtorizatsiya jarayonidan o'tishingiz kerak.",
    },
    pay: {
      que: "Kurs uchun qanday to'layman?",
      ans: "To'lov saytda buyurtmani tasdiqlash vaqtida amalga oshiriladi.",
    },
    backMoney: {
      que: 'Kurs uchun pulni qanday qaytarish mumkin?',
      ans: "Kurs uchun pulni to'lovdan keyin 14 kun ichida qaytarish mumkin.",
    },
    howToShow: {
      que: 'Kursni qanday tomosha qilish kerak?',
      ans: "Kursni sotib olganingizda, siz video kurslar va amaliy vazifalarga kirish huquqiga ega bo'lasiz. Shuningdek, siz ta'limga oid ma'lumotlarga ega bo'lasiz va bizning ustozlarimizning savollariga javob olasiz.",
    },
    whereQue: {
      que: 'Savolni qayerda berish kerak?',
      ans: 'Savolingizni veb-saytda yoki +998 00 000 00 00 telefon orqali berishingiz mumkin. Savolingizga 24 soat ichida javob beramiz.',
    },
    howToBook: {
      que: 'Kurslarga qanday yozilaman',
      ans: "Kurslar sahifasiga o'tib o'zingiz xohlagana kursda to'lov qilib o'qishingiz mumkin.",
    },
    teacherKind: {
      que: "Qanday odamlar o'qituvchi sifatida ishlaydi?",
      ans: "Juda yaxshi, halol odamlar bizda o'qtituvchi sifatida ishlaydi",
    },
    aboutPlatform: 'Platforma haqida',
    aboutCourse: 'Kurslar haqida',
  },
  contact: {
    news: 'Yangiliklar',
    buyCourse: 'Kurslarni sotib olish',
    allInfo: "Umumiy ma'lumot",
    subtitle:
      "Faqat avtorizatsiya qilish va foydalanuvchidan fikr-mulohazalarni qo'llab-quvvatlash imkoniyatini ta'minlaydigan ma'lumotlar to'planishi kerak.",
    allowSecond:
      "Ba'zi foydalanuvchi harakatlari avtomatik ravishda server jurnallarida saqlanadi:",
    allowFirst:
      'Foydalanuvchining roziligi bilan portal foydalanuvchidan quyidagi ma’lumotlarni oladi:',
    ip: 'IP manzili',
    name: 'Ism',
    email: 'E-pochta manzili',
    data: "brauzer turi, qo'shimchalar, so'rov vaqti va boshqalar haqidagi ma'lumotlar.",
    chapterTwo: {
      title: "Olingan ma'lumot qanday ishlatilinadi?",
    },
  },
  updated: 'Yangilandi',
  privacy: {
    collectData: "Qanday ma'lumotlar yig'iladi",
    data: [
      "Faqat foydalanuvchilarning fikr-mulohazalarini avtorizatsiya qilish va qo'llab-quvvatlash imkoniyatini ta'minlaydigan ma'lumotlar to'planishi kerak.",
      "Faqat foydalanuvchilarning fikr-mulohazalarini avtorizatsiya qilish va qo'llab-quvvatlash imkoniyatini ta'minlaydigan ma'lumotlar to'planishi kerak.",
      "Foydalanuvchi tomonidan taqdim etilgan ma'lumotlar foydalanuvchini avtorizatsiya qilish va u bilan muloqot qilish, shu jumladan muayyan xizmatlar holatidagi o'zgarishlar to'g'risida bildirishnomalarni yuborish uchun ishlatiladi.",
    ],
  },
  copy: 'Nusxalash',
  copyURL: 'Nusxalash',
  som: "so'm",
  discount: '{discount}% chegirma {date} gacha',
  eduPrice: "Ta'lim narxi",
  evermore: 'Siz kursni abadiy olasiz',
  watchCourse: "{name} ning to'liq kursini ko'ring",
  evermoreLong:
    'Kursni sotib olganingizda, uni ishlatish uchun hech qanday vaqt cheklovlarisiz olasiz.',
  trailer: 'Treyler',
  showMore: "Ko'proq ko'rsatish",
  lessons: 'Darslar',
  courses: 'Kurslar',
  coursesDescription:
    "TopBreyns sizni qiziqtiradigan boshqa ko'plab mutaxassislardan kurslarni otadi",
  articles: 'Maqolalar',
  unAuthFooterDesc:
    'Yangiliklar, anonslar va chegirmalar bizning telegram kanalimizda',
  course: {
    seeFullCourseOf: "{name} ning to'liq kursini ko'ring",
    purchaseDescription:
      "Kursni sotib olganingizda, uni vaqt cheklovlarisiz va doimiy qo'llab-quvvatlash bilan olasiz.",
    finishedNotificationTitle:
      "Tabriklaymiz, {studentName}! Siz kursni tugatdingiz {authorName}'ning kursini tugatdingiz 🎉",
    finishedNotificationDesc:
      'Endi siz "{authorName} {courseTitle}" kursini tamomlaganlik sertifikatini olishingiz mumkin.',
    term: 'Muddat',
    forever: 'Umrbod',
    finishedTitle: 'Siz {author} kursini tamomladingiz 🎉',
    finishedDescription:
      'Endi siz “{courseTitle}” kursini tamomlaganlik sertifikatini olishingiz mumkin.',
    cancelSuccess: 'Siz kursni bekor qildingiz',
  },
  certificate: {
    title: "Quyidagi shaklni to'ldiring va sertifikat turini tanlang",
    description:
      "Siz elektron yoki jismoniy sertifikatni tanlashingiz mumkin. Uning versiyasi, sertifikatning amal qilish muddati tanlovga qarab o'zgarmaydi",
    yourEmail: 'Email manzilingiz',
    addLanguage: "Til qo'shish",
    langDescription:
      "Sertifikat qaysi tillarda berilishini o'sha tillarda to'liq ismingizni kiritish orqali tanlashingiz mumkin.",
    electron: 'Elektron',
    physical: 'Jismoniy',
    electronDesc: 'Bepul, elektron pochtangizga yuboriladi',
    physicalDesc: "O'zbekistonda bo'yicha 2-3 kun ichida bepul",
    selectRegion: 'Viloyatni tanlang',
    selectDistrict: 'Tumanni tanlang',
    sendSuccess: "Ma'lumotlar muvaffaqiyatli yuborildi!",
    get: 'Sertifikatni olish',
    certificateFor: '{author} kursini tamomlaganlik uchun sertifikat',
    certificateGiven:
      'Sertifikat TopBreyns MChJ tomonidan {date} da berilgan va vaqt cheklovlarisiz amal qiladi.',
    download: 'Sertifikatni yuklash',
    orderPhysicalVersion: 'Jismoniy versiyasini buyurtma qilish',
  },
  user: {
    profile: 'Profil',
    logout: 'Chiqish',
  },
  congrat: 'tabriklaymiz!',
  finishCourse: "Siz TopBreyns kursini to'liq tugatdingiz",
  pageNotFoundTitle: '404 - sahifa topilmadi',
  pageNotFoundDesc: "Qidirib ko'ring yoki {link}ga o'ting",
  internalServerError:
    "Kutilmagan xatolik yuz berdi, keyinroq qayta urinib ko'ring.",
  minuteShort: 'daq',
  resetPassword: {
    title: 'Parolni tiklash',
    description:
      'Telefon raqamingizni tasdiqlash orqali parolingizni tiklashingiz mumkin. Sizga tasdiqlash kodi SMS orqali boradi',
    changePasswordDesc:
      "Yangi parol o'ylang va uni quyidagi formaga kiriting. Shundan so'ng siz tizimga kirishingiz kerak bo'ladi.",
    verification: 'Tasdiqlash',
    newPassword: 'Yangi parol',
    repeatPassword: 'Parolni qayta kiriting',
    success: 'Parolingiz muvaffaqiyatli tiklandi!',
  },
  demo: 'Demo',
  language: 'Til',
}
