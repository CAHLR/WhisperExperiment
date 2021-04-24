import hints from "./polyzero32a-index.js"; const step = {id: "polyzero32a", stepAnswer: ["(2, 2, 0), (2, 0, 2), (0, 2, 2), (0, 0, 4)"], problemType: "TextBox", stepTitle: "Use Descartes’ Rule of Signs to determine the possible numbers of positive and negative real zeros for f(x) $$=$$ $$-\\left(x^4\\right)$$ - $$\\left(3\\right) x^3$$ + $$\\left(6\\right) x^2$$ - $$\\left(4\\right) x$$ - 12. (Consider that there are complex roots as well, provide the answer as a list of coordinates of the form: (number of positive real zeros, number of negative real zeros, number of complex zeros). Sort the list in descending order, i.e. compare the first coordinate and place whichever has a higher value earlier in the list. If there is a tie, look at the second, then third coordinate. Example: (4, 0, 0), (2, 2, 0), (0, 4,0), (0, 2, 2) )", stepBody: "According to Descartes’ Rule of Signs, if we let f(x) $$=$$ $$a_n x^n$$ + $$a_{} \\left(n-\\left(1\\right)\\right) x^{n-\\left(1\\right)}$$ + ... + $$a_1 x$$ + $$a_0$$ be a polynomial function with real coefficients: The number of positive real zeros is either equal to the number of sign changes of f(x) or is less than the number of sign changes by an even integer. The number of negative real zeros is either equal to the number of sign changes of f(-x) or is less than the number of sign changes by an even integer.", answerType: "string", hints: hints, variabilization: {}}; export {step};