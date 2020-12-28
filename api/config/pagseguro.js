module.exports = {
  mode: process.env.NODE_ENV === "production" ? "live" : "sandbox",
  sandbox: process.env.NODE_ENV === "production" ? false : true,
  sandbox_email: process.env.NODE_ENV === "production" ? null : "c21985727304706594930@sandbox.pagseguro.com.br",
  email: "marcoavfcc@gmail.com",
  token: "F398DB1B7DCD4A3F96FC735DDBC5953C",
  notificationURL: "https://api.loja-teste.ampliee.com/v1/api/pagamentos/notificacao"
}