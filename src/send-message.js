// Отправка данных на сервер
function send(event, php) {
    //console.log("Отправка запроса");
    event.preventDefault ? event.preventDefault() : event.returnValue = false;
    const req = new XMLHttpRequest();
    req.open('POST', php, true);
    req.onload = function () {
        if (req.status >= 200 && req.status < 400) {
            json = JSON.parse(this.response); // internet explorer 11
            // console.log(json);

            // ЗДЕСЬ УКАЗЫВАЕМ ДЕЙСТВИЯ В СЛУЧАЕ УСПЕХА ИЛИ НЕУДАЧИ
            if (json.result == "success") {
                const elForm = document.getElementById('send-form');
                // Если сообщение отправлено
                alert("Сообщение отправлено");
                // Отключаем событие по умолчанию 
                elForm[0].value = '';
                elForm[1].value = '';
                elForm[2].value = '';
                elForm[3].value = null;
            } else {
                // Если произошла ошибка
                alert("Ошибка. Сообщение не отправлено");
            }
            // Если не удалось связаться с php файлом
        } else {
            alert("Ошибка сервера. Номер: " + req.status);
        }
    };

    // Если не удалось отправить запрос. Стоит блок на хостинге
    req.onerror = function () {
        alert("Ошибка отправки запроса");
    };
    req.send(new FormData(event.target));
}