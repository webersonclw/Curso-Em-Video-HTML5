<!DOCTYPE html>
<html lang="pt-br">
<head>
    <title>Teste  JavaScript</title>
    <meta charset="UTF-8">
    <script>
        function acendeLampada() {document.getElementById("luz").src="_imagens/lampada-acesa.jpg";}
        function apagaLampada() {document.getElementById("luz").scr="_imagens/lampada-apagada.jpg";}
        function quebralLamapada () {document.getElementById("luz").src="_imagens/lamapada-quebrada.jpg";}
    </script>
</head>
<body>
    <h1>Acenda a Lâmpada!</h1>
    <img src="_imagens/lampada-apagada.jpg" id="luz" onmousemove="acendeLampada()" onmouseout="apagaLampada()" onclick="quebralLamapada()" />
</body>
</html>
