// ===== DATA =====
const DATA = {
  user: { name: "Abdullaev Javokhir", grade: "8-sinf", short: "O'quvchi" },
  sections: [
    {
      id: "organism",
      title: "Odam organizmining hujayraviy tuzilishi",
      subtitle: "Hujayra tuzilishi, organellalar va ularning vazifalari",
      color: "green", icon: "🔬",
      lessons: [
        {
          id: "hujayra",
          title: "Hujayra tuzilishi",
          subtitle: "Hujayra qismlari va ularning joylashuvi",
          done: true,
          images: ["images/cell.jpg", "images/organelles.jpg", "images/er.jpg"],
          captions: ["Hujayra tuzilishi", "Endoplazmatik to'r va Golji majmuasi", "Endoplazmatik to'r (ERT)"],
          video: { youtubeId: "TVxtlfUwIY0", title: "Cell parts and their functions", source: "Khan Academy" },
          hotspots: [
            { label: "Yadro",              x: 0.50, y: 0.45, icon: "🧠", desc: "Hujayra markazida joylashadi. Irsiy ma'lumotni saqlaydi va hujayra faoliyatini boshqaradi." },
            { label: "Hujayra membranasi", x: 0.88, y: 0.32, icon: "🛡",  desc: "Hujayrani tashqi muhitdan ajratib turadi va moddalarni tanlab o'tkazadi." },
            { label: "Sitoplazma",         x: 0.28, y: 0.72, icon: "💧", desc: "Hujayraning ichki qismini to'ldiruvchi quyuq modda. Unda organellalar joylashadi." },
            { label: "Mitoxondriya",       x: 0.22, y: 0.30, icon: "⚡", desc: "Hujayra uchun energiya (ATF) ishlab chiqaradi. Hujayraning energetik stantsiyasi." },
            { label: "Golji majmuasi",     x: 0.72, y: 0.68, icon: "📦", desc: "Yadro atrofida joylashgan. Moddalarni saqlash va taqsimlashga xizmat qiladi." }
          ],
          facts: [
            "Odam tanasi hujayralardan tashkil topgan.",
            "Har bir hujayra membrana, sitoplazma va yadrodan iborat.",
            "Membrana hujayraning tashqi qobig'i bo'lib, uni himoya qiladi.",
            "Sitoplazma hujayraning ichki qismini to'ldiradi.",
            "Yadro hujayra markazida joylashib, irsiy ma'lumotni saqlaydi."
          ],
          terms: [
            { icon: "🧫", name: "Hujayra membranasi", desc: "Sitoplazma va organoidlarni o'rab turadigan ikki qavatli juda yupqa parda.", image: "images/cell.jpg" },
            { icon: "💧", name: "Sitoplazma", desc: "Hujayraning ichki qismini to'ldiradigan quyuq modda.", image: "images/cell.jpg" },
            { icon: "🧬", name: "Yadro", desc: "Hujayra markazida joylashadi. Yadrocha va xromatindan iborat. Irsiy belgilarni nasldan-naslga o'tkazadi.", image: "images/chromosomes.jpg" },
            { icon: "🕸️", name: "Endoplazmatik to'r", desc: "Hujayra ichida moddalarni sintez qilish va ularni kerakli joylarga tashishda xizmat qiladi.", image: "images/er.jpg" },
            { icon: "📦", name: "Golji majmuasi", desc: "Yadro atrofida joylashgan. Hujayrada to'plangan moddalarni saqlash, taqsimlash vazifasini bajaradi.", image: "images/organelles.jpg" }
          ],
          quiz: [
            {
              type: "find", chip: "👆 Toping",
              q: "Hujayra yadrosini toping",
              options: ["Yadro", "Hujayra membranasi", "Sitoplazma", "Golji majmuasi"],
              answer: 0,
              explanation: "Yadro hujayra markazida joylashgan bo'lib, irsiy ma'lumotni saqlaydi va hujayra faoliyatini boshqaradi."
            },
            {
              type: "match", chip: "🧩 Moslang",
              q: "Irsiy axborot saqlaydigan organella qaysi?",
              options: ["Sitoplazma", "Yadro", "Membrana", "Endoplazmatik to'r"],
              answer: 1,
              explanation: "Yadro ichidagi xromosomalar DNK molekulasini o'z ichiga oladi. DNK irsiy axborotni kodlaydi."
            },
            {
              type: "find", chip: "👆 Toping",
              q: "Hujayrani tashqaridan o'rab turadigan qism qaysi?",
              options: ["Yadro", "Hujayra membranasi", "Golji majmuasi", "Sitoplazma"],
              answer: 1,
              explanation: "Hujayra membranasi hujayrani tashqi muhitdan ajratib turuvchi yupqa, ikki qavatli parda."
            },
            {
              type: "find", chip: "👆 Toping",
              q: "Sitoplazma qanday vazifa bajaradi?",
              options: ["Irsiy axborotni saqlaydi", "Hujayrani himoya qiladi", "Hujayra ichki qismini to'ldiradi", "Oqsil sintez qiladi"],
              answer: 2,
              explanation: "Sitoplazma hujayraning ichki bo'shlig'ini to'ldirib turuvchi quyuq modda. Unda organellalar joylashgan."
            },
            {
              type: "match", chip: "🧩 Moslang",
              q: "Moddalarni sintezlash va tashishga xizmat qiluvchi organella?",
              options: ["Endoplazmatik to'r", "Yadro", "Membrana", "Golji majmuasi"],
              answer: 0,
              explanation: "Endoplazmatik to'r hujayra ichida keng tarmoq bo'lib, moddalarni sintezlash va tashish vazifasini bajaradi."
            },
            {
              type: "find", chip: "👆 Toping",
              q: "Moddalarni saqlash va taqsimlashni qaysi organella bajaradi?",
              options: ["Sitoplazma", "Yadro", "Golji majmuasi", "Membrana"],
              answer: 2,
              explanation: "Golji majmuasi yadro atrofida joylashgan, moddalarni saqlash va taqsimlash vazifasini bajaradi."
            }
          ]
        },
        {
          id: "organellalar",
          title: "Organellalar vazifasi",
          subtitle: "Ribosoma, lizosoma, mitoxondriya, vakuola va xromosomalar",
          done: false,
          images: ["images/mitochondria.jpg", "images/chromosomes.jpg", "images/organelles.jpg", "images/er.jpg"],
          captions: ["Mitoxondriya", "Xromosomalar", "Ribosoma va Golji majmuasi", "Endoplazmatik to'r"],
          video: { youtubeId: "bWPQvxElpLY", title: "Organelles in eukaryotic cells", source: "Khan Academy" },
          facts: [
            "Ribosoma — oqsil sintez qiluvchi kichik organella.",
            "Mitoxondriya hujayra uchun energiya (ATF) ishlab chiqaradi.",
            "Lizosoma hujayra ichida keraksiz moddalarni parchalaydi.",
            "Vakuola suv va oziq moddalarni saqlaydi.",
            "Xromosomalar yadro ichida joylashgan va irsiy axborotni uzatadi."
          ],
          terms: [
            { icon: "⚙️", name: "Ribosoma", desc: "Oqsil sintezini amalga oshiradigan mayda organella. Endoplazmatik to'r ustida joylashgan.", image: "images/er.jpg" },
            { icon: "🔋", name: "Mitoxondriya", desc: "Hujayra uchun energiya ishlab chiqaradi. Hujayraning energetik stantsiyasi deyiladi.", image: "images/mitochondria.jpg" },
            { icon: "🧹", name: "Lizosoma", desc: "Keraksiz moddalarni parchalab, hujayrani tozalab turadi." },
            { icon: "💠", name: "Vakuola", desc: "Suv, oziq moddalar va keraksiz chiqindilarni saqlaydigan bo'shliq." },
            { icon: "🧬", name: "Xromosoma", desc: "Yadro ichidagi DNK molekulalaridan tashkil topgan irsiy birlik.", image: "images/chromosomes.jpg" }
          ],
          quiz: [
            { type: "find", chip: "👆 Toping", q: "Hujayraning energiya stantsiyasi qaysi?",
              options: ["Ribosoma", "Mitoxondriya", "Lizosoma", "Vakuola"], answer: 1,
              explanation: "Mitoxondriya ATF (energiya) ishlab chiqaradi, shuning uchun hujayraning energetik stantsiyasi deb ataladi." },
            { type: "find", chip: "👆 Toping", q: "Oqsillarni sintezlashga qaysi organella mas'ul?",
              options: ["Ribosoma", "Yadro", "Vakuola", "Mitoxondriya"], answer: 0,
              explanation: "Ribosomalar oqsil sintezini amalga oshiradi. Ular endoplazmatik to'r yuzasida yoki sitoplazmada joylashgan." },
            { type: "match", chip: "🧩 Moslang", q: "Keraksiz moddalarni parchalaydigan organella?",
              options: ["Lizosoma", "Ribosoma", "Mitoxondriya", "Xromosoma"], answer: 0,
              explanation: "Lizosoma ichidagi fermentlar keraksiz moddalar va zararli zarrachalarni parchalaydi." },
            { type: "find", chip: "👆 Toping", q: "Suv va oziq moddalarni saqlaydigan bo'shliq?",
              options: ["Vakuola", "Yadro", "Ribosoma", "Lizosoma"], answer: 0,
              explanation: "Vakuola — hujayra ichidagi bo'shliq bo'lib, suv, oziq moddalar yoki chiqindilarni saqlaydi." },
            { type: "match", chip: "🧩 Moslang", q: "Irsiy axborotni tashuvchi birlik?",
              options: ["Ribosoma", "Lizosoma", "Xromosoma", "Mitoxondriya"], answer: 2,
              explanation: "Xromosomalar DNK molekulalaridan tashkil topgan va irsiy belgilarni nasldan-naslga o'tkazadi." }
          ]
        }
      ]
    },
    {
      id: "toqima",
      title: "To'qimalar. Organlar, organlar sistemasi",
      subtitle: "To'qima turlari, organlar va organlar sistemasi haqida",
      color: "orange", icon: "🧩",
      lessons: [
        {
          id: "toqima-turlari",
          title: "To'qima turlari",
          subtitle: "Epiteliy, biriktiruvchi, muskul va nerv to'qimalari",
          done: false,
          images: ["images/tissues.jpg", "images/blood.jpg", "images/muscles.png", "images/nerve.jpg", "images/tissue-cells.png"],
          captions: ["Epiteliy to'qimasi", "Biriktiruvchi to'qima (qon)", "Muskul to'qimasi", "Nerv to'qimasi", "To'qima hujayralari"],
          video: { youtubeId: "i5tR3csCWYo", title: "Tissues, Part 1: Crash Course A&P", source: "CrashCourse A&P" },
          facts: [
            "To'qima — tuzilishi va vazifasi bir xil bo'lgan hujayralar guruhi.",
            "Odam organizmida 4 ta asosiy to'qima turi mavjud.",
            "Epiteliy to'qimasi tana sirtini va ichki a'zolarni qoplaydi.",
            "Biriktiruvchi to'qima a'zolarni bog'laydi va tayanch vazifasini bajaradi.",
            "Muskul to'qimasi harakatni ta'minlaydi.",
            "Nerv to'qimasi ma'lumotni qabul qilib, uzatadi."
          ],
          terms: [
            { icon: "🧱", name: "Epiteliy to'qimasi", desc: "Tana yuzasi va ichki a'zolar devorini qoplaydigan zich joylashgan hujayralar qatlami.", image: "images/tissues.jpg" },
            { icon: "🧵", name: "Biriktiruvchi to'qima", desc: "Qon, suyak, tog'ay, yog' to'qimalari. A'zolarni bog'laydi, tayanch va himoya qiladi.", image: "images/blood.jpg" },
            { icon: "💪", name: "Muskul to'qimasi", desc: "Qisqarish xususiyatiga ega. Tana va ichki a'zolar harakatini ta'minlaydi.", image: "images/muscles.png" },
            { icon: "🧠", name: "Nerv to'qimasi", desc: "Nerv hujayralaridan tashkil topgan. Qo'zg'alish va impuls uzatish xususiyatiga ega.", image: "images/nerve.jpg" }
          ],
          quiz: [
            { type: "find", chip: "👆 Toping", q: "Odam tanasida nechta asosiy to'qima turi bor?",
              options: ["2", "3", "4", "5"], answer: 2,
              explanation: "Odam organizmida 4 ta asosiy to'qima turi: epiteliy, biriktiruvchi, muskul va nerv to'qimalari." },
            { type: "match", chip: "🧩 Moslang", q: "Qon qaysi to'qima turiga kiradi?",
              options: ["Epiteliy", "Biriktiruvchi", "Muskul", "Nerv"], answer: 1,
              explanation: "Qon suyuq biriktiruvchi to'qima hisoblanadi — u moddalarni tashiydi va himoya vazifasini bajaradi." },
            { type: "find", chip: "👆 Toping", q: "Ichki a'zolar devorini qaysi to'qima qoplaydi?",
              options: ["Nerv", "Muskul", "Epiteliy", "Biriktiruvchi"], answer: 2,
              explanation: "Epiteliy to'qimasi tana yuzasi va ichki a'zolar devorini qoplab, himoya qiladi." },
            { type: "match", chip: "🧩 Moslang", q: "Qaysi to'qima qisqarish xususiyatiga ega?",
              options: ["Muskul", "Nerv", "Epiteliy", "Suyak"], answer: 0,
              explanation: "Muskul to'qimasi qisqarib-cho'zilish xususiyatiga ega. Shu sababli harakat bo'ladi." },
            { type: "find", chip: "👆 Toping", q: "Impuls uzatuvchi to'qima?",
              options: ["Biriktiruvchi", "Epiteliy", "Nerv", "Muskul"], answer: 2,
              explanation: "Nerv to'qimasi qo'zg'alishlarni qabul qilib, boshqa a'zolarga impuls uzatadi." }
          ]
        },
        {
          id: "organlar",
          title: "Organlar va organlar sistemasi",
          subtitle: "Organ, organlar sistemasi va organizm tushunchasi",
          done: false,
          images: ["images/organ-heart.jpg", "images/brain.png", "images/tissue-cells.png"],
          captions: ["Yurak — ichki organ", "Miya — asab organi", "Organlar tuzilishi"],
          video: { youtubeId: "YE2peDF4Zqg", title: "Organization in the human body", source: "Khan Academy" },
          facts: [
            "Organ — muayyan vazifani bajaradigan to'qimalar birikmasi.",
            "Bir necha organlar birlashib, organlar sistemasini hosil qiladi.",
            "Odamda hazm qilish, nafas olish, qon aylanish kabi sistemalar mavjud.",
            "Organlar sistemalari birgalikda organizmni tashkil qiladi."
          ],
          terms: [
            { icon: "❤️", name: "Organ", desc: "Muayyan shakl va vazifaga ega bo'lgan to'qimalar birikmasi. Masalan, yurak, jigar, o'pka.", image: "images/organ-heart.jpg" },
            { icon: "🔗", name: "Organlar sistemasi", desc: "Umumiy vazifani bajaruvchi organlar guruhi. Masalan, hazm sistemasi.", image: "images/tissue-cells.png" },
            { icon: "🧍", name: "Organizm", desc: "Barcha organlar va sistemalarning uyg'un ishlashidan hosil bo'lgan yaxlit tirik tizim.", image: "images/brain.png" }
          ],
          quiz: [
            { type: "find", chip: "👆 Toping", q: "Organ nima?",
              options: ["Bir hujayra", "To'qimalar birikmasi", "DNK qismi", "Molekula"], answer: 1,
              explanation: "Organ — muayyan vazifani bajaradigan, turli to'qimalardan tashkil topgan tuzilma." },
            { type: "match", chip: "🧩 Moslang", q: "Yurak qaysi sistemaga kiradi?",
              options: ["Nafas olish", "Qon aylanish", "Hazm qilish", "Ayirish"], answer: 1,
              explanation: "Yurak — qon aylanish sistemasining markaziy organi. U qonni butun tana bo'ylab haydaydi." },
            { type: "find", chip: "👆 Toping", q: "Organizm nima?",
              options: ["Bitta organ", "Bitta to'qima", "Yaxlit tirik tizim", "Molekula"], answer: 2,
              explanation: "Organizm — barcha organlar va sistemalarning uyg'un ishlashidan hosil bo'ladigan tirik butunlik." },
            { type: "match", chip: "🧩 Moslang", q: "O'pka qaysi sistemaga tegishli?",
              options: ["Qon aylanish", "Hazm qilish", "Nafas olish", "Nerv"], answer: 2,
              explanation: "O'pka nafas olish sistemasining asosiy organi. U kislorod va karbonat angidrid almashinuvini ta'minlaydi." }
          ]
        }
      ]
    },
    {
      id: "sekretsiya",
      title: "Sekretsiya bezlari",
      subtitle: "Tashqi, ichki va aralash sekretsiya bezlari",
      color: "blue", icon: "💧",
      lessons: [
        {
          id: "bez-turlari",
          title: "Bez turlari",
          subtitle: "Tashqi, ichki va aralash sekretsiya bezlari",
          done: false,
          images: ["images/glands-thyroid.jpg", "images/hormones-pituitary.jpg", "images/pineal.png", "images/thymus.jpg", "images/adrenal.png"],
          captions: ["Qalqonsimon bez", "Gipofiz bezi", "Epifiz bezi", "Ayrisimon bez (timus)", "Buyrakusti bezi"],
          video: { youtubeId: "f_Z1zsR9lFM", title: "Intro to the endocrine system", source: "Khan Academy" },
          facts: [
            "Bezlar modda ishlab chiqaradigan maxsus organlardir.",
            "Tashqi sekretsiya bezlari mahsulotini nay orqali tashqariga chiqaradi.",
            "Ichki sekretsiya bezlari gormonlarni to'g'ridan-to'g'ri qonga ajratadi.",
            "Aralash bezlar ham tashqi, ham ichki sekretsiyaga ega."
          ],
          terms: [
            { icon: "💦", name: "Tashqi sekretsiya bezi", desc: "So'lak, ter, yosh bezlari — mahsulotini nay orqali chiqaradi." },
            { icon: "🧪", name: "Ichki sekretsiya bezi", desc: "Qalqonsimon, gipofiz kabi bezlar — gormonlarni bevosita qonga ajratadi.", image: "images/glands-thyroid.jpg" },
            { icon: "⚗️", name: "Aralash bez", desc: "Me'da osti bezi, jinsiy bezlar — ham tashqi, ham ichki sekretsiyaga ega.", image: "images/adrenal.png" }
          ],
          quiz: [
            { type: "find", chip: "👆 Toping", q: "Gormon ishlab chiqaradigan bezlar qanday ataladi?",
              options: ["Tashqi sekretsiya", "Ichki sekretsiya", "Aralash", "Nerv"], answer: 1,
              explanation: "Ichki sekretsiya bezlari gormonlarni to'g'ridan-to'g'ri qonga ajratadi va tana faoliyatini boshqaradi." },
            { type: "match", chip: "🧩 Moslang", q: "So'lak bezi qaysi turga kiradi?",
              options: ["Ichki sekretsiya", "Tashqi sekretsiya", "Aralash", "Nerv"], answer: 1,
              explanation: "So'lak bezi mahsulotini maxsus nay orqali og'iz bo'shlig'iga chiqaradi — bu tashqi sekretsiya bezi." },
            { type: "find", chip: "👆 Toping", q: "Me'da osti bezi qanday bez?",
              options: ["Tashqi", "Ichki", "Aralash", "Nerv"], answer: 2,
              explanation: "Me'da osti bezi hazm shirasini ham ishlab chiqaradi, insulin gormonini ham — shuning uchun u aralash bez." }
          ]
        },
        {
          id: "gormonlar",
          title: "Gormonlar",
          subtitle: "Asosiy gormonlar va ularning vazifalari",
          done: false,
          images: ["images/hormones-pituitary.jpg", "images/cretinism.jpg", "images/myxedema.jpg", "images/goiter.jpg", "images/basedow.jpg", "images/gigantism.jpg", "images/acromegaly.jpg"],
          captions: ["Gipofiz gormoni", "Kretinizm", "Miksidema", "Endemik buqoq", "Bazedov kasalligi", "Gigantizm va nanizm", "Akromegaliya"],
          video: { youtubeId: "-SPRPkLoKp8", title: "How do your hormones work?", source: "TED-Ed" },
          facts: [
            "Gormonlar — ichki sekretsiya bezlari ishlab chiqaradigan biologik faol moddalar.",
            "Insulin qondagi shakar miqdorini boshqaradi.",
            "Adrenalin stress paytida ishlab chiqariladi.",
            "Tiroksin — modda almashinuvini tezlashtiradi."
          ],
          terms: [
            { icon: "🍬", name: "Insulin", desc: "Me'da osti bezi gormoni. Qonda shakar miqdorini pasaytiradi." },
            { icon: "⚡", name: "Adrenalin", desc: "Buyrak usti bezi gormoni. Stress va xavf paytida ajraladi.", image: "images/adrenal.png" },
            { icon: "🦋", name: "Tiroksin", desc: "Qalqonsimon bez gormoni. Modda almashinuvi va o'sishga ta'sir qiladi.", image: "images/glands-thyroid.jpg" }
          ],
          quiz: [
            { type: "find", chip: "👆 Toping", q: "Qondagi shakarni qaysi gormon boshqaradi?",
              options: ["Adrenalin", "Insulin", "Tiroksin", "Melatonin"], answer: 1,
              explanation: "Insulin me'da osti bezida ishlab chiqariladi va qondagi glyukoza miqdorini pasaytiradi." },
            { type: "match", chip: "🧩 Moslang", q: "Qo'rquv paytida ajraladigan gormon?",
              options: ["Tiroksin", "Insulin", "Adrenalin", "Melatonin"], answer: 2,
              explanation: "Adrenalin buyrak usti bezida ishlab chiqariladi, yurak urishini tezlashtiradi." },
            { type: "find", chip: "👆 Toping", q: "Qalqonsimon bez gormoni?",
              options: ["Tiroksin", "Insulin", "Adrenalin", "Kortizol"], answer: 0,
              explanation: "Tiroksin qalqonsimon bezda ishlab chiqariladi va modda almashinuvini tezlashtiradi." }
          ]
        }
      ]
    },
    {
      id: "tayanch",
      title: "Tayanch va harakat sistemasi",
      subtitle: "Skelet, mushaklar va ularning vazifalari",
      color: "pink", icon: "🦴",
      lessons: [
        {
          id: "skelet",
          title: "Odam skeleti",
          subtitle: "Skelet bo'limlari va suyak turlari",
          done: false,
          images: ["images/skull.gif", "images/skull-face.png", "images/ribcage.png", "images/sternum.jpg", "images/femur.jpg", "images/radius-ulna.jpg", "images/hand-skeleton.jpg", "images/patella.png"],
          captions: ["Bosh skeleti (animatsiya)", "Yuz skeleti", "Ko'krak qafasi", "To'sh suyagi", "Son suyagi", "Bilak va tirsak suyaklari", "Panja skeleti", "Tizza qopqog'i"],
          video: { youtubeId: "-lrKDRAbP38", title: "Skeletal structure and function", source: "Khan Academy" },
          facts: [
            "Odam skeleti taxminan 206 ta suyakdan iborat.",
            "Skelet bosh, tana va qo'l-oyoq skeletiga bo'linadi.",
            "Suyaklar tayanch, himoya va harakat vazifalarini bajaradi.",
            "Bosh miyaga bosh suyaklari qutisi himoya qiladi."
          ],
          terms: [
            { icon: "💀", name: "Bosh skeleti", desc: "Miyani himoyalovchi bosh suyaklari qutisi va yuz suyaklaridan tashkil topgan.", image: "images/skull-face.png" },
            { icon: "🦴", name: "Umurtqa pog'onasi", desc: "Tana skeletining asosi. 33-34 ta umurtqadan iborat." },
            { icon: "🤲", name: "Qo'l-oyoq skeleti", desc: "Yelka, bilak, panja va son, boldir, oyoq panjasi suyaklari.", image: "images/hand-skeleton.jpg" }
          ],
          quiz: [
            { type: "find", chip: "👆 Toping", q: "Odam skeleti nechta suyakdan iborat?",
              options: ["~100", "~150", "~206", "~300"], answer: 2,
              explanation: "Voyaga yetgan odam skeleti taxminan 206 ta suyakdan tashkil topgan." },
            { type: "match", chip: "🧩 Moslang", q: "Miyani nima himoya qiladi?",
              options: ["Umurtqa", "Bosh suyaklari", "Qovurg'a", "Dumg'aza"], answer: 1,
              explanation: "Bosh suyaklari qutisi (kalla suyagi) miyani tashqi zararlardan himoya qiladi." },
            { type: "find", chip: "👆 Toping", q: "Umurtqa pog'onasida nechta umurtqa bor?",
              options: ["20-22", "28-30", "33-34", "40-42"], answer: 2,
              explanation: "Odam umurtqa pog'onasi 33-34 ta umurtqadan iborat va tana skeletining asosini tashkil etadi." }
          ]
        },
        {
          id: "mushaklar",
          title: "Mushaklar va harakat",
          subtitle: "Mushak turlari va qisqarish mexanizmi",
          done: false,
          images: ["images/muscles.png", "images/muscle-fibers.png"],
          captions: ["Muskul turlari", "Muskul tolalari"],
          video: { youtubeId: "VVL-8zr2hk4", title: "How your muscular system works", source: "TED-Ed" },
          facts: [
            "Odam tanasida 600 dan ortiq mushak mavjud.",
            "Mushaklar skelet, silliq va yurak mushaklariga bo'linadi.",
            "Skelet mushaklari ixtiyoriy ravishda qisqaradi.",
            "Yurak mushagi ixtiyorsiz, to'xtovsiz ishlaydi."
          ],
          terms: [
            { icon: "💪", name: "Skelet mushaklari", desc: "Suyaklarga birikkan, ongli boshqariladigan mushaklar. Tana harakatini ta'minlaydi.", image: "images/muscles.png" },
            { icon: "🌀", name: "Silliq mushaklar", desc: "Ichki a'zolar devorida joylashgan, ixtiyorsiz qisqaradigan mushaklar.", image: "images/muscle-fibers.png" },
            { icon: "❤️", name: "Yurak mushagi", desc: "Faqat yurakda uchraydi. Butun umr davomida to'xtovsiz ishlaydi.", image: "images/organ-heart.jpg" }
          ],
          quiz: [
            { type: "find", chip: "👆 Toping", q: "Yurak mushagi qanday ishlaydi?",
              options: ["Ixtiyoriy", "Ixtiyorsiz", "Faqat uyquda", "Faqat sport paytida"], answer: 1,
              explanation: "Yurak mushagi avtomatik, ixtiyorimizdan tashqari butun umr davomida ishlab turadi." },
            { type: "match", chip: "🧩 Moslang", q: "Ichki a'zolar devorida qaysi mushak bor?",
              options: ["Skelet", "Silliq", "Yurak", "Nerv"], answer: 1,
              explanation: "Silliq mushaklar me'da, ichak, qon tomirlari kabi ichki a'zolar devorida joylashgan." },
            { type: "find", chip: "👆 Toping", q: "Odam tanasida qancha mushak bor?",
              options: ["~200", "~400", "~600+", "~1000"], answer: 2,
              explanation: "Odam tanasida 600 dan ortiq mushak bo'lib, ular harakat va tana shaklini ta'minlaydi." }
          ]
        }
      ]
    }
  ]
};


