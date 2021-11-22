var hints = [{id: "a137dddgre8a-h1", type: "hint", dependencies: [], title: "Factor into Primes", text: "Factor each coefficient into primes and write the variables with exponents in expanded form. A prime number is a counting number greater than 1, whose only factors are 1 and itself. The first few prime numbers are: 2, 3, 5, 7, 11, 13, etc.", variabilization: {}}, {id: "a137dddgre8a-h2", type: "hint", dependencies: ["a137dddgre8a-h1"], title: "Factor First Expression", text: "$$\\left(27\\right) x^3=\\left(3\\right) \\left(3\\right) \\left(3\\right) x x x$$", variabilization: {}}, {id: "a137dddgre8a-h3", type: "hint", dependencies: ["a137dddgre8a-h2"], title: "Factor Second Expression", text: "$$\\left(18\\right) x^4=\\left(2\\right) \\left(3\\right) \\left(3\\right) x x x x$$", variabilization: {}}, {id: "a137dddgre8a-h4", type: "hint", dependencies: ["a137dddgre8a-h2", "a137dddgre8a-h3"], title: "Identify Common Factors in each Column", text: "$$\\left(27\\right) x^3=\\left(3\\right) \\left(3\\right) \\left(3\\right) x x x$$ $$\\left(18\\right) x^4=\\left(2\\right) \\left(3\\right) \\left(3\\right) x x x x$$ 3, 3, x, x and x are shared by both expressions.", variabilization: {}}, {id: "a137dddgre8a-h5", type: "hint", dependencies: ["a137dddgre8a-h4"], title: "Multiply Common Factors", text: "Bring down the 3, 3, x, x and x, and then multiply. $$GCF=\\left(3\\right) \\left(3\\right) x x x$$", variabilization: {}}, {id: "a137dddgre8a-h6", type: "hint", dependencies: ["a137dddgre8a-h5"], title: "Multiply Common Factors", text: "$$GCF=\\left(9\\right) x^3$$", variabilization: {}}, ]; export {hints};