function Cick(element) {
      const answer = element.querySelector(".answer");
      const icon = element.querySelector(".icon")

      if (answer.style.display === "block") {
        answer.style.display = "none"
        icon.src = "./assets/images/icon-plus.svg"
      }else{
        answer.style.display = "block"
        icon.src = "./assets/images/icon-minus.svg"
      }
    }