var hints = [{id: "linearmodels14a-h1", type: "hint", dependencies: [], title: "Drawing a Diagram", text: "It might help here to draw a picture of the situation. See the attached image. It would then be helpful to introduce a coordinate system. While we could place the origin anywhere, placing it at Westborough seems convenient. This puts Agritown at coordinates (30,10),(30,10), and Eastborough at (20,0).", variabilization: {}}, {id: "linearmodels14a-h2", type: "hint", dependencies: ["linearmodels14a-h1"], title: "Determining the Slope", text: "Using the point (30,10), we can find the slope of the line from Westborough to Agritown. Slope $$=$$ Change in $$\\frac{y}{Change}$$ in x $$=$$ $$\\frac{\\left(30\\right)-\\left(0\\right)}{\\left(10\\right)-\\left(0\\right)}=3$$.", variabilization: {}}, {id: "linearmodels14a-h3", type: "hint", dependencies: ["linearmodels14a-h2"], title: "Writing The Equation of the Line", text: "Now we can write an equation to describe the road from Westborough to Agritown, $$W(x)=\\frac{1}{3} x$$. From this, we can determine the perpendicular road to Eastborough will have slope $$m=-3$$. Because the town of Eastborough is at the point (20,0), we can find the equation.", variabilization: {}}, {id: "linearmodels14a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["60"], dependencies: ["linearmodels14a-h3"], title: "Solving For b", text: "$$E(x)=-\\left(3\\right) x+b$$. When $$x=20$$, $$b=$$?", variabilization: {}}, {id: "linearmodels14a-h5", type: "hint", dependencies: ["linearmodels14a-h4"], title: "Setting The Lines Equal", text: "We can now find the coordinates of the junction of the roads by finding the intersection of these lines. Setting them equal, $$\\frac{1}{3} x=-\\left(3\\right) x+\\left(60\\right)$$.", variabilization: {}}, {id: "linearmodels14a-h6", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["18"], dependencies: ["linearmodels14a-h5"], title: "Solving For x", text: "$$\\frac{1}{3} x=-\\left(3\\right) x+\\left(60\\right)$$, $$x=$$?", variabilization: {}}, {id: "linearmodels14a-h7", type: "hint", dependencies: ["linearmodels14a-h6"], title: "Subsituting x Back into the Original Equation", text: "Next, subsitute $$x=18$$ back into the original equation. $$y=W(18)=\\frac{1}{3} \\left(18\\right)$$.", variabilization: {}}, {id: "linearmodels14a-h8", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["6"], dependencies: ["linearmodels14a-h7"], title: "Solving for y", text: "$$y=\\frac{1}{3} \\left(18\\right)$$, $$y=$$?", variabilization: {}}, {id: "linearmodels14a-h9", type: "hint", dependencies: ["linearmodels14a-h8"], title: "Interpreting the Answer", text: "Thus, the roads intersect at (18,6). Using the distance formula, we can now find the distance from Westborough to the junction.", variabilization: {}}, ]; export {hints};