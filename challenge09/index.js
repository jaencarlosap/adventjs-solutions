export default function groupBy(collection, it) {
  const response = {}
  const getKey = it instanceof Function ? it : item => item[it];
  collection.forEach(item => {
    const key = getKey(item);
    response[key] = [...(response[key] || []), item];
  });
  return response
}