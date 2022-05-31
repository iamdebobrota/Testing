///<reference types='cypress'/>


describe("Testing basics",function(){
    it("should not crash",function(){
        cy.visit("http://localhost:8080");
        // cy.get(".input").should("exist");
    });
    it("should have className", function(){
        cy.visit("http://localhost:3000");
        cy.get(".input").should("exist")
    })
    it("should type anythings",function(){
        const text = "My name is debu";
        cy.visit("http://localhost:3000");
      
        cy.get(".input").type("My name is debu").should("have.value",text);
    })
})

