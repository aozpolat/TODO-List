const dummyData = [];
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

const randomString = (stringLength) => {
  let string = "";
  const length = characters.length;
  for (let i = 0; i < stringLength; i++)
    string += characters.charAt(Math.floor(Math.random() * length));
  return string;
};

for (let i = 0; i < 100; i++) {
  dummyData.push({
    text: randomString(Math.floor(Math.random() * 20) + 5),
    isComplete: false,
    id: Math.random() * 10000,
  });
}

export default dummyData;
