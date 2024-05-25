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
