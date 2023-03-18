let name = document.getElementById("myName")
name.innerHTML = prompt("Adınızı Giriniz: ")


setInterval(function showTime() {
    let currentDate = new Date() // Sistemden tarihi çekiyoruz.

    // Günün haftanın kaçıncı günü bilgisi olduğunu öğrenip gün ismine çeviriyoruz.
    let dayNo = currentDate.getDay() 
        switch (dayNo) 
        {
            case 1: dayName = "Pazartesi"
            break;
            case 2: dayName = "Salı"
            break;
            case 3: dayName = "Çarşamba"
            break;
            case 4: dayName = "Perşembe"
            break;
            case 5: dayName = "Cuma"
            break;
            case 6: dayName = "Cumartesi"
            break;
            case 7: dayName = "Pazar"
            break;
        }

    // Ayın kaçıncı günü olduğu bilgisini alıyoruz. 10'dan küçükse başına 0 ekliyoruz.
    let day = currentDate.getDate() 
    if (day < 10) {day = "0" + day}

    // Kaçıncı ay olduğu bilgisini alıp, 10'dan küçükse başına 0 ekliyoruz.
    let month = currentDate.getMonth()
    if ((month + 1) < 10) {month = "0" + (month + 1 )}

    // Yıl bilgisini alıyoruz.
    let year = currentDate.getFullYear()

    // Saat bilgisini alıyoruz. 10'dan küçükse başına 0 ekliyoruz.
    let hour = currentDate.getHours()
    if (hour < 10) {hour = "0" + hour}

    // Dakika bilgisini alıp 10'dan küçükse başına 0 ekliyoruz.
    let minute = currentDate.getMinutes()
    if (minute < 10) {minute = "0" + minute}

    // Saniye bilgisini alıp 10'dan küçükse başına 0 ekliyoruz.
    let second = currentDate.getSeconds()
    if (second < 10) {second = "0" + second}

    // Gün/ay/yıl saat:dakika:saniye gün adı bilgilerini birleştiriyoruz.
    let fullDate = day + "/" + month + "/" + year + "   " + hour + ":" + minute + ":" + second + "  " + dayName

    // Birleştirdiğimiz bilgiyi göstermek istediğimiz etikete atıyoruz.
    let timeArea = document.getElementById("myClock")
    timeArea.innerHTML = fullDate
   
},1000) // Her saniye güncellenmesini sağlıyoruz.
