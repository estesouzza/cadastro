function register_user(name, email, password, gender, phone) {
    if (txt_name.value.length == 0 || txt_email.value.length == 0 || txt_phone.value.length != 11) {
        window.alert('[ERRO] Preencha os dados corretamente e certifique-se de que o telefone tem 11 caracteres!');
        return; // Interrompe a função se os campos obrigatórios não estiverem preenchidos corretamente
    }

    // Restante do código para adicionar o usuário à tabela
    var tabel = document.querySelector('table#table_user');
    var amtLine = tabel.rows.length;
    var line = tabel.insertRow(amtLine);

    var cellID = line.insertCell(0);
    var cellName = line.insertCell(1);
    var cellEmail = line.insertCell(2);
    var cellPassword = line.insertCell(3);
    var cellGender = line.insertCell(4);
    var cellPhone = line.insertCell(5); // Adiciona uma nova célula para o telefone

    var radio_gender = document.getElementsByName('radio_gender');
    if (radio_gender[0].checked) {
        gender = "Masc.";
    } else if (radio_gender[1].checked) {
        gender = "Fem.";
    }

    cellID.innerHTML = amtLine;
    cellName.innerHTML = name;
    cellEmail.innerHTML = email;
    cellPassword.innerHTML = password;
    cellGender.innerHTML= gender;
    cellPhone.innerHTML= phone; // Define o conteúdo da célula do telefone

    // Estilos das células
    cellID.style.width = "70px";
    cellGender.style.width = "70px";
    
    // Alinhamento do texto
    cellName.style.textAlign = "left";
    cellEmail.style.textAlign = "left";
    cellPassword.style.textAlign = "left";

    // Limpa os campos após o cadastro
    document.getElementById("txt_name").value = "";
    document.getElementById("txt_email").value = "";
    document.getElementById("txt_password").value = "";
    
    // Desmarca os botões de rádio
    for(var i=0; i < radio_gender.length; i++) {
        radio_gender[i].checked = false;
    }
    
   // Alerta de sucesso após a validação e cadastro
   alert("CADASTRADO COM SUCESSO!");
}
function verificarSenhas() {
    // Verificações de senha ou outras validações podem ser feitas aqui

    // Se tudo estiver correto, limpa o formulário e exibe a mensagem de sucesso
    document.getElementById("form_user").reset(); // Limpa todos os campos do formulário
    alert("Cadastro realizado com sucesso!"); // Exibe a mensagem de sucesso
}
