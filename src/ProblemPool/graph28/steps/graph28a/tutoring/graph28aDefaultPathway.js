var hints = [{id: "graph28a-h1", type: "hint", dependencies: [], title: "Factoring Expressions", text: "Factor out $$\\left(3\\right) x^2$$ out of the expression.", variabilization: {}}, {id: "graph28a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["3x^2(x^2-2x+ 1)"], dependencies: ["graph28a-h1"], title: "Simplifying Expressions", text: "What is the simplified expression?", variabilization: {}}, {id: "graph28a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["(x-1)^2"], dependencies: ["graph28a-h2"], title: "Factoring Expressions", text: "What is the factorization of $$x^2$$ + 2x + 1?", variabilization: {}}, {id: "graph28a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["1, 0"], dependencies: ["graph28a-h3"], title: "Finding Zeroes", text: "What are the values of x that make the expression 0?", variabilization: {}}, {id: "graph28a-h5", type: "hint", dependencies: ["graph28a-h4"], title: "Definition of Multiplicity", text: "The multiplicity is the power to which each part of the expression is raised", variabilization: {}}, ]; export {hints};