// ===== SHARED QUIZ (loaded from quiz-data.js) =====
// Map student lesson IDs → admin lesson IDs from QUIZ_MODULES.
const ADMIN_LESSON_MAP = {
  hujayra: ["lesson_1", "lesson_2"],
  organellalar: ["lesson_3", "lesson_4"],
  "toqima-turlari": ["lesson_5"],
  organlar: ["lesson_6"],
  gormonlar: ["lesson_7"],
  "bez-turlari": ["lesson_8"],
  skelet: ["lesson_9"],
  mushaklar: ["lesson_10"]
};

function loadSharedQuiz() {
  if (typeof QUIZ_MODULES === "undefined") return;
  const allAdminLessons = QUIZ_MODULES.flatMap(m => m.lessons);
  for (const sec of DATA.sections) {
    for (const lesson of sec.lessons) {
      const adminIds = ADMIN_LESSON_MAP[lesson.id];
      if (!adminIds || !adminIds.length) continue;
      const questions = adminIds
        .map(id => allAdminLessons.find(l => l.id === id))
        .filter(Boolean)
        .flatMap(l => l.questions);
      if (!questions.length) continue;
      lesson.adminLessonIds = adminIds;
      lesson.quiz = questions.map((q, i) => {
        const idx = q.options.indexOf(q.correctAnswer);
        return {
          _id: q.id,
          type: "find",
          chip: i % 2 === 0 ? "👆 Toping" : "🧩 Moslang",
          q: q.question,
          options: q.options,
          answer: idx >= 0 ? idx : 0,
          explanation: `To'g'ri javob — ${q.correctAnswer}.`
        };
      });
    }
  }
}
loadSharedQuiz();

