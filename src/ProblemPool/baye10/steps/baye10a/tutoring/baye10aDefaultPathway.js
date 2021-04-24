var hints = [{id: "baye10a-h1", type: "hint", dependencies: [], title: "Bayes' Theorem", text: "The probability of event A given event B may be computed by means of the following formula: P(A$$\mid$$B)=P(A)P(B$$\mid$$A)/P(B)", variabilization: {}}, {id: "baye10a-h2", type: "hint", dependencies: ["baye10a-h1"], title: "Events", text: "Let A denote the event “Patient is prescribed pain pills” and B denote “Patient is an addict” Then the problem can be restated as calculating P(A$$\mid$$B)=P(A)P(B$$\mid$$A)/P(B)", variabilization: {}}, {id: "baye10a-h3", type: "hint", dependencies: ["baye10a-h2"], title: "P(A)", text: "10% of patients entering the clinic are being prescribed pain killers, so $$P(A)=0.10$$", variabilization: {}}, {id: "baye10a-h4", type: "hint", dependencies: ["baye10a-h3"], title: "P(B)", text: "5% of the clinic’s patients are addicted to narcotics, so $$P(B)=0.05$$", variabilization: {}}, {id: "baye10a-h5", type: "hint", dependencies: ["baye10a-h4"], title: "P(B$$\mid$$A)", text: "Out of all the people prescribed pain pills, 8% are addicts. So, $$P(B$$\\mid$$A)=0.08$$", variabilization: {}}, {id: "baye10a-h6", type: "hint", dependencies: ["baye10a-h5"], title: "P(A$$\mid$$B)", text: "Use P(A), P(B), and P(B$$\mid$$A) to solve for P(A$$\mid$$B) using Bayes Theorem", variabilization: {}}, {id: "baye10a-h7", type: "hint", dependencies: ["baye10a-h6"], title: "P(A$$\mid$$B)", text: "P(A$$\mid$$B)=P(A)P(B$$\mid$$A)/P(B)=0.1*0.08/0.05=0.16", variabilization: {}}, ]; export {hints};