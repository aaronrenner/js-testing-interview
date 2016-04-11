describe("Person", function() {

  describe("initialization", function(){
    it("sets firstName", function(){
      var person = new Person({firstName: "Fred", lastName: "Claus"});

      expect(person.firstName).toBe("Fred");
    });

    it("sets lastName");

    it("sets middleName");
  });

  describe("#getFullName", function(){
  });
});