// ===== STATE =====
const state = {
  tab: "home",
  route: { name: "home" },
  progress: {
    // lessonId -> { completed: bool, percent: 0..100, quiz: { index, correct, answers[] } }
    hujayra: { completed: false, percent: 0, quiz: null }
  },
  activeLessonTab: "organ",
  streak: 0,
  xp: 0,
  lastQuizDate: 0,
  unlockedBadges: []
};

// ===== UTIL =====
const $ = (s, root = document) => root.querySelector(s);
const el = (tag, attrs = {}, children = []) => {
  const n = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (k === "class") n.className = v;
    else if (k === "html") n.innerHTML = v;
    else if (k.startsWith("on")) n.addEventListener(k.slice(2), v);
    else if (v !== false && v != null) n.setAttribute(k, v);
  }
  for (const c of [].concat(children)) {
    if (c == null || c === false) continue;
    n.append(c.nodeType ? c : document.createTextNode(c));
  }
  return n;
};
const h = (html) => {
  const t = document.createElement("template");
  t.innerHTML = html.trim();
  return t.content.firstElementChild;
};

// ===== HASH ROUTING =====
function buildHash(route) {
  const r = route;
  if (r.name === "section") return "#/section/" + r.sectionId;
  if (r.name === "lesson")  return "#/lesson/"  + r.lessonId;
  if (r.name === "quiz")    return "#/quiz/"    + r.lessonId;
  if (r.name === "result")  return "#/result/"  + r.lessonId;
  return "#/" + r.name;
}

