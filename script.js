// ફાઇલ: script.js (સંપૂર્ણ નવો કોડ - તમામ લોજિક અને ડેટા સાથે)

// =======================================================
// (1) ગુજરાતી અંક અને નામ
// =======================================================
const GUJARATI_DIGITS = ['૦', '૧', '૨', '૩', '૪', '૫', '૬', '૭', '૮', '૯'];
const GUJARATI_DAYS = ['રવિવાર', 'સોમવાર', 'મંગળવાર', 'બુધવાર', 'ગુરુવાર', 'શુક્રવાર', 'શનિવાર'];
const GUJARATI_MONTHS = ['કાર્તિક', 'માગશર', 'પોષ', 'મહા', 'ફાગણ', 'ચૈત્ર', 'વૈશાખ', 'અધિક જેઠ', 'નિજ જેઠ', 'અષાઢ', 'શ્રાવણ', 'ભાદરવો', 'આસો']; // 13 મહિના (અધિક જેઠ ઉમેરાયો છે)
// મહિનાનો ક્રમ: કાર્તિક (0) થી આસો (12)

function replaceDigits(inputString) {
    return inputString.replace(/[0-9]/g, (digit) => GUJARATI_DIGITS[parseInt(digit)]);
}

// =======================================================
// (2) ચોઘડિયા માટેનો ડેટા (અગાઉ મુજબ જ)
// =======================================================
// =======================================================
// (2) ચોઘડિયા માટેનો ડેટા (અગાઉ મુજબ જ) - સુધારેલો કોડ
// =======================================================
const choghadiya_data = {
    0: { દિવસ: ['ઉદવેગ', 'ચલ', 'લાભ', 'અમૃત', 'કાલ', 'શુભ', 'રોગ', 'ઉદવેગ'], રાત્રિ: ['શુભ', 'અમૃત', 'ચલ', 'રોગ', 'કાલ', 'લાભ', 'ઉદવેગ', 'શુભ'] }, // <- અહીં કોમા ઉમેર્યો
    1: { દિવસ: ['અમૃત', 'કાલ', 'શુભ', 'રોગ', 'ઉદવેગ', 'ચલ', 'લાભ', 'અમૃત'], રાત્રિ: ['ચલ', 'રોગ', 'કાલ', 'લાભ', 'ઉદવેગ', 'શુભ', 'અમૃત', 'ચલ'] }, // <- અહીં કોમા ઉમેર્યો અને ડેટા સુધાર્યો
    2: { દિવસ: ['રોગ', 'ઉદવેગ', 'ચલ', 'લાભ', 'અમૃત', 'કાલ', 'શુભ', 'રોગ'], રાત્રિ: ['કાલ', 'લાભ', 'ઉદવેગ', 'શુભ', 'અમૃત', 'ચલ', 'રોગ', 'કાલ'] }, // <- અહીં કોમા ઉમેર્યો
    3: { દિવસ: ['લાભ', 'અમૃત', 'કાલ', 'શુભ', 'રોગ', 'ઉદવેગ', 'ચલ', 'લાભ'], રાત્રિ: ['ઉદવેગ', 'શુભ', 'અમૃત', 'ચલ', 'રોગ', 'કાલ', 'લાભ', 'ઉદવેગ'] }, // <- અહીં કોમા ઉમેર્યો અને ડેટા સુધાર્યો
    4: { દિવસ: ['શુભ', 'રોગ', 'ઉદવેગ', 'ચલ', 'લાભ', 'અમૃત', 'કાલ', 'શુભ'], રાત્રિ: ['અમૃત', 'ચલ', 'રોગ', 'કાલ', 'લાભ', 'ઉદવેગ', 'શુભ', 'અમૃત'] }, // <- અહીં કોમા ઉમેર્યો
    5: { દિવસ: ['ચલ', 'લાભ', 'અમૃત', 'કાલ', 'શુભ', 'રોગ', 'ઉદવેગ', 'ચલ'], રાત્રિ: ['રોગ', 'કાલ', 'લાભ', 'ઉદ્વેગ', 'શુભ', 'અમૃત', 'ચલ', 'રોગ'] }, // <- અહીં કોમા ઉમેર્યો અને ડેટા સુધાર્યો
    6: { દિવસ: ['કાલ', 'શુભ', 'રોગ', 'ઉદવેગ', 'ચલ', 'લાભ', 'અમૃત', 'કાલ'], રાત્રિ: ['લાભ', 'ઉદવેગ', 'શુભ', 'અમૃત', 'ચલ', 'રોગ', 'કાલ', 'લાભ'] }
};
// =======================================================

