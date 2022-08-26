export const calcTotal = (p) => 
{ const total = p.reduce((sum, i) => (sum += i.count * i.price), 0) 
    return formatPrice(total)
}

export const formatPrice = (price) => price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })