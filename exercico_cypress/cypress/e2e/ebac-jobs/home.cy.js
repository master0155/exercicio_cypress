describe('Teste para a home', () => {
    it('Deve Inserir os dados de entrada', () => {
        cy.visit('http://localhost:3000/')
        cy.get('input[placeholder="Nome"]').type('Alex Santos')
        cy.get('input[placeholder="E-mail"]').type('alex@ehotmail.com')
        cy.get('input[placeholder="Telefone"]').type('31998653265')

        cy.contains('button', 'Adicionar').click()
    })

    it('Encontar nome para editar', () => {

        const novoNome = 'Alex Santos'
        const Emailnovo = 'alex@ehotmail.com'
        const Telefonenovo = '31998653265'

        cy.visit('http://localhost:3000/')
        cy.contains('Alex Santos').should('exist')
        cy.contains('button', 'Editar').click()
        cy.get('input[placeholder="Nome"]').clear().type(novoNome)
        cy.get('input[placeholder="E-mail"]').clear().type(Emailnovo)
        cy.get('input[placeholder="Telefone"]').clear().type(Telefonenovo)
        cy.wait(2000)
        
    })

    it('Salvado alterações', () => {

        cy.visit('http://localhost:3000/')
        cy.get('button[type="submit"]')
            .should('be.visible')
        cy.wait(1000)
        cy.get('button[type="submit"]').click()
        cy.wait(2000)
    })

    it('Deletado', () => {

        cy.visit('http://localhost:3000/')
        cy.get('button.delete')
        cy.contains('Alex Santos').should('exist')
        .parents('.contato')     // sobe até o container principal do contato
        .find('button.delete')   // acha o botão "Deletar" dentro desse contato
        .click()   
    })


})


