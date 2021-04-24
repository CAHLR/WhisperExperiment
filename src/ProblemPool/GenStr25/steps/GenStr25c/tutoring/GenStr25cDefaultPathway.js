var hints = [{id: "GenStr25c-h1", type: "hint", dependencies: [], title: "Simplification", text: "Simplify each side of the equation as much as possible.", variabilization: {}}, {id: "GenStr25c-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["40+30p=0"], dependencies: ["GenStr25c-h1"], title: "Simplification", text: "Use the distributive property to simplify each side of the equation.", variabilization: {}}, {id: "GenStr25c-h3", type: "hint", dependencies: ["GenStr25c-h2"], title: "Subtraction property of equality", text: "When you subtract the same quantity from both sides of an equation, you still have equality.", variabilization: {}}, {id: "GenStr25c-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["30p=-40"], dependencies: ["GenStr25c-h3"], title: "Subtraction", text: "Subtract 6 from each side.", variabilization: {}}, {id: "GenStr25c-h5", type: "hint", dependencies: ["GenStr25c-h4"], title: "Division property of equality", text: "When you divide both sides of an equation by any non-zero number, you still have equality.", variabilization: {}}, {id: "GenStr25c-h6", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["p=-4/3"], dependencies: ["GenStr25c-h5"], title: "Division", text: "Divide 30 from each side.", variabilization: {}}, {id: "GenStr25c-h7", type: "hint", dependencies: ["GenStr25c-h6"], title: "Verification", text: "Check whether the result is a solution of the equation.", variabilization: {}}, {id: "GenStr25c-h8", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["TRUE"], dependencies: ["GenStr25c-h7"], title: "Verification", text: "Check whether $$\\left(5\\right) \\left(\\left(8\\right)+\\left(6\\right) \\frac{\\left(-4\\right)}{3}\\right)$$ equals 0.", choices: ["TRUE", "FALSE"], variabilization: {}}, ]; export {hints};