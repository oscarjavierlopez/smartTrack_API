<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods:DELETE');
header('Access-Control-Allow-Headers: Content-Type, Authorization');
header('Content-Type: application/json');

$servername = "localhost";
$username = "root";
$password = "";
$database = "smart_track";

if ($_SERVER['REQUEST_METHOD'] == 'DELETE') {
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

            $stmt = $conn->prepare("DELETE FROM usuarios WHERE id = :id");
            $stmt->bindParam(':id',  $_GET['id'], PDO::PARAM_INT);

            $stmt->execute();

            if ($stmt->rowCount() > 0) {
                http_response_code(204);
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
