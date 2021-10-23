<!DOCTYPE html>
<html lang="pt-br">
<head>
    <title>Teste  JavaScript</title>
    <meta charset="UTF-8">
    <script>
        var quebrada = false;
        function MudaLampada(tipo) {
            if (!quebrada) {
                document.getElementById("luz").src = "_imagens/" + tipo + ".jpg";
                if (tipo == 'lampada-quebrada') {
                    quebrada = true;
                }
            }
        }
    </script>
</head>
<body>
    <h1>Acenda a Lâmpada!</h1>
    <img src="_imagens/lampada-apagada.jpg" id="luz" onmousemove="MudaLampada('lampada-acesa')" onmouseout="MudaLampada('lampada-apagada')" onclick="MudaLampada('lampada-quebrada')"/>
</body>
</html>
