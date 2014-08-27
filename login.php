<!doctype html>
<html lang="es">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0"> 
	<title>Camisetas QR</title>

	<link rel="shortcut icon" type="image/x-icon" href="./images/favicon.ico">
	<link rel="stylesheet" href="css/estilos.css">
</head>
<body>
	<section id="login">
		<a href="index.php" id="login-logotipo"></a>
		<p id="login-titulo">Acceso usuario registrado:</p>
		<form action="index.php" id="login-panel">
			<div><label for="login-panel-usuario">Nombre de usuario</label><input type="text" name="login-panel-usuario" id="login-panel-usuario" /></div>
			<div><label for="login-panel-pass">Contraseña</label><input type="password" name="login-panel-pass" id="login-panel-pass" /></div>
			<input type="submit" value="Iniciar sesión">
		</form>
		<div id="login-recordar">
			<a href="recordar.php">¿Has olvidado tu contraseña?</a>
		</div>
		<a href="index.php" id="login-volver"></a>
	</section>
	<footer></footer>
	<script src="./js/jquery-1.9.1.js"></script>
	<script src="./js/scripts.js"></script>
</body>
</html>