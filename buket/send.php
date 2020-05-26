<?php

if(isset($_POST['submit'])){
$to = "info@epicblog.net";; // Здесь нужно написать e-mail, куда будут приходить письма
$first_name = $_POST['name'];
$phone = $_POST['phone']

mail($to, "Заявка с сайта", "ФИО:".$fio.". E-mail: ".$email ,"From: example2@mail.ru \r\n");
// mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender - Отключено!
echo "Сообщение отправлено. Спасибо Вам " . $first_name . ", мы скоро свяжемся с Вами.";
echo "<br /><br /><a href='https://epicblog.net'>Вернуться на сайт.</a>";

}

?>

<!--Переадресация на главную страницу сайта, через 3 секунды-->
<script language="JavaScript" type="text/javascript">
function changeurl(){eval(self.location="https://epicblog.net/index.php");}
window.setTimeout("changeurl();",3000);
</script>