///<reference types='cypress'/>


describe("should it todo application ", function(){
    it("should have json server in 8080 port", function(){
        cy.visit("http://localhost:8080");
    })
    it("should have todo input box", function(){
        cy.visit("http://localhost:3000")
        cy.get(".input_bx").type("Learn Cypress").should("have.value","Learn Cypress")
    })
    it("should add some todo in the list",function(){
        cy.visit("http://localhost:3000");
        const text = "Learn React";
        cy.intercept("GET","http://localhost:8080/todo",[{
            id:1,
            title:"Learn React",
            status:false
        }]).as("todoReq");
        cy.intercept("POST","http://localhost:8080/todo",[{
            id:2,
            title:text,
            status:false
        }]).as("todoReq");

        cy.get(".input").type(text);
        cy.get(".add").click();

        cy.wait("@todoReq");

        cy.get(".todo-list .items").should("have.length",2).and("contain",text);
    })
})