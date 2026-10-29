import express from 'express';
const app = express();

const PORT = 3000;

function criarMensagem(id, usuario, texto){
  return { id, usuario: usuario.trim(), texto: texto.trim() };

}

const mensagens = [
    criarMensagem(1,'Ana', 'Olá , Turma!'),
    criarMensagem(2, 'Pedro', 'Servidor funciona TOP!'),
    criarMensagem(3, 'João', 'Vamos conversar com o mensageiro local'),
];

function listaMensagens(){
    return mensagens;
};

function quantidadeDeMensagens(){
    return  mensagens.length;
}


function bsucarMensagens(){
    return mensagens.find(mensagens => mensagens.id === id)
}

app.get('/', (req, res) => res.send('Servidor rodando!'));
app.get('/status', (req, res) => res.json({ status: 'online', sprint: 2, total: quantidadeDeMensagens()}));
app.get('/sobre', (req, res) => res.send('Meu primeiro servidor Node.js com Express e ES Modules.'));

app.get('/mensagem', (req,res) => res.json(listaMensagem()));
app.get('/total-mensagens,', (req,res) => res.json( {total: quantidadeDeMensagens}));
app.get('/mensagens/:id', (req, res) =>{
    const mensagem = buscarMensagem(Number(req.params.id))
    if (!mensagem)
        return res.status(404).json({ erro:'Mensagem não encontrada'})
    res.json(mensagem );
});

app.listenerCount(PORT, () => console.log(`servidor em http://localhost:${PORT}`));