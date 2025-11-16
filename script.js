// =======================================================
// (1) ગુજરાતી અંક અને નામ
// =======================================================
const GUJARATI_DIGITS = ['૦', '૧', '૨', '૩', '૪', '૫', '૬', '૭', '૮', '૯'];
const GUJARATI_DAYS = ['રવિવાર', 'સોમવાર', 'મંગળવાર', 'બુધવાર', 'ગુરુવાર', 'શુક્રવાર', 'શનિવાર'];
const GUJARATI_MONTHS = ['કાર્તિક', 'માગશર', 'પોષ', 'મહા', 'ફાગણ', 'ચૈત્ર', 'વૈશાખ', 'અધિક જેઠ', 'નિજ જેઠ', 'અષાઢ', 'શ્રાવણ', 'ભાદરવો', 'આસો'];
// મહિનાનો ક્રમ: કાર્તિક (0) થી આસો (12)

function replaceDigits(inputString) {
    return inputString.toString().replace(/[0-9]/g, (digit) => GUJARATI_DIGITS[parseInt(digit)]);
}

// =======================================================
// (2) ચોઘડિયા માટેનો ડેટા (દિવસ: 0=રવિવાર, 6=શનિવાર)
// =======================================================
const choghadiya_data = {
    0: { દિવસ: ['ઉદવેગ', 'ચલ', 'લાભ', 'અમૃત', 'કાલ', 'શુભ', 'રોગ', 'ઉદવેગ'], રાત્રિ: ['શુભ', 'અમૃત', 'ચલ', 'રોગ', 'કાલ', 'લાભ', 'ઉદવેગ', 'શુભ'] }, 
    1: { દિવસ: ['અમૃત', 'કાલ', 'શુભ', 'રોગ', 'ઉદવેગ', 'ચલ', 'લાભ', 'અમૃત'], રાત્રિ: ['ચલ', 'રોગ', 'કાલ', 'લાભ', 'ઉદવેગ', 'શુભ', 'અમૃત', 'ચલ'] },
    2: { દિવસ: ['રોગ', 'ઉદવેગ', 'ચલ', 'લાભ', 'અમૃત', 'કાલ', 'શુભ', 'રોગ'], રાત્રિ: ['કાલ', 'લાભ', 'ઉદવેગ', 'શુભ', 'અમૃત', 'ચલ', 'રોગ', 'કાલ'] },
    3: { દિવસ: ['લાભ', 'અમૃત', 'કાલ', 'શુભ', 'રોગ', 'ઉદવેગ', 'ચલ', 'લાભ'], રાત્રિ: ['ઉદવેગ', 'શુભ', 'અમૃત', 'ચલ', 'રોગ', 'કાલ', 'લાભ', 'ઉદવેગ'] },
    4: { દિવસ: ['શુભ', 'રોગ', 'ઉદવેગ', 'ચલ', 'લાભ', 'અમૃત', 'કાલ', 'શુભ'], રાત્રિ: ['અમૃત', 'ચલ', 'રોગ', 'કાલ', 'લાભ', 'ઉદવેગ', 'શુભ', 'અમૃત'] },
    5: { દિવસ: ['ચલ', 'લાભ', 'અમૃત', 'કાલ', 'શુભ', 'રોગ', 'ઉદવેગ', 'ચલ'], રાત્રિ: ['રોગ', 'કાલ', 'લાભ', 'ઉદ્વેગ', 'શુભ', 'અમૃત', 'ચલ', 'રોગ'] },
    6: { દિવસ: ['કાલ', 'શુભ', 'રોગ', 'ઉદવેગ', 'ચલ', 'લાભ', 'અમૃત', 'કાલ'], રાત્રિ: ['લાભ', 'ઉદવેગ', 'શુભ', 'અમૃત', 'ચલ', 'રોગ', 'કાલ', 'લાભ'] }
};

// =======================================================
// (3) પંચાંગ ડેટા ટેબલ (તમારા ડેટામાં મહિનાનો ઇન્ડેક્સ ઉમેરેલ)
// =======================================================

// તમારા ડેટાને JS ઑબ્જેક્ટ તરીકે પુનઃનિર્માણ કરીએ
const RAW_PANCHANG_CALENDAR = {
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
    '20/11/2025': { tithi: 'વદ - ૩૦', festival: 'અમાસ', sunrise: '06:58:00', sunset: '17:57:00' }, 
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
    '19/12/2025': { tithi: 'વદ - ૩૦', festival: 'અમાસ', sunrise: '07:17:00', sunset: '18:02:00' }, 
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
    '18/01/2026': { tithi: 'વદ - ૩૦', festival: 'અમાસ', sunrise: '07:24:00', sunset: '18:21:00' }, 
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
    '17/02/2026': { tithi: 'વદ - ૩૦', festival: 'અમાસ', sunrise: '07:13:00', sunset: '18:40:00' }, 
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
    '19/03/2026': { tithi: 'વદ - ૩૦', festival: 'અમાસ', sunrise: '06:48:00', sunset: '18:53:00' }, 
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
    '16/04/2026': { tithi: 'વદ - ૧૪', festival: '--', sunrise: '06:21:00', sunset: '19:03:00' }
};

// =======================================================
// (4) ગુજરાતી મહિનાનો ઇન્ડેક્સ ઉમેરવા માટેનું નવું ફંક્શન
// =======================================================
const PANCHANG_CALENDAR = (() => {
    let currentMonthIndex = 0; // કાર્તિક (0) થી શરૂ
    let isNewMonth = true;
    let newCalendar = {};

    for (const dateKey in RAW_PANCHANG_CALENDAR) {
        let details = RAW_PANCHANG_CALENDAR[dateKey];
        
        // ઑટોમૅટિક મહિનાનો ઇન્ડેક્સ સેટ કરો
        details.monthIndex = currentMonthIndex;

        newCalendar[dateKey] = details;

        // જો 'અમાસ' હોય, તો તે દિવસે મહિનો પૂરો થાય છે.
        if (details.festival === 'અમાસ') {
            // આવતીકાલથી નવો મહિનો શરૂ થશે
            currentMonthIndex = (currentMonthIndex + 1) % GUJARATI_MONTHS.length;
        }
    }
    return newCalendar;
})();


// =======================================================
// (5) પંચાંગ વિગતો શોધવાનું ફંક્શન
// =======================================================
function findPanchangDetails(now) {
    const date = now.getDate();
    const month = now.getMonth() + 1; 
    const year = now.getFullYear();
    const todayDateKey = `${String(date).padStart(2, '0')}/${String(month).padStart(2, '0')}/${year}`;

    let details = PANCHANG_CALENDAR[todayDateKey];

    if (!details) {
        details = { tithi: 'ડેટા નથી', festival: '--', sunrise: '06:00:00', sunset: '18:00:00', monthIndex: 0 };
    }
    
    details.month = GUJARATI_MONTHS[details.monthIndex]; 

    return details;
}

// =======================================================
// (6) ચોઘડિયા ગણતરી ફંક્શન (મધરાત પછીના લોજિક સાથે અપડેટ કરેલ)
// =======================================================
function calculateChoghadiya(now, todayDetails) {
    
    // ગઈકાલની તારીખ મેળવો
    const yesterday = new Date(now);
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayDateKey = `${String(yesterday.getDate()).padStart(2, '0')}/${String(yesterday.getMonth() + 1).padStart(2, '0')}/${yesterday.getFullYear()}`;
    const yesterdayDetails = PANCHANG_CALENDAR[yesterdayDateKey] || todayDetails; // જો ગઈકાલનો ડેટા ન હોય તો આજનો ડેટા વાપરો
    
    // આવતીકાલની તારીખ મેળવો
    const tomorrow = new Date(now);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tomorrowDateKey = `${String(tomorrow.getDate()).padStart(2, '0')}/${String(tomorrow.getMonth() + 1).padStart(2, '0')}/${tomorrow.getFullYear()}`;
    const tomorrowDetails = PANCHANG_CALENDAR[tomorrowDateKey] || todayDetails; // જો આવતીકાલનો ડેટા ન હોય તો આજનો ડેટા વાપરો


    // 1. સૂર્યોદય અને સૂર્યાસ્તના Date ઑબ્જેક્ટ બનાવો (સર્વર ટાઇમનો ઉપયોગ)
    const createTime = (date, timeStr) => {
        const [h, m, s] = timeStr.split(':').map(Number);
        return new Date(date.getFullYear(), date.getMonth(), date.getDate(), h, m, s);
    };

    const todaySunrise = createTime(now, todayDetails.sunrise);
    const todaySunset = createTime(now, todayDetails.sunset);
    const tomorrowSunrise = createTime(tomorrow, tomorrowDetails.sunrise);
    const yesterdaySunset = createTime(yesterday, yesterdayDetails.sunset);
    
    
    let choghadiyaType;
    let choghadiyaStartTime;
    let duration; 
    
    // (A) દિવસના ચોઘડિયા (સૂર્યોદય થી સૂર્યાસ્ત)
    if (now >= todaySunrise && now < todaySunset) {
        choghadiyaType = 'દિવસ';
        choghadiyaStartTime = todaySunrise;
        duration = todaySunset.getTime() - todaySunrise.getTime();
    } 
    // (B) રાત્રિના ચોઘડિયા (મધરાત પછી - સૂર્યોદય પહેલાં)
    else if (now >= createTime(now, '00:00:00') && now < todaySunrise) {
        // ગણતરી ગઈકાલના સૂર્યાસ્તથી આજના સૂર્યોદય સુધીની
        choghadiyaType = 'રાત્રિ';
        choghadiyaStartTime = yesterdaySunset;
        duration = todaySunrise.getTime() - yesterdaySunset.getTime();
    }
    // (C) રાત્રિના ચોઘડિયા (સૂર્યાસ્ત પછી - મધરાત પહેલાં)
    else { // now >= todaySunset && now < tomorrowSunrise
        choghadiyaType = 'રાત્રિ';
        choghadiyaStartTime = todaySunset;
        duration = tomorrowSunrise.getTime() - todaySunset.getTime();
    }
    
    const oneChoghadiyaDurationMs = duration / 8;
    
    // 2. હાલનો સમય કયા ચોઘડિયામાં આવે છે તે નક્કી કરો
    let timeSinceStartMs = now.getTime() - choghadiyaStartTime.getTime();
    
    // જો `timeSinceStartMs` નેગેટિવ આવે (ગઈકાલના સૂર્યાસ્તથી ગણતરીમાં), તો 24 કલાક ઉમેરો.
    // આ લોજિક (B) કેસ માટે છે, જ્યાં now < todaySunrise અને choghadiyaStartTime ગઈકાલનું છે.
    if (timeSinceStartMs < 0) {
        timeSinceStartMs += 24 * 60 * 60 * 1000;
    }
    
    let choghadiyaIndex = Math.floor(timeSinceStartMs / oneChoghadiyaDurationMs);
    
    if (choghadiyaIndex < 0 || choghadiyaIndex > 7) {
        choghadiyaIndex = 0; // સુરક્ષિત ડિફોલ્ટ
    }

    const dayOfWeek = now.getDay(); // 0 (રવિવાર) થી 6 (શનિવાર)

    const currentChoghadiyaName = choghadiya_data[dayOfWeek][choghadiyaType][choghadiyaIndex];
    
    const nextChoghadiyaIndex = (choghadiyaIndex + 1) % 8;
    const nextChoghadiyaName = choghadiya_data[dayOfWeek][choghadiyaType][nextChoghadiyaIndex];

    const currentChoghadiyaEndTime = new Date(choghadiyaStartTime.getTime() + (oneChoghadiyaDurationMs * (choghadiyaIndex + 1)));

    return {
        name: currentChoghadiyaName,
        type: choghadiyaType,
        endTime: currentChoghadiyaEndTime,
        nextName: nextChoghadiyaName,
        isDay: choghadiyaType === 'દિવસ',
        debug: {
            start: choghadiyaStartTime.toLocaleTimeString(),
            end: currentChoghadiyaEndTime.toLocaleTimeString(),
            duration: Math.round(oneChoghadiyaDurationMs / 60000) + ' min'
        }
    };
}


// =======================================================
// (7) મુખ્ય ડિસ્પ્લે અપડેટ ફંક્શન
// =======================================================
function updatePanchang() {
    const now = new Date();
    
    // (A) પંચાંગ વિગતો મેળવો
    const details = findPanchangDetails(now);
    
    // (B) ચોઘડિયું ગણો
    const choghadiya = calculateChoghadiya(now, details);
    
    // ===================================================
    // 💡 અહીં તમારે HTML/DOM એલિમેન્ટ્સને અપડેટ કરવાની જરૂર છે.
    // નીચેના console.log સ્ટેટમેન્ટ્સને તમારા HTML Elements સાથે બદલવા પડશે.
    // ===================================================

    // (C) સમય અને તારીખ વિગતો
    const timeString = `${replaceDigits(now.getHours())}:${replaceDigits(now.getMinutes())}:${replaceDigits(now.getSeconds())}`;
    const dateString = `${replaceDigits(now.getDate()).padStart(2, '૦')}/${replaceDigits(now.getMonth() + 1).padStart(2, '૦')}/${replaceDigits(now.getFullYear())}`;
    const dayName = GUJARATI_DAYS[now.getDay()];

    // console.log ને બદલે, આ વેલ્યૂઝને HTML માં સેટ કરો:
    // document.getElementById('time').innerText = timeString;
    // document.getElementById('date').innerText = dateString;
    // document.getElementById('day').innerText = dayName;
    
    // (D) પંચાંગ વિગતો
    // document.getElementById('gujarati-month').innerText = details.month;
    // document.getElementById('tithi').innerText = replaceDigits(details.tithi);
    // document.getElementById('festival').innerText = details.festival;
    
    // (E) ચોઘડિયા વિગતો
    // document.getElementById('choghadiyu').innerText = choghadiya.name;
    // document.getElementById('choghadiya-details').innerText = `(${choghadiya.type} - સમાપ્તિ: ${replaceDigits(choghadiya.endTime.toLocaleTimeString())})`;

    // કોન્સોલ આઉટપુટ (તપાસ માટે):
    console.clear();
    console.log("--- ⌚ ડિજિટલ ઘડિયાળ વિગતો ---");
    console.log(`વર્તમાન સમય: ${timeString} (${dayName})`);
    console.log(`તિથિ: ${details.tithi}`);
    console.log(`મહિનો: ${details.month}`);
    console.log(`તહેવાર: ${details.festival}`);
    console.log("-------------------------------");
    console.log(`✅ ચોઘડિયું: ${choghadiya.name} (${choghadiya.type})`);
    console.log(`   શરૂઆત: ${choghadiya.debug.start}`);
    console.log(`   સમાપ્તિ: ${choghadiya.debug.end}`);
    console.log(`   સમયગાળો: ${choghadiya.debug.duration}`);
    console.log("-------------------------------");
}

// ઘડિયાળ ચાલુ કરવા માટે, આને દર સેકન્ડે કોલ કરો
// setInterval(updatePanchang, 1000); 

// તાત્કાલિક ટેસ્ટ માટે એક વખત કોલ કરો
// updatePanchang();
