<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

// Подключение к БД (пример для MySQL)
$servername = "10.123.0.210";
$username = "aleale271_users";
$password = "CarolineTurner03!";
$dbname = "aleale271_users";

$conn = new mysqli($servername, $username, $password, $dbname);

try {
    $pdo = new PDO(
        "mysql:host=$servername;dbname=$dbname", 
        $username, 
        $password
    );
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo json_encode(["status" => "PDO connection successful"]);
} catch (PDOException $e) {
    http_response_code(500);
    die(json_encode(["error" => $e->getMessage()]));
}

// Пример API-эндпоинта
// if ($_SERVER['REQUEST_METHOD'] === 'GET') {
//   $result = $conn->query("SELECT * FROM users");
//   $data = [];
  
//   while($row = $result->fetch_assoc()) {
//     $data[] = $row;
//   }
  
//   echo json_encode($data);
// }

$conn->close();
?>