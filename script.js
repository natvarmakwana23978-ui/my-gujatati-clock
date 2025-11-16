// ફાઇલ: script.js

// ઘડિયાળને અપડેટ કરવા માટેનું મુખ્ય ફંક્શન
function updateClock() {
    // વર્તમાન સમય મેળવો
    const now = new Date();
    
    // સમયના ઘટકો મેળવો (કલાક, મિનિટ, સેકન્ડ)
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    
    // સમયને બે-અંકના ફોર્મેટમાં રાખો (દા.ત., 9 ને બદલે 09)
    hours = String(hours).padStart(2, '0');
    minutes = String(minutes).padStart(2, '0');
    seconds = String(seconds).padStart(2, '0');
    
    // સમયનું પ્રદર્શન (Display) સેટ કરો
    const timeString = `${hours}:${minutes}:${seconds}`;
    
    // HTML માં સમય અપડેટ કરો (તમારા Div ID નો ઉપયોગ કરીને)
    const timeElement = document.getElementById('time');
    if (timeElement) {
        timeElement.textContent = timeString;
    }

    // અહીં અન્ય વિગતો (તારીખ, ચોઘડિયા, તિથિ, વગેરે) અપડેટ કરવાનો કોડ આવશે
}

// દર એક સેકન્ડે (1000 મિલિસેકન્ડ) updateClock ફંક્શનને બોલાવો.
setInterval(updateClock, 1000);

// પેજ લોડ થતાં જ તરત જ ઘડિયાળ શરૂ કરો
updateClock();
