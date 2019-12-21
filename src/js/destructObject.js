export default function destructObject(obj) {
  const { special } = obj;

  const stat = [];

  for (const prop of special) {
    const {
      id, name, icon, description = 'Описание недоступно',
    } = prop;

    stat.push({
      id, name, icon, description,
    });
  }

  return stat;
}
