function obterUnicoCliente() {
    return new Promise(function resolverPromise(resolve, reject) {
        return setTimeout(() => {
            return resolve({
                id: 1,
                nome: 'João'
            })
        }, 2000);
    });
}

function obterEndereco(idCliente) {
    return new Promise(function resolverPromise(resolve, reject) {
        return setTimeout(() => {
            return resolve({
                id: 100,
                rua: 'rua dos códigos',
                numero: 10
            })
        }, 1000);
    });
}

function obterContato(idCliente) {
    return new Promise(function resolverPromise(resolve, reject) {
        return setTimeout(() => {
            return resolve({
                id: 200,
                ddd: '88',
                telefone: '9999999',
                email: 'joao@email.com'
            })
        }, 3000);
    });
}

main();

async function main() {
    console.time('tempo')

    const cliente = await obterUnicoCliente();
    //Cometado do vamos usar agora Promise.all()
    // const endereco = await obterEndereco(cliente.id);
    // const contato = await obterContato(cliente.id);

    const resultado = await Promise.all([
        obterEndereco(cliente.id),
        obterContato(cliente.id)
    ]);

    const endereco = resultado[0];
    const contato = resultado[1];

    console.log(`
    Cliente: ${cliente.nome}
    Endereço: ${endereco.rua}, ${endereco.numero}
    Contato: (${contato.ddd}) ${contato.telefone}, ${contato.email}
    `)

    console.timeEnd('tempo');
}