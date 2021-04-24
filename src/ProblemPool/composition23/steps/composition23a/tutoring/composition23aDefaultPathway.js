var hints = [{id: "composition23a-h1", type: "hint", dependencies: [], title: "Composition", text: "Remember that to solve f(g(x)), we need to plug in the value of g(x) into the value of x in f(x).", variabilization: {}}, {id: "composition23a-h2", type: "hint", dependencies: ["composition23a-h1"], title: "Composition", text: "We need to plug in g(x), or $$\\sqrt{x-\\left(2\\right)}$$, for the x in the function f: $${\\sqrt{x+\\left(2\\right)}}^2+\\left(1\\right)$$.", variabilization: {}}, {id: "composition23a-h3", type: "hint", dependencies: ["composition23a-h2"], title: "Exponents", text: "Based off the Order of Operations, the first step is the exponents: $${\\sqrt{x+\\left(2\\right)}}^2=x+\\left(2\\right)$$.", variabilization: {}}, {id: "composition23a-h4", type: "hint", dependencies: ["composition23a-h3"], title: "Multiplication", text: "Now, our composition function reads $$x+\\left(2\\right)+\\left(1\\right)$$. The next step is to add the constants: $$x+\\left(2\\right)+\\left(1\\right)=x+\\left(3\\right)$$.", variabilization: {}}, ]; export {hints};