function parseHash(hash) {
  const parts = (hash || "").replace(/^#\//, "").split("/");
  const name = parts[0] || "home";
  if (name === "section" && parts[1]) return { name: "section", sectionId: parts[1] };
  if (name === "lesson"  && parts[1]) return { name: "lesson",  lessonId: parts[1] };
  if (name === "quiz"    && parts[1]) return { name: "quiz",    lessonId: parts[1] };
  if (name === "result"  && parts[1]) return { name: "result",  lessonId: parts[1] };
  const valid = ["home","lessons","glossary","results","profile","welcome"];
  return { name: valid.includes(name) ? name : "home" };
}

function go(route, tab) {
  state.route = route;
  if (tab) state.tab = tab;
  history.pushState({ route, tab: state.tab }, "", buildHash(route));
  render();
  window.scrollTo({ top: 0, behavior: "instant" });
}

window.addEventListener("popstate", (e) => {
  const s = e.state;
  if (s && s.route) {
    state.route = s.route;
    if (s.tab) state.tab = s.tab;
  } else {
    state.route = parseHash(window.location.hash);
  }
  render();
  window.scrollTo({ top: 0, behavior: "instant" });
});

function getRouteSection() {
  const r = state.route;
  if (r.name === "section") return DATA.sections.find(s => s.id === r.sectionId);
  if (r.name === "lesson" || r.name === "quiz" || r.name === "result") {
    const fx = findLesson(r.lessonId);
    return fx?.section;
  }
  return null;
}

function findLesson(lessonId) {
  for (const s of DATA.sections) {
    const l = s.lessons.find(x => x.id === lessonId);
    if (l) return { section: s, lesson: l };
  }
  return null;
}

function overallPercent() {
  const all = DATA.sections.flatMap(s => s.lessons);
  if (!all.length) return 0;
  const done = all.filter(l => state.progress[l.id]?.completed).length;
  return Math.round((done / all.length) * 100);
}
function overallCount() {
  const all = DATA.sections.flatMap(s => s.lessons);
  const done = all.filter(l => state.progress[l.id]?.completed).length;
  return { done, total: all.length || 8 };
}

// ===== RENDER =====
function render() {
  const view = $("#view");
  view.innerHTML = "";
  view.className = "view";
  const sec = getRouteSection();
  if (sec) view.classList.add(`theme-${sec.color}`);
  const r = state.route;
  // Toggle tabbar visibility for onboarding
  const tabbar = document.getElementById("tabbar");
  if (tabbar) tabbar.style.display = r.name === "welcome" ? "none" : "";

  if (r.name === "welcome") view.append(WelcomeView());
  else if (r.name === "home") view.append(HomeView());
  else if (r.name === "lessons") view.append(LessonsView());
  else if (r.name === "section") view.append(SectionView(r.sectionId));
  else if (r.name === "lesson") view.append(LessonView(r.lessonId));
  else if (r.name === "quiz") view.append(QuizView(r.lessonId));
  else if (r.name === "result") view.append(ResultView(r.lessonId));
  else if (r.name === "glossary") view.append(GlossaryView());
  else if (r.name === "results") view.append(ResultsView());
  else if (r.name === "profile") view.append(ProfileView());

  // tab active
  document.querySelectorAll(".tab").forEach(t => {
    t.classList.toggle("active", t.dataset.tab === state.tab);
  });
}

// ===== VIEWS =====
function WelcomeView() {
  const wrap = el("div", { class: "onboard" });
  wrap.append(h(`
    <div class="hero-emoji">🧬</div>
    <h1>Biologiya 8-sinf</h1>
    <p>Odam anatomiyasini interaktiv darsliklar va rasmli testlar orqali o'rganing</p>
    <div class="features">
      <div class="feat">
        <div class="fi">🖼️</div>
        <div>
          <div class="ft">Interaktiv diagrammalar</div>
          <div class="fs">Rasmdagi qismlarni bosib, o'rganing</div>
        </div>
      </div>
      <div class="feat">
        <div class="fi">🎯</div>
        <div>
          <div class="ft">Mini testlar</div>
          <div class="fs">Har dars oxirida bilimingizni sinab ko'ring</div>
        </div>
      </div>
      <div class="feat">
        <div class="fi">🤟</div>
        <div>
          <div class="ft">Ko'rish uchun qulay</div>
          <div class="fs">Eshitish qiyin bo'lgan o'quvchilar uchun mos</div>
        </div>
      </div>
    </div>
    <div class="spacer"></div>
  `));
  const btn = el("button", { class: "cta" }, "Boshlash →");
  btn.addEventListener("click", () => {
    try { localStorage.setItem("bio_onboarded", "1"); } catch (e) {}
    go({ name: "home" }, "home");
  });
  wrap.append(btn);
  return wrap;
}

function HomeView() {
  const u = DATA.user;
  const pct = overallPercent();
  const { done, total } = overallCount();
  const wrap = el("div");

  // pull-to-refresh indicator (touch handler in INIT attaches to #view)
  wrap.append(h(`<div class="ptr-indicator">⟳ Yangilanmoqda...</div>`));

  // greeting
  wrap.append(h(`
    <div class="greet">
      <h1>Assalomu alaykum!</h1>
      <div class="muted">${u.name}</div>
    </div>
  `));

  // stats
  wrap.append(h(`
    <div class="stats">
      <div class="stat streak">
        <div class="icon">🔥</div>
        <div><div class="num">${state.streak}</div><div class="lbl">Streak</div></div>
      </div>
      <div class="stat lessons">
        <div class="icon">✓</div>
        <div><div class="num">${done}</div><div class="lbl">Darslar</div></div>
      </div>
    </div>
  `));

  // XP / Level bar
  const xpForNext = 50;
  const xpLevel = Math.floor((state.xp || 0) / xpForNext) + 1;
  const xpProgress = (state.xp || 0) % xpForNext;
  const xpPct = Math.round((xpProgress / xpForNext) * 100);
  wrap.append(h(`
    <div class="card xp-card">
      <div class="between">
        <div class="xp-label">⚡ Daraja ${xpLevel}</div>
        <div class="xp-pts">${state.xp || 0} XP jami</div>
      </div>
      <div class="bar" style="margin-top:8px"><span style="width:${xpPct}%"></span></div>
      <div class="small" style="margin-top:5px">Keyingi darajaga ${xpForNext - xpProgress} XP qoldi</div>
    </div>
  `));

  // progress
  wrap.append(h(`
    <div class="card progress-card">
      <div class="between">
        <h3>Umumiy progress</h3>
        <div class="pct">${pct}%</div>
      </div>
      <div class="bar"><span style="width:${pct}%"></span></div>
      <div class="small" style="margin-top:8px">${done}/${total} dars tugallandi</div>
    </div>
  `));

  // continue
  wrap.append(el("h2", {}, "Davom ettirish"));
  const cont = h(`
    <button class="continue">
      <div class="emoji">🧬</div>
      <div class="txt">
        <div class="title">Odam organizmining hujayraviy tuzilishi</div>
        <div class="sub">${pct}% tugallandi</div>
      </div>
      <div class="arrow">›</div>
    </button>
  `);
  cont.addEventListener("click", () => go({ name: "section", sectionId: "organism" }));
  wrap.append(cont);

  // sections
  wrap.append(el("h2", {}, "Bo'limlar"));
  const list = el("div", { class: "sections-list" });
  DATA.sections.forEach(s => {
    const doneCt = s.lessons.filter(l => state.progress[l.id]?.completed).length;
    const started = doneCt > 0;
    const pill = started
      ? `<span class="pill green">Davom etmoqda</span>`
      : `<span class="pill">Boshlanmagan</span>`;
    const row = h(`
      <button class="section-row">
        <span class="dot ${s.color}"></span>
        <span class="name">${s.title}</span>
        ${pill}
      </button>
    `);
    row.addEventListener("click", () => go({ name: "section", sectionId: s.id }));
    list.append(row);
  });
  wrap.append(list);

  return wrap;
}

function LessonsView() {
  const wrap = el("div");
  wrap.append(h(`
    <div style="margin-bottom:4px">
      <h1>Darslar</h1>
      <div class="muted">Barcha bo'limlar va darslar</div>
    </div>
  `));

  const list = el("div", { style: "margin-top:16px" });
  DATA.sections.forEach((s, i) => {
    const total = s.lessons.length || 2;
    const doneCt = s.lessons.filter(l => state.progress[l.id]?.completed).length;
    const pct = total ? Math.round((doneCt / total) * 100) : 0;
    const started = doneCt > 0;
    const iconBg = { green: "var(--green-50)", orange: "var(--orange-50)", blue: "var(--blue-50)", pink: "#fce7f3" }[s.color] || "#eef";
    const iconColor = { green: "var(--green)", orange: "var(--orange)", blue: "var(--blue)", pink: "var(--pink)" }[s.color];
    const btnClass = pct > 0 ? "green" : (i === 1 ? "orange" : (i === 2 ? "blue" : "green"));
    const btnText = pct > 0 ? "Davom etish" : "Boshlash";

    const ringBg = `conic-gradient(${iconColor} ${pct * 3.6}deg, #e5e7eb 0)`;
    const ringInner = pct > 0 ? `${pct}%` : "";

    const card = h(`
      <div class="lesson-card">
        <div class="top">
          <div class="ico" style="background:${iconBg};color:${iconColor}">${s.icon}</div>
          <div class="body">
            <h3>${s.title}</h3>
            <div class="desc">${s.subtitle}</div>
          </div>
          <div class="ring-sm" style="background:${ringBg}">
            <div style="width:36px;height:36px;border-radius:99px;background:#fff;display:grid;place-items:center;color:${iconColor};font-weight:800;font-size:10px">${ringInner || (started ? "" : "")}</div>
          </div>
        </div>
        ${pct > 0 ? `<div style="color:${iconColor};font-weight:700;font-size:12px;margin-top:10px">${pct}% tugallandi</div>` : `<div style="margin-top:10px"><span class="pill">Boshlanmagan</span></div>`}
        <div class="foot">
          <div class="left">${doneCt}/${total} dars</div>
          <button class="btn ${btnClass}" data-act="open">${btnText}</button>
        </div>
      </div>
    `);
    card.addEventListener("click", () => go({ name: "section", sectionId: s.id }));
    list.append(card);
  });
  wrap.append(list);
  return wrap;
}

function SectionView(sectionId) {
  const s = DATA.sections.find(x => x.id === sectionId);
  const wrap = el("div");

  wrap.append(Header(s.title, { back: () => go({ name: "home" }, "home") }));
  wrap.append(h(`<div class="crumbs">Bo'limlar › <b class="crumb-section">${s.title}</b></div>`));

  const doneCt = s.lessons.filter(l => state.progress[l.id]?.completed).length;
  const total = s.lessons.length || 2;
  const pct = total ? Math.round((doneCt / total) * 100) : 0;

  wrap.append(h(`
    <div class="hero">
      <h2>${s.title}</h2>
      <div class="hero-sub">${s.subtitle}</div>
      <div class="bar"><span style="width:${pct}%"></span></div>
      <div class="pct-row"><span>${pct}% tugadi</span><span>${pct}%</span></div>
    </div>
  `));

  // Darslar holati (checklist)
  const status = el("div", { class: "card" });
  status.append(h(`<h3>Darslar holati</h3>`));
  const list = el("div", { class: "check-list", style: "margin-top:12px" });
  (s.lessons.length ? s.lessons : [{ title: "Hujayra tuzilishi" }, { title: "Organellalar vazifasi" }]).forEach(l => {
    const done = state.progress[l.id]?.completed;
    list.append(h(`
      <div class="check-row">
        <div class="check${done ? " done" : ""}"></div>
        <div>${l.title}</div>
      </div>
    `));
  });
  status.append(list);
  wrap.append(status);

  // Darslar
  wrap.append(el("h2", {}, "Darslar"));
  const ll = el("div", { style: "display:flex;flex-direction:column;gap:10px" });
  (s.lessons.length ? s.lessons : []).forEach((l, i) => {
    const row = h(`
      <button class="lesson-row">
        <div class="num">${i + 1}</div>
        <div class="body">
          <div class="lt">${l.title}</div>
          <div class="ls">${l.subtitle}</div>
        </div>
        <div style="color:#94a3b8">›</div>
      </button>
    `);
    row.addEventListener("click", () => go({ name: "lesson", lessonId: l.id }));
    ll.append(row);
  });
  if (!s.lessons.length) {
    ll.append(h(`<div class="card muted" style="text-align:center">Bu bo'lim darslari tez kunda qo'shiladi.</div>`));
  }
  wrap.append(ll);

  return wrap;
}

function LessonView(lessonId) {
  const fx = findLesson(lessonId);
  if (!fx) return el("div", {}, "Dars topilmadi");
  const { section, lesson } = fx;
  const wrap = el("div");

  wrap.append(Header(lesson.title, { back: () => go({ name: "section", sectionId: section.id }) }));
  wrap.append(h(`<div class="crumbs">Bo'limlar › <span class="crumb-section">${section.title}</span> › <b>${lesson.title}</b></div>`));

  if (state.lastLessonId !== lessonId) {
    state.activeLessonTab = "organ";
    state.discoverSel = 0;
    state.sliderIndex = 0;
    state.lastLessonId = lessonId;
  }
  if (!state.activeLessonTab) state.activeLessonTab = "organ";
  const active = state.activeLessonTab;
  const tissueBgs = TISSUE_BGS;

  const tabs = h(`
    <div class="tabs">
      <button data-t="organ" class="${active === 'organ' ? 'active' : ''}">O'rganish</button>
      <button data-t="discover" class="${active === 'discover' ? 'active' : ''}">Kashf etish</button>
      <button data-t="test" class="${active === 'test' ? 'active' : ''}">Mini test</button>
    </div>
  `);
  tabs.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", () => {
      state.activeLessonTab = btn.dataset.t;
      if (btn.dataset.t === "test") {
        go({ name: "quiz", lessonId }, state.tab);
      } else {
        render();
      }
    });
  });
  wrap.append(tabs);

  if (active === "discover") {
    const sel = state.discoverSel;

    if (lesson.hotspots && lesson.hotspots.length) {
      // SVG hotspot diagram
      const hs = lesson.hotspots;
      const selH = sel != null ? hs[sel] : null;
      const pinsSvg = hs.map((p, i) => {
        const cx = p.x * 100;
        const cy = p.y * 100;
        const isActive = sel === i;
        return `
          <g class="hotspot-pin ${isActive ? 'active' : ''}" data-i="${i}" style="cursor:pointer">
            <circle class="halo" cx="${cx}%" cy="${cy}%" r="26" fill="var(--green)" fill-opacity="0.25"/>
            <circle cx="${cx}%" cy="${cy}%" r="14" fill="var(--green)" stroke="#fff" stroke-width="3"/>
            <text x="${cx}%" y="${cy}%" text-anchor="middle" dominant-baseline="central" fill="#fff" font-weight="800" font-size="13">${i + 1}</text>
          </g>
        `;
      }).join("");

      const svg = h(`
        <div class="hotspot-wrap">
          <svg class="hotspot-svg" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
            <!-- stylized cell: membrane, cytoplasm, nucleus, mitochondria, golgi -->
            <defs>
              <radialGradient id="cellGrad" cx="50%" cy="50%" r="55%">
                <stop offset="0%" stop-color="#fce7f3"/>
                <stop offset="100%" stop-color="#f9a8d4"/>
              </radialGradient>
              <radialGradient id="nucGrad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stop-color="#c4b5fd"/>
                <stop offset="100%" stop-color="#7c3aed"/>
              </radialGradient>
            </defs>
            <!-- membrane + cytoplasm -->
            <ellipse cx="200" cy="150" rx="180" ry="130" fill="url(#cellGrad)" stroke="#be185d" stroke-width="4"/>
            <!-- nucleus -->
            <circle cx="200" cy="135" r="48" fill="url(#nucGrad)" stroke="#4c1d95" stroke-width="2"/>
            <circle cx="210" cy="125" r="10" fill="#4c1d95" opacity="0.5"/>
            <!-- mitochondria -->
            <ellipse cx="90" cy="90" rx="34" ry="18" fill="#f97316" stroke="#c2410c" stroke-width="2"/>
            <path d="M 64 90 Q 75 78 90 90 T 116 90" stroke="#c2410c" stroke-width="2" fill="none"/>
            <!-- golgi -->
            <g transform="translate(290,205)">
              <path d="M -30 0 Q 0 -14 30 0" stroke="#10b981" stroke-width="3" fill="none"/>
              <path d="M -24 8 Q 0 -4 24 8" stroke="#10b981" stroke-width="3" fill="none"/>
              <path d="M -18 16 Q 0 6 18 16" stroke="#10b981" stroke-width="3" fill="none"/>
            </g>
            <!-- ribosomes dots -->
            <circle cx="130" cy="200" r="3" fill="#be185d"/>
            <circle cx="145" cy="215" r="3" fill="#be185d"/>
            <circle cx="120" cy="220" r="3" fill="#be185d"/>
            <circle cx="270" cy="100" r="3" fill="#be185d"/>
            <circle cx="285" cy="115" r="3" fill="#be185d"/>
            ${pinsSvg}
          </svg>
        </div>
      `);
      svg.querySelectorAll(".hotspot-pin").forEach(pin => {
        pin.addEventListener("click", () => {
          state.discoverSel = parseInt(pin.dataset.i, 10);
          render();
        });
      });
      wrap.append(svg);

      if (selH) {
        const card = h(`
          <div class="detail-card">
            <button class="close">×</button>
            <h4>${selH.icon} ${selH.label}</h4>
            <p>${selH.desc}</p>
          </div>
        `);
        card.querySelector(".close").addEventListener("click", () => { state.discoverSel = null; render(); });
        wrap.append(card);
      }

      const chips = el("div", { class: "chips" });
      hs.forEach((p, i) => {
        const c = el("button", { class: "chip" + (sel === i ? " active" : "") });
        c.innerHTML = `<span class="cdot"></span>${p.label}`;
        c.addEventListener("click", () => { state.discoverSel = i; render(); });
        chips.append(c);
      });
      wrap.append(chips);

      wrap.append(h(`
        <div class="hint-card">
          <h4>🔍 ${lesson.title}ni o'rganing</h4>
          <p>Diagrammadagi raqamli belgilarni bosib o'rganing</p>
        </div>
      `));

      const cta = h(`<div class="sticky-cta"><button class="cta">🎮 Mashq qilish</button></div>`);
      cta.querySelector("button").addEventListener("click", () => go({ name: "quiz", lessonId }));
      wrap.append(cta);
      return wrap;
    }

    // Fallback: 2x2 term grid (for lessons without hotspots)
    const terms4 = lesson.terms.slice(0, 4);

    const diag = el("div", { class: "diagram" });
    const grid = el("div", { class: "grid" });
    terms4.forEach((t, i) => {
      const cell = h(`
        <div class="cell${sel === i ? ' active' : ''}" style="background:${tissueBgs[i % 4]}">
          <div>${t.icon}</div>
          <button class="pin">i</button>
        </div>
      `);
      cell.addEventListener("click", () => { state.discoverSel = i; render(); });
      grid.append(cell);
    });
    diag.append(grid);
    wrap.append(diag);

    if (sel != null && terms4[sel]) {
      const selTerm = terms4[sel];
      const card = h(`
        <div class="detail-card">
          <button class="close">×</button>
          <h4>ⓘ ${selTerm.name}</h4>
          <p>${selTerm.desc}</p>
        </div>
      `);
      card.querySelector(".close").addEventListener("click", (e) => {
        e.stopPropagation();
        state.discoverSel = null;
        render();
      });
      wrap.append(card);
    }

    const chips = el("div", { class: "chips" });
    terms4.forEach((t, i) => {
      const c = el("button", { class: "chip" + (sel === i ? " active" : "") });
      c.innerHTML = `<span class="cdot"></span>${t.name}`;
      c.addEventListener("click", () => { state.discoverSel = i; render(); });
      chips.append(c);
    });
    wrap.append(chips);

    wrap.append(h(`
      <div class="hint-card">
        <h4>🔍 ${lesson.title}${lesson.title.endsWith('lari') || lesson.title.endsWith('lar') ? 'ni' : 'ni'} o'rganing</h4>
        <p>Diagrammani bosib o'rganing</p>
      </div>
    `));

    const cta = h(`<div class="sticky-cta"><button class="cta">🎮 Mashq qilish</button></div>`);
    cta.querySelector("button").addEventListener("click", () => go({ name: "quiz", lessonId }));
    wrap.append(cta);
  } else {
    // image carousel — multi-image slider with swipe, captions, lazy-load
    const terms4 = lesson.terms.slice(0, 4);
    const images   = Array.isArray(lesson.images)   ? lesson.images   : (lesson.heroImage ? [lesson.heroImage] : []);
    const captions = Array.isArray(lesson.captions) ? lesson.captions : [];
    const hasImages = images.length > 0;
    if (state.sliderIndex == null || state.sliderIndex < 0 || state.sliderIndex >= Math.max(images.length, 1)) {
      state.sliderIndex = 0;
    }
    const showGrid = !hasImages && terms4.length >= 4;
    const sIdx = state.sliderIndex;
    const caption = captions[sIdx] || "";

    const frameInner = hasImages
      ? `<img class="hero-img" src="${images[sIdx]}" alt="${caption || lesson.title}" loading="lazy"/>`
      : showGrid
        ? `<div class="mini-diagram">${terms4.map((t, i) => `<div class="mcell" style="background:${tissueBgs[i]}">${t.icon}</div>`).join("")}</div>`
        : `🔬`;

    const dotsHtml = hasImages
      ? images.map((_, i) => `<span class="${i === sIdx ? 'on' : ''}" data-dot="${i}"></span>`).join("")
      : `<span></span><span class="on"></span><span></span>`;

    const sliderEl = h(`
      <div class="slider">
        <div class="frame" ${hasImages ? 'style="background:#fff;padding:0"' : showGrid ? 'style="background:#f8fafc;padding:0"' : ''}>${frameInner}</div>
        <div class="ctrls">
          <button data-slide="prev" aria-label="Oldingi rasm" ${hasImages && images.length > 1 ? '' : 'disabled'}>‹</button>
          <div class="dots" role="tablist" aria-label="Rasm ${sIdx + 1} / ${images.length}">${dotsHtml}</div>
          <button data-slide="next" aria-label="Keyingi rasm" ${hasImages && images.length > 1 ? '' : 'disabled'}>›</button>
        </div>
        ${caption ? `<div class="slider-caption">${caption}</div>` : ""}
      </div>
    `);

    if (hasImages && images.length > 1) {
      const prev = () => { state.sliderIndex = (state.sliderIndex - 1 + images.length) % images.length; render(); };
      const next = () => { state.sliderIndex = (state.sliderIndex + 1) % images.length; render(); };

      sliderEl.querySelector('[data-slide="prev"]').addEventListener("click", prev);
      sliderEl.querySelector('[data-slide="next"]').addEventListener("click", next);
      sliderEl.querySelectorAll("[data-dot]").forEach(dot => {
        dot.addEventListener("click", () => { state.sliderIndex = parseInt(dot.dataset.dot, 10); render(); });
      });

      // Touch swipe support
      let _tx = 0;
      sliderEl.addEventListener("touchstart", e => { _tx = e.touches[0].clientX; }, { passive: true });
      sliderEl.addEventListener("touchend", e => {
        const dx = e.changedTouches[0].clientX - _tx;
        if (Math.abs(dx) > 40) dx < 0 ? next() : prev();
      }, { passive: true });
    }
    wrap.append(sliderEl);

    // info
    const info = el("div", { class: "info" });
    info.append(h(`<div class="info-title">✨ Asosiy ma'lumot</div>`));
    const ul = el("ul");
    lesson.facts.forEach(f => ul.append(el("li", {}, f)));
    info.append(ul);
    wrap.append(info);

    // terms — show thumbnail image if available, otherwise emoji icon
    wrap.append(el("h2", {}, "Atamalar"));
    const tl = el("div", { class: "term-list" });
    lesson.terms.forEach(t => {
      const leftEl = t.image
        ? `<img class="term-thumb" src="${t.image}" alt="${t.name}" loading="lazy"/>`
        : `<div class="ticon">${t.icon}</div>`;
      tl.append(h(`
        <div class="term">
          ${leftEl}
          <div>
            <h4>${t.name}</h4>
            <p>${t.desc}</p>
          </div>
        </div>
      `));
    });
    wrap.append(tl);

    // video — ASL (English sign language) embed, or honest empty state if none sourced
    if (lesson.video && lesson.video.youtubeId) {
      const v = lesson.video;
      const safeTitle = (v.title || lesson.title).replace(/"/g, "&quot;");
      const safeSource = (v.source || "").replace(/</g, "&lt;");
      wrap.append(h(`
        <div class="video-card">
          <div class="vc-head">
            <span>📺 Video dars</span>
            <span class="lang-chip">CC</span>
          </div>
          <div class="yt-frame">
            <iframe
              src="https://www.youtube-nocookie.com/embed/${v.youtubeId}?rel=0&modestbranding=1&playsinline=1&cc_load_policy=1&hl=en"
              title="${safeTitle}"
              loading="lazy"
              allow="accelerometer; encrypted-media; picture-in-picture; fullscreen"
              allowfullscreen></iframe>
          </div>
          <div class="vt" style="margin-top:10px;">${v.title || lesson.title}</div>
          <a class="yt-link" href="https://www.youtube.com/watch?v=${v.youtubeId}" target="_blank" rel="noopener noreferrer">▶ YouTube-da ochish</a>
          <div class="yt-hint">Subtitrlar (CC) yoqilgan — tugmani bosib tilni o'zgartirishingiz mumkin</div>
          ${safeSource ? `<div class="credit">Manba: ${safeSource}</div>` : ``}
        </div>
      `));
    } else {
      wrap.append(h(`
        <div class="video-card">
          <div class="ph">✋</div>
          <div class="vt">Imo-ishora videosi tez orada</div>
          <div class="vs">Ushbu darsga video hozircha tayyorlanmoqda</div>
        </div>
      `));
    }

    // CTA
    const cta = h(`<div class="sticky-cta"><button class="cta">🎮 Mashq qilish</button></div>`);
    cta.querySelector("button").addEventListener("click", () => go({ name: "quiz", lessonId }));
    wrap.append(cta);
  }

  return wrap;
}

