function showDate() {
    let out = document.getElementById('current-date');
    let today = new Date();
    out.innerHTML = today;
    out.innerHTML = `
        <div style="font-family: Arial, sans-serif; font-size: 16px; color: #347; margin-bottom: 10px;">
            <span style="font-weight: bold;">Дата и время для немецкой локали:</span> ${today.toLocaleString('ru-RU')}
        </div>
        <div style="font-family: Arial, sans-serif; font-size: 16px; color: #347; margin-bottom: 10px;">
            <span style="font-weight: bold;">Дата и время для немецкой локали:</span> ${today.toLocaleString('de-DE')}
        </div>
        <div style="font-family: Arial, sans-serif; font-size: 16px; color: #347; margin-bottom: 10px;">
            <span style="font-weight: bold;">Дата и время для греческой локали:</span> ${today.toLocaleString('el-GR')}
        </div>
        <div style="font-family: Arial, sans-serif; font-size: 16px; color: #347; margin-bottom: 10px;">
            <span style="font-weight: bold;">Дата и время для американской локали:</span> ${today.toLocaleString('en-US')}
        </div>
        <div style="font-family: Arial, sans-serif; font-size: 16px; color: #347; margin-bottom: 10px;">
            <span style="font-weight: bold;">Дата и время для испанской локали:</span> ${today.toLocaleString('es-ES')}
        </div>
        <div style="font-family: Arial, sans-serif; font-size: 16px; color: #347; margin-bottom: 10px;">
            <span style="font-weight: bold;">Дата и время для французской локали:</span> ${today.toLocaleString('fr-FR')}
        </div>
        `;
}

function showDateDetails() {
    let out = document.getElementById('date-details');
    let today = new Date();

    let year = today.getFullYear();
    let month = today.getMonth() + 1; // Месяцы в JavaScript нумеруются от 0 до 11
    let date = today.getDate();
    let dayOfWeek = today.getDay(); // Возвращает день недели (0 - воскресенье, 1 - понедельник, ..., 6 - суббота)

    let daysOfWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    out.innerHTML = `
        <div style="font-family: Arial, sans-serif; font-size: 16px; color: #333; margin-bottom: 10px;">
            <span style="font-weight: bold;">Текущий год:</span> ${year}
        </div>
        <div style="font-family: Arial, sans-serif; font-size: 16px; color: #333; margin-bottom: 10px;">
            <span style="font-weight: bold;">Текущий месяц:</span> ${month}
        </div>
        <div style="font-family: Arial, sans-serif; font-size: 16px; color: #333; margin-bottom: 10px;">
            <span style="font-weight: bold;">Текущая дата:</span> ${date}
        </div>
        <div style="font-family: Arial, sans-serif; font-size: 16px; color: #333; margin-bottom: 10px;">
            <span style="font-weight: bold;">Текущий день недели:</span> ${daysOfWeek[dayOfWeek]}
        </div>
    `;
}
