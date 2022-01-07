export default function contarOvejas(ovejas) {
  return ovejas.filter((oveja) =>
    oveja.color === "rojo" && /(?=.*[nN])(?=.*[aA])/.test(oveja.name)
  )
}