var hints = [{id: "quadratic4b-h1", type: "hint", dependencies: [], title: "Analyzing the Parabola", text: "Because a is negative, the parabola opens downward and has a maximum value. We need to determine the maximum value.", variabilization: {}}, {id: "quadratic4b-h2", type: "hint", dependencies: ["quadratic4b-h1"], title: "Finding the X-Coordinate of the Vertex", text: "The x-coordinate is equal to $$\\frac{-b}{2} a$$.", variabilization: {}}, {id: "quadratic4b-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["9/10"], dependencies: ["quadratic4b-h2"], title: "Determinig the X-Coordinate", text: "What is the x-coordinate?", variabilization: {}}, {id: "quadratic4b-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["61/20"], dependencies: ["quadratic4b-h3"], title: "Determing the Y-Coordinate of the Vertex", text: "The maximum value is the vertex's y-coordinate. When $$x=\\frac{9}{10}$$, $$f=$$?", variabilization: {}}, ]; export {hints};