// (3) પંચાંગ ડેટા ટેબલ (તમે આપેલી તારીખો, તિથિ, તહેવાર, સૂર્યોદય, સૂર્યાસ્ત)
// =======================================================
const PANCHANG_CALENDAR = {
    '22/10/2025': { tithi: 'સુદ - ૧', festival: 'બેસતુ વર્ષ', sunrise: '06:47:00', sunset: '18:05:00' },
    '23/10/2025': { tithi: 'સુદ - ર', festival: '--', sunrise: '06:47:00', sunset: '18:05:00' },
    '24/10/2025': { tithi: 'સુદ - ૩', festival: '--', sunrise: '06:47:00', sunset: '18:05:00' },
    '25/10/2025': { tithi: 'સુદ - ૪', festival: '--', sunrise: '06:47:00', sunset: '18:05:00' },
    '26/10/2025': { tithi: 'સુદ - પ', festival: '--', sunrise: '06:47:00', sunset: '18:05:00' },
    '27/10/2025': { tithi: 'સુદ - ૬', festival: '--', sunrise: '06:47:00', sunset: '18:05:00' },
    '28/10/2025': { tithi: 'સુદ - ૬', festival: '--', sunrise: '06:47:00', sunset: '18:05:00' },
    '29/10/2025': { tithi: 'સુદ - ૭', festival: '--', sunrise: '06:47:00', sunset: '18:05:00' },
    '30/10/2025': { tithi: 'સુદ - ૮', festival: '--', sunrise: '06:47:00', sunset: '18:05:00' },
    '31/10/2025': { tithi: 'સુદ - ૯', festival: '--', sunrise: '06:47:00', sunset: '18:05:00' },
    '01/11/2025': { tithi: 'સુદ - ૧૦', festival: 'અગિયારસ', sunrise: '06:47:00', sunset: '18:05:00' },
    '02/11/2025': { tithi: 'સુદ - ૧૧', festival: '--', sunrise: '06:47:00', sunset: '18:04:00' },
    '03/11/2025': { tithi: 'સુદ - ૧૩', festival: '--', sunrise: '06:48:00', sunset: '18:04:00' },
    '04/11/2025': { tithi: 'સુદ - ૧૪', festival: '--', sunrise: '06:48:00', sunset: '18:03:00' },
    '05/11/2025': { tithi: 'સુદ - ૧૫', festival: 'પૂનમ', sunrise: '06:49:00', sunset: '18:03:00' },
    '06/11/2025': { tithi: 'વદ - ૧', festival: '--', sunrise: '06:49:00', sunset: '18:02:00' },
    '07/11/2025': { tithi: 'વદ - ર', festival: '--', sunrise: '06:50:00', sunset: '18:02:00' },
    '08/11/2025': { tithi: 'વદ - ૩', festival: '--', sunrise: '06:51:00', sunset: '18:01:00' },
    '09/11/2025': { tithi: 'વદ - પ', festival: '--', sunrise: '06:51:00', sunset: '18:01:00' },
    '10/11/2025': { tithi: 'વદ - ૬', festival: '--', sunrise: '06:52:00', sunset: '18:00:00' },
    '11/11/2025': { tithi: 'વદ - ૭', festival: '--', sunrise: '06:52:00', sunset: '18:00:00' },
    '12/11/2025': { tithi: 'વદ - ૮', festival: '--', sunrise: '06:53:00', sunset: '18:00:00' },
    '13/11/2025': { tithi: 'વદ - ૯', festival: '--', sunrise: '06:54:00', sunset: '17:59:00' },
    '14/11/2025': { tithi: 'વદ - ૧૦', festival: '--', sunrise: '06:54:00', sunset: '17:59:00' },
    '15/11/2025': { tithi: 'વદ - ૧૧', festival: 'અગિયારસ', sunrise: '06:55:00', sunset: '17:59:00' },
    '16/11/2025': { tithi: 'વદ - ૧૨', festival: '--', sunrise: '06:56:00', sunset: '17:58:00' },
    '17/11/2025': { tithi: 'વદ - ૧૩', festival: '--', sunrise: '06:56:00', sunset: '17:58:00' },
    '18/11/2025': { tithi: 'વદ - ૧૩', festival: '--', sunrise: '06:57:00', sunset: '17:58:00' },
    '19/11/2025': { tithi: 'વદ - ૧૪', festival: '--', sunrise: '06:58:00', sunset: '17:58:00' },
    '20/11/2025': { tithi: 'વદ - ૩૦', festival: 'અમાસ', sunrise: '06:58:00', sunset: '17:57:00' }, // **મહિનો અહીં પૂરો થાય છે (કાર્તિક)**
    '21/11/2025': { tithi: 'સુદ - ૧', festival: '--', sunrise: '06:59:00', sunset: '17:57:00' },
    '22/11/2025': { tithi: 'સુદ - ર', festival: '--', sunrise: '07:00:00', sunset: '17:57:00' },
    '23/11/2025': { tithi: 'સુદ - ૩', festival: '--', sunrise: '07:00:00', sunset: '17:57:00' },
    '24/11/2025': { tithi: 'સુદ - ૪', festival: '--', sunrise: '07:01:00', sunset: '17:57:00' },
    '25/11/2025': { tithi: 'સુદ - પ', festival: '--', sunrise: '07:02:00', sunset: '17:57:00' },
    '26/11/2025': { tithi: 'સુદ - ૬', festival: '--', sunrise: '07:02:00', sunset: '17:57:00' },
    '27/11/2025': { tithi: 'સુદ - ૭', festival: '--', sunrise: '07:03:00', sunset: '17:57:00' },
    '28/11/2025': { tithi: 'સુદ - ૮', festival: '--', sunrise: '07:04:00', sunset: '17:57:00' },
    '29/11/2025': { tithi: 'સુદ - ૯', festival: '--', sunrise: '07:04:00', sunset: '17:57:00' },
    '30/11/2025': { tithi: 'સુદ - ૧૦', festival: '--', sunrise: '07:05:00', sunset: '17:57:00' },
    '01/12/2025': { tithi: 'સુદ - ૧૧', festival: 'અગિયારસ', sunrise: '07:06:00', sunset: '17:57:00' },
    '02/12/2025': { tithi: 'સુદ - ૧૨', festival: '--', sunrise: '07:06:00', sunset: '17:57:00' },
    '03/12/2025': { tithi: 'સુદ - ૧૩', festival: '--', sunrise: '07:07:00', sunset: '17:57:00' },
    '04/12/2025': { tithi: 'સુદ - ૧૪', festival: 'પૂનમ', sunrise: '07:08:00', sunset: '17:57:00' },
    '05/12/2025': { tithi: 'વદ - ૧', festival: '--', sunrise: '07:08:00', sunset: '17:57:00' },
    '06/12/2025': { tithi: 'વદ - ૨', festival: '--', sunrise: '07:09:00', sunset: '17:58:00' },
    '07/12/2025': { tithi: 'વદ - ૩', festival: '--', sunrise: '07:10:00', sunset: '17:58:00' },
    '08/12/2025': { tithi: 'વદ - ૪', festival: '--', sunrise: '07:10:00', sunset: '17:58:00' },
    '09/12/2025': { tithi: 'વદ - ૫', festival: '--', sunrise: '07:11:00', sunset: '17:58:00' },
    '10/12/2025': { tithi: 'વદ - ૬', festival: '--', sunrise: '07:11:00', sunset: '17:59:00' },
    '11/12/2025': { tithi: 'વદ - ૭', festival: '--', sunrise: '07:12:00', sunset: '17:59:00' },
    '12/12/2025': { tithi: 'વદ - ૮', festival: '--', sunrise: '07:13:00', sunset: '17:59:00' },
    '13/12/2025': { tithi: 'વદ - ૯', festival: '--', sunrise: '07:13:00', sunset: '18:00:00' },
    '14/12/2025': { tithi: 'વદ - ૧૦', festival: '--', sunrise: '07:14:00', sunset: '18:00:00' },
    '15/12/2025': { tithi: 'વદ - ૧૧', festival: 'અગિયારસ', sunrise: '07:14:00', sunset: '18:00:00' },
    '16/12/2025': { tithi: 'વદ - ૧૨', festival: '--', sunrise: '07:15:00', sunset: '18:01:00' },
    '17/12/2025': { tithi: 'વદ - ૧૩', festival: '--', sunrise: '07:16:00', sunset: '18:01:00' },
    '18/12/2025': { tithi: 'વદ - ૧૪', festival: '--', sunrise: '07:16:00', sunset: '18:02:00' },
    '19/12/2025': { tithi: 'વદ - ૩૦', festival: 'અમાસ', sunrise: '07:17:00', sunset: '18:02:00' }, // **મહિનો અહીં પૂરો થાય છે (માગશર)**
    '20/12/2025': { tithi: 'સુદ - ૧', festival: '--', sunrise: '07:17:00', sunset: '18:02:00' },
    '21/12/2025': { tithi: 'સુદ - ૧', festival: '--', sunrise: '07:18:00', sunset: '18:03:00' },
    '22/12/2025': { tithi: 'સુદ - ૨', festival: '--', sunrise: '07:18:00', sunset: '18:03:00' },
    '23/12/2025': { tithi: 'સુદ - ૩', festival: '--', sunrise: '07:19:00', sunset: '18:04:00' },
    '24/12/2025': { tithi: 'સુદ - ૪', festival: '--', sunrise: '07:19:00', sunset: '18:04:00' },
    '25/12/2025': { tithi: 'સુદ - ૫', festival: '--', sunrise: '07:20:00', sunset: '18:05:00' },
    '26/12/2025': { tithi: 'સુદ - ૬', festival: '--', sunrise: '07:20:00', sunset: '18:06:00' },
    '27/12/2025': { tithi: 'સુદ - ૭', festival: '--', sunrise: '07:20:00', sunset: '18:06:00' },
    '28/12/2025': { tithi: 'સુદ - ૮', festival: '--', sunrise: '07:21:00', sunset: '18:07:00' },
    '29/12/2025': { tithi: 'સુદ - ૯', festival: '--', sunrise: '07:21:00', sunset: '18:07:00' },
    '30/12/2025': { tithi: 'સુદ - ૧૦', festival: 'અગિયારસ', sunrise: '07:22:00', sunset: '18:08:00' },
    '31/12/2025': { tithi: 'સુદ - ૧૨', festival: '--', sunrise: '07:22:00', sunset: '18:09:00' },
    '01/01/2026': { tithi: 'સુદ - ૧૩', festival: '--', sunrise: '07:22:00', sunset: '18:09:00' },
    '02/01/2026': { tithi: 'સુદ - ૧૪', festival: '--', sunrise: '07:23:00', sunset: '18:10:00' },
    '03/01/2026': { tithi: 'સુદ - ૧૫', festival: 'પૂનમ', sunrise: '07:23:00', sunset: '18:11:00' },
    '04/01/2026': { tithi: 'વદ - ૧', festival: '--', sunrise: '07:23:00', sunset: '18:11:00' },
    '05/01/2026': { tithi: 'વદ - ર', festival: '--', sunrise: '07:23:00', sunset: '18:12:00' },
    '06/01/2026': { tithi: 'વદ - ૩', festival: '--', sunrise: '07:24:00', sunset: '18:13:00' },
    '07/01/2026': { tithi: 'વદ - પ', festival: '--', sunrise: '07:24:00', sunset: '18:13:00' },
    '08/01/2026': { tithi: 'વદ - ૬', festival: '--', sunrise: '07:24:00', sunset: '18:14:00' },
    '09/01/2026': { tithi: 'વદ - ૭', festival: '--', sunrise: '07:24:00', sunset: '18:15:00' },
    '10/01/2026': { tithi: 'વદ - ૭', festival: '--', sunrise: '07:24:00', sunset: '18:15:00' },
    '11/01/2026': { tithi: 'વદ - ૮', festival: '--', sunrise: '07:24:00', sunset: '18:16:00' },
    '12/01/2026': { tithi: 'વદ - ૯', festival: '--', sunrise: '07:24:00', sunset: '18:17:00' },
    '13/01/2026': { tithi: 'વદ - ૧૦', festival: '--', sunrise: '07:25:00', sunset: '18:17:00' },
    '14/01/2026': { tithi: 'વદ - ૧૧', festival: 'અગિયારસ મકરસંક્રાતિ', sunrise: '07:25:00', sunset: '18:18:00' },
    '15/01/2026': { tithi: 'વદ - ૧૨', festival: '--', sunrise: '07:25:00', sunset: '18:19:00' },
    '16/01/2026': { tithi: 'વદ - ૧૩', festival: '--', sunrise: '07:25:00', sunset: '18:19:00' },
    '17/01/2026': { tithi: 'વદ - ૧૪', festival: '--', sunrise: '07:25:00', sunset: '18:20:00' },
    '18/01/2026': { tithi: 'વદ - ૩૦', festival: 'અમાસ', sunrise: '07:24:00', sunset: '18:21:00' }, // **મહિનો અહીં પૂરો થાય છે (પોષ)**
    '19/01/2026': { tithi: 'સુદ - ૧', festival: '--', sunrise: '07:24:00', sunset: '18:22:00' },
    '20/01/2026': { tithi: 'સુદ - ર', festival: '--', sunrise: '07:24:00', sunset: '18:22:00' },
    '21/01/2026': { tithi: 'સુદ - ૩', festival: '--', sunrise: '07:24:00', sunset: '18:23:00' },
    '22/01/2026': { tithi: 'સુદ - ૪', festival: '--', sunrise: '07:24:00', sunset: '18:24:00' },
    '23/01/2026': { tithi: 'સુદ - ૫', festival: '--', sunrise: '07:24:00', sunset: '18:24:00' },
    '24/01/2026': { tithi: 'સુદ - ૬', festival: '--', sunrise: '07:24:00', sunset: '18:25:00' },
    '25/01/2026': { tithi: 'સુદ - ૭', festival: '--', sunrise: '07:23:00', sunset: '18:26:00' },
    '26/01/2026': { tithi: 'સુદ - ૮', festival: '--', sunrise: '07:23:00', sunset: '18:26:00' },
    '27/01/2026': { tithi: 'સુદ - ૯', festival: '--', sunrise: '07:23:00', sunset: '18:27:00' },
    '28/01/2026': { tithi: 'સુદ - ૧૦', festival: '--', sunrise: '07:23:00', sunset: '18:28:00' },
    '29/01/2026': { tithi: 'સુદ - ૧૧', festival: 'અગિયારસ', sunrise: '07:22:00', sunset: '18:28:00' },
    '30/01/2026': { tithi: 'સુદ - ૧૨', festival: '--', sunrise: '07:22:00', sunset: '18:29:00' },
    '31/01/2026': { tithi: 'સુદ - ૧૩', festival: '--', sunrise: '07:22:00', sunset: '18:30:00' },
    '01/02/2026': { tithi: 'સુદ - ૧૫', festival: 'પૂનમ', sunrise: '07:21:00', sunset: '18:30:00' },
    '02/02/2026': { tithi: 'વદ - ૧', festival: '--', sunrise: '07:21:00', sunset: '18:31:00' },
    '03/02/2026': { tithi: 'વદ - ર', festival: '--', sunrise: '07:21:00', sunset: '18:32:00' },
    '04/02/2026': { tithi: 'વદ - ૩', festival: '--', sunrise: '07:20:00', sunset: '18:32:00' },
    '05/02/2026': { tithi: 'વદ - ૪', festival: '--', sunrise: '07:20:00', sunset: '18:33:00' },
    '06/02/2026': { tithi: 'વદ - ૫', festival: '--', sunrise: '07:19:00', sunset: '18:34:00' },
    '07/02/2026': { tithi: 'વદ - ૬', festival: '--', sunrise: '07:19:00', sunset: '18:34:00' },
    '08/02/2026': { tithi: 'વદ - ૭', festival: '--', sunrise: '07:18:00', sunset: '18:35:00' },
    '09/02/2026': { tithi: 'વદ - ૮', festival: '--', sunrise: '07:18:00', sunset: '18:35:00' },
    '10/02/2026': { tithi: 'વદ - ૮', festival: '--', sunrise: '07:17:00', sunset: '18:36:00' },
    '11/02/2026': { tithi: 'વદ - ૯', festival: '--', sunrise: '07:17:00', sunset: '18:37:00' },
    '12/02/2026': { tithi: 'વદ - ૧૦', festival: '--', sunrise: '07:16:00', sunset: '18:37:00' },
    '13/02/2026': { tithi: 'વદ - ૧૧', festival: 'અગિયારસ', sunrise: '07:15:00', sunset: '18:38:00' },
    '14/02/2026': { tithi: 'વદ - ૧૨', festival: '--', sunrise: '07:15:00', sunset: '18:38:00' },
    '15/02/2026': { tithi: 'વદ - ૧૩', festival: '--', sunrise: '07:14:00', sunset: '18:39:00' },
    '16/02/2026': { tithi: 'વદ - ૧૪', festival: '--', sunrise: '07:14:00', sunset: '18:39:00' },
    '17/02/2026': { tithi: 'વદ - ૩૦', festival: '--', sunrise: '07:13:00', sunset: '18:40:00' }, // **મહિનો અહીં પૂરો થાય છે (મહા) - (અહીં તહેવાર/પ્રસંગ કોલમમાં અમાસ શબ્દ નથી, પણ વદ-૩૦ એટલે અમાસ થાય છે, એટલે લોજિક મુજબ મહિનો બદલાશે)**
    '18/02/2026': { tithi: 'સુદ - ૧', festival: '--', sunrise: '07:12:00', sunset: '18:40:00' },
    '19/02/2026': { tithi: 'સુદ - ર', festival: '--', sunrise: '07:11:00', sunset: '18:41:00' },
    '20/02/2026': { tithi: 'સુદ - ૩', festival: '--', sunrise: '07:11:00', sunset: '18:41:00' },
    '21/02/2026': { tithi: 'સુદ - ૪', festival: '--', sunrise: '07:10:00', sunset: '18:42:00' },
    '22/02/2026': { tithi: 'સુદ - ૫', festival: '--', sunrise: '07:09:00', sunset: '18:42:00' },
    '23/02/2026': { tithi: 'સુદ - ૬', festival: '--', sunrise: '07:09:00', sunset: '18:43:00' },
    '24/02/2026': { tithi: 'સુદ - ૮', festival: '--', sunrise: '07:08:00', sunset: '18:43:00' },
    '25/02/2026': { tithi: 'સુદ - ૯', festival: '--', sunrise: '07:07:00', sunset: '18:44:00' },
    '26/02/2026': { tithi: 'સુદ - ૧૦', festival: '--', sunrise: '07:06:00', sunset: '18:44:00' },
    '27/02/2026': { tithi: 'સુદ - ૧૧', festival: 'અગિયારસ', sunrise: '07:05:00', sunset: '18:45:00' },
    '28/02/2026': { tithi: 'સુદ - ૧૨', festival: '--', sunrise: '07:05:00', sunset: '18:45:00' },
    '01/03/2026': { tithi: 'સુદ - ૧૩', festival: '--', sunrise: '07:04:00', sunset: '18:46:00' },
    '02/03/2026': { tithi: 'સુદ - ૧૪', festival: 'પૂનમ હોળી', sunrise: '07:03:00', sunset: '18:46:00' },
    '03/03/2026': { tithi: 'સુદ - ૧૫', festival: 'ધૂળેટી', sunrise: '07:02:00', sunset: '18:47:00' },
    '04/03/2026': { tithi: 'વદ - ૧', festival: '--', sunrise: '07:01:00', sunset: '18:47:00' },
    '05/03/2026': { tithi: 'વદ - ૨', festival: '--', sunrise: '07:00:00', sunset: '18:47:00' },
    '06/03/2026': { tithi: 'વદ - ૩', festival: '--', sunrise: '06:59:00', sunset: '18:48:00' },
    '07/03/2026': { tithi: 'વદ - ૪', festival: '--', sunrise: '06:59:00', sunset: '18:48:00' },
    '08/03/2026': { tithi: 'વદ - ૫', festival: '--', sunrise: '06:58:00', sunset: '18:49:00' },
    '09/03/2026': { tithi: 'વદ - ૬', festival: '--', sunrise: '06:57:00', sunset: '18:49:00' },
    '10/03/2026': { tithi: 'વદ - ૭', festival: '--', sunrise: '06:56:00', sunset: '18:49:00' },
    '11/03/2026': { tithi: 'વદ - ૮', festival: '--', sunrise: '06:55:00', sunset: '18:50:00' },
    '12/03/2026': { tithi: 'વદ - ૯', festival: '--', sunrise: '06:54:00', sunset: '18:50:00' },
    '13/03/2026': { tithi: 'વદ - ૧૦', festival: '--', sunrise: '06:53:00', sunset: '18:51:00' },
    '14/03/2026': { tithi: 'વદ - ૧૦', festival: '--', sunrise: '06:52:00', sunset: '18:51:00' },
    '15/03/2026': { tithi: 'વદ - ૧૧', festival: 'અગિયારસ', sunrise: '06:51:00', sunset: '18:51:00' },
    '16/03/2026': { tithi: 'વદ - ૧૨', festival: '--', sunrise: '06:50:00', sunset: '18:52:00' },
    '17/03/2026': { tithi: 'વદ - ૧૩', festival: '--', sunrise: '06:49:00', sunset: '18:52:00' },
    '18/03/2026': { tithi: 'વદ - ૧૪', festival: '--', sunrise: '06:48:00', sunset: '18:53:00' },
    '19/03/2026': { tithi: 'વદ - ૩૦', festival: 'અમાસ', sunrise: '06:48:00', sunset: '18:53:00' }, // **મહિનો અહીં પૂરો થાય છે (ફાગણ)**
    '20/03/2026': { tithi: 'સુદ - ૨', festival: '--', sunrise: '06:47:00', sunset: '18:53:00' },
    '21/03/2026': { tithi: 'સુદ - ૩', festival: '--', sunrise: '06:46:00', sunset: '18:54:00' },
    '22/03/2026': { tithi: 'સુદ - ૪', festival: '--', sunrise: '06:45:00', sunset: '18:54:00' },
    '23/03/2026': { tithi: 'સુદ - ૫', festival: '--', sunrise: '06:44:00', sunset: '18:54:00' },
    '24/03/2026': { tithi: 'સુદ - ૬', festival: '--', sunrise: '06:43:00', sunset: '18:55:00' },
    '25/03/2026': { tithi: 'સુદ - ૭', festival: '--', sunrise: '06:42:00', sunset: '18:55:00' },
    '26/03/2026': { tithi: 'સુદ - ૮', festival: 'રામનવમી', sunrise: '06:41:00', sunset: '18:55:00' },
    '27/03/2026': { tithi: 'સુદ - ૯', festival: '--', sunrise: '06:40:00', sunset: '18:56:00' },
    '28/03/2026': { tithi: 'સુદ - ૧૦', festival: '--', sunrise: '06:39:00', sunset: '18:56:00' },
    '29/03/2026': { tithi: 'સુદ - ૧૧', festival: 'અગિયારસ', sunrise: '06:38:00', sunset: '18:56:00' },
    '30/03/2026': { tithi: 'સુદ - ૧૨', festival: '--', sunrise: '06:37:00', sunset: '18:57:00' },
    '31/03/2026': { tithi: 'સુદ - ૧૩', festival: '--', sunrise: '06:36:00', sunset: '18:57:00' },
    '01/04/2026': { tithi: 'સુદ - ૧૪', festival: 'દિકરી માધવીનો જન્મ દિવસ', sunrise: '06:35:00', sunset: '18:57:00' },
    '02/04/2026': { tithi: 'સુદ - ૧૫', festival: 'પૂનમ હનુમાન જયંતિ', sunrise: '06:34:00', sunset: '18:58:00' },
    '03/04/2026': { tithi: 'વદ - ૧', festival: '--', sunrise: '06:33:00', sunset: '18:58:00' },
    '04/04/2026': { tithi: 'વદ - ર', festival: '--', sunrise: '06:32:00', sunset: '18:59:00' },
    '05/04/2026': { tithi: 'વદ - ૩', festival: '--', sunrise: '06:31:00', sunset: '18:59:00' },
    '06/04/2026': { tithi: 'વદ - ૪', festival: '--', sunrise: '06:30:00', sunset: '18:59:00' },
    '07/04/2026': { tithi: 'વદ - ૫', festival: '--', sunrise: '06:30:00', sunset: '19:00:00' },
    '08/04/2026': { tithi: 'વદ - ૬', festival: '--', sunrise: '06:29:00', sunset: '19:00:00' },
    '09/04/2026': { tithi: 'વદ - ૭', festival: '--', sunrise: '06:28:00', sunset: '19:00:00' },
    '10/04/2026': { tithi: 'વદ - ૮', festival: '--', sunrise: '06:27:00', sunset: '19:01:00' },
    '11/04/2026': { tithi: 'વદ - ૯', festival: '--', sunrise: '06:26:00', sunset: '19:01:00' },
    '12/04/2026': { tithi: 'વદ - ૧૦', festival: '--', sunrise: '06:25:00', sunset: '19:01:00' },
    '13/04/2026': { tithi: 'વદ - ૧૧', festival: 'અગિયારસ', sunrise: '06:24:00', sunset: '19:02:00' },
    '14/04/2026': { tithi: 'વદ - ૧૨', festival: '--', sunrise: '06:23:00', sunset: '19:02:00' },
    '15/04/2026': { tithi: 'વદ - ૧૩', festival: '--', sunrise: '06:22:00', sunset: '19:03:00' },
    '16/04/2026': { tithi: 'વદ - ૧૪', festival: '--', sunrise: '06:22:00', sunset: '19:03:00' },
    '17/04/2026': { tithi: 'વદ - ૩૦', festival: 'અમાસ', sunrise: '06:21:00', sunset: '19:03:00' }, // **મહિનો અહીં પૂરો થાય છે (ચૈત્ર)**
    '18/04/2026': { tithi: 'સુદ - ૧', festival: '--', sunrise: '06:20:00', sunset: '19:04:00' },
    '19/04/2026': { tithi: 'સુદ - ર', festival: '--', sunrise: '06:19:00', sunset: '19:04:00' },
    '20/04/2026': { tithi: 'સુદ - ૩', festival: '--', sunrise: '06:18:00', sunset: '19:04:00' },
    '21/04/2026': { tithi: 'સુદ - ૫', festival: '--', sunrise: '06:17:00', sunset: '19:05:00' },
    '22/04/2026': { tithi: 'સુદ - ૬', festival: '--', sunrise: '06:17:00', sunset: '19:05:00' },
    '23/04/2026': { tithi: 'સુદ - ૭', festival: '--', sunrise: '06:16:00', sunset: '19:06:00' },
    '24/04/2026': { tithi: 'સુદ - ૮', festival: '--', sunrise: '06:15:00', sunset: '19:06:00' },
    '25/04/2026': { tithi: 'સુદ - ૯', festival: '--', sunrise: '06:14:00', sunset: '19:06:00' },
    '26/04/2026': { tithi: 'સુદ - ૧૦', festival: '--', sunrise: '06:14:00', sunset: '19:07:00' },
    '27/04/2026': { tithi: 'સુદ - ૧૧', festival: 'અગિયારસ', sunrise: '06:13:00', sunset: '19:07:00' },
    '28/04/2026': { tithi: 'સુદ - ૧૨', festival: '--', sunrise: '06:12:00', sunset: '19:08:00' },
    '29/04/2026': { tithi: 'સુદ - ૧૩', festival: '--', sunrise: '06:11:00', sunset: '19:08:00' },
    '30/04/2026': { tithi: 'સુદ - ૧૪', festival: '--', sunrise: '06:11:00', sunset: '19:09:00' },
    '01/05/2026': { tithi: 'સુદ - ૧૫', festival: 'પૂનમ', sunrise: '06:10:00', sunset: '19:09:00' },
    '02/05/2026': { tithi: 'વદ - ૧', festival: '--', sunrise: '06:09:00', sunset: '19:09:00' },
    '03/05/2026': { tithi: 'વદ - ૨', festival: '--', sunrise: '06:09:00', sunset: '19:10:00' },
    '04/05/2026': { tithi: 'વદ - ૩', festival: '--', sunrise: '06:08:00', sunset: '19:10:00' },
    '05/05/2026': { tithi: 'વદ - ૪', festival: '--', sunrise: '06:07:00', sunset: '19:11:00' },
    '06/05/2026': { tithi: 'વદ - ૪', festival: '--', sunrise: '06:07:00', sunset: '19:11:00' },
    '07/05/2026': { tithi: 'વદ - ૫', festival: '--', sunrise: '06:06:00', sunset: '19:12:00' },
    '08/05/2026': { tithi: 'વદ - ૬', festival: '--', sunrise: '06:06:00', sunset: '19:12:00' },
    '09/05/2026': { tithi: 'વદ - ૭', festival: '--', sunrise: '06:05:00', sunset: '19:13:00' },
    '10/05/2026': { tithi: 'વદ - ૮', festival: '--', sunrise: '06:05:00', sunset: '19:13:00' },
    '11/05/2026': { tithi: 'વદ - ૯', festival: '--', sunrise: '06:04:00', sunset: '19:13:00' },
    '12/05/2026': { tithi: 'વદ - ૧૦', festival: '--', sunrise: '06:04:00', sunset: '19:14:00' },
    '13/05/2026': { tithi: 'વદ - ૧૧', festival: 'અગિયારસ', sunrise: '06:03:00', sunset: '19:14:00' },
    '14/05/2026': { tithi: 'વદ - ૧૨', festival: '--', sunrise: '06:03:00', sunset: '19:15:00' },
    '15/05/2026': { tithi: 'વદ - ૧૩', festival: '--', sunrise: '06:02:00', sunset: '19:15:00' },
    '16/05/2026': { tithi: 'વદ - ૩૦', festival: 'અમાસ', sunrise: '06:02:00', sunset: '19:16:00' }, // **મહિનો અહીં પૂરો થાય છે (વૈશાખ)**
    '17/05/2026': { tithi: 'સુદ - ૧', festival: '--', sunrise: '06:01:00', sunset: '19:16:00' },
    '18/05/2026': { tithi: 'સુદ - ૨', festival: '--', sunrise: '06:01:00', sunset: '19:17:00' },
    '19/05/2026': { tithi: 'સુદ - ૩', festival: '--', sunrise: '06:01:00', sunset: '19:17:00' },
    '20/05/2026': { tithi: 'સુદ - ૪', festival: '--', sunrise: '06:00:00', sunset: '19:18:00' },
    '21/05/2026': { tithi: 'સુદ - ૫', festival: '--', sunrise: '06:00:00', sunset: '19:18:00' },
    '22/05/2026': { tithi: 'સુદ - ૬', festival: '--', sunrise: '06:00:00', sunset: '19:18:00' },
    '23/05/2026': { tithi: 'સુદ - ૮', festival: '--', sunrise: '05:59:00', sunset: '19:19:00' },
    '24/05/2026': { tithi: 'સુદ - ૯', festival: '--', sunrise: '05:59:00', sunset: '19:19:00' },
    '25/05/2026': { tithi: 'સુદ - ૧૦', festival: '--', sunrise: '05:59:00', sunset: '19:20:00' },
    '26/05/2026': { tithi: 'સુદ - ૧૧', festival: '--', sunrise: '05:58:00', sunset: '19:20:00' },
    '27/05/2026': { tithi: 'સુદ - ૧૧', festival: 'અગિયારસ', sunrise: '05:58:00', sunset: '19:21:00' },
    '28/05/2026': { tithi: 'સુદ - ૧૨', festival: '--', sunrise: '05:58:00', sunset: '19:21:00' },
    '29/05/2026': { tithi: 'સુદ - ૧૩', festival: '--', sunrise: '05:58:00', sunset: '19:22:00' },
    '30/05/2026': { tithi: 'સુદ - ૧૪', festival: '--', sunrise: '05:58:00', sunset: '19:22:00' },
    '31/05/2026': { tithi: 'સુદ - ૧૫', festival: 'પૂનમ', sunrise: '05:58:00', sunset: '19:22:00' },
    '01/06/2026': { tithi: 'વદ - ૧', festival: '--', sunrise: '05:57:00', sunset: '19:23:00' },
    '02/06/2026': { tithi: 'વદ - ૨', festival: '--', sunrise: '05:57:00', sunset: '19:23:00' },
    '03/06/2026': { tithi: 'વદ - ૩', festival: '--', sunrise: '05:57:00', sunset: '19:24:00' },
    '04/06/2026': { tithi: 'વદ - ૪', festival: '--', sunrise: '05:57:00', sunset: '19:24:00' },
    '05/06/2026': { tithi: 'વદ - ૫', festival: 'પિતાજીનો જન્મ દિવસ', sunrise: '05:57:00', sunset: '19:25:00' },
    '06/06/2026': { tithi: 'વદ - ૬', festival: '--', sunrise: '05:57:00', sunset: '19:25:00' },
    '07/06/2026': { tithi: 'વદ - ૭', festival: '--', sunrise: '05:57:00', sunset: '19:25:00' },
    '08/06/2026': { tithi: 'વદ - ૮', festival: '--', sunrise: '05:57:00', sunset: '19:26:00' },
    '09/06/2026': { tithi: 'વદ - ૯', festival: '--', sunrise: '05:57:00', sunset: '19:26:00' },
    '10/06/2026': { tithi: 'વદ - ૧૦', festival: '--', sunrise: '05:57:00', sunset: '19:26:00' },
    '11/06/2026': { tithi: 'વદ - ૧૧', festival: 'અગિયારસ', sunrise: '05:57:00', sunset: '19:27:00' },
    '12/06/2026': { tithi: 'વદ - ૧૨', festival: '--', sunrise: '05:57:00', sunset: '19:27:00' },
    '13/06/2026': { tithi: 'વદ - ૧૩', festival: '--', sunrise: '05:57:00', sunset: '19:27:00' },
    '14/06/2026': { tithi: 'વદ - ૧૪', festival: '--', sunrise: '05:57:00', sunset: '19:28:00' },
    '15/06/2026': { tithi: 'વદ - ૩૦', festival: 'અમાસ', sunrise: '05:57:00', sunset: '19:28:00' }, // **મહિનો અહીં પૂરો થાય છે (અધિક જેઠ)**
    '16/06/2026': { tithi: 'સુદ - ૨', festival: '--', sunrise: '05:58:00', sunset: '19:28:00' },
    '17/06/2026': { tithi: 'સુદ - ૩', festival: '--', sunrise: '05:58:00', sunset: '19:29:00' },
    '18/06/2026': { tithi: 'સુદ - ૪', festival: '--', sunrise: '05:58:00', sunset: '19:29:00' },
    '19/06/2026': { tithi: 'સુદ - ૫', festival: '--', sunrise: '05:58:00', sunset: '19:29:00' },
    '20/06/2026': { tithi: 'સુદ - ૬', festival: '--', sunrise: '05:58:00', sunset: '19:29:00' },
    '21/06/2026': { tithi: 'સુદ - ૭', festival: '--', sunrise: '05:58:00', sunset: '19:30:00' },
    '22/06/2026': { tithi: 'સુદ - ૮', festival: '--', sunrise: '05:59:00', sunset: '19:30:00' },
    '23/06/2026': { tithi: 'સુદ - ૯', festival: '--', sunrise: '05:59:00', sunset: '19:30:00' },
    '24/06/2026': { tithi: 'સુદ - ૧૦', festival: '--', sunrise: '05:59:00', sunset: '19:30:00' },
    '25/06/2026': { tithi: 'સુદ - ૧૧', festival: 'અગિયારસ', sunrise: '05:59:00', sunset: '19:30:00' },
    '26/06/2026': { tithi: 'સુદ - ૧૨', festival: '--', sunrise: '06:00:00', sunset: '19:30:00' },
    '27/06/2026': { tithi: 'સુદ - ૧૩', festival: '--', sunrise: '06:00:00', sunset: '19:31:00' },
    '28/06/2026': { tithi: 'સુદ - ૧૪', festival: '--', sunrise: '06:00:00', sunset: '19:31:00' },
    '29/06/2026': { tithi: 'સુદ - ૧૫', festival: 'પૂનમ', sunrise: '06:01:00', sunset: '19:31:00' },
    '30/06/2026': { tithi: 'વદ - ૧', festival: '--', sunrise: '06:01:00', sunset: '19:31:00' },
    '01/07/2026': { tithi: 'વદ - ૧', festival: '--', sunrise: '06:01:00', sunset: '19:31:00' },
    '02/07/2026': { tithi: 'વદ - ૨', festival: '--', sunrise: '06:02:00', sunset: '19:31:00' },
    '03/07/2026': { tithi: 'વદ - ૩', festival: '--', sunrise: '06:02:00', sunset: '19:31:00' },
    '04/07/2026': { tithi: 'વદ - ૪', festival: '--', sunrise: '06:02:00', sunset: '19:31:00' },
    '05/07/2026': { tithi: 'વદ - ૫', festival: '--', sunrise: '06:03:00', sunset: '19:31:00' },
    '06/07/2026': { tithi: 'વદ - ૬', festival: '--', sunrise: '06:03:00', sunset: '19:31:00' },
    '07/07/2026': { tithi: 'વદ - ૭', festival: '--', sunrise: '06:03:00', sunset: '19:31:00' },
    '08/07/2026': { tithi: 'વદ - ૮', festival: '--', sunrise: '06:04:00', sunset: '19:31:00' },
    '09/07/2026': { tithi: 'વદ - ૯', festival: '--', sunrise: '06:04:00', sunset: '19:31:00' },
    '10/07/2026': { tithi: 'વદ - ૧૦', festival: 'અગિયારસ', sunrise: '06:05:00', sunset: '19:31:00' },
    '11/07/2026': { tithi: 'વદ - ૧૨', festival: '--', sunrise: '06:05:00', sunset: '19:30:00' },
    '12/07/2026': { tithi: 'વદ - ૧૩', festival: '--', sunrise: '06:05:00', sunset: '19:30:00' },
    '13/07/2026': { tithi: 'વદ - ૧૪', festival: '--', sunrise: '06:06:00', sunset: '19:30:00' },
    '14/07/2026': { tithi: 'વદ - ૩૦', festival: 'અમાસ', sunrise: '06:06:00', sunset: '19:30:00' }, // **મહિનો અહીં પૂરો થાય છે (નિજ જેઠ)**
    '15/07/2026': { tithi: 'સુદ - ૧', festival: '--', sunrise: '06:07:00', sunset: '19:30:00' },
    '16/07/2026': { tithi: 'સુદ - ર', festival: '--', sunrise: '06:07:00', sunset: '19:30:00' },
    '17/07/2026': { tithi: 'સુદ - ૩', festival: 'દિકરા પિનાકનો જન્મ દિવસ', sunrise: '06:07:00', sunset: '19:29:00' },
    '18/07/2026': { tithi: 'સુદ - ૫', festival: '--', sunrise: '06:08:00', sunset: '19:29:00' },
    '19/07/2026': { tithi: 'સુદ - ૬', festival: '--', sunrise: '06:08:00', sunset: '19:29:00' },
    '20/07/2026': { tithi: 'સુદ - ૭', festival: '--', sunrise: '06:09:00', sunset: '19:28:00' },
    '21/07/2026': { tithi: 'સુદ - ૮', festival: '--', sunrise: '06:09:00', sunset: '19:28:00' },
    '22/07/2026': { tithi: 'સુદ - ૯', festival: '--', sunrise: '06:09:00', sunset: '19:28:00' },
    '23/07/2026': { tithi: 'સુદ - ૯', festival: '--', sunrise: '06:10:00', sunset: '19:27:00' },
    '24/07/2026': { tithi: 'સુદ - ૧૦', festival: '--', sunrise: '06:10:00', sunset: '19:27:00' },
    '25/07/2026': { tithi: 'સુદ - ૧૧', festival: 'અગિયારસ', sunrise: '06:11:00', sunset: '19:27:00' },
    '26/07/2026': { tithi: 'સુદ - ૧૨', festival: '--', sunrise: '06:11:00', sunset: '19:26:00' },
    '27/07/2026': { tithi: 'સુદ - ૧૩', festival: '--', sunrise: '06:12:00', sunset: '19:26:00' },
    '28/07/2026': { tithi: 'સુદ - ૧૪', festival: '--', sunrise: '06:12:00', sunset: '19:25:00' },
    '29/07/2026': { tithi: 'સુદ - ૧૫', festival: 'પૂનમ ગુરૂ પૂનમ', sunrise: '06:12:00', sunset: '19:25:00' },
    '30/07/2026': { tithi: 'વદ - ૧', festival: '--', sunrise: '06:13:00', sunset: '19:24:00' },
    '31/07/2026': { tithi: 'વદ - ર', festival: '--', sunrise: '06:13:00', sunset: '19:24:00' },
    '01/08/2026': { tithi: 'વદ - ૩', festival: '--', sunrise: '06:14:00', sunset: '19:23:00' },
    '02/08/2026': { tithi: 'વદ - ૪', festival: '--', sunrise: '06:14:00', sunset: '19:23:00' },
    '03/08/2026': { tithi: 'વદ - ૫', festival: '--', sunrise: '06:15:00', sunset: '19:22:00' },
    '04/08/2026': { tithi: 'વદ - ૬', festival: '--', sunrise: '06:15:00', sunset: '19:22:00' },
    '05/08/2026': { tithi: 'વદ - ૭', festival: '--', sunrise: '06:15:00', sunset: '19:21:00' },
    '06/08/2026': { tithi: 'વદ - ૮', festival: '--', sunrise: '06:16:00', sunset: '19:20:00' },
    '07/08/2026': { tithi: 'વદ - ૯', festival: '--', sunrise: '06:16:00', sunset: '19:20:00' },
    '08/08/2026': { tithi: 'વદ - ૧૦', festival: '--', sunrise: '06:17:00', sunset: '19:19:00' },
    '09/08/2026': { tithi: 'વદ - ૧૧', festival: 'અગિયારસ', sunrise: '06:17:00', sunset: '19:18:00' },
    '10/08/2026': { tithi: 'વદ - ૧૨', festival: '--', sunrise: '06:17:00', sunset: '19:18:00' },
    '11/08/2026': { tithi: 'વદ - ૧૪', festival: '--', sunrise: '06:18:00', sunset: '19:17:00' },
    '12/08/2026': { tithi: 'વદ - ૩૦', festival: 'અમાસ', sunrise: '06:18:00', sunset: '19:16:00' }, // **મહિનો અહીં પૂરો થાય છે (અષાઢ)**
    '13/08/2026': { tithi: 'સુદ - ૧', festival: '--', sunrise: '06:18:00', sunset: '19:16:00' },
    '14/08/2026': { tithi: 'સુદ - ૨', festival: '--', sunrise: '06:19:00', sunset: '19:15:00' },
    '15/08/2026': { tithi: 'સુદ - ૩', festival: '--', sunrise: '06:19:00', sunset: '19:14:00' },
    '16/08/2026': { tithi: 'સુદ - ૪', festival: '--', sunrise: '06:20:00', sunset: '19:13:00' },
    '17/08/2026': { tithi: 'સુદ - ૫', festival: '--', sunrise: '06:20:00', sunset: '19:13:00' },
    '18/08/2026': { tithi: 'સુદ - ૬', festival: '--', sunrise: '06:20:00', sunset: '19:12:00' },
    '19/08/2026': { tithi: 'સુદ - ૭', festival: '--', sunrise: '06:21:00', sunset: '19:11:00' },
    '20/08/2026': { tithi: 'સુદ - ૮', festival: '--', sunrise: '06:21:00', sunset: '19:10:00' },
    '21/08/2026': { tithi: 'સુદ - ૯', festival: '--', sunrise: '06:21:00', sunset: '19:09:00' },
    '22/08/2026': { tithi: 'સુદ - ૧૦', festival: '--', sunrise: '06:22:00', sunset: '19:08:00' },
    '23/08/2026': { tithi: 'સુદ - ૧૧', festival: 'અગિયારસ', sunrise: '06:22:00', sunset: '19:08:00' },
    '24/08/2026': { tithi: 'સુદ - ૧૨', festival: '--', sunrise: '06:22:00', sunset: '19:07:00' },
    '25/08/2026': { tithi: 'સુદ - ૧૩', festival: '--', sunrise: '06:23:00', sunset: '19:06:00' },
    '26/08/2026': { tithi: 'સુદ - ૧૩', festival: '--', sunrise: '06:23:00', sunset: '19:05:00' },
    '27/08/2026': { tithi: 'સુદ - ૧૪', festival: '--', sunrise: '06:23:00', sunset: '19:04:00' },
    '28/08/2026': { tithi: 'સુદ - ૧૫', festival: 'પૂનમ રક્ષા બંધન', sunrise: '06:24:00', sunset: '19:03:00' },
    '29/08/2026': { tithi: 'વદ - ૧', festival: '--', sunrise: '06:24:00', sunset: '19:02:00' },
    '30/08/2026': { tithi: 'વદ - ર', festival: '--', sunrise: '06:24:00', sunset: '19:01:00' },
    '31/08/2026': { tithi: 'વદ - ૩', festival: '--', sunrise: '06:25:00', sunset: '19:01:00' },
    '01/09/2026': { tithi: 'વદ - ૪', festival: '--', sunrise: '06:25:00', sunset: '19:00:00' },
    '02/09/2026': { tithi: 'વદ - ૬', festival: 'રાંધણા છઠૃ', sunrise: '06:25:00', sunset: '18:59:00' },
    '03/09/2026': { tithi: 'વદ - ૭', festival: 'શીતળા સાતમ', sunrise: '06:25:00', sunset: '18:58:00' },
    '04/09/2026': { tithi: 'વદ - ૮', festival: 'જન્માષ્ટમી', sunrise: '06:26:00', sunset: '18:57:00' },
    '05/09/2026': { tithi: 'વદ - ૯', festival: '--', sunrise: '06:26:00', sunset: '18:56:00' },
    '06/09/2026': { tithi: 'વદ - ૧૦', festival: '--', sunrise: '06:26:00', sunset: '18:55:00' },
    '07/09/2026': { tithi: 'વદ - ૧૧', festival: 'અગિયારસ', sunrise: '06:27:00', sunset: '18:54:00' },
    '08/09/2026': { tithi: 'વદ - ૧૨', festival: '--', sunrise: '06:27:00', sunset: '18:53:00' },
    '09/09/2026': { tithi: 'વદ - ૧૩', festival: '--', sunrise: '06:27:00', sunset: '18:52:00' },
    '10/09/2026': { tithi: 'વદ - ૧૪', festival: '--', sunrise: '06:27:00', sunset: '18:51:00' },
    '11/09/2026': { tithi: 'વદ - ૩૦', festival: 'અમાસ', sunrise: '06:28:00', sunset: '18:50:00' }, // **મહિનો અહીં પૂરો થાય છે (શ્રાવણ)**
    '12/09/2026': { tithi: 'સુદ - ૧', festival: '--', sunrise: '06:28:00', sunset: '18:49:00' },
    '13/09/2026': { tithi: 'સુદ - ર', festival: '--', sunrise: '06:28:00', sunset: '18:48:00' },
    '14/09/2026': { tithi: 'સુદ - ૩', festival: '--', sunrise: '06:29:00', sunset: '18:47:00' },
    '15/09/2026': { tithi: 'સુદ - ૪', festival: '--', sunrise: '06:29:00', sunset: '18:46:00' },
    '16/09/2026': { tithi: 'સુદ - ૫', festival: '--', sunrise: '06:29:00', sunset: '18:45:00' },
    '17/09/2026': { tithi: 'સુદ - ૬', festival: '--', sunrise: '06:29:00', sunset: '18:44:00' },
    '18/09/2026': { tithi: 'સુદ - ૭', festival: '--', sunrise: '06:30:00', sunset: '18:43:00' },
    '19/09/2026': { tithi: 'સુદ - ૮', festival: '--', sunrise: '06:30:00', sunset: '18:42:00' },
    '20/09/2026': { tithi: 'સુદ - ૯', festival: '--', sunrise: '06:30:00', sunset: '18:41:00' },
    '21/09/2026': { tithi: 'સુદ - ૧૦', festival: '--', sunrise: '06:31:00', sunset: '18:40:00' },
    '22/09/2026': { tithi: 'સુદ - ૧૧', festival: 'અગિયારસ', sunrise: '06:31:00', sunset: '18:39:00' },
    '23/09/2026': { tithi: 'સુદ - ૧૨', festival: 'નટવરભાઇનો જન્મ દિવસ', sunrise: '06:31:00', sunset: '18:38:00' },
    '24/09/2026': { tithi: 'સુદ - ૧૩', festival: '--', sunrise: '06:32:00', sunset: '18:37:00' },
    '25/09/2026': { tithi: 'સુદ - ૧૪', festival: '--', sunrise: '06:32:00', sunset: '18:36:00' },
    '26/09/2026': { tithi: 'સુદ - ૧૫', festival: 'પૂનમ', sunrise: '06:32:00', sunset: '18:35:00' },
    '27/09/2026': { tithi: 'વદ - ૧', festival: '--', sunrise: '06:32:00', sunset: '18:34:00' },
    '28/09/2026': { tithi: 'વદ - ર', festival: '--', sunrise: '06:33:00', sunset: '18:33:00' },
    '29/09/2026': { tithi: 'વદ - ૩', festival: '--', sunrise: '06:33:00', sunset: '18:32:00' },
    '30/09/2026': { tithi: 'વદ - ૪', festival: '--', sunrise: '06:33:00', sunset: '18:31:00' },
    '01/10/2026': { tithi: 'વદ - ૫', festival: '--', sunrise: '06:34:00', sunset: '18:30:00' },
    '02/10/2026': { tithi: 'વદ - ૬', festival: '--', sunrise: '06:34:00', sunset: '18:29:00' },
    '03/10/2026': { tithi: 'વદ - ૭', festival: '--', sunrise: '06:34:00', sunset: '18:28:00' },
    '04/10/2026': { tithi: 'વદ - ૯', festival: '--', sunrise: '06:35:00', sunset: '18:27:00' },
    '05/10/2026': { tithi: 'વદ - ૧૦', festival: '--', sunrise: '06:35:00', sunset: '18:26:00' },
    '06/10/2026': { tithi: 'વદ - ૧૧', festival: 'અગિયારસ', sunrise: '06:35:00', sunset: '18:25:00' },
    '07/10/2026': { tithi: 'વદ - ૧૨', festival: '--', sunrise: '06:36:00', sunset: '18:24:00' },
    '08/10/2026': { tithi: 'વદ - ૧૩', festival: '--', sunrise: '06:36:00', sunset: '18:23:00' },
    '09/10/2026': { tithi: 'વદ - ૧૪', festival: '--', sunrise: '06:36:00', sunset: '18:22:00' },
    '10/10/2026': { tithi: 'વદ - ૩૦', festival: 'અમાસ', sunrise: '06:37:00', sunset: '18:22:00' }, // **મહિનો અહીં પૂરો થાય છે (ભાદરવો)**
    '11/10/2026': { tithi: 'સુદ - ૧', festival: 'નવરાત્રી પ્રારંભ', sunrise: '06:37:00', sunset: '18:21:00' },
    '12/10/2026': { tithi: 'સુદ - ર', festival: '--', sunrise: '06:37:00', sunset: '18:20:00' },
    '13/10/2026': { tithi: 'સુદ - ૩', festival: '--', sunrise: '06:38:00', sunset: '18:19:00' },
    '14/10/2026': { tithi: 'સુદ - ૪', festival: '--', sunrise: '06:38:00', sunset: '18:18:00' },
    '15/10/2026': { tithi: 'સુદ - ૫', festival: '--', sunrise: '06:39:00', sunset: '18:17:00' },
    '16/10/2026': { tithi: 'સુદ - ૬', festival: '--', sunrise: '06:39:00', sunset: '18:16:00' },
    '17/10/2026': { tithi: 'સુદ - ૭', festival: '--', sunrise: '06:39:00', sunset: '18:16:00' },
    '18/10/2026': { tithi: 'સુદ - ૭', festival: '--', sunrise: '06:40:00', sunset: '18:15:00' },
    '19/10/2026': { tithi: 'સુદ - ૮', festival: '--', sunrise: '06:40:00', sunset: '18:14:00' },
    '20/10/2026': { tithi: 'સુદ - ૯', festival: 'દશેરા', sunrise: '06:41:00', sunset: '18:13:00' },
    '21/10/2026': { tithi: 'સુદ - ૧૦', festival: '--', sunrise: '06:41:00', sunset: '18:12:00' },
    '22/10/2026': { tithi: 'સુદ - ૧૧', festival: 'અગિયારસ', sunrise: '06:42:00', sunset: '18:12:00' },
    '23/10/2026': { tithi: 'સુદ - ૧૨', festival: '--', sunrise: '06:42:00', sunset: '18:11:00' },
    '24/10/2026': { tithi: 'સુદ - ૧૩', festival: '--', sunrise: '06:43:00', sunset: '18:10:00' },
    '25/10/2026': { tithi: 'સુદ - ૧૪', festival: '--', sunrise: '06:43:00', sunset: '18:09:00' },
    '26/10/2026': { tithi: 'સુદ - ૧૫', festival: 'પૂનમ', sunrise: '06:44:00', sunset: '18:09:00' },
    '27/10/2026': { tithi: 'વદ - ૧', festival: '--', sunrise: '06:44:00', sunset: '18:08:00' },
    '28/10/2026': { tithi: 'વદ - ૩', festival: '--', sunrise: '06:44:00', sunset: '18:07:00' },
    '29/10/2026': { tithi: 'વદ - ૪', festival: '--', sunrise: '06:45:00', sunset: '18:07:00' },
    '30/10/2026': { tithi: 'વદ - ૫', festival: '--', sunrise: '06:46:00', sunset: '18:06:00' },
    '31/10/2026': { tithi: 'વદ - ૬', festival: '--', sunrise: '06:46:00', sunset: '18:05:00' },
    '01/11/2026': { tithi: 'વદ - ૭', festival: '--', sunrise: '06:47:00', sunset: '18:05:00' },
    '02/11/2026': { tithi: 'વદ - ૮', festival: '--', sunrise: '06:47:00', sunset: '18:04:00' },
    '03/11/2026': { tithi: 'વદ - ૯', festival: '--', sunrise: '06:48:00', sunset: '18:04:00' },
    '04/11/2026': { tithi: 'વદ - ૧૦', festival: '--', sunrise: '06:48:00', sunset: '18:03:00' },
    '05/11/2026': { tithi: 'વદ - ૧૧', festival: 'અગિયારસ', sunrise: '06:49:00', sunset: '18:03:00' },
    '06/11/2026': { tithi: 'વદ - ૧૨', festival: '--', sunrise: '06:49:00', sunset: '18:02:00' },
    '07/11/2026': { tithi: 'વદ - ૧૩', festival: '--', sunrise: '06:50:00', sunset: '18:02:00' },
    '08/11/2026': { tithi: 'વદ - ૧૪', festival: '--', sunrise: '06:51:00', sunset: '18:01:00' },
    '09/11/2026': { tithi: 'વદ - ૩૦', festival: 'અમાસ દિવાળી', sunrise: '06:51:00', sunset: '18:01:00' } // **મહિનો અહીં પૂરો થાય છે (આસો)**
};


// =======================================================
// (4) પંચાંગ અને ગણતરી ફંક્શન્સ (સૂર્યોદય, સૂર્યાસ્ત અને મહિનાનું ડાયનેમિક લોજિક)
// =======================================================

// તારીખ મુજબ સૂર્યોદય/સૂર્યાસ્તનો સમય મેળવે છે
function getSunriseSunset(now) {
    const date = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    const dateKey = `${date}/${month}/${year}`;
    
    const details = PANCHANG_CALENDAR[dateKey];
    
    if (details) {
        // સમય સ્ટ્રિંગને Date ઑબ્જેક્ટમાં કન્વર્ટ કરો
        const [srHour, srMin] = details.sunrise.split(':').map(Number);
        const [ssHour, ssMin] = details.sunset.split(':').map(Number);
        
        let sunrise = new Date(now.getFullYear(), now.getMonth(), now.getDate(), srHour, srMin, 0); 
        let sunset = new Date(now.getFullYear(), now.getMonth(), now.getDate(), ssHour, ssMin, 0);

        // જો સૂર્યોદય સૂર્યાસ્ત કરતાં મોડો હોય (જેમ કે રાત માટે ગણતરી કરીએ ત્યારે)
        if (sunrise > sunset) {
            // આ લોજિક ચોઘડિયા માટે જરૂરી છે.
            sunset.setDate(sunset.getDate() + 1); 
        }
        return { sunrise, sunset };
    }
    
    // ડેટા ન મળે તો ડમી સમય
    let fallbackSunrise = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 6, 30, 0); 
    let fallbackSunset = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 18, 0, 0);
    return { sunrise: fallbackSunrise, sunset: fallbackSunset };
}

// ચોઘડિયાની ગણતરી (સૂર્યોદય/સૂર્યાસ્તના ડાયનેમિક સમય સાથે)
function calculateChoghadiya(now) {
    const dayOfWeek = now.getDay();
    const { sunrise, sunset } = getSunriseSunset(now);

    const isDayTime = now >= sunrise && now < sunset;
    const choghadiyaSequence = isDayTime ? CHOGHADIYA_DATA[dayOfWeek].day : CHOGHADIYA_DATA[dayOfWeek].night;
    
    // ... (અગાઉનો ચોઘડિયા ગણતરીનો કોડ અહીં ચાલુ રહે છે) ...
    const totalDuration = isDayTime ? sunset.getTime() - sunrise.getTime() : (sunrise.getTime() + 24 * 60 * 60 * 1000) - sunset.getTime();
    const choghadiyaDuration = totalDuration / 8; 

    let currentChoghadiyaName = "ગણતરી ચાલુ છે";
    let choghadiyaStart = isDayTime ? sunrise : sunset;

    for (let i = 0; i < 8; i++) {
        const choghadiyaEnd = new Date(choghadiyaStart.getTime() + choghadiyaDuration);
        
        if (now >= choghadiyaStart && now < choghadiyaEnd) {
            currentChoghadiyaName = choghadiyaSequence[i];
            
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


// તારીખ મુજબ પંચાંગની વિગતો શોધે છે અને મહિનો નક્કી કરે છે
function findPanchangDetails(now) {
    const date = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0'); 
    const year = now.getFullYear();
    const dateKey = `${date}/${month}/${year}`; 
    
    const details = PANCHANG_CALENDAR[dateKey];
    
    let currentTithi = details ? details.tithi : 'તિથિ ડેટા ખૂટે છે';
    let currentFestival = details ? (details.festival === '--' ? '' : details.festival) : '--';
    let gujaratiMonth = 'મહિનાનો ડેટા ખૂટે છે';
    
    // --- ગુજરાતી મહિનાનું લોજિક (તમે આપેલ નિયમ મુજબ) ---
    // કાર્તિક મહિનાનું ઇન્ડેક્સ 0 છે
    const FIRST_DATE_KEY = '22/10/2025';
    let currentMonthIndex = 0; // શરૂઆત કાર્તિક મહિનાથી
    
    // બધી તારીખોને ક્રમમાં ગોઠવો
    const allDates = Object.keys(PANCHANG_CALENDAR).sort((a, b) => {
        const [da, ma, ya] = a.split('/').map(Number);
        const [db, mb, yb] = b.split('/').map(Number);
        return new Date(ya, ma - 1, da).getTime() - new Date(yb, mb - 1, db).getTime();
    });

    let foundMonth = false;
    
    for (let i = 0; i < allDates.length; i++) {
        const key = allDates[i];
        const [d, m, y] = key.split('/').map(Number);
        const keyDate = new Date(y, m - 1, d);

        // વર્તમાન તારીખ સુધી પહોંચો
        if (keyDate.getTime() > now.getTime()) {
            break;
        }

        // જો તારીખ મળે, તો મહિનો સેટ કરો
        if (key === dateKey) {
            gujaratiMonth = GUJARATI_MONTHS[currentMonthIndex];
            foundMonth = true;
        }

        // જો અમાસ હોય (વદ-30 અથવા festival: 'અમાસ'), તો બીજા દિવસે મહિનો બદલો
        const nextKey = allDates[i + 1];
        if (PANCHANG_CALENDAR[key].festival === 'અમાસ' || PANCHANG_CALENDAR[key].tithi.includes('૩૦')) {
             if (nextKey) {
                 const [nextD, nextM, nextY] = nextKey.split('/').map(Number);
                 const nextDate = new Date(nextY, nextM - 1, nextD);
                 
                 // જો આજની તારીખ એ અમાસનો દિવસ હોય, તો આજનો મહિનો ગણાય.
                 // જો આવતીકાલની તારીખ એન્ટ્રીમાં હોય અને આજની તારીખ કરતા મોટી હોય (એટલે કે બીજો દિવસ), તો મહિનો બદલો.
                 if (nextDate.getTime() > keyDate.getTime()) {
                     currentMonthIndex = (currentMonthIndex + 1) % GUJARATI_MONTHS.length;
                 }
             }
        }
    }
    // જો વર્તમાન તારીખ માટે ડેટા ન મળ્યો હોય, પણ પાછળના ડેટા પરથી છેલ્લો મહિનો ખબર હોય
    if (!foundMonth && currentMonthIndex > 0) {
        // આ લોજિકને સરળ બનાવવા માટે, આપણે છેલ્લે જે મહિના પર પહોંચ્યા તે ગણીશું.
        // જો તમારો ડેટા સળંગ હશે, તો આ બરાબર કામ કરશે.
        gujaratiMonth = GUJARATI_MONTHS[currentMonthIndex];
    }
    
    return {
        tithi: currentTithi,
        month: gujaratiMonth,
        festival: currentFestival
    };
}


// =======================================================
// (5) મુખ્ય અપડેટ ફંક્શન
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
    const panchangDetails = findPanchangDetails(now); 
    const choghadiya = calculateChoghadiya(now); 

// ... તમારો ગણતરીનો કોડ અહીં છે

// 🚨 અહીં નીચેની લીટીઓ ઉમેરો
console.log("Panchang Details:", panchangDetails);
console.log("Choghadiya Object:", choghadiya);
// 🚨 અહીં સુધી

// HTML માં અપડેટ
document.getElementById('gujarati-month').textContent = `ગુજરાતી મહિનો: ${panchangDetails.month}`;
// ... બાકીનો કોડ
    
    
    // HTML માં અપડેટ
    document.getElementById('gujarati-month').textContent = `ગુજરાતી મહિનો: ${panchangDetails.month}`;
    document.getElementById('gujarati-tithi').textContent = `તિથિ: ${panchangDetails.tithi}`;
    document.getElementById('choghadiya-name').textContent = `ચોઘડિયું: ${choghadiya.name}`;
    document.getElementById('choghadiya-time').textContent = `સમયગાળો: ${choghadiya.timeRange}`;
    
    // તહેવાર/પ્રસંગ (જન્મદિવસનો ડેટા પણ અહીં બતાવવામાં આવશે)
    document.getElementById('festival').textContent = `તહેવાર/પ્રસંગ: ${panchangDetails.festival || '--'}`; 
    
    // સૂત્ર અપડેટ કરો
    document.getElementById('slogan').textContent = '"Live in the present"`; 
}

// દર એક સેકન્ડે અપડેટ કરો
setInterval(updateClock, 1000);

// પેજ લોડ થતાં જ શરૂ કરો
updateClock();