const TISSUE_BGS = [
  "linear-gradient(135deg,#fecaca,#fca5a5)",
  "linear-gradient(135deg,#fef3c7,#fde68a)",
  "linear-gradient(135deg,#fbcfe8,#f9a8d4)",
  "linear-gradient(135deg,#ddd6fe,#c4b5fd)"
];

function QuizView(lessonId) {
  const fx = findLesson(lessonId);
  if (!fx) return el("div", {}, "Dars topilmadi");
  const { section, lesson } = fx;
  const quiz = lesson.quiz || [];
  if (!quiz.length) {
    const w = el("div");
    w.append(Header("Mini test", { back: () => go({ name: "lesson", lessonId }) }));
    w.append(h(`<div class="card muted" style="text-align:center">Bu darsda test yo'q.</div>`));
    return w;
  }

  let progress = state.progress[lessonId];
  if (!progress || !progress.quiz) {
    progress = state.progress[lessonId] = { completed: false, percent: 0, quiz: { index: 0, correct: 0, answers: [] } };
  }
  const q = progress.quiz;
  const idx = q.index;
  const item = quiz[idx];

  const wrap = el("div");
  wrap.append(Header("", { back: () => go({ name: "lesson", lessonId }) }));

  // top progress bar
  const topPct = Math.round(((idx) / quiz.length) * 100);
  wrap.append(h(`
    <div class="q-top">
      <div class="q-bar"><span style="width:${topPct}%"></span></div>
      <div class="q-meta">
        <span>${idx + 1}/${quiz.length}</span>
      </div>
    </div>
  `));

  wrap.append(h(`<div class="crumbs">Bo'limlar › <span class="crumb-section">${section.title}</span> › <span class="crumb-section">${lesson.title}</span> › <b>Mini test</b></div>`));

  // dots
  const dotsHtml = quiz.map((_, i) => {
    if (i < idx) {
      const a = q.answers[i];
      return `<span class="${a === true ? 'on' : 'bad'}"></span>`;
    }
    if (i === idx) return `<span class="on"></span>`;
    return `<span></span>`;
  }).join("");
  wrap.append(h(`<div class="q-dots">${dotsHtml}</div>`));

  // diagram image above question (for lessons with 4+ terms)
  const terms4 = lesson.terms.slice(0, 4);
  if (terms4.length >= 4) {
    wrap.append(h(`
      <div class="quiz-diagram">
        <div class="mini-diagram">
          ${terms4.map((t, i) => `<div class="mcell" style="background:${TISSUE_BGS[i]}">${t.icon}</div>`).join("")}
        </div>
      </div>
    `));
  }

  wrap.append(h(`<div class="q-chip">${item.chip}</div>`));
  wrap.append(h(`<div class="q-title">${item.q}</div>`));

  // options
  const opts = el("div", { class: "options" });
  const selected = q.selected;
  const answered = q.answered;

  item.options.forEach((opt, i) => {
    let cls = "opt";
    if (answered != null) {
      if (i === item.answer) cls += " correct";
      else if (i === answered) cls += " wrong";
      else cls += " locked";
    } else if (selected === i) {
      cls += " selected";
    }
    const btn = el("button", { class: cls }, opt);
    btn.addEventListener("click", () => {
      if (answered != null) return;
      q.selected = i;
      q.answered = i;
      const correct = i === item.answer;
      q.answers[idx] = correct;
      if (correct) q.correct++;
      // Haptic feedback for touch devices
      if (navigator.vibrate) navigator.vibrate(correct ? [40] : [30, 50, 30]);
      render();
    });
    opts.append(btn);
  });
  wrap.append(opts);

  if (answered != null) {
    const correct = answered === item.answer;
    wrap.append(h(`
      <div class="feedback ${correct ? 'ok' : 'bad'}">
        <div class="ft">${correct ? "To'g'ri!" : "Noto'g'ri"}</div>
        <div class="fb">${item.explanation}</div>
      </div>
    `));
    const nextCta = el("div", { class: "sticky-cta" },
      el("button", { class: `cta ${correct ? '' : 'red'}` },
        [`Keyingisi →`]
      )
    );
    nextCta.querySelector("button").addEventListener("click", () => {
      q.selected = null;
      q.answered = null;
      if (idx + 1 >= quiz.length) {
        // finish
        const pct = Math.round((q.correct / quiz.length) * 100);
        state.progress[lessonId] = {
          completed: true,
          percent: pct,
          quiz: q
        };
        updateStreak();
        state.xp = (state.xp || 0) + 10;
        const newBadge = checkBadges();
        if (newBadge) setTimeout(() => showBadgeToast(newBadge), 700);
        saveProgress();
        go({ name: "result", lessonId });
      } else {
        q.index++;
        render();
      }
    });
    wrap.append(nextCta);
  } else {
    const helpEl = el("div", { class: "help" });
    helpEl.append(h(`<span>❓ Javobni tanlang va tasdiqlang</span>`));
    const helpBtn = el("button", { class: "help-link" }, "📖 Darsga qaytish");
    helpBtn.addEventListener("click", () => { state.activeLessonTab = "organ"; go({ name: "lesson", lessonId }); });
    helpEl.append(helpBtn);
    wrap.append(helpEl);
  }

  return wrap;
}

