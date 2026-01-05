 let p1 = "";
  let p2 = "";

  function selectP1(choice) {
    p1 = choice;
    checkResult();
  }

  function selectP2(choice) {
    p2 = choice;
    checkResult();
  }

  function checkResult() {
    if (!p1 || !p2) return;

    if (p1 === p2) {
      result.innerText = "Draw 😐";
    } 
    else if (
      (p1 === "stone" && p2 === "scissor") ||
      (p1 === "paper" && p2 === "stone") ||
      (p1 === "scissor" && p2 === "paper")
    ) {
      result.innerText = "Player 1 Wins 🎉";
    } 
    else {
      result.innerText = "Player 2 Wins 🎉";
    }

    p1 = "";
    p2 = "";
  }
