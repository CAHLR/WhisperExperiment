const step = {
  id: 'pythag1d',
  stepTitle: "4. Net Force Direction",
  stepBody: "In what direction $\\theta_{net}$ (in degrees with respect to the x-axis) is the net force?",
  stepAnswer: ["-1.06"],
  answerType: "numeric",
  hints: [
    {
      id: 'pythag1d-h1',
      title: "How to approach the problem",
      text: "How can you find the angle? Try drawing a triangle and using trigonometry",
      type: "hint"
    },
    {
      id: 'pythag1d-h2',
      title: "Formula",
      text: "Use $\\theta = \\tan^{-1}(\\sum F_y /\\sum F_x )$",
      type: "hint",
    },
    {
      id: 'pythag1d-h3',
      title: "Solution",
      text: "Using the formula and previous steps, we get $\\theta = \\tan^{-1}(\\sum F_y /\\sum F_x ) = \\tan^{-1}(-5.40 / 0.10) = -1.06$",
      type: "solution"
    }
  ]
}

export { step };