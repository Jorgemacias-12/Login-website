<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv='X-UA-Compatible' content='text/html'>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bienvenido</title>
</head>
<body>
    <h1>
        ¡Bienvenido
    <?php
        echo $_POST["username"];
    ?>
    !
    </h1>

    <span>
        <?php
            for ($i=0; $i <= 10; $i++) { 
                print("Password: "+$_POST[i]);
            }
        ?>
    </span>
</body>
</html>