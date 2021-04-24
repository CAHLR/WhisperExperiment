var hints = [{id: "GenStr14a-h1", type: "hint", dependencies: [], title: "Simplification", text: "Simplify each side of the equation as much as possible.", variabilization: {}}, {id: "GenStr14a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["3-12j=-17"], dependencies: ["GenStr14a-h1"], title: "Simplification", text: "Use the distributive property to simplify each side of the equation.", variabilization: {}}, {id: "GenStr14a-h3", type: "hint", dependencies: ["GenStr14a-h2"], title: "Variable Terms", text: "Collect all variable terms on the left side of the equation.", variabilization: {}}, {id: "GenStr14a-h4", type: "hint", dependencies: ["GenStr14a-h3"], title: "Constant Terms", text: "Collect all constant terms on the right side of the equation.", variabilization: {}}, {id: "GenStr14a-h5", type: "hint", dependencies: ["GenStr14a-h4"], title: "Subtraction property of equality", text: "When you subtract the same quantity from both sides of an equation, you still have equality.", variabilization: {}}, {id: "GenStr14a-h6", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-12j=-20"], dependencies: ["GenStr14a-h5"], title: "Subtraction", text: "Subtract 3 from each side.", variabilization: {}}, {id: "GenStr14a-h7", type: "hint", dependencies: ["GenStr14a-h6"], title: "Division property of equality", text: "When you divide both sides of an equation by any non-zero number, you still have equality.", variabilization: {}}, {id: "GenStr14a-h8", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["j=5/3"], dependencies: ["GenStr14a-h7"], title: "Division", text: "Divide -12 from each side.", variabilization: {}}, {id: "GenStr14a-h9", type: "hint", dependencies: ["GenStr14a-h8"], title: "Verification", text: "Check whether the result is a solution of the equation.", variabilization: {}}, {id: "GenStr14a-h10", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["TRUE"], dependencies: ["GenStr14a-h9"], title: "Verification", text: "Check whether $$\\left(12\\right)-\\left(3\\right) \\left(\\left(4\\right) \\frac{5}{3}+\\left(3\\right)\\right)$$ equals -17.", choices: ["TRUE", "FALSE"], variabilization: {}}, ]; export {hints};