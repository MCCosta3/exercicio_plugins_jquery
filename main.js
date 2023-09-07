$("#telefone").mask("(00) 00000-0000");
$("#cpf").mask("000.000.000-00");
$("#cep").mask("00.000-000");

$("form").validate({
  rules: {
    nome: {
      required: true,
    },

    email: {
      required: true,
    },

    telefone: {
      required: true,
    },

    cpf: {
      required: true,
    },

    cep: {
      required: true,
    },
  },

  messages: {
    nome: "Por favor, insira seu nome",
  },

  submitHandler: function (form) {
    console.log(form);
  },

  invalidHandler: function (evento, validador) {
    let camposIncorretos = validador.numberOfInvalids();
    if (camposIncorretos) {
      alert(`Existem ${camposIncorretos} campos incorretos`);
    }
  },
});