function ResultView(lessonId) {
  const fx = findLesson(lessonId);
  const { lesson } = fx;
  const q = state.progress[lessonId].quiz;
  const total = lesson.quiz.length;
  const pct = Math.round((q.correct / total) * 100);
  const stars = pct >= 80 ? 3 : pct >= 50 ? 2 : pct >= 20 ? 1 : 0;

  const wrap = el("div");
  wrap.append(h(`<div style="height:20px"></div>`));

  const ringBg = `conic-gradient(var(--orange) ${pct * 3.6}deg, #e5e7eb 0)`;

  const resultTitle = pct >= 80 ? "🎉 Ajoyib natija!" : pct >= 50 ? "👍 Yaxshi harakat!" : "📖 Qayta o'rganing";
  wrap.append(h(`
    <div class="result-card">
      <div class="emoji-big">${pct >= 80 ? '🏆' : pct >= 50 ? '📘' : '📚'}</div>
      <h2>${resultTitle}</h2>
      <div class="ring" style="background:${ringBg}">
        <div style="width:92px;height:92px;border-radius:99px;background:#fff;display:grid;place-items:center">${pct}%</div>
      </div>
      <div class="muted" style="margin-bottom:10px">${q.correct}/${total} to'g'ri javob</div>
      <div class="stars">
        ${[0,1,2].map(i => `<span class="${i < stars ? 'on' : ''}">★</span>`).join("")}
      </div>
      <div class="reward-pill">✨ +10 XP qo'shildi</div>
      <div class="q-dots" style="margin-top:16px">
        ${q.answers.map(a => `<span class="${a ? 'on' : 'bad'}"></span>`).join("")}
      </div>
    </div>
  `));

  // Revision: show weak topics if any wrong answer
  const wrongIdx = q.answers.map((a, i) => a ? -1 : i).filter(i => i >= 0);
  if (wrongIdx.length > 0) {
    const weakTerms = [];
    const seen = new Set();
    wrongIdx.forEach(qi => {
      const item = lesson.quiz[qi];
      if (!item) return;
      const correctOpt = item.options[item.answer];
      // find matching term by name substring
      const match = lesson.terms.find(t => correctOpt.toLowerCase().includes(t.name.toLowerCase()) || t.name.toLowerCase().includes(correctOpt.toLowerCase()));
      const name = match ? match.name : correctOpt;
      if (!seen.has(name)) { seen.add(name); weakTerms.push(name); }
    });
    const rev = el("div", { class: "revision" });
    rev.append(h(`
      <h4>🔁 Qayta ko'rib chiqing:</h4>
      <ul>${weakTerms.slice(0, 5).map(t => `<li>${t}</li>`).join("")}</ul>
    `));
    const revBtn = el("button", { class: "cta" }, "📖 Qayta o'rganish");
    revBtn.addEventListener("click", () => {
      state.activeLessonTab = "organ";
      go({ name: "lesson", lessonId });
    });
    rev.append(revBtn);
    wrap.append(rev);
  }

  const actions = el("div", { class: "result-actions" });
  const retry = el("button", { class: "cta secondary" }, "🔁 Qayta urinish");
  const done = el("button", { class: "cta" }, "🏠 Tugatildi");
  retry.addEventListener("click", () => {
    state.progress[lessonId] = { completed: false, percent: 0, quiz: { index: 0, correct: 0, answers: [] } };
    saveProgress();
    go({ name: "quiz", lessonId });
  });
  done.addEventListener("click", () => go({ name: "home" }, "home"));
  actions.append(retry, done);
  wrap.append(actions);

  return wrap;
}

