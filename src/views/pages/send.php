<?php
setcookie('cross-site-cookie', 'name', ['samesite' => 'None', 'secure' => true]);
$fio = $_POST['fio'];
$tel = $_POST['tel'];
$fio = htmlspecialchars($fio);
$tel = htmlspecialchars($tel);
$fio = urldecode($fio);
$tel = urldecode($tel);
$fio = trim($fio);
$tel = trim($tel);

if (mail("info@yuriskonsult.info", "Заявка с сайта", "ФИО:".$fio.". E-mail: ".$tel ,"From: information@yuriskonsult.info \r\n"))
 {     echo "сообщение успешно отправлено";
} else {
    echo "при отправке сообщения возникли ошибки";
}
?> 

