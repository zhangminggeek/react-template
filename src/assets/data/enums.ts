interface EnumItem {
  label: string;
  value: string | number;
}

export const match = (arr: EnumItem[]) => (val: string | number) => {
  const res = arr.find(item => item.value === val);
  return res && res.label;
};
