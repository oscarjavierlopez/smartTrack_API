<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods:PUT');
header('Access-Control-Allow-Headers: Content-Type, Authorization');
header('Content-Type: application/json');

$servername = "localhost";
$username = "root";
$password = "";
$database = "smart_track";

if ($_SERVER['REQUEST_METHOD'] == 'PUT') { //Hace un update de todo menos del id 
    $data = json_decode(file_get_contents("php://input"), true);
    if (isset($_GET['id'])) {
        try {
            $conn = new PDO(
                "mysql:host=$servername;dbname=$database",
                $username,
                $password
            );
            $conn->setAttribute(
                PDO::ATTR_ERRMODE,
                PDO::ERRMODE_EXCEPTION
            );

            $stmt = $conn->prepare("UPDATE usuarios
                                    SET dni = :dni, nombre = :nombre, apellidos = :apellidos, email = :email, 
                                    telefono = :telefono, contrasena = :contrasena, activo = :activo, direccion = :direccion,
                                    ciudad = :ciudad, provincia = :provincia, codigo_postal = :codigo_postal,
                                    ruta_cv = :ruta_cv, fecha_nacimiento = :fecha_nacimiento, perfil = :perfil
                                    WHERE id = :id");
            $stmt->bindParam(':id', $_GET['id'], PDO::PARAM_INT);
            $stmt->bindParam(':dni', $data['dni'], PDO::PARAM_STR);
            $stmt->bindParam(':nombre', $data['nombre'], PDO::PARAM_STR);
            $stmt->bindParam(':apellidos', $data['apellidos'], PDO::PARAM_STR);
            $stmt->bindParam(':email', $data['email'], PDO::PARAM_STR);
            $stmt->bindParam(':telefono', $data['telefono'], PDO::PARAM_STR);
            $stmt->bindParam(':contrasena', $data['contrasena'], PDO::PARAM_STR); //Habría que hashearla
            $stmt->bindParam(':activo', $data['activo'], PDO::PARAM_INT);
            $stmt->bindParam(':direccion', $data['direccion'], PDO::PARAM_STR);
            $stmt->bindParam(':ciudad', $data['ciudad'], PDO::PARAM_STR);
            $stmt->bindParam(':provincia', $data['provincia'], PDO::PARAM_STR);
            $stmt->bindParam(':codigo_postal', $data['codigo_postal'], PDO::PARAM_STR);
            $stmt->bindParam(':fecha_nacimiento', $data['fecha_nacimiento'], PDO::PARAM_STR);
            $stmt->bindParam(':perfil', $data['perfil'], PDO::PARAM_STR);
            $stmt->bindParam(':ruta_cv', $data['ruta_cv'], PDO::PARAM_STR);

           
            $stmt->execute();

            if ($stmt->rowCount() > 0) {
                http_response_code(200);
                echo json_encode(["message" => "Usuario {$_GET['id']} actualizado correctamente"]);
            } else {
                http_response_code(404);
                echo json_encode(["error" => "Usuario no encontrado"]);
            }
            exit;
        } catch (PDOException $e) {
            http_response_code(500);
            echo json_encode(["error" => $e->getMessage()]);
            exit;
        }
    } else {
        http_response_code(400);
        echo json_encode(["error" => "Falta el parámetro 'id' en la solicitud"]);
    }
}
