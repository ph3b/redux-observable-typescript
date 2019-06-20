const wait = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
};

export const getPeople = async (): Promise<{ people: string[] }> => {
  await wait();
  return { people: ["Mathias", "Rebekka"] };
};
