var hints = [{id: "whole17a-h1", type: "hint", dependencies: [], title: "Finding Two Factors Whose Product is the Given Number", text: "The first step is to find two factors whose product is the given number.", variabilization: {}}, {id: "whole17a-h2", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["Yes"], dependencies: ["whole17a-h1"], title: "Finding Two Factors Whose Product is the Given Number", text: "Are 2 and 147 factors of 294?", choices: ["Yes", "No"], variabilization: {}}, {id: "whole17a-h3", type: "hint", dependencies: ["whole17a-h2"], title: "Prime Number Factors", text: "If a factor is prime, that means it can't be divided further. Thus, it is a prime factor of the number.", variabilization: {}}, {id: "whole17a-h4", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["Yes"], dependencies: ["whole17a-h3"], title: "Verifying if a Factor is Prime", text: "Is 2 prime?", choices: ["Yes", "No"], variabilization: {}}, {id: "whole17a-h5", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["No"], dependencies: ["whole17a-h4"], title: "Verifying if a Factor is Prime", text: "Is 147 prime?", choices: ["Yes", "No"], variabilization: {}}, {id: "whole17a-h6", type: "hint", dependencies: ["whole17a-h5"], title: "Proceeding With a Factor that is Not Prime", text: "The next step is to divide factors that are not prime into two more factors.", variabilization: {}}, {id: "whole17a-h7", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["Yes"], dependencies: ["whole17a-h6"], title: "Finding Two Factors Whose Product is the Given Number", text: "Are 3 and 49 factors of 147?", choices: ["Yes", "No"], variabilization: {}}, {id: "whole17a-h8", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["Yes"], dependencies: ["whole17a-h7"], title: "Verifying if a Factor is Prime", text: "Is 3 prime?", choices: ["Yes", "No"], variabilization: {}}, {id: "whole17a-h9", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["No"], dependencies: ["whole17a-h8"], title: "Verifying if a Factor is Prime", text: "Is 49 prime?", choices: ["Yes", "No"], variabilization: {}}, {id: "whole17a-h10", type: "hint", dependencies: ["whole17a-h9"], title: "Proceeding With a Factor that is Not Prime", text: "Continue to divide factors that are not prime into two more factors.", variabilization: {}}, {id: "whole17a-h11", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["Yes"], dependencies: ["whole17a-h10"], title: "Finding Two Factors Whose Product is the Given Number", text: "Are 7 and 7 factors of 49?", choices: ["Yes", "No"], variabilization: {}}, {id: "whole17a-h12", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["Yes"], dependencies: ["whole17a-h11"], title: "Verifying if a Factor is Prime", text: "Is 7 prime?", choices: ["Yes", "No"], variabilization: {}}, {id: "whole17a-h13", type: "hint", dependencies: ["whole17a-h12"], title: "Final Step", text: "The final step is to write the composite number as the product of all the prime factors.", variabilization: {}}, {id: "whole17a-h14", type: "hint", dependencies: ["whole17a-h13"], title: "Answer", text: "The found prime factors of 294 were 2,3,7, and 7. Thus $$\\left(2\\right) \\left(3\\right) \\left(7\\right) \\left(7\\right)=294$$, and $$\\left(2\\right) \\left(3\\right) \\left(7\\right) \\left(7\\right)$$ is the factorization of 294.", variabilization: {}}, ]; export {hints};