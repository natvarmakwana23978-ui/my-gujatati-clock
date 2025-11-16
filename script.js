// ફાઇલ: script.js (સંપૂર્ણ અપડેટેડ કોડ)

// 0-9 અંગ્રેજી અંકોને ગુજરાતી અંકોમાં બદલવા માટેનો મેપ
const GUJARATI_DIGITS = ['૦', '૧', '૨', '૩', '૪', '૫', '૬', '૭', '૮', '૯'];
const GUJARATI_DAYS = ['રવિવાર', 'સોમવાર', 'મંગળવાર', 'બુધવાર', 'ગુરુવાર', 'શુક્રવાર', 'શનિવાર'];

// =======================================================
// (1) ચોઘડિયા માટેનો ડેટા (તમે આપેલી માહિતી મુજબ)
// =======================================================
const CHOGHADIYA_DATA = {
    // 0: રવિવાર
    0: {
        day: ['Udveg', 'Chal', 'Labh', 'Amrit', 'Kaal', 'Shubh', 'Rog', 'Udveg'],
        night: ['Shubh', 'Amrit', 'Chal', 'Rog', 'Kaal', 'Labh', 'Udveg', 'Shubh']
    },
    // 1: સોમવાર
    1: {
        day: ['Amrit', 'Kaal', 'Shubh', 'Rog', 'Udveg', 'Chal', 'Labh', 'Amrit'],
        night: ['Chal', 'Rog', 'Kaal', 'Labh', 'Udveg', 'Shubh', 'Amrit', 'Chal']
    },
    // 2: મંગળવાર
    2: {
        day: ['Rog', 'Udveg', 'Chal', 'Labh', 'Amrit', 'Kaal', 'Shubh', 'Rog'],
        night: ['Kaal', 'Labh', 'Udveg', 'Shubh', 'Amrit', 'Chal', 'Rog', 'Kaal']
    },
    // 3: બુધવાર
    3: {
        day: ['Labh', 'Amrit', 'Kaal', 'Shubh', 'Rog', 'Udveg', 'Chal', 'Labh'],
        night: ['Udveg', 'Shubh', 'Amrit', 'Chal', 'Rog', 'Kaal', 'Labh', 'Udveg']
    },
    // 4: ગુરુવાર
    4: {
        day: ['Shubh', 'Rog', 'Udveg', 'Chal', 'Labh', 'Amrit', 'Kaal', 'Shubh'],
        night: ['Amrit', 'Chal', 'Rog', 'Kaal', 'Labh', 'Udveg', 'Shubh', 'Amrit']
    },
    // 5: શુક્રવાર
    5: {
        day: ['Chal', 'Labh', 'Amrit', 'Kaal', 'Shubh', 'Rog', 'Udveg', 'Chal'],
        night: ['Rog', 'Kaal', 'Labh', 'Udveg', 'Shubh', 'Amrit', 'Chal', 'Rog']
    },
    // 6: શનિવાર
    6: {
        day: ['Kaal', 'Shubh', 'Rog', 'Udveg', 'Chal', 'Labh', 'Amrit', 'Kaal'],
        night: ['Labh', 'Udveg', 'Shubh', 'Amrit', 'Chal', 'Rog', 'Kaal', 'Labh']
    }
};

// =======================================================
// (2) ડમી પંચાંગ ફંક્શન્સ (વાસ્તવિક ગણતરી જટિલ છે, તેથી સરળ ડેટા મૂક્યો છે)
// =======================================================

// વાસ્તવિક કોડ જટિલ હોય છે, અહીં ઉદાહરણ માટે સ્થિર ડેટા મૂકેલ છે.
function calculateTithi(now) {
    // તમારે અહીં વાસ્તવિક તિથિ ગણતરીનો કોડ ઉમેરવો પડશે, જે જટિલ છે.
    return "શુકલ પક્ષ - બીજ"; 
}

function calculateGujaratiMonth(now) {
    // તમારે અહીં વાસ્તવિક ગુજરાતી મહિના ગણતરીનો કોડ ઉમેરવો પડશે.
    return "કાર્તિક"; 
}

function getFestival(now) {
    // તમારે અહીં તહેવાર તપાસવાનો કોડ ઉમેરવો પડશે.
    // ઉદાહરણ તરીકે:
    const day = now.getDate();
    const month = now.getMonth();
    if (month === 10 && day === 13) return "આજે તમારી માહિતી સેવ કરવાની તારીખ છે"; // 13 નવેમ્બર
    return "-- કોઈ તહેવાર નથી --";
}

// =======================================================
// (3) મુખ્ય રૂપાંતરણ અને ગણતરી ફંક્શન્સ
// =======================================================

function replaceDigits(inputString) {
    return inputString.replace(/[0-9]/g, (digit) => GUJARATI_DIGITS[parseInt(digit)]);
}

// સૂર્યોદય અને સૂર્યાસ્તનો સમય મેળવવાનું (સ્થળ આધારિત છે, અહીં ડમી મૂક્યું છે)
function getSunriseSunset(now) {
    // આ ગણતરી વપરાશકર્તાના ભૌગોલિક સ્થાન (Latitude/Longitude) પર આધારિત છે.
    // હાલમાં આપણે તેને સ્થિર (Fixed) સમય માનીએ છીએ.
    const today = now.getDate();
    const month = now.getMonth();
    
    // ઉદાહરણ માટે:
    let sunriseHour = 6; 
    let sunsetHour = 18;

    // તારીખ અને મહિના પ્રમાણે અહીં લોજિક બદલી શકાય છે.
    
    // સૂર્યોદય: 06:30:00 (વર્તમાન તારીખે)
    let sunrise = new Date(now.getFullYear(), now.getMonth(), now.getDate(), sunriseHour, 30, 0); 
    // સૂર્યાસ્ત: 18:00:00 (વર્તમાન તારીખે)
    let sunset = new Date(now.getFullYear(), now.getMonth(), now.getDate(), sunsetHour, 0, 0);
    
    // જો સૂર્યોદય સૂર્યાસ્ત કરતા મોડો હોય (મધ્યરાત્રિ પછી), તો તે આવતીકાલનો છે.
    if (sunrise > sunset) {
        sunset.setDate(sunset.getDate() + 1);
    }

    return { sunrise, sunset };
}

// ચોઘડિયાની ગણતરી કરતું ફંક્શન
function calculateChoghadiya(now) {
    const dayOfWeek = now.getDay(); // 0 (રવિવાર) થી 6 (શનિવાર)
    const { sunrise, sunset } = getSunriseSunset(now);

    const isDayTime = now >= sunrise && now < sunset;
    const choghadiyaSequence = isDayTime ? CHOGHADIYA_DATA[dayOfWeek].day : CHOGHADIYA_DATA[dayOfWeek].night;
    
    // દિવસ કે રાતનો કુલ સમયગાળો
    const totalDuration = isDayTime ? sunset.getTime() - sunrise.getTime() : (sunrise.getTime() + 24 * 60 * 60 * 1000) - sunset.getTime();
    
    // એક ચોઘડિયાનો સમય (કુલ સમયગાળો / 8)
    const choghadiyaDuration = totalDuration / 8; 

    let currentChoghadiyaName = "ગણતરી ચાલુ છે";
    let choghadiyaStart = isDayTime ? sunrise : sunset;

    for (let i = 0; i < 8; i++) {
        const choghadiyaEnd = new Date(choghadiyaStart.getTime() + choghadiyaDuration);
        
        if (now >= choghadiyaStart && now < choghadiyaEnd) {
            currentChoghadiyaName = choghadiyaSequence[i];
            
            // સમયગાળો (HH:MM)
            const startH = String(choghadiyaStart.getHours()).padStart(2, '0');
            const startM = String(choghadiyaStart.getMinutes()).padStart(2, '0');
            const endH = String(choghadiyaEnd.getHours()).padStart(2, '0');
            const endM = String(choghadiyaEnd.getMinutes()).padStart(2, '0');

            const timeRange = `${replaceDigits(startH)}:${replaceDigits(startM)} થી ${replaceDigits(endH)}:${replaceDigits(endM)}`;
            
            return {
                name: currentChoghadiyaName,
                timeRange: timeRange
            };
        }
        choghadiyaStart = choghadiyaEnd;
    }
    
    return { name: currentChoghadiyaName, timeRange: "--:--" };
}


// =======================================================
// (4) મુખ્ય અપડેટ ફંક્શન
// =======================================================
function updateClock() {
    const now = new Date();
    
    // 1. સમય
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    
    hours = String(hours).padStart(2, '0');
    minutes = String(minutes).padStart(2, '0');
    seconds = String(seconds).padStart(2, '0');
    
    const gujaratiTimeString = replaceDigits(`${hours}:${minutes}:${seconds}`);
    document.getElementById('time').textContent = gujaratiTimeString;

    // 2. તારીખ અને વાર
    const date = now.getDate();
    const month = now.getMonth() + 1; 
    const year = now.getFullYear();
    const dayIndex = now.getDay();

    const gujaratiDateString = replaceDigits(`${date}/${month}/${year}`);
    const dayString = GUJARATI_DAYS[dayIndex];
    document.getElementById('date').textContent = `${gujaratiDateString}, ${dayString}`;

    // 3. પંચાંગ વિગતો
    const tithi = calculateTithi(now);
    const monthName = calculateGujaratiMonth(now);
    const festival = getFestival(now);
    const choghadiya = calculateChoghadiya(now); // ચોઘડિયાની ગણતરી

    // HTML માં અપડેટ
    document.getElementById('gujarati-month').textContent = `ગુજરાતી મહિનો: ${monthName}`;
    document.getElementById('gujarati-tithi').textContent = `તિથિ: ${tithi}`;
    document.getElementById('choghadiya-name').textContent = `ચોઘડિયું: ${choghadiya.name}`;
    document.getElementById('choghadiya-time').textContent = `સમયગાળો: ${choghadiya.timeRange}`;
    document.getElementById('festival').textContent = `તહેવાર/પ્રસંગ: ${festival}`;
    
    // સૂત્ર અપડેટ કરો (જો જરૂર હોય તો)
    document.getElementById('slogan').textContent = '"Live in the present"'; 
}

// દર એક સેકન્ડે અપડેટ કરો
setInterval(updateClock, 1000);

// પેજ લોડ થતાં જ શરૂ કરો
updateClock();
