const QuestionsData = [
    // {
    //     question: `Solve for $x$: $3x + 5 = 20$`,
    //     answers: ["$x = 3$", "$x = 5$", "$x = 6$", "$x = 7$"],
    //     correctAnswerIndex: 1,
    //     explanation: "To solve for $x$ in the equation $3x + 5 = 20$, you need to isolate the variable on one side of the equation. Start by subtracting $5$ from both sides, which simplifies the equation to $3x = 15$. Next, divide both sides by $3$ to solve for $x$, resulting in $x = 5$. Therefore, the correct answer is $x = 5$."
    // },
    // {
    //     question: `Solve for $y$: $4y − 7 = 9$`,
    //     answers: ["$y = 2$", "$y = 3$", "$y = 4$", "$y = 5$"],
    //     correctAnswerIndex: 2,
    //     explanation: "To solve for $y$ in the equation $4y - 7 = 9$, you need to isolate the variable on one side. Start by adding $7$ to both sides of the equation, which gives $4y = 16$. Then, divide both sides by $4$ to solve for $y$, resulting in $y = 4$. Therefore, the correct answer is $y = 4$."
    // },
    // {
    //     question: `Simplify by collecting the like terms: $2ab^2 + 5a^2b - ab^2 + 5ba^2$`,
    //     answers: ["$ab^2 + 10a^2b$", "$ab^2 + 5a^2b$", "$2ab^2 + 10a^2b$", "$ab^2 + 6ab$"],
    //     correctAnswerIndex: 0,
    //     explanation: "Combine the like terms $2ab^2 - ab^2$ to get $ab^2$. The terms $5a^2b$ and $5ba^2$ are like terms, simplifying to $10ab$."
    // },
    // {
    //     question: `Simplify the following algebraic equation: $\\dfrac{x+3}{4} + \\dfrac{x+2}{5}$`,
    //     answers: ["$\\dfrac{9x+23}{20}$", "$\\dfrac{5x+7}{20}$", "$\\dfrac{7x+5}{20}$", "$\\dfrac{9x+15}{20}$"],
    //     correctAnswerIndex: 0,
    //     explanation: "To simplify $\\dfrac{x+3}{4} + \\dfrac{x+2}{5}$, find a common denominator, which is $20$. Multiply the numerator of the first fraction by $5$ and the numerator of the second fraction by $4$, resulting in $\\dfrac{5(x+3) + 4(x+2)}{20}$. Simplify the expression in the numerator to get $\\dfrac{9x+13}{20}$."
    // },
    // {
    //     question: `Simplify the following algebraic equation: $\\dfrac{8}{3x-2} - \\dfrac{3}{1-x}$`,
    //     answers: ["$\\dfrac{11 - 17x}{(3x-2)(1-x)}$", "$\\dfrac{17x - 14}{(3x-2)(1-x)}$", "$\\dfrac{14 + 17x}{(3x-2)(1-x)}$", "$\\dfrac{14 - 17x}{(3x-2)(1-x)}$"],
    //     correctAnswerIndex: 3,
    //     explanation: "To simplify $\\dfrac{8}{3x-2} - \\dfrac{3}{1-x}$, first note that $1-x$ can be rewritten as $-(x-1)$. This allows us to express the equation as $\\dfrac{8}{3x-2} + \\dfrac{3}{x-1}$. Next, find the common denominator, which is $(3x-2)(1-x)$. The resulting numerator will be $8(1-x) - 3(3x-2)$. Simplifying the expression leads to $\\dfrac{14 - 17x}{(3x-2)(1-x)}$."
    // },
    // {
    //     question: `Solve the following equation for $x$. You can check your solution by substitution: $2(4x - 5) = -7x$`,
    //     answers: ["$x = \\dfrac{5}{4}$", "$x = \\dfrac{3}{2}$", "$x = \\dfrac{2}{3}$", "$x = \\dfrac{-2}{3}$"],
    //     correctAnswerIndex: 2,
    //     explanation: "Start by expanding the equation $2(4x - 5) = -7x$, which gives $8x - 10 = -7x$. Next, add $7x$ to both sides to get $15x - 10 = 0$. Add $10$ to both sides to obtain $15x = 10$, and finally divide both sides by $15$, yielding $x = \\dfrac{10}{15} = \\dfrac{2}{3}$. Substituting $x = \\dfrac{2}{3}$ back into the original equation confirms that it satisfies the equation."
    // },
    // {
    //     question: `Solve the following inequality: $2x + 6 < 14$`,
    //     answers: ["$x > 4$", "$x < 4$", "$x \\leq 4$", "$x \\geq 4$"],
    //     correctAnswerIndex: 1,
    //     explanation: "Start by isolating $x$ in the inequality $2x + 6 < 14$. Subtract $6$ from both sides to get $2x < 8$. Then, divide both sides by $2$ to find $x < 4$."
    // },
    // {
    //     question: `Solve the following inequality. Remember, if you multiply or divide by a negative number, you must reverse the inequality sign: $-5x + 7 \\leq 9$`,
    //     answers: ["$x \\geq -\\dfrac{2}{5}$", "$x \\leq -\\dfrac{2}{5}$", "$x \\geq \\dfrac{2}{5}$", "$x \\leq \\dfrac{2}{5}$"],
    //     correctAnswerIndex: 0,
    //     explanation: "Start by isolating $x$ in the inequality $-5x + 7 \\leq 9$. Subtract $7$ from both sides to get $-5x \\leq 2$. Next, divide both sides by $-5$. Since you are dividing by a negative number, reverse the inequality sign to get $x \\geq -\\dfrac{2}{5}$."
    // },
    // {
    //     question: `Solve the following inequality: $x + 1 < 2x - 5$`,
    //     answers: ["$x \\leq 6$", "$x < 6$", "$x > 6$", "$x \\geq 6$"],
    //     correctAnswerIndex: 2,
    //     explanation: "Begin by isolating $x$ on one side of the inequality. Subtract $x$ from both sides to get $1 < x - 5$. Next, add $5$ to both sides to find $x > 6$."
    // },
    // {
    //     question: `Solve the following inequality: $3(x+2) \\leq 4(x-1)$`,
    //     answers: ["$x \\geq 10$", "$x \\leq 10$", "$x \\geq -10$", "$x \\leq -10$"],
    //     correctAnswerIndex: 0,
    //     explanation: "Start by expanding both sides of the inequality: $3x + 6 \\leq 4x - 4$. Next, subtract $3x$ from both sides to obtain $6 \\leq x - 4$. Finally, add $4$ to both sides to find $x \\geq 10$."
    // },
    // {
    //     question: `Solve the following inequality by first multiplying by the Lowest Common Denominator (LCD): $\\dfrac{1+x}{2} < \\dfrac{x-1}{3}$`,
    //     answers: ["$x \\geq -5$", "$x \\leq -5$", "$x > -5$", "$x < -5$"],
    //     correctAnswerIndex: 3,
    //     explanation: "Start by finding the Lowest Common Denominator (LCD), which is $6$. Multiply both sides of the inequality by $6$ to eliminate the fractions: $3(1+x) < 2(x-1)$. Expand both sides to get $3 + 3x < 2x - 2$. Next, subtract $2x$ from both sides to obtain $x + 3 < -2$. Finally, subtract $3$ from both sides to find $x < -5$."
    // },
    // {
    //     question: `Solve the following pairs of simultaneous equations, using the method of substitution: $y = 4x + 2$ and $y = x + 8$`,
    //     answers: ["$x = 4, \\, y = 14$", "$x = 2, \\, y = 12$", "$x = 3, \\, y = 11$", "$x = 2, \\, y = 10$"],
    //     correctAnswerIndex: 3,
    //     explanation: "Start by substituting $y = x + 8$ into the first equation $y = 4x + 2$. This gives $x + 8 = 4x + 2$. Next, subtract $x$ from both sides to get $8 = 3x + 2$. Subtract $2$ from both sides to find $6 = 3x$. Divide by $3$ to solve for $x$, resulting in $x = 2$. Substitute $x = 2$ back into either original equation, e.g., $y = 4x + 2$, to find $y = 10$. Therefore, the solution is $x = 2, \\, y = 10$."
    // },
    // {
    //     question: `Solve the following pairs of simultaneous equations, using the method of substitution: $y = 4 - x$ and $y = x - 2$`,
    //     answers: ["$x = 2, \\, y = 2$", "$x = 3, \\, y = 1$", "$x = 4, \\, y = 2$", "$x = 1, \\, y = 3$"],
    //     correctAnswerIndex: 1,
    //     explanation: "Start by substituting $y = x - 2$ into the first equation $y = 4 - x$. This gives $x - 2 = 4 - x$. Next, add $x$ to both sides to get $2x - 2 = 4$. Add $2$ to both sides to find $2x = 6$. Divide by $2$ to solve for $x$, resulting in $x = 3$. Substitute $x = 3$ back into either original equation, e.g., $y = x - 2$, to find $y = 1$. Therefore, the solution is $x = 3, \\, y = 1$."
    // },
    // {
    //     question: `Solve the following pairs of simultaneous equations, using the method of substitution: $y = 5x - 1$ and $y = \\dfrac{11 - 3x}{2}$`,
    //     answers: ["$x = 1, \\, y = 4$", "$x = 2, \\, y = 9$", "$x = -1, \\, y = 6$", "$x = 3, \\, y = 7$"],
    //     correctAnswerIndex: 0,
    //     explanation: "Start by substituting $y = 5x - 1$ into the second equation $y = \\dfrac{11 - 3x}{2}$. This gives $5x - 1 = \\dfrac{11 - 3x}{2}$. Multiply both sides by $2$ to eliminate the fraction: $10x - 2 = 11 - 3x$. Add $3x$ to both sides to get $13x - 2 = 11$. Add $2$ to both sides to find $13x = 13$. Divide by $13$ to solve for $x$, resulting in $x = 1$. Substitute $x = 1$ back into the first equation $y = 5x - 1$ to find $y = 4$. Therefore, the solution is $x = 1, \\, y = 4$."
    // },
    // {
    //     question: `Solve the following pairs of simultaneous equations, using the method of substitution: $y = x - 2$ and $3x - 2y = 7$`,
    //     answers: ["$x = 2, \\, y = 0$", "$x = 3, \\, y = 1$", "$x = 4, \\, y = 2$", "$x = 1, \\, y = 3$"],
    //     correctAnswerIndex: 1,
    //     explanation: "Start by substituting $y = x - 2$ into the second equation $3x - 2y = 7$. This gives $3x - 2(x - 2) = 7$. Expand and simplify the equation: $3x - 2x + 4 = 7$, which simplifies to $x + 4 = 7$. Subtract $4$ from both sides to find $x = 3$. Substitute $x = 3$ back into the first equation $y = x - 2$ to find $y = 1$. Therefore, the solution is $x = 3, \\, y = 1$."
    // },
    // {
    //     question: `Solve the following pairs of simultaneous equations, using the method of substitution: $x = 2y + 3$ and $11y - 5x = -14$`,
    //     answers: ["$x = 7, \\, y = -1$", "$x = 3, \\, y = 2$", "$x = 5, \\, y = 1$", "$x = 4, \\, y = 0$"],
    //     correctAnswerIndex: 2,
    //     explanation: "Start by substituting $x = 2y + 3$ into the second equation $11y - 5x = -14$. This gives $11y - 5(2y + 3) = -14$. Expand and simplify the equation: $11y - 10y - 15 = -14$, which simplifies to $y - 15 = -14$. Add $15$ to both sides to find $y = 1$. Substitute $y = 1$ back into the first equation $x = 2y + 3$ to find $x = 5$. Therefore, the solution is $x = 5, \\, y = 1$."
    // },
    // {
    //     question: `Solve the following pairs of simultaneous equations, using the elimination method: $x + y = 7$ and $5x - y = 5$`,
    //     answers: ["$x = 2, \\, y = 5$", "$x = 3, \\, y = 4$", "$x = 1, \\, y = 6$", "$x = 4, \\, y = 3$"],
    //     correctAnswerIndex: 0,
    //     explanation: "Start by adding the two equations to eliminate $y$. The equations are $x + y = 7$ and $5x - y = 5$. Adding them gives $(x + y) + (5x - y) = 7 + 5$, which simplifies to $6x = 12$. Divide both sides by $6$ to find $x = 2$. Substitute $x = 2$ back into the first equation $x + y = 7$ to find $y = 5$. Therefore, the solution is $x = 2, \\, y = 5$."
    // },
    // {
    //     question: `Solve the following pairs of simultaneous equations, using the elimination method: $2x + 3y = 1$ and $2x + 5y = -1$`,
    //     answers: ["$x = -2, \\, y = 1$", "$x = 1, \\, y = -2$", "$x = -1, \\, y = 2$", "$x = 2, \\, y = -1$"],
    //     correctAnswerIndex: 3,
    //     explanation: "To eliminate $x$, subtract the first equation from the second equation: $(2x + 5y) - (2x + 3y) = -1 - 1$. This simplifies to $2y = -2$. Divide both sides by $2$ to find $y = -1$. Substitute $y = -1$ back into the first equation $2x + 3y = 1$ to find $2x + 3(-1) = 1$, which simplifies to $2x - 3 = 1$. Add $3$ to both sides to get $2x = 4$, and then divide by $2$ to find $x = 2$. Therefore, the solution is $x = 2, \\, y = -1$."
    // },
    // {
    //     question: `Solve the following pairs of simultaneous equations, using the elimination method: $3x + 5y = 8$ and $x - 2y = -1$`,
    //     answers: ["$x = 1, \\, y = 1$", "$x = 2, \\, y = 0$", "$x = 0, \\, y = 2$", "$x = -1, \\, y = 1$"],
    //     correctAnswerIndex: 0,
    //     explanation: "First, multiply the second equation by $3$ to align the $x$ terms: $3(x - 2y) = 3(-1)$, giving $3x - 6y = -3$. Now subtract this from the first equation: $(3x + 5y) - (3x - 6y) = 8 - (-3)$. This simplifies to $11y = 11$. Divide both sides by $11$ to find $y = 1$. Substitute $y = 1$ back into the second equation $x - 2y = -1$ to find $x - 2(1) = -1$, which simplifies to $x = 1$. Therefore, the solution is $x = 1, \\, y = 1$."
    // },
    // {
    //     question: `Solve the following pairs of simultaneous equations, using the elimination method: $3x + 2y = 6$ and $5x + 3y = 11$`,
    //     answers: ["$x = 4, \\, y = -3$", "$x = 3, \\, y = -2$", "$x = 2, \\, y = -1$", "$x = 1, \\, y = 0$"],
    //     correctAnswerIndex: 0,
    //     explanation: `To eliminate $y$, multiply the first equation by $3$ and the second equation by $2$ to align the $y$ terms: $\\\\$
    //     $3(3x + 2y) = 3(6)$ gives $9x + 6y = 18$, and $2(5x + 3y) = 2(11)$ gives $10x + 6y = 22$. $\\\\$
    //     Now subtract the first equation from the second: $\\\\$
    //     $(10x + 6y) - (9x + 6y) = 22 - 18$. $\\\\$
    //     This simplifies to $x = 4$. Substitute $x = 4$ back into the first equation $3x + 2y = 6$ to find: $\\\\$
    //     $3(4) + 2y = 6$, which simplifies to $12 + 2y = 6$. $\\\\$
    //     Subtract $12$ from both sides to get $2y = -6$, and then divide by $2$ to find $y = -3$. $\\\\$
    //     Therefore, the solution is $x = 4, \\, y = -3$.`
    // },
    // {
    //     question: `Alex buys 4 bolts and 6 washers for \\$2.20 and Holly spends \\$1.80 on 3 bolts and 5 washers at the same local hardware store. Determine the costs of each bolt and each washer.`,
    //     answers: ["Bolts cost \\$0.40, washers cost \\$0.10", "Bolts cost \\$0.20, washers cost \\$0.20", "Bolts cost \\$0.10, washers cost \\$0.30", "Bolts cost \\$0.30, washers cost \\$0.10"],
    //     correctAnswerIndex: 2,
    //     explanation: `Let $x$ be the cost of a bolt and $y$ be the cost of a washer. The problem gives the following system of equations based on the purchases: $\\\\$
    //     $4x + 6y = 2.20$ and $3x + 5y = 1.80$ $\\\\$
    //     To solve, multiply the first equation by $3$ and the second by $4$ to align the coefficients of $x$. We get: $\\\\$
    //     $12x + 18y = 6.60$ and $12x + 20y = 7.20$ $\\\\$
    //     Now, subtract the first equation from the second: $\\\\$
    //     $2y = 0.60$ $\\\\$
    //     Solving for $y$ gives $y = 0.30$, so the cost of a washer is \\$0.30. Substitute $y = 0.30$ into the first equation: $\\\\$
    //     $4x + 6(0.30) = 2.20$ $\\\\$
    //     Simplifying, $4x + 1.80 = 2.20$, which gives $4x = 0.40$, so $x = 0.10$. Therefore, bolts cost \\$0.10, and washers cost \\$0.30.`
    // },
    // {
    //     question: `A vanilla thick shake is \\$2 more than a fruit juice. If 3 vanilla thick shakes and 5 fruit juices cost \\$30, determine their individual prices.`,
    //     answers: ["Thick shakes cost \\$4, juices cost \\$2", "Thick shakes cost \\$5, juices cost \\$3", "Thick shakes cost \\$6, juices cost \\$4", "Thick shakes cost \\$3, juices cost \\$1"],
    //     correctAnswerIndex: 1,
    //     explanation: `Let $x$ be the cost of a fruit juice and $y$ be the cost of a vanilla thick shake. The problem provides the following two equations: $\\\\$
    //     $y = x + 2$ (since a thick shake is \\$2 more than a fruit juice), and, $3y + 5x = 30$ (cost of 3 thick shakes and 5 fruit juices) $\\\\$
    //     Substitute $y = x + 2$ into the second equation: $3(x + 2) + 5x = 30$ $\\\\$
    //     Expanding and simplifying: $3x + 6 + 5x = 30$ becomes $8x + 6 = 30$ $\\\\$
    //     Subtract $6$ from both sides: $8x = 24$ $\\\\$
    //     Divide by $8$: $x = 3$ $\\\\$
    //     So, the cost of a fruit juice is \\$3. Substitute $x = 3$ into $y = x + 2$: $y = 3 + 2 = 5$ $\\\\$
    //     Therefore, the cost of a thick shake is \\$5, and the cost of a fruit juice is \\$3.`
    // },
    // // Chapter 8A, Question 10e
    // {
    //     question: `Expand and simplify the following: $(2a+3)(a-5) - (a+6)(2a+5)$`,
    //     answers: ["$24a + 45$", "$-12a - 30$", "$-24a - 45$", "$12a + 30$"],
    //     correctAnswerIndex: 2,
    //     explanation: `First, expand both products: $\\\\$
    //     $(2a+3)(a-5) = 2a^2 - 10a + 3a - 15 = 2a^2 - 7a - 15$ $\\\\$
    //     $(a+6)(2a+5) = 2a^2 + 5a + 12a + 30 = 2a^2 + 17a + 30$ $\\\\$
    //     Now subtract the second expression from the first: $\\\\$
    //     $[2a^2 - 7a - 15] - [2a^2 + 17a + 30] = 2a^2 - 7a - 15 - 2a^2 - 17a - 30$ $\\\\$
    //     Simplify: $\\\\$
    //     $-24a - 45$ $\\\\$
    //     Therefore, the simplified expression is $-24a - 45$.`
    // },
    // Chapter 8A, Question 10i
    {
        question: `Expand and simplify the following: $3 - (2x - 9)^2$`,
        answers: ["$4x^2 + 36x - 78$", "$-4x^2 + 36x - 78$", "$4x^2 - 36x + 78$", "$-4x^2 - 36x + 78$"],
        correctAnswerIndex: 1,
        explanation: `First, expand $(2x - 9)^2$: $\\\\$
        $(2x - 9)(2x - 9) = 4x^2 - 36x + 81$ $\\\\$
        Now substitute back into the expression: $3 - (4x^2 - 36x + 81)$ $\\\\$
        Distribute the negative sign: $3 - 4x^2 + 36x - 81$ $\\\\$
        Simplify: $\\\\$
        $-4x^2 + 36x - 78$ $\\\\$
        Therefore, the expanded and simplified expression is $-4x^2 + 36x - 78$.`
    },
    // // Chapter 8B, Question 5e
    // {
    //     question: `Factorise the following: $3x^2 - 75y^2$`,
    //     answers: ["$3(x + 5y)(x + 5y)$", "$3(x + 5y)(x - 5y)$", "$(3x + 5y)(x - 25y)$", "$(3x - 5y)(x + 25y)$"],
    //     correctAnswerIndex: 1,
    //     explanation: `First, factor out the common factor of 3: $\\\\$
    //     $3(x^2 - 25y^2)$ $\\\\$
    //     Recognise that $x^2 - 25y^2$ is a difference of squares: $\\\\$
    //     $x^2 - 25y^2 = (x + 5y)(x - 5y)$ $\\\\$
    //     Therefore, the factorised form is $3(x + 5y)(x - 5y)$.`
    // },
    // Chapter 8B, Question 5m
    {
        question: `Factorise the following: $(3x+5)^2 - x^2$`,
        answers: ["$(4x+5)(2x+5)$", "$(3x+5)(x+5)$", "$(3x-5)(x+5)$", "$(4x-5)(2x+5)$"],
        correctAnswerIndex: 0,
        explanation: `Recognise that this is a difference of squares: $\\\\$
        $(3x+5)^2 - x^2 = [(3x+5) + x][(3x+5) - x]$ $\\\\$
        Simplify the factors: $\\\\$
        $(3x+5+x)(3x+5-x) = (4x+5)(2x+5)$ $\\\\$
        Therefore, the factorised form is $(4x+5)(2x+5)$.`
    },
    // // Chapter 8B, Question 7a
    // {
    //     question: `Factorise by grouping: $x^2 + 4x + ax + 4a$`,
    //     answers: ["$(x+4)(x+a)$", "$(x+4)(x-a)$", "$(x-4)(x+a)$", "$(x+2)(x+a)$"],
    //     correctAnswerIndex: 0,
    //     explanation: `Group the terms in pairs: $\\\\$
    //     $(x^2 + 4x) + (ax + 4a)$ $\\\\$
    //     Factor out the common terms from each group: $\\\\$
    //     $x(x + 4) + a(x + 4)$ $\\\\$
    //     Now factor out the common binomial factor $(x + 4)$: $\\\\$
    //     $(x + 4)(x + a)$ $\\\\$
    //     Therefore, the factorised form is $(x + 4)(x + a)$.`
    // },
    // Chapter 8B, Question 7g
    {
        question: `Factorise by grouping: $x^2 - ax - 4x + 4a$`,
        answers: ["$(x - a)(x - 4)$", "$(x + a)(x - 4)$", "$(x - a)(x + a)$", "$(x + a)(x + 4)$"],
        correctAnswerIndex: 0,
        explanation: `Group the terms in pairs: $\\\\$
        $(x^2 - ax) - (4x - 4a)$ $\\\\$
        Factor out the common terms from each group: $\\\\$
        $x(x - a) - 4(x - a)$ $\\\\$
        Now factor out the common binomial factor $(x - a)$: $\\\\$
        $(x - a)(x - 4)$ $\\\\$
        Therefore, the factorised form is $(x - a)(x - 4)$.`
    },
    // // Chapter 8C, Question 5b
    // {
    //     question: `Factorise by first taking out the common factor: $3x^2 + 21x + 36$`,
    //     answers: ["$3(x-4)(x+3)$", "$3(x+4)(x+3)$", "$3(x-4)(x-3)$", "$3(x+4)(x-3)$"],
    //     correctAnswerIndex: 1,
    //     explanation: `First, factor out the common factor of $3$: $\\\\$
    //     $3(x^2 + 7x + 12)$ $\\\\$
    //     Now factorise the quadratic expression $x^2 + 7x + 12$: $\\\\$
    //     $x^2 + 7x + 12 = (x+4)(x+3)$ $\\\\$
    //     Therefore, the factorised form is $3(x+4)(x+3)$.`
    // },
    // Chapter 8C. Question 5h
    {
        question: `Factorise by first taking out the common factor: $-3x^2 + 9x - 6$`,
        answers: ["$3(x-2)(x-1)$", "$-3(x+2)(x-1)$", "$-3(x-2)(x-1)$", "$-3(x-2)(x+1)$"],
        correctAnswerIndex: 2,
        explanation: `First, factor out the common factor of $-3$: $\\\\$
        $-3(x^2 - 3x + 2)$ $\\\\$
        Now factorise the quadratic expression $x^2 - 3x + 2$: $\\\\$
        $x^2 - 3x + 2 = (x-2)(x-1)$ $\\\\$
        Therefore, the factorised form is $-3(x-2)(x-1)$.`
    },
    // Chapter 8c, Question 7b
    {
        question: `Use factorisation to simplify these algebraic fractions: $\\dfrac{x^2 + x - 12}{x+4}$`,
        answers: ["$x + 3$", "$x - 3$", "$x + 4$", "$x - 4$"],
        correctAnswerIndex: 1,
        explanation: `First, factorise the quadratic in the numerator: $\\\\$
        $x^2 + x - 12 = (x - 3)(x + 4)$ $\\\\$
        Now, cancel out the common factor $(x + 4)$ from the numerator and denominator: $\\\\$
        $\\dfrac{(x - 3)(x + 4)}{x + 4} = x - 3$ $\\\\$
        Therefore, the simplified expression is $x - 3$.`
    },
    // // Chapter 8c, Question 7g
    // {
    //     question: `Use factorisation to simplify these algebraic fractions: $\\dfrac{2(x + 12)}{x^2 + 4x - 96}$`,
    //     answers: ["$\\dfrac{2}{x+8}$", "$\\dfrac{2}{x-8}$", "$\\dfrac{2}{x+12}$", "$\\dfrac{2}{x-12}$"],
    //     correctAnswerIndex: 1,
    //     explanation: `First, factorise the quadratic in the denominator: $\\\\$
    //     $x^2 + 4x - 96 = (x - 8)(x + 12)$ $\\\\$
    //     Now, cancel out the common factor $(x + 12)$ from the numerator and denominator: $\\\\$
    //     $\\dfrac{2(x + 12)}{(x - 8)(x + 12)} = \\dfrac{2}{x - 8}$ $\\\\$
    //     Therefore, the simplified expression is $\\dfrac{2}{x - 8}$.`
    // },
    // Chapter 8c, Question 8a
    {
        question: `Simplify by factorising: $\\dfrac{x^2 - 4}{x^2 + x - 6} \\times \\dfrac{5x - 15}{x^2 + 4x - 12}$`,
        answers: ["$\\dfrac{5(x-2)(x+6)}{(x+3)(x+2)(x-3)}$", "$\\dfrac{5(x+2)(x+3)}{(x-2)(x-3)(x+6)}$", "$\\dfrac{5(x+2)(x-3)}{(x+3)(x+6)(x-2)}$", "$\\dfrac{5(x+3)(x-2)}{(x+2)(x-3)(x+6)}$"],
        correctAnswerIndex: 2,
        explanation: `First, factorise the numerator and denominator of each fraction: $\\\\$
        $x^2 - 4 = (x - 2)(x + 2)$ $\\\\$
        $x^2 + x - 6 = (x - 2)(x + 3)$ $\\\\$
        $5x - 15 = 5(x - 3)$ $\\\\$
        $x^2 + 4x - 12 = (x + 6)(x - 2)$ $\\\\$
        Now substitute the factored expressions back into the original expression: $\\\\$
        $\\dfrac{(x - 2)(x + 2)}{(x - 2)(x + 3)} \\times \\dfrac{5(x - 3)}{(x + 6)(x - 2)}$ $\\\\$
        Cancel the common factors $(x - 2)$: $\\\\$
        $\\dfrac{5(x + 2)(x - 3)}{(x + 3)(x + 6)(x - 2)}$ $\\\\$
        Therefore, the simplified expression is $\\dfrac{5(x+2)(x-3)}{(x+3)(x+6)(x-2)}$.`
    },
    // // Chapter 8c, Question 8c
    // {
    //     question: `Simplify by factorising: $\\dfrac{x^2 + 2x - 3}{x^2 - 25} \\times \\dfrac{2x - 10}{x + 3}$`,
    //     answers: ["$\\dfrac{2(x+1)}{x-5}$", "$\\dfrac{2(x-3)}{x+5}$", "$\\dfrac{2(x+1)}{x+5}$", "$\\dfrac{2(x-1)}{x+5}$"],
    //     correctAnswerIndex: 3,
    //     explanation: `First, factorise the numerator and denominator of each fraction: $\\\\$
    //     $x^2 + 2x - 3 = (x - 1)(x + 3)$ $\\\\$
    //     $x^2 - 25 = (x - 5)(x + 5)$ $\\\\$
    //     $2x - 10 = 2(x - 5)$ $\\\\$
    //     Now substitute the factored expressions back into the original expression: $\\\\$
    //     $\\dfrac{(x - 1)(x + 3)}{(x - 5)(x + 5)} \\times \\dfrac{2(x - 5)}{x + 3}$ $\\\\$
    //     Cancel the common factors $(x + 3)$ and $(x - 5)$: $\\\\$
    //     $\\dfrac{2(x - 1)}{x + 5}$ $\\\\$
    //     Therefore, the simplified expression is $\\dfrac{2(x-1)}{x+5}$.`
    // },
    // // Chapter 8d, Question 3a
    // {
    //     question: `Factorise the following: $3x^2 + 10x + 3$`,
    //     answers: ["$(3x+1)(x+3)$", "$(3x+3)(x+1)$", "$(x+3)(x+1)$", "$(3x-1)(x+3)$"],
    //     correctAnswerIndex: 0,
    //     explanation: `To factorise $3x^2 + 10x + 3$, look for two numbers that multiply to $3 \cdot 3 = 9$ and add up to $10$. These numbers are $9$ and $1$. $\\\\$
    //     Rewrite $10x$ as $9x + x$: $\\\\$
    //     $3x^2 + 9x + x + 3$ $\\\\$
    //     Now group the terms: $\\\\$
    //     $3x(x + 3) + 1(x + 3)$ $\\\\$
    //     Factor out the common binomial factor $(x + 3)$: $\\\\$
    //     $(3x + 1)(x + 3)$ $\\\\$
    //     Therefore, the factorised form is $(3x+1)(x+3)$.`
    // },
    // Chapter 8d, Question 3v
    {
        question: `Factorise the following: $8x^2 - 26x + 15$`,
        answers: ["$(2x+5)(4x-3)$", "$(2x-5)(4x-3)$", "$(2x-5)(4x+3)$", "$(2x+5)(4x+3)$"],
        correctAnswerIndex: 1,
        explanation: `To factorise $8x^2 - 26x + 15$, look for two numbers that multiply to $8 \cdot 15 = 120$ and add up to $-26$. These numbers are $-20$ and $-6$. $\\\\$
        Rewrite $-26x$ as $-20x - 6x$: $\\\\$
        $8x^2 - 20x - 6x + 15$ $\\\\$
        Now group the terms: $\\\\$
        $4x(2x - 5) - 3(2x - 5)$ $\\\\$
        Factor out the common binomial factor $(2x - 5)$: $\\\\$
        $(2x - 5)(4x - 3)$ $\\\\$
        Therefore, the factorised form is $(2x-5)(4x-3)$.`
    },
    // Chapter 8d, Question 8a
    {
        question: `Combine all your knowledge of factorising to simplify the following: $\\dfrac{9x^2 - 16}{x^2 - 6x + 9} \\times \\dfrac{x^2 + x - 12}{3x^2 + 8x - 16}$`,
        answers: ["$\\dfrac{3x+4}{x-3}$", "$\\dfrac{3x-4}{x+3}$", "$\\dfrac{3x+4}{x+3}$", "$\\dfrac{3x-4}{x-3}$"],
        correctAnswerIndex: 0,
        explanation: `First, factorise all terms: $\\\\$
        $9x^2 - 16 = (3x - 4)(3x + 4)$ $\\\\$
        $x^2 - 6x + 9 = (x - 3)(x - 3)$ $\\\\$
        $x^2 + x - 12 = (x - 3)(x + 4)$ $\\\\$
        $3x^2 + 8x - 16 = (3x - 4)(x + 4)$ $\\\\$
        Now substitute the factored forms into the original expression: $\\\\$
        $\\dfrac{(3x - 4)(3x + 4)}{(x - 3)(x - 3)} \\times \\dfrac{(x - 3)(x + 4)}{(3x - 4)(x + 4)}$ $\\\\$
        Cancel the common factors $(3x - 4)$, $(x + 4)$, and $(x - 3)$: $\\\\$
        $\\dfrac{3x + 4}{x - 3}$ $\\\\$
        Therefore, the simplified expression is $\\dfrac{3x+4}{x-3}$.`
    },
    // // Chapter 8d, Question 8c
    // {
    //     question: `Combine all your knowledge of factorising to simplify the following: $\\dfrac{1 - x^2}{15x + 9} \\times \\dfrac{25x^2 + 30x + 9}{5x^2 + 8x + 3}$`,
    //     answers: ["$\\dfrac{x - 1}{3}$", "$\\dfrac{x + 1}{3}$", "$\\dfrac{1 + x}{3}$", "$\\dfrac{1 - x}{3}$"],
    //     correctAnswerIndex: 3,
    //     explanation: `First, factorise all terms: $\\\\$
    //     $1 - x^2 = (1 - x)(1 + x)$ $\\\\$
    //     $15x + 9 = 3(5x + 3)$ $\\\\$
    //     $25x^2 + 30x + 9 = (5x + 3)(5x + 3)$ $\\\\$
    //     $5x^2 + 8x + 3 = (5x + 3)(x + 1)$ $\\\\$
    //     Now substitute the factored forms into the original expression: $\\\\$
    //     $\\dfrac{(1 - x)(1 + x)}{3(5x + 3)} \\times \\dfrac{(5x + 3)(5x + 3)}{(5x + 3)(x + 1)}$ $\\\\$
    //     Cancel the common factors $(5x + 3)$ and $(1 + x)$: $\\\\$
    //     $\\dfrac{1 - x}{3}$ $\\\\$
    //     Therefore, the simplified expression is $\\dfrac{1 - x}{3}$.`
    // },
    // Chapter 8e. Question 5a
    {
        question: `Factorise by completing the square: $x^2 + 4x + 1$`,
        answers: [ "$(x+1+\\sqrt{3})(x+1-\\sqrt{3})$", "$(x+2+\\sqrt{2})(x+2-\\sqrt{2})$", "$(x+2+\\sqrt{3})(x+2-\\sqrt{3})$", "$(x+2+\\sqrt{5})(x+2-\\sqrt{5})$",],
        correctAnswerIndex: 2,
        explanation: `First, complete the square for the quadratic expression: $\\\\$
        $x^2 + 4x + 1 = (x + 2)^2 - 3$ $\\\\$
        Now, apply the difference of squares formula: $\\\\$
        $(x + 2)^2 - 3 = (x + 2 + \\sqrt{3})(x + 2 - \\sqrt{3})$ $\\\\$
        Therefore, the factorised form is $(x+2+\\sqrt{3})(x+2-\\sqrt{3})$.`
    },
    // // Chapter 8e. Question 5e
    // {
    //     question: `Factorise by completing the square: $x^2 - 8x + 13$`,
    //     answers: ["$(x-4+\\sqrt{3})(x-4-\\sqrt{3})$", "$(x-4+\\sqrt{5})(x-4-\\sqrt{5})$", "$(x-3+\\sqrt{3})(x-3-\\sqrt{3})$", "$(x-4+\\sqrt{2})(x-4-\\sqrt{2})$"],
    //     correctAnswerIndex: 0,
    //     explanation: `First, complete the square for the quadratic expression: $\\\\$
    //     $x^2 - 8x + 13 = (x - 4)^2 + 3$ $\\\\$
    //     Now, apply the difference of squares formula: $\\\\$
    //     $(x - 4)^2 - 3 = (x - 4 + \\sqrt{3})(x - 4 - \\sqrt{3})$ $\\\\$
    //     Therefore, the factorised form is $(x-4+\\sqrt{3})(x-4-\\sqrt{3})$.`
    // },
    // Chapter 8e. Question 6c
    {
        question: `Factorise by completing the square: $x^2 + 8x + 1$`,
        answers: ["$(x+4+\\sqrt{14})(x+4-\\sqrt{14})$", "$(x+4+\\sqrt{15})(x+4-\\sqrt{15})$", "$(x+3+\\sqrt{15})(x+3-\\sqrt{15})$", "$(x+4+\\sqrt{17})(x+4-\\sqrt{17})$"],
        correctAnswerIndex: 1,
        explanation: `First, complete the square for the quadratic expression: $\\\\$
        $x^2 + 8x + 1 = (x + 4)^2 - 15$ $\\\\$
        Now, apply the difference of squares formula: $\\\\$
        $(x + 4)^2 - 15 = (x + 4 + \\sqrt{15})(x + 4 - \\sqrt{15})$ $\\\\$
        Therefore, the factorised form is $(x+4+\\sqrt{15})(x+4-\\sqrt{15})$.`
    },
    // // Chapter 8e. Question 6d
    // {
    //     question: `Factorise by completing the square: $x^2 + 4x + 2$`,
    //     answers: ["$(x+2+\\sqrt{2})(x+2-\\sqrt{2})$", "$(x+2+\\sqrt{3})(x+2-\\sqrt{3})$", "$(x+3+\\sqrt{2})(x+3-\\sqrt{2})$", "$(x+1+\\sqrt{2})(x+1-\\sqrt{2})$"],
    //     correctAnswerIndex: 0,
    //     explanation: `First, complete the square for the quadratic expression: $\\\\$
    //     $x^2 + 4x + 2 = (x + 2)^2 - 2$ $\\\\$
    //     Now, apply the difference of squares formula: $\\\\$
    //     $(x + 2)^2 - 2 = (x + 2 + \\sqrt{2})(x + 2 - \\sqrt{2})$ $\\\\$
    //     Therefore, the factorised form is $(x+2+\\sqrt{2})(x+2-\\sqrt{2})$.`
    // }
];

export default QuestionsData;