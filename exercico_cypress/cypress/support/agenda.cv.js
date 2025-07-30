describe('Agenda de Contatos - Testes E2E', () => {
    const baseUrl = 'https://agenda-contatos-react.vercel.app'

    beforeEach(() => {
        cy.visit(baseUrl)
    })

    it('Deve adicionar um novo contato', () => {
        cy.get('input[placeholder="Nome"]').type('João Teste')
        cy.get('input[placeholder="Email"]').type('joao@teste.com')
        cy.get('input[placeholder="Telefone"]').type('11999999999')
        cy.contains('Adicionar').click()

        cy.contains('João Teste').should('exist')
    })

    it('Deve editar um contato', () => {
        cy.contains('João Teste').parent().find('button').contains('Editar').click()

        cy.get('input[placeholder="Nome"]').clear().type('João Editado')
        cy.get('input[placeholder="Email"]').clear().type('joao@editado.com')
        cy.get('input[placeholder="Telefone"]').clear().type('11988888888')
        cy.contains('Salvar').click()

        cy.contains('João Editado').should('exist')
        cy.contains('João Teste').should('not.exist')
    })

    it('Deve remover um contato', () => {
        cy.contains('João Editado').parent().find('button').contains('Remover').click()

        cy.contains('João Editado').should('not.exist')
    })
})
