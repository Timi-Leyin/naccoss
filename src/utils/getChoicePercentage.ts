const getChoicePercentage = (choiceArr: Array<any>, choiceVal: number) => {
  const totalChoices = choiceArr.length;

  let choiceCount = 0;

  for (let i = 0; i < totalChoices; i++) {
    if (Number(choiceArr[i].choice ) === Number(choiceVal)) {
      choiceCount++;
    }
  }

  const percentage = ((choiceCount / totalChoices) * 100) || 0;
  return {
    percentage:percentage.toFixed(1),
    total:choiceCount
  };
};

export default getChoicePercentage;
