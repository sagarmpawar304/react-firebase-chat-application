export function getInitials(name: string) {
  const splitedName = name.toUpperCase().split(' ');
  if (splitedName.length > 1) {
    return splitedName[0][1] + splitedName[1][0];
  }
  return splitedName[0].slice(0, 2);
}

export function transformToArray(snapValue: any) {
  return snapValue
    ? Object.keys(snapValue).map(id => {
        return {
          ...snapValue[id],
          id,
        };
      })
    : [];
}
