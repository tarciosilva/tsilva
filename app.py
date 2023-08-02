from flask import Flask, render_template, redirect, request, flash
from flask_mail import Mail, Message
import config

app = Flask(__name__)
app.secret_key = 'tsilva'

mail_settings = {
    "MAIL_SERVER":'smtp.gmail.com',
    "MAIL_PORT": 465, # SSL port for GMail SMTP server
    "MAIL_USE_TLS" : False,
    "MAIL_USE_SSL" : True,
    "MAIL_USERNAME": config.email,
    "MAIL_PASSWORD": config.key,
}

app.config.update(mail_settings)
mail = Mail(app)

class Contact:
    def __init__(self, nome, email, mensagem):
        self.nome = nome
        self.email = email
        self.mensagem = mensagem


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/send', methods=['GET', 'POST'])
def send():
    if request.method=='POST':
        contact = Contact(
            request.form['nome'],
            request.form['email'],
            request.form['mensagem']
        )
        msg = Message(
            subject=f'Contato do Site - {contact.nome}',
            sender=('Site Contatos', config.email),
            recipients=['tarciopereirasilva@outlook.com'],
            body=f"""
                teste de email do portifocio de {contact.nome} sendo
                enviado a partir do email {contact.email} com a mensagem
                "{contact.mensagem}"
            """
        )
        mail.send(msg)
        flash('Mensagem enviada com sucesso...!')
    return redirect('/')


    

if __name__ == '__main__':
    app.run(debug=True)
