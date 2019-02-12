describe('d3 drag events are not captured', () => {
  it('bug report', () => {
  	cy.visit("/");
  	cy.get("#d3-canvas")
  	.trigger("mousedown", 42, 42, {
        which: 1,
        force: true,
        view: window
      })
      .trigger("dragstart")
      .trigger("drag")
      .trigger("mouseup", 200, 200, {
        which: 1,
        force: true,
        view: window
      });
      cy.get("#tracker")
      .contains("1")
  })
})