function GlossaryView() {
  const wrap = el("div");
  wrap.append(h(`<h1>Lug'at</h1><div class="muted">Barcha atamalar va imo-ishoralar</div>`));
  wrap.append(h(`
    <div class="search" style="margin-top:14px">
      <span>🔍</span>
      <input placeholder="Atama qidirish..."/>
    </div>
  `));

  const terms = DATA.sections.flatMap(s => s.lessons.flatMap(l => l.terms || []));
  const list = el("div", { class: "term-list" });
  const input = wrap.querySelector("input");
  const renderTerms = (q) => {
    list.innerHTML = "";
    const filt = terms.filter(t => !q || t.name.toLowerCase().includes(q.toLowerCase()));
    if (!filt.length) list.append(h(`<div class="card muted" style="text-align:center">Topilmadi</div>`));
    filt.forEach(t => list.append(h(`
      <div class="term">
        <div class="ticon">${t.icon}</div>
        <div><h4>${t.name}</h4><p>${t.desc}</p></div>
      </div>
    `)));
  };
  input.addEventListener("input", (e) => renderTerms(e.target.value));
  renderTerms("");
  wrap.append(list);
  return wrap;
}

function ResultsView() {
  const wrap = el("div");
  wrap.append(h(`<h1>Natijalar</h1>`));

  const pct = overallPercent();
  const streak = state.streak;
  const avg = (() => {
    const vals = Object.values(state.progress).filter(p => p.completed).map(p => p.percent);
    if (!vals.length) return 0;
    return Math.round(vals.reduce((a,b)=>a+b,0) / vals.length);
  })();

  wrap.append(h(`
    <div class="res-stats" style="margin-top:14px">
      <div class="res-stat a"><div class="ri">🎯</div><div class="rn">${pct}%</div><div class="rl">Umumiy</div></div>
      <div class="res-stat b"><div class="ri">🔥</div><div class="rn">${streak}</div><div class="rl">Streak</div></div>
      <div class="res-stat c"><div class="ri">🏆</div><div class="rn">${avg}%</div><div class="rl">O'rtacha</div></div>
    </div>
  `));

  // XP summary
  const xpLevel2 = Math.floor((state.xp || 0) / 50) + 1;
  const xpPct2 = Math.round(((state.xp || 0) % 50) / 50 * 100);
  wrap.append(h(`
    <div class="card xp-card">
      <div class="between">
        <div class="xp-label">⚡ Daraja ${xpLevel2}</div>
        <div class="xp-pts">${state.xp || 0} XP jami</div>
      </div>
      <div class="bar" style="margin-top:8px"><span style="width:${xpPct2}%"></span></div>
    </div>
  `));

  wrap.append(el("h2", {}, "Bo'limlar bo'yicha"));
  DATA.sections.forEach(s => {
    const total = s.lessons.length || 2;
    const doneCt = s.lessons.filter(l => state.progress[l.id]?.completed).length;
    const pct = total ? Math.round((doneCt / total) * 100) : 0;
    const color = { green: "var(--green)", orange: "var(--orange)", blue: "var(--blue)", pink: "var(--pink)" }[s.color];
    wrap.append(h(`
      <div class="section-stat">
        <div class="between">
          <div class="name"><span class="dot ${s.color}"></span>${s.title}</div>
          <div class="pct" style="color:${color}">${pct}%</div>
        </div>
        <div class="bar"><span style="width:${pct}%;background:${color}"></span></div>
        <div class="sub">${doneCt}/${total} dars tamom</div>
      </div>
    `));
  });

  wrap.append(h(`<h2>Yutuqlar</h2>`));
  const ub = state.unlockedBadges || [];
  const badgeDefs = [
    { id: "streak", icon: "🔥", label: "Streak ustasi",  hint: "Ketma-ket dars tugatish" },
    { id: "first",  icon: "📚", label: "Birinchi dars",  hint: "Birinchi darsni tugatish" },
    { id: "honor",  icon: "⭐", label: "A'lochi",         hint: "80%+ o'rtacha bal" }
  ];
  const badgeHtml = badgeDefs.map(b => {
    const locked = !ub.includes(b.id);
    return `
      <div class="badge-item ${locked ? 'locked' : 'unlocked'}">
        <div class="bi-icon">${locked ? '⚪' : b.icon}</div>
        <div class="bi-label">${b.label}</div>
        ${locked
          ? `<div class="bi-hint">${b.hint}</div>`
          : `<div class="bi-earned">✓ Qo'lga kiritildi</div>`}
      </div>
    `;
  }).join("");
  wrap.append(h(`<div class="badges-grid">${badgeHtml}</div>`));
  return wrap;
}

function ProfileView() {
  const wrap = el("div");
  wrap.append(h(`<h1>Profil</h1>`));
  wrap.append(h(`
    <div class="prof-head">
      <div class="avatar">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg>
      </div>
      <h2>${DATA.user.short}</h2>
      <div class="muted">${DATA.user.grade} · Bio Inclusive</div>
    </div>
  `));

  const menu = el("div", { class: "menu" });
  const items = [
    { icon: "🔔", name: "Bildirishnomalar" },
    { icon: "⚙️", name: "Sozlamalar" },
    { icon: "❓", name: "Yordam" },
    { icon: "🛠️", name: "Admin panel", action: () => window.open("/admin_panel/", "_blank") },
    { icon: "🔄", name: "Progressni tiklash", action: () => {
        if (confirm("Barcha natijalar tozalanadi. Davom etasizmi?")) {
          localStorage.removeItem(STORAGE_KEY);
          localStorage.removeItem(ADMIN_SYNC_KEY);
          localStorage.removeItem("bio_onboarded");
          state.progress = {};
          state.streak = 0;
          seedProgress();
          saveProgress();
          go({ name: "welcome" });
        }
      } },
    { icon: "ℹ️", name: "Ilova haqida" }
  ];
  items.forEach(it => {
    const row = h(`
      <button class="menu-row">
        <div class="mi">${it.icon}</div>
        <div class="mname">${it.name}</div>
        <div style="color:#94a3b8">›</div>
      </button>
    `);
    if (it.action) row.addEventListener("click", it.action);
    menu.append(row);
  });
  wrap.append(menu);
  wrap.append(h(`<div class="version">Bio Inclusive v1.0.0</div>`));
  return wrap;
}

// ===== Header helper =====
function Header(title, { back } = {}) {
  const head = el("div", { class: "header" });
  if (back) {
    const b = el("button", { class: "back" }, "");
    b.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>`;
    b.addEventListener("click", back);
    head.append(b);
  }
  head.append(el("div", { class: "title" }, title));
  return head;
}

// ===== TABS =====
document.addEventListener("click", (e) => {
  const t = e.target.closest(".tab");
  if (!t) return;
  const tab = t.dataset.tab;
  state.tab = tab;
  if (tab === "home") go({ name: "home" }, "home");
  else if (tab === "lessons") go({ name: "lessons" }, "lessons");
  else if (tab === "signs") go({ name: "glossary" }, "signs");
  else if (tab === "results") go({ name: "results" }, "results");
  else if (tab === "profile") go({ name: "profile" }, "profile");
});

// ===== PERSISTENCE + ADMIN SYNC =====
const STORAGE_KEY = "bio_progress_v1";
const ADMIN_SYNC_KEY = "bio_live_s1";

function saveProgress() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      progress: state.progress,
      streak: state.streak,
      xp: state.xp || 0,
      lastQuizDate: state.lastQuizDate || 0,
      unlockedBadges: state.unlockedBadges || [],
      updated: Date.now()
    }));
  } catch (e) {}
  syncToAdmin();
}

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch (e) { return null; }
}

function syncToAdmin() {
  const all = DATA.sections.flatMap(s => s.lessons);
  const total = all.length || 1;
  const done = all.filter(l => state.progress[l.id]?.completed);
  let totalQ = 0, correctQ = 0;
  done.forEach(l => {
    const q = state.progress[l.id]?.quiz;
    if (q?.answers?.length) {
      totalQ += q.answers.length;
      correctQ += q.correct || 0;
    }
  });
  // Build per-question answer map (admin-format question IDs)
  const answers = {};
  const completedAdminIds = [];
  done.forEach(l => {
    const prog = state.progress[l.id];
    const quizState = prog?.quiz;
    if (l.adminLessonIds) completedAdminIds.push(...l.adminLessonIds);
    if (!quizState?.answers || !l.quiz) return;
    l.quiz.forEach((item, i) => {
      if (!item._id) return;
      const wasCorrect = quizState.answers[i] === true;
      const picked = wasCorrect ? item.options[item.answer] : item.options.find((_, k) => k !== item.answer);
      answers[item._id] = picked || item.options[item.answer];
    });
  });

  const live = {
    studentId: "s1",
    streak: state.streak,
    progress: Math.round((done.length / total) * 100),
    averageScore: totalQ ? Math.round((correctQ / totalQ) * 100) : 0,
    totalQuestions: totalQ,
    correctCount: correctQ,
    completedLessonCount: done.length,
    totalLessons: total,
    completedIds: done.map(l => l.id),
    completedAdminLessonIds: completedAdminIds,
    answers,
    updated: Date.now()
  };
  try { localStorage.setItem(ADMIN_SYNC_KEY, JSON.stringify(live)); } catch (e) {}
}

// ===== STREAK / XP / BADGE HELPERS =====
function updateStreak() {
  const now = new Date();
  const todayStr = now.toDateString();
  const last = state.lastQuizDate || 0;
  const lastStr = last ? new Date(last).toDateString() : null;

  if (!lastStr) {
    state.streak = 1;                          // very first quiz ever
  } else if (todayStr === lastStr) {
    // same calendar day — streak already counted, don't change
  } else {
    const diffDays = (now - new Date(last)) / (1000 * 3600 * 24);
    state.streak = diffDays < 2 ? state.streak + 1 : 1;
  }
  state.lastQuizDate = Date.now();
}

function checkBadges() {
  const unlocked = state.unlockedBadges || [];
  const { done } = overallCount();
  const vals = Object.values(state.progress).filter(p => p.completed).map(p => p.percent);
  const avg = vals.length ? Math.round(vals.reduce((a, b) => a + b, 0) / vals.length) : 0;

  if (state.streak >= 1 && !unlocked.includes("streak")) {
    state.unlockedBadges = [...unlocked, "streak"];
    return "streak";
  }
  if (done >= 1 && !unlocked.includes("first")) {
    state.unlockedBadges = [...unlocked, "first"];
    return "first";
  }
  if (avg >= 80 && !unlocked.includes("honor")) {
    state.unlockedBadges = [...unlocked, "honor"];
    return "honor";
  }
  return null;
}

function showBadgeToast(badge) {
  const msgs = {
    streak: "🔥 Streak ustasi! Ketma-ket dars tugatding!",
    first:  "📚 Birinchi dars! Ajoyib boshlash!",
    honor:  "⭐ A'lochi! 80%+ o'rtacha bal!"
  };
  const app = document.getElementById("app");
  const toast = document.createElement("div");
  toast.className = "badge-toast";
  toast.textContent = msgs[badge] || "🏆 Yangi yutuq qo'lga kiritildi!";
  app.appendChild(toast);
  setTimeout(() => {
    toast.classList.add("toast-hide");
    setTimeout(() => toast.remove(), 400);
  }, 3000);
}

// ===== SEED FAKE PROGRESS =====
function seedProgress() {
  state.streak = 5;
  state.xp = 20;
  state.lastQuizDate = Date.now() - 1000 * 3600 * 20; // 20 h ago → same-day streak safe
  state.unlockedBadges = ["first"];
  state.progress.hujayra = {
    completed: true,
    percent: 83,
    quiz: { index: 6, correct: 5, answers: [true, true, false, true, true, true] }
  };
  state.progress["toqima-turlari"] = {
    completed: false,
    percent: 40,
    quiz: null
  };
  state.progress.skelet = {
    completed: true,
    percent: 67,
    quiz: { index: 3, correct: 2, answers: [true, false, true] }
  };
}
const saved = loadProgress();
if (saved && saved.progress) {
  state.progress = saved.progress;
  state.streak = saved.streak || 0;
  state.xp = saved.xp || 0;
  state.lastQuizDate = saved.lastQuizDate || 0;
  state.unlockedBadges = saved.unlockedBadges || [];
} else {
  seedProgress();
  saveProgress();
}

// ===== INIT =====
try {
  if (!localStorage.getItem("bio_onboarded")) {
    state.route = { name: "welcome" };
  } else if (window.location.hash && window.location.hash.length > 1) {
    const parsedRoute = parseHash(window.location.hash);
    if (parsedRoute.name !== "welcome") {
      state.route = parsedRoute;
      if (["home","lessons","results","profile"].includes(parsedRoute.name)) state.tab = parsedRoute.name;
      else if (parsedRoute.name === "glossary") state.tab = "signs";
    }
  }
} catch (e) {}
history.replaceState({ route: state.route, tab: state.tab }, "", buildHash(state.route));
render();

// ===== PULL-TO-REFRESH =====
(function () {
  let _startY = 0, _pulling = false, _ind = null;
  const view = document.getElementById("view");
  view.addEventListener("touchstart", e => { _startY = e.touches[0].clientY; }, { passive: true });
  view.addEventListener("touchmove", e => {
    if (state.route.name !== "home" || view.scrollTop > 0) return;
    const dy = e.touches[0].clientY - _startY;
    if (dy > 70 && !_pulling) {
      _pulling = true;
      _ind = view.querySelector(".ptr-indicator");
      if (_ind) _ind.classList.add("ptr-active");
    }
  }, { passive: true });
  view.addEventListener("touchend", () => {
    if (!_pulling) return;
    _pulling = false;
    if (_ind) { _ind.classList.remove("ptr-active"); _ind = null; }
    if (state.route.name === "home") render();
  }, { passive: true });
})();
