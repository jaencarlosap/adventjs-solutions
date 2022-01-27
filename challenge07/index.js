export default function contains(store, product) {
  return store instanceof Object ? Object.values(store).some(elem => contains(elem, product)) : store === product
}