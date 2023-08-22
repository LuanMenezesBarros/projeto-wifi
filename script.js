// URL da página do Instagram com parâmetros
var instagramUrl = "https://instagram.com/arenaadega?igshid=OGQ5ZDc2ODk2ZA==";

// Gerar o QR code
var qrcode = new QRCode(document.getElementById("qrcode"), {
    text: instagramUrl,
    width: 128,
    height: 128,
    colorDark: "#000000",
    colorLight: "#ffffff",
});

// Simular a verificação do seguimento
function verificarSeguimento() {
    var resposta = prompt("Você seguiu a página no Instagram? (sim/não)").toLowerCase();
    return resposta === "sim";
}

if (verificarSeguimento()) {
    var senhaWifi = "sua_senha_wifi";
    alert("Senha do Wi-Fi: " + senhaWifi);
} else {
    alert("Você precisa seguir a página para obter a senha do Wi-Fi.");
}
