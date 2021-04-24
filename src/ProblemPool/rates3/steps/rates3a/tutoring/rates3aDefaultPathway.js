var hints = [{id: "rates3a-h1", type: "hint", dependencies: [], title: "Interpreting the problem", text: "We are computing the average rate of change of $$F(d)=\\frac{2}{d^2}$$ on the interval [2,6].", variabilization: {}}, {id: "rates3a-h2", type: "hint", dependencies: ["rates3a-h1"], title: "average rate of change", text: "To find the average rate of change, we calculate the change in y, the change in x, and the average rate of change is the ratio (change in y)/(change in x).", variabilization: {}}, {id: "rates3a-h3", type: "hint", dependencies: ["rates3a-h2"], title: "Computing endpoints", text: "We can start by computing the function values at each endpoint of the interval.", variabilization: {}}, {id: "rates3a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["1/2"], dependencies: ["rates3a-h3"], title: "Computing left endpoint", text: "What is F(2)?", subHints: [{id: "rates3a-h4-s1", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["1/2"], dependencies: [], title: "Computing left endpoint", text: "To find F(2), we plug in 2 for every d in the equation. What is $$\\frac{2}{{\\left(2\\right)}^2}$$?", variabilization: {}}], variabilization: {}}, {id: "rates3a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["1/18"], dependencies: ["rates3a-h3"], title: "Computing right endpoint", text: "What is F(6)?", subHints: [{id: "rates3a-h5-s1", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["1/18"], dependencies: [], title: "Computing right endpoint", text: "To find F(6), we plug in 6 for every d in the equation. What is $$\\frac{2}{{\\left(6\\right)}^2}$$?", variabilization: {}}], variabilization: {}}, {id: "rates3a-h6", type: "hint", dependencies: ["rates3a-h4", "rates3a-h5"], title: "Average rate of change", text: "The average rate of change $$=\\frac{F \\left(6\\right)-F \\left(2\\right)}{\\left(6\\right)-\\left(2\\right)}$$.", variabilization: {}}, {id: "rates3a-h7", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-1/9"], dependencies: ["rates3a-h6"], title: "Computing average rate of change", text: "What is the average rate of change, plugging in $$F(2)=\\frac{1}{2}$$ and $$F(6)=\\frac{1}{18}$$?", variabilization: {}}, ]; export {